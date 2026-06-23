import { NavLink } from 'react-router-dom';
import logo from '/scu_hor_pos_rgb_2c.png';
import { pages, layoutPages } from '../pages/registry';

function Navbar({ items, loading, onNavigate }: { items: { name: string; html: string }[], loading?: boolean, onNavigate?: () => void }) {

  const getLinkClass = ({ isActive }: { isActive: boolean }) => {
    return `p-2 pl-5 rounded transition-colors cursor-pointer ${isActive
      ? "font-bold bg-gray-300"  // Active Styles
      : "text-gray-700 hover:bg-gray-200"      // Inactive Styles
      }`;
  };


  return (
    <>
      <div className="w-full h-full bg-gray-50 p-4 overflow-y-scroll overflow-x-hidden">
        <a className="w-fit h-19" href="https://www.scu.edu">
            <img className="w-50 h-19" src={logo} height={76} alt="SCU logo" />
            <span className="sr-only">To scu.edu homepage</span>
        </a>
        <h1 className="text-2xl mb-5 mx-2">Design System</h1>
        {["Style Guide", "Assets"].map((section) => (
          <div key={section}>
            <h2 className="text-xl font-semibold mx-2">{section}</h2>
            <div className="flex flex-col">
              {pages
                .filter((p) => p.section === section)
                .map((p) => (
                  <NavLink key={p.path} to={p.path} className={getLinkClass} onClick={onNavigate}>
                    {p.label}
                  </NavLink>
                ))}
            </div>
          </div>
        ))}

        <h2 className="text-xl font-semibold mx-2">Content Types</h2>
        <div className="flex flex-col">
          {loading ? (
            <svg viewBox="0 0 220 309" xmlns="http://www.w3.org/2000/svg" className="w-full mt-1">
              <defs>
                <linearGradient id="skeleton-shimmer" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="60" y2="0">
                  <stop offset="0%" stopColor="#e5e7eb" />
                  <stop offset="50%" stopColor="#f3f4f6" />
                  <stop offset="100%" stopColor="#e5e7eb" />
                  <animate attributeName="x1" from="-120" to="220" dur="1.4s" repeatCount="indefinite" />
                  <animate attributeName="x2" from="-60" to="280" dur="1.4s" repeatCount="indefinite" />
                </linearGradient>
              </defs>
              <g fill="url(#skeleton-shimmer)">
                <rect x="16" y="6"   width="130" height="15" rx="3" />
                <rect x="16" y="38"  width="160" height="15" rx="3" />
                <rect x="16" y="70"  width="100" height="15" rx="3" />
                <rect x="16" y="102" width="145" height="15" rx="3" />
                <rect x="16" y="134" width="120" height="15" rx="3" />
                <rect x="16" y="166" width="155" height="15" rx="3" />
                <rect x="16" y="198" width="110" height="15" rx="3" />
                <rect x="16" y="230" width="140" height="15" rx="3" />
                <rect x="16" y="262" width="125" height="15" rx="3" />
                <rect x="16" y="294" width="150" height="15" rx="3" />
              </g>
            </svg>
          ) : (
            items.map((item, index) => (
              <NavLink key={index} to={`/components/${index}`} className={getLinkClass} onClick={onNavigate}>
                {item.name}
              </NavLink>
            ))
          )}
        </div>


        <h2 className="text-xl font-semibold mx-2">Layout Components</h2>
        <div className="flex flex-col">
          {layoutPages.map((p) => (
            <NavLink key={p.path} to={p.path} className={getLinkClass} onClick={onNavigate}>
              {p.label}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  )

}

export default Navbar;
