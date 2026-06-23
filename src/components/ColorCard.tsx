import { useState } from "react";

interface ColorCardProps {
  name: string;
  hex: string;
  textColor: string;
}

function ColorCard({ name, hex, textColor }: ColorCardProps) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(hex);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div
      className="snap-center shrink-0 w-40 h-40 rounded-xl shadow-lg p-3 cursor-pointer flex flex-col justify-end"
      style={{ backgroundColor: hex }}
      onClick={handleCopy}
    >
      <p className="font-semibold mb-0" style={{ color: textColor }}>{isCopied ? "Copied!" : name}</p>
      <p className="mt-0" style={{ color: textColor }}>{hex}</p>
    </div>
  );
}

export default ColorCard;
