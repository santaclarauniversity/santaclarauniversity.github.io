import Welcome from "./Welcome";
import Colors from "./Colors";
// import Typography from "./Typography";
import Logos from "./Logos";
import Favicon from "./Favicon";
import ThirdParty from "./ThirdParty";

export interface PageDef {
  path: string;
  label: string;
  section: string;
  element: React.ReactNode;
}

// To add a static page: create the component, then add one line here.
// Order within a section = array order. Section render order set in Navbar.
export const pages: PageDef[] = [
  { path: "/",           label: "Welcome",         section: "Style Guide", element: <Welcome /> },
  { path: "/colors",     label: "Colors",          section: "Style Guide", element: <Colors /> },
//   { path: "/typography", label: "Typography",      section: "Style Guide", element: <Typography /> },
  { path: "/logos",      label: "Logos & Lockups", section: "Assets",      element: <Logos /> },
  { path: "/favicon",    label: "Favicon",         section: "Assets",      element: <Favicon /> },
  { path: "/third-party", label: "Third-Party Vendors", section: "Assets",  element: <ThirdParty /> },
];

// Layout components share one PlaygroundRoute element — App injects it.
export const layoutPages = [
  { path: "/main-header",      label: "Main Header" },
  { path: "/lockup-header",    label: "Header with Lockup" },
  { path: "/no-lockup-header", label: "Header without Lockup" },
  { path: "/footer",           label: "Footer" },
];
