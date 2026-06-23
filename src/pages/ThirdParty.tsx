import { ExternalLink } from "lucide-react";
import { useEffect } from "react";

function ThirdParty() {
  const jsUrl = "https://assets.scu.edu/public/scu.min.js";
  const cssUrl = "https://assets.scu.edu/public/scu.min.css";

  const headSnippet = `<link rel="stylesheet" href="${cssUrl}" />`;
  const bodySnippet = `<script src="${jsUrl}"></script>`;

  useEffect(() => {
      if (location.hash === '#long-term-support') {
        document.getElementById('long-term-support')?.scrollIntoView();
      }
    }, [location.hash]);

  return (
    <div className="container mx-auto p-16">
      {/* HEADER SECTION */}
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Third-Party Vendors
      </h1>
      <p className="text-gray-800 mb-8">
        If you build or maintain a third-party site or tool that runs on an SCU
        page, the hosted bundles below give you Bootstrap and jQuery. They track
        SCU's current platform and may change over time as it evolves. If your
        integration needs to stay stable long-term, host your own copy &mdash;
        see{" "}
        <a
          className="text-[#9E1B32] underline cursor-pointer"
          onClick={() =>
            document
              .getElementById("long-term-support")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Long-term support
        </a>{" "}
        below.
      </p>

      {/* CSS */}
      <div className="mb-12">
        <h2>CSS Stylesheet (Bootstrap)</h2>
        <p className="text-gray-800">
          Add this to the <span className="font-mono">&lt;head&gt;</span> of
          your page:
        </p>
        <div className="mt-4 relative">
          <div className="absolute top-0 left-0 text-xs text-gray-700 px-2 py-1 rounded-br">
            HTML
          </div>
          <pre className="bg-[#ededed] p-6 rounded-md overflow-x-auto font-mono text-sm shadow-inner">
            <code>{headSnippet}</code>
          </pre>
        </div>
      </div>

      {/* JS */}
      <div className="mb-12">
        <h2>JS Script (Bootstrap + jQuery)</h2>
        <p className="text-gray-800">
          Add this before the closing{" "}
          <span className="font-mono">&lt;/body&gt;</span> tag:
        </p>
        <div className="mt-4 relative">
          <div className="absolute top-0 left-0 text-xs text-gray-700 px-2 py-1 rounded-br">
            HTML
          </div>
          <pre className="bg-[#ededed] p-6 rounded-md overflow-x-auto font-mono text-sm shadow-inner">
            <code>{bodySnippet}</code>
          </pre>
        </div>
      </div>

      {/* LONG-TERM SUPPORT */}
      <h2 id="long-term-support">Long-term support</h2>
      <p className="text-gray-800 mt-2">
        The hosted URLs above track SCU's current platform, so the files can
        change without notice. If you need your integration to stay stable for
        the long term, snapshot the current files and host them yourself instead:
      </p>
      <ol className="list-decimal list-inside text-gray-800 space-y-1 mt-3">
        <li>
          Download <a href={cssUrl}>scu.min.css</a> and{" "}
          <a href={jsUrl}>scu.min.js</a>.
        </li>
        <li>
          Commit both files into your own project and serve them from your own
          domain.
        </li>
        <li>
          Reference your local copies instead of the{" "}
          <span className="font-mono text-md">assets.scu.edu</span> URLs.
        </li>
      </ol>
      <p className="text-gray-800 mt-3 mb-12">
        Why snapshot? Internal SCU sites are maintained because their code syncs with
        University Marketing and Communication (UMC)'s updates in the CMS. A third-party site cannot update automatically, so a snapshot you own can be frozen at a
        known-good version, keeping the website working and allowing for upgrades on your own schedule rather than being caught off guard.
      </p>

      {/* FONTAWESOME */}
      <h2>Need FontAwesome or specific fonts?</h2>
      <p className="text-gray-800">
        FontAwesome is not included in these bundles. If your integration requires FontAwesome access, or if you are experiencing CORS errors with a specific font, <a href="https://scuweb.zendesk.com/" className="inline-flex items-center">submit a support ticket to UMC&nbsp;<ExternalLink size={14} /></a>.
    </p>
    </div>
  );
}

export default ThirdParty;
