import { useEffect, useRef, useState } from "react";
import Prism from "prismjs";
import "../styles/prism-light.css";
import "prismjs/components/prism-markup";

// prettier 
import { format } from "prettier/standalone";
import * as parserHtml from "prettier/plugins/html";
import * as parserBabel from "prettier/plugins/babel";

function CodePanel({ html }: { html: string }) {
  const [formattedHtml, setFormattedHtml] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const codeRef = useRef<HTMLElement>(null);

  const getCleanHtml = (fullHtml: string) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(fullHtml, "text/html");

    const wrapper = doc.body.firstElementChild;
    if (!wrapper) return fullHtml;

    const walker = document.createTreeWalker(
      wrapper,
      NodeFilter.SHOW_COMMENT,
      null
    );

    const commentsToRemove = [];
    while (walker.nextNode()) {
      commentsToRemove.push(walker.currentNode);
    }
    commentsToRemove.forEach(node => node.parentNode?.removeChild(node));

    return wrapper.innerHTML;
  };

  const rawHtml = getCleanHtml(html);

  // Format with Prettier (Async)
  useEffect(() => {
    async function beautify() {
      try {
        const result = await format(rawHtml, {
          parser: "html",
          plugins: [parserHtml, parserBabel],
          printWidth: 100,
          tabWidth: 2,
          useTabs: false,
        });
        setFormattedHtml(result);
      } catch (e) {
        console.error("Formatting failed", e);
        setFormattedHtml(rawHtml);
      }
    }

    beautify();
  }, [rawHtml]);

  useEffect(() => {
    if (codeRef.current && formattedHtml) {
      Prism.highlightElement(codeRef.current);
    }
  }, [formattedHtml]);

  const handleCopy = async () => {
    if (!formattedHtml) return;
    try {
      await navigator.clipboard.writeText(formattedHtml);
      setIsCopied(true);

      // Reset the "Copied" state after 2 seconds
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  }

  return (
    <div className="relative group w-full h-full bg-white text-sm font-mono leading-relaxed">

      {/* COPY BUTTON */}
      <button
        onClick={isCopied ? undefined : handleCopy}
        className={`
          absolute top-4 right-4 z-10
          flex items-center justify-center p-1.5
          rounded-md transition-all cursor-pointer border-none bg-transparent hover:text-gray-600 hover:bg-gray-100/80 text-gray-400
        `}
      >
        {isCopied ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
        )}
        <span className="sr-only">Copy Button</span>
      </button>

      <pre className="m-0 h-full p-4 overflow-auto">
        <code ref={codeRef} className="language-html">
          {formattedHtml}
        </code>
      </pre>
    </div>
  );
}

export default CodePanel;
