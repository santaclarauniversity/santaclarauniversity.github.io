
import { useState } from "react";

// On touch devices (no hover) lifting needs an explicit first tap.
const canHover = typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches;

interface ColorChipProps {
  name: string;
  hex: string;
  textColor: string;
  isFirst?: boolean;
  lifted?: boolean;
  onLift?: () => void;
}

function ColorChip({ name, hex, textColor, isFirst, lifted, onLift }: ColorChipProps) {

  const [hovered, setHovered] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(hex);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  }

  // Desktop: hover already lifts, so a click copies. Touch: first tap lifts, second copies.
  const handleClick = () => {
    if (canHover || lifted) handleCopy();
    else onLift?.();
  };

  const open = hovered || lifted;

  return (
    <div className={`w-full mt-auto ${isFirst ? 'ml-0.5' : '-ml-32'} relative ${open ? 'h-46' : 'h-25'} hover:h-46 cursor-pointer ${isCopied ? 'hover:rotate-2' : 'hover:rotate-1'}
origin-center transition-all duration-75 rounded-t-xl -mb-5 shadow-lg`}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onClick={handleClick} style={{ backgroundColor: hex }}>

      <div className={`${open ? 'opacity-100' : 'opacity-0'} transition-opacity duration-75 pt-1.5 pl-3`} style={{ color: textColor }}>
        <p className="mb-0">{isCopied ? "Copied!" : name}</p>
        <p className="mt-0">{hex}</p>

      </div>
    </div>

  )
}

export default ColorChip;
