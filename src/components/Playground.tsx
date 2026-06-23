import { useParams, useLocation } from 'react-router-dom';
import { lockupOptions } from '../data/components';
import { useState, useEffect } from 'react';

interface ContentType {
  name: string;
  html: string;
}

function Playground({ items, siteMainHeader, lockupHeader, noLockupHeader, footer, siteHead, afterFooter, onHtmlChange }: { items: ContentType[], siteMainHeader: string, lockupHeader: string, noLockupHeader: string, footer: string, siteHead: string, afterFooter: string, onHtmlChange?: (html: string) => void }) {

  const [displayOption, setDisplayOption] = useState(0);
  const [lockupValue, setLockupValue] = useState("");
  const { componentId } = useParams<{ componentId: string }>();
  const location = useLocation();

  let activeItem: ContentType | undefined;
  let componentName: string | undefined;

  let contentTypeView = false;
  let headerView = false;
  let lockupHeaderView = false;
  let footerView = false;

  // check what section user selected
  if (location.pathname.includes('/components/')) {
    activeItem = items[parseInt(componentId ?? '0')];
    componentName = activeItem?.name;
    contentTypeView = true;
  }
  else if (location.pathname.includes('/main-header')) {
    activeItem = {
      name: 'header',
      html: siteMainHeader,
    };
    componentName = "Site Main Header";
    headerView = true;
  }
  else if (location.pathname.includes('/lockup-header')) {
    activeItem = {
      name: 'header',
      html: lockupValue
        ? lockupHeader.replace(/fa-alumni-association/g, lockupValue)
        : lockupHeader,
    };
    componentName = "Site Specific Header with Lockup";
    headerView = true;
    lockupHeaderView = true;
  }
  else if (location.pathname.includes('/no-lockup-header')) {
    activeItem = {
      name: 'header',
      html: noLockupHeader,
    };
    componentName = "Site Specific Header with no Lockup";
    headerView = true;
  }
  else if (location.pathname.includes('/footer')) {
    activeItem = {
      name: 'footer',
      html: footer,
    };
    componentName = "Footer";
    footerView = true;
  }

  useEffect(() => {
    if (activeItem?.html) onHtmlChange?.(activeItem.html);
  }, [activeItem?.html]);

  if (items.length === 0 && !activeItem){
    return (
        <div className="w-full h-full bg-neutral-100">
            <div className="flex items-baseline p-4 bg-white">
                <h1>Loading...</h1>
            </div>
        </div>
    );
  }

  if (!activeItem) return <div className="p-8">Component Not Found</div>;

  const srcDoc = `
    <!DOCTYPE html>
    <html>
      <head><base href="https://www.scu.edu/">${siteHead}</head>
      <body>
      ${(headerView || footerView) ? `${activeItem.html}` : ''}
      ${contentTypeView ? `<main id="content">${activeItem.html}</main>` : ''}
      </body>
      ${afterFooter}
    </html>
  `;

  const handleChange = (e: any) => {
    const selectedValue = e.target.value;
    if (selectedValue === "responsive") setDisplayOption(0);
    else if (selectedValue === "tablet") setDisplayOption(1);
    else if (selectedValue === "mobile") setDisplayOption(2);
  };

  return (
    <div className="w-full h-full bg-neutral-100">
      <div className="flex items-center p-6 px-8 bg-white">
        <h1 className="mb-0">{componentName}</h1>
        <label className="sr-only" htmlFor="widths">Choose a screen width:</label>
        <select
          className="hidden md:inline-block gray-200 rounded-sm mx-8 h-8 border border-black"
          name="widths"
          onChange={handleChange}
          size={1}
        >
          <option value="responsive">Desktop (100%)</option>
          <option value="tablet">Tablet (768px)</option>
          <option value="mobile">Mobile (475px)</option>
        </select>

        {lockupHeaderView && <>
          <label className="sr-only" htmlFor="lockups">Choose a Lockup:</label>
          <select
            className="gray-200 rounded-sm mx-2 h-8 border border-black max-w-50"
            name="lockups"
            onChange={(e) => setLockupValue(e.target.value)} // Update your state here
            defaultValue="" // Default to standard/empty
          >
            {lockupOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </>
        }
      </div>
      <hr />
      <iframe
        title="Component Preview"
        srcDoc={srcDoc}
        className={`${displayOption === 0 ? "w-full" : ""} 
          ${displayOption === 1 ? "w-3xl" : ""} 
          ${displayOption === 2 ? "w-106.25" : ""} 
          h-9/10 border-none bg-white mx-auto`}
        sandbox="allow-scripts allow-same-origin"
      />
    </div>
  );
};

export default Playground;
