import { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Playground from "./components/Playground";
import CodePanel from "./components/CodePanel";

import { Panel, Group, Separator } from "react-resizable-panels";

import { Routes, Route, useLocation } from "react-router-dom";

import { pages, layoutPages } from "./pages/registry";

interface ContentType {
  name: string;
  html: string;
}

interface PlaygroundRouteProps {
  items: ContentType[];
  siteMainHeader: string;
  lockupHeader: string;
  noLockupHeader: string;
  footer: string;
  siteHead: string;
  afterFooter: string;
}

function PlaygroundRoute(props: PlaygroundRouteProps) {
  const [activeHtml, setActiveHtml] = useState("");
  return (
    <Group className="h-full" orientation="vertical">
      <Panel>
        <Playground {...props} onHtmlChange={setActiveHtml} />
      </Panel>
      <Separator className="h-2 bg-gray-200 hover:bg-gray-500" />
      <Panel defaultSize={250}>
        <CodePanel html={activeHtml} />
      </Panel>
    </Group>
  );
}

function App() {
  const location = useLocation();
  const needsData = location.pathname.startsWith('/components/') ||
    layoutPages.some((p) => p.path === location.pathname);

  const [contentTypeData, setContentTypeData] = useState<ContentType[]>([]);

  const [siteMainHeader, setSiteMainHeader] = useState("");
  const [lockupHeader, setLockupHeader] = useState("");
  const [noLockupHeader, setNoLockupHeader] = useState("");
  const [siteFooter, setSiteFooter] = useState("");
  const [siteHead, setSiteHead] = useState("");
  const [afterFooter, setAfterFooter] = useState("");

  const [loaded, setLoaded] = useState(false);

  // mobile nav drawer open
  const [drawerOpen, setDrawerOpen] = useState(false);

  // drag-to-dismiss for the drawer handle
  const dragStartY = useRef<number | null>(null);
  const [dragY, setDragY] = useState(0);       // live downward offset while dragging
  const [dragging, setDragging] = useState(false);

  const onHandleDown = (e: React.PointerEvent) => {
    dragStartY.current = e.clientY;
    setDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId); // keep events if finger leaves the bar
  };
  const onHandleMove = (e: React.PointerEvent) => {
    if (dragStartY.current === null) return;
    setDragY(Math.max(0, e.clientY - dragStartY.current));
  };
  const onHandleEnd = () => {
    const moved = dragY;
    dragStartY.current = null;
    setDragging(false);
    setDragY(0);
    // ponytail: tap (|moved|<10) closes; drag down past 100 closes; up-drag or partial down snaps back
    if (Math.abs(moved) < 10 || moved > 100) setDrawerOpen(false);
  };

  // Title shown in the mobile bar: static page, layout component, or content type name.
  const contentTypeMatch = location.pathname.match(/^\/components\/(\d+)/);
  const pageTitle =
    pages.find((p) => p.path === location.pathname)?.label ??
    layoutPages.find((p) => p.path === location.pathname)?.label ??
    (contentTypeMatch ? contentTypeData[Number(contentTypeMatch[1])]?.name : undefined);

  useEffect(() => {
    const fetchData = async function () {
      try {
        const base = import.meta.env.DEV
          ? "/external-content"
          : "https://www.scu.edu";

        const [contentTypesRes, lockupRes, noLockupRes] = await Promise.all([
          fetch(`${base}/site-assets/content-types/`),
          fetch(`${base}/site-assets/site-specific-lockup/`),
          fetch(`${base}/site-assets/site-specific-no-lockup/`),
        ]);

        const parser = new DOMParser();

        // Content types
        const contentTypesHtml = await contentTypesRes.text();
        const contentTypesDoc = parser.parseFromString(
          contentTypesHtml,
          "text/html",
        );
        const contentTypeElements = contentTypesDoc.querySelectorAll('.content-type');
        const formatted = Array.from(contentTypeElements).map((el) => ({
          name: (el as HTMLElement).dataset.name ?? '',
          html: el.outerHTML,
        }));
        setContentTypeData(formatted);

        setSiteHead(contentTypesDoc.head.innerHTML);

        const lastFooterEnd = contentTypesHtml.lastIndexOf('</footer>');
        const bodyEnd = contentTypesHtml.lastIndexOf('</body>');
        if (lastFooterEnd !== -1 && bodyEnd !== -1) {
          setAfterFooter(contentTypesHtml.slice(lastFooterEnd + '</footer>'.length, bodyEnd).trim());
        }

        // Site main header (from content-types page)
        const mainHeader = contentTypesDoc.querySelector("header");
        if (mainHeader) setSiteMainHeader(mainHeader.outerHTML);

        // Site footer (from content-types page)
        // Gets last footer on the page
        const footers = contentTypesDoc.querySelectorAll("footer");
        const footer = footers.length > 0 ? footers[footers.length - 1] : null;
        if (footer) setSiteFooter(footer.outerHTML);

        // Lockup header
        const lockupHtml = await lockupRes.text();
        const lockupDoc = parser.parseFromString(lockupHtml, "text/html");
        const lockupHeaderEl = lockupDoc.querySelector("header");
        if (lockupHeaderEl) setLockupHeader(lockupHeaderEl.outerHTML);

        // No-lockup header
        const noLockupHtml = await noLockupRes.text();
        const noLockupDoc = parser.parseFromString(noLockupHtml, "text/html");
        const noLockupHeaderEl = noLockupDoc.querySelector("header");
        if (noLockupHeaderEl) setNoLockupHeader(noLockupHeaderEl.outerHTML);
      } catch (error) {
        console.error("Failed to fetch: ", error);
      } finally {
        setLoaded(true);
      }
    };

    fetchData();
  }, []);

  if (!loaded && needsData) {
    return (
      <Group className="flex h-screen w-screen overflow-hidden bg-white">
        {/* LEFT COLUMN CONTAINER: navbar (desktop only) */}
        <Panel collapsible minSize={200} defaultSize={300} className="border-r border-gray-200 max-w-100" data-mobile-hidden>
          <Navbar items={contentTypeData} loading={!loaded} />
        <Separator className="w-2 bg-gray-200 hover:bg-gray-500" />
        </Panel>


        {/* RIGHT COLUMN CONTAINER: playground + code */}
        <Panel className="flex-1 flex flex-col h-full min-w-0">
          <div className="container mx-auto p-16">
            <h1>Loading</h1>
          </div>
        </Panel>
      </Group>
    );
  }

  return (
    <>
      <Group className="flex h-screen w-screen overflow-hidden bg-white">
        {/* LEFT COLUMN CONTAINER: navbar (desktop only) */}
        <Panel collapsible minSize={200} defaultSize={250} maxSize={300} className="border-r border-gray-200" data-mobile-hidden>
          <Navbar items={contentTypeData} loading={!loaded} />
        </Panel>

        <Separator className="hidden md:block w-2 bg-gray-200 hover:bg-gray-500" />

        {/* RIGHT COLUMN CONTAINER: playground + code */}
        <Panel className="flex-1 flex flex-col h-full min-w-0 pb-14 md:pb-0">
          <Routes>
            {["/components/:componentId", ...layoutPages.map((p) => p.path)].map(
              (path) => (
                <Route
                  key={path}
                  path={path}
                  element={
                    <PlaygroundRoute
                      items={contentTypeData}
                      siteMainHeader={siteMainHeader}
                      lockupHeader={lockupHeader}
                      noLockupHeader={noLockupHeader}
                      footer={siteFooter}
                      siteHead={siteHead}
                      afterFooter={afterFooter}
                    />
                  }
                />
              )
            )}

            {pages.map((p) => (
              <Route key={p.path} path={p.path} element={p.element} />
            ))}
          </Routes>
        </Panel>
      </Group>

      {/* MOBILE: bottom bar with hamburger */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 h-14 border-t border-gray-200 bg-gray-50 flex items-center">
        <button
          aria-label="Open menu"
          onClick={() => setDrawerOpen(true)}
          className="flex items-center gap-2 px-5 h-full text-gray-700 w-full cursor-pointer"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
          {pageTitle && <span className="font-semibold pl-2">{pageTitle}</span>}
        </button>
      </div>

      {/* MOBILE: nav drawer */}
      <div className={`md:hidden fixed inset-0 z-50 ${drawerOpen ? "" : "pointer-events-none"}`}>
        <div
          onClick={() => setDrawerOpen(false)}
          className={`absolute inset-0 bg-black/40 transition-opacity ${drawerOpen ? "opacity-100" : "opacity-0"}`}
        />
        <div
          className={`absolute inset-x-0 bottom-0 max-h-[85vh] rounded-t-xl bg-gray-50 flex flex-col ${dragging ? "" : "transition-transform"} ${drawerOpen ? "translate-y-0" : "translate-y-full"}`}
          style={{ transform: dragY ? `translateY(${dragY}px)` : undefined }}
        >
          <div
            className="relative flex items-center px-4 py-3 border-b border-gray-200 touch-none cursor-grab select-none"
            onPointerDown={onHandleDown}
            onPointerMove={onHandleMove}
            onPointerUp={onHandleEnd}
          >
            <span className="mx-auto h-1 w-10 rounded-full bg-gray-300" />
          </div>
          <div className="flex-1 overflow-y-auto">
            <button aria-label="Close menu" onClick={() => setDrawerOpen(false)} className="absolute right-3 top-10 text-gray-500 hover:text-gray-400 focus:text-gray-600 cursor-pointer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="18" y1="6" x2="6" y2="18" />
              </svg>
            </button>
            <Navbar items={contentTypeData} loading={!loaded} onNavigate={() => setDrawerOpen(false)} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
