// import { useState, useEffect, useRef } from 'react';
// import { NavLink } from 'react-router-dom';
// import { ExternalLink, ArrowRight } from 'lucide-react';
// import { brandColors } from '../data/brandColors';

import { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { ExternalLink, ArrowRight } from 'lucide-react';

// type ColorEntry = { name: string; hex: string };

// function shuffle<T>(arr: T[]): T[] {
//   const a = [...arr];
//   for (let i = a.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [a[i], a[j]] = [a[j], a[i]];
//   }
//   return a;
// }

// const flatColors: ColorEntry[] = shuffle(
//   Object.values(brandColors).flatMap(group =>
//     Object.entries(group).flatMap(([name, data]: [string, any]) => {
//       const entries: ColorEntry[] = [{ name, hex: data.HEX }];
//       if (data.variants) {
//         Object.entries(data.variants).forEach(([vName, vData]: [string, any]) => {
//           entries.push({ name: `${name} ${vName}`, hex: vData.HEX });
//         });
//       }
//       return entries;
//     })
//   ).filter(c => c.hex !== '#FFFFFF')
// );

// const R = 40;
// const HW = R * Math.sqrt(3);
// const RH = R * 1.5;
// const COLS = 20;
// const ROWS = 16;

// const hexPoints = (cx: number, cy: number, r: number): string =>
//   Array.from({ length: 6 }, (_, i) => {
//     const a = Math.PI / 6 + (Math.PI / 3) * i;
//     return `${(cx + r * Math.cos(a)).toFixed(2)},${(cy + r * Math.sin(a)).toFixed(2)}`;
//   }).join(' ');

// const allCells: { row: number; col: number }[] = [];
// for (let row = 0; row < ROWS; row++) {
//   for (let col = 0; col < COLS; col++) {
//     allCells.push({ row, col });
//   }
// }

// const hexCenter = (row: number, col: number) => ({
//   x: col * HW + (row % 2 === 1 ? HW / 2 : 0),
//   y: row * RH + R,
// });

// const svgW = ((COLS - 1) * HW + HW + HW / 2 + 10).toFixed(0);
// const svgH = ((ROWS - 1) * RH + 2 * R + 10).toFixed(0);

function Welcome() {
//   const [tooltip, setTooltip] = useState<{ name: string; x: number; y: number } | null>(null);
  const textRef = useRef<HTMLDivElement>(null);
//   const [textRight, setTextRight] = useState(576);

//   useEffect(() => {
//     if (!textRef.current) return;
//     const update = () => {
//       if (textRef.current)
//         setTextRight(textRef.current.offsetLeft + textRef.current.offsetWidth);
//     };
//     update();
//     const obs = new ResizeObserver(update);
//     obs.observe(textRef.current);
//     return () => obs.disconnect();
//   }, []);

//   const fade = `linear-gradient(to right, transparent 0px, transparent ${textRight}px, black ${textRight + 200}px)`;

  return (
    <div className="relative h-full w-full overflow-hidden bg-white flex items-center">

      {/* Hex background */}
      {/* <svg
        aria-hidden="true"
        className="absolute inset-0 w-full h-full"
        style={{ maskImage: fade, WebkitMaskImage: fade }}
        viewBox={`0 0 ${svgW} ${svgH}`}
        preserveAspectRatio="xMidYMid slice"
        onMouseOver={(e) => {
          const el = e.target as SVGPolygonElement;
          const idx = el.dataset.index !== undefined ? +el.dataset.index : -1;
          if (idx >= 0) {
            const rect = el.getBoundingClientRect();
            const c = flatColors[idx % flatColors.length];
            setTooltip({ name: c.name, x: rect.left + rect.width / 2, y: rect.top });
          } else {
            setTooltip(null);
          }
        }}
        onMouseLeave={() => setTooltip(null)}
      >
        {allCells.map(({ row, col }, i) => {
          const { x, y } = hexCenter(row, col);
          return (
            <polygon
              key={`${row}-${col}`}
              data-index={i}
              points={hexPoints(x, y, R - 2)}
              fill={flatColors[i % flatColors.length].hex}
            />
          );
        })}
      </svg>

      {tooltip && (
        <div
          className="fixed z-50 pointer-events-none px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap"
          style={{ left: tooltip.x, top: tooltip.y - 8, transform: 'translateX(-50%) translateY(-100%)' }}
        >
          {tooltip.name}
        </div>
      )} */}

      {/* Welcome content */}
      <div ref={textRef} className="relative z-10 p-16 h-auto flex flex-col justify-center max-w-xl" id="content">
        <h1 className="text-4xl mb-8">
          Welcome to Santa Clara University's Design System
        </h1>
        <div className="flex flex-col gap-1">
          <a href="https://www.scu.edu/umc/brand/" className="inline-flex items-center">
            UMC Visual Identity Guidelines&nbsp;<ExternalLink size={14} />
          </a>
          <a href="https://github.com/santaclarauniversity/santaclarauniversity.github.io" className="inline-flex items-center">
            Github repository&nbsp;<ExternalLink size={14} />
          </a>
          <NavLink to="/components/0" className="inline-flex items-center">
            Content Types&nbsp;<ArrowRight size={14} />
          </NavLink>
          <NavLink to="/main-header" className="inline-flex items-center">
            Headers and Footer&nbsp;<ArrowRight size={14} />
          </NavLink>
        </div>
        <h2 className="mt-15">
            Questions?
        </h2>
        <a href="https://scuweb.zendesk.com/" className="inline-flex items-center">
            Submit a Support Ticket&nbsp;<ExternalLink size={14} />
        </a>
      </div>

    </div>
  );
}

export default Welcome
