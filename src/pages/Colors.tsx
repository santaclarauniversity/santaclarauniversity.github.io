
import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import ColorChip from "../components/ColorChip"
import ColorCard from "../components/ColorCard"
import ColorButton from "../components/ColorButton"
import { brandColors } from "../data/brandColors"

const hexLuminance = (hex: string) => {
  const [r, g, b] = hex.replace('#', '').match(/.{2}/g)!
    .map(c => { const v = parseInt(c, 16) / 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};

const contrastRatio = (hex1: string, hex2: string) => {
  const l1 = hexLuminance(hex1), l2 = hexLuminance(hex2);
  return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
};

const flattenColors = (colors: Record<string, any>) => {
  const flatList: Array<{ name: string; hex: string; textColor: string }> = [];

  Object.entries(colors).forEach(([name, data]) => {
    // 1. Add Parent
    flatList.push({ name, hex: data.HEX, textColor: data["text-hex"] });

    // 2. Add Variants (if any)
    if (data.variants) {
      Object.entries(data.variants).forEach(([vName, vData]: [string, any]) => {
        flatList.push({
          name: `${name} ${vName}`,
          hex: vData.HEX,
          textColor: vData["text-hex"]
        });
      });
    }
  });
  return flatList;
};

const allBrandColors = Object.values(brandColors).flatMap((group) =>
  Object.entries(group).flatMap(([name, data]: [string, any]) => {
    const chips = [{ name, hex: data.HEX }];
    if (data.variants) {
      Object.entries(data.variants).forEach(([vName, vData]: [string, any]) => {
        chips.push({ name: `${name} ${vName}`, hex: vData.HEX });
      });
    }
    return chips;
  })
);

function PassFail({ pass }: { pass: boolean }) {
  return (
    <span className={`px-2 py-0.5 text-xs font-semibold w-11 text-center ${pass ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
      {pass ? 'Pass' : 'Fail'}
    </span>
  );
}

function Colors() {
  const location = useLocation();
  const [selectedColor, setSelectedColor] = useState("#A32035");
  const [selectedTextColor, setSelectedTextColor] = useState("#FFFFFF");

  useEffect(() => {
    if (location.hash === '#accessible-combinations') {
      document.getElementById('accessible-combinations')?.scrollIntoView();
    }
  }, [location.hash]);

  const handleSelectBackground = (hex: string) => {
    setSelectedColor(hex);
    const firstTextColor = allBrandColors.find((c) => contrastRatio(hex, c.hex) >= 3);
    if (firstTextColor) setSelectedTextColor(firstTextColor.hex);
  };



  return (
    <>
      <div className="container mx-auto p-16" id="content">
        <h1 className="text-4xl mb-3">
          Colors
        </h1 >
        <h2 className="mb-2 md:-mb-18.75">
          Primary Colors
        </h2>
        <div className="hidden md:flex h-48 overflow-y-clip overflow-x-visible border-b-gray-400 border-b mb-4">
          {flattenColors(brandColors.primary).map((color, index) => (
            <ColorChip
              key={color.name}
              isFirst={index === 0}
              name={color.name}
              hex={color.hex}
              textColor={color.textColor}
            />
          ))}
        </div>
        <div className="always-scrollbar md:hidden flex gap-3 overflow-x-auto snap-x snap-mandatory pb-4 mb-4">
          {flattenColors(brandColors.primary).map((color) => (
            <ColorCard key={color.name} name={color.name} hex={color.hex} textColor={color.textColor} />
          ))}
        </div>
        <p className="mb-8">Our core brand colors. Use these as a foundation for most communications and interface elements.</p>

        <h2 className="mb-2 md:-mb-18.75">
          Secondary Colors
        </h2>
        <div className="hidden md:flex h-48 overflow-y-clip overflow-x-visible border-b-gray-400 border-b mb-8">
          {flattenColors(brandColors.secondary).map((color, index) => (
            <ColorChip
              key={color.name}
              isFirst={index === 0}
              name={color.name}
              hex={color.hex}
              textColor={color.textColor}
            />
          ))}
        </div>
        <div className="always-scrollbar md:hidden flex gap-3 overflow-x-auto snap-x snap-mandatory pb-4 mb-4">
          {flattenColors(brandColors.secondary).map((color) => (
            <ColorCard key={color.name} name={color.name} hex={color.hex} textColor={color.textColor} />
          ))}
        </div>
        <p className="mb-8">
          Offers flexibility and variety. Inspired by the diversity of our campus, these colors complement the primary palette and add visual interest.
        </p>

        <h2 className="mb-2 md:-mb-18.75">
          Neutral Colors
        </h2>
        <div className="hidden md:flex h-48 overflow-y-clip overflow-x-visible border-b-gray-400 border-b mb-8">
          {flattenColors(brandColors.tertiary).map((color, index) => (
            <ColorChip
              key={color.name}
              isFirst={index === 0}
              name={color.name}
              hex={color.hex}
              textColor={color.textColor}
            />
          ))}
        </div>
        <div className="always-scrollbar md:hidden flex gap-3 overflow-x-auto snap-x snap-mandatory pb-4 mb-4">
          {flattenColors(brandColors.tertiary).map((color) => (
            <ColorCard key={color.name} name={color.name} hex={color.hex} textColor={color.textColor} />
          ))}
        </div>
        <p className="mb-8">
          Adds depth and balance. Inspired by the tones and textures found around our campus, these colors work in harmony with the primary and
          secondary palettes while maintaining a cohesive and elegant look.
        </p>

        


        <h2>
          Print Colors
        </h2>

        <p className="mb-8">
          For more information on specific CMYK, RGB, and Pantone values, <a href="https://www.scu.edu/umc/brand/colors/#content-1302017">visit the UMC Colors page.</a>
        </p>


        <div className="border border-black p-4" id="accessible-combinations">
            <h2>Accessible Brand Color Combinations</h2>

            <p>Use this tool to find color combinations that are accessible and easy for everyone to read. Web accessibility guidelines (WCAG) set minimum contrast levels between text and background to ensure content is legible.</p>

            <hr className="border-t border-gray-200 my-5" />

            <h3>Choose a Background Color</h3>

            <div className="flex flex-wrap gap-4">
            {allBrandColors.map((color) => (
                <ColorButton
                key={color.name}
                hex={color.hex}
                name={color.name}
                selected={selectedColor === color.hex}
                onClick={() => handleSelectBackground(color.hex)}
                />
            ))}
            </div>

            <hr className="border-t border-gray-200 my-5" />

            <h3>Choose a Text Color</h3>

            <div className="flex flex-wrap gap-4">
            {allBrandColors
                .filter((color) => contrastRatio(selectedColor, color.hex) >= 3)
                .map((color) => (
                <ColorButton
                    key={color.name}
                    hex={color.hex}
                    name={color.name}
                    selected={selectedTextColor === color.hex}
                    onClick={() => setSelectedTextColor(color.hex)}
                />
                ))}
            </div>

            <hr className="border-t border-gray-200 my-5" />

            <h3>Your Color Contrast Results</h3>

            {(() => {
            const ratio = contrastRatio(selectedColor, selectedTextColor);
            return (
                <div className="flex flex-col lg:flex-row gap-8 mt-4 bg-[#F8F9FA]">
                    <div className="flex flex-col gap-3 w-full lg:w-1/3 p-8">
                        <p className="text-2xl font-bold">Contrast Ratio</p>
                        <p className="text-6xl">{ratio.toFixed(2)}:1</p>
                        <div className="flex gap-8 mt-2">
                        <div>
                            <p className="font-semibold mb-2">Small Text</p>
                            <div className="flex items-center gap-2 mb-1"><PassFail pass={ratio >= 4.5} /><span className="text-sm">AA</span></div>
                            <div className="flex items-center gap-2"><PassFail pass={ratio >= 7} /><span className="text-sm">AAA</span></div>
                        </div>
                        <div>
                            <p className="font-semibold mb-2">Large Text</p>
                            <div className="flex items-center gap-2 mb-1"><PassFail pass={ratio >= 3} /><span className="text-sm">AA</span></div>
                            <div className="flex items-center gap-2"><PassFail pass={ratio >= 4.5} /><span className="text-sm">AAA</span></div>
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-2/3 rounded-lg p-6" style={{ backgroundColor: selectedColor, color: selectedTextColor }}>
                    <p className="text-2xl font-bold mb-2">Understanding Your Contrast Ratio</p>
                    <p className="mb-2">
                    To make sure text is easy to read for everyone, the Web Content Accessibility Guidelines (WCAG) set
                    contrast ratio standards. For small text (&lt;24px), aim for a ratio of at least 4.5:1 (AA) or 7:1 (AAA).
                    For large text (≥24px), aim for 3:1 (AA) or 4.5:1 (AAA)—the same goes for any bold text greater than 18px.
                    </p>
                    <p>Higher ratios mean better readability, especially for users with low vision. Overall, we need to aim for AA at a minimum.</p>
                </div>
                </div>
            );
            })()}

        </div>
      </div>
    </>
  )
}

export default Colors



