

function Favicon() {
  const baseUrl = import.meta.env.BASE_URL;
  const cleanBase = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
  const downloadLink = `${cleanBase}/scu-favicons.zip`;
  const previewLink = `${cleanBase}/favicon`;

  const codeSnippet = `<link rel="icon" type="image/png" href="/favicon-96x96-icon-img.png" />`;

  return (
    <div className="container mx-auto p-16">

      {/* HEADER SECTION */}
      <div className="">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Favicon
        </h1>
        <p className="text-gray-800 mb-8">
          The icon that displays in a browser's tab, bookmarks, history, and home screen shortcuts.
        </p>
      </div>

      {/* DOWNLOAD CARD */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">

        {/* Left: Icon & Text */}
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 bg-white rounded-lg border border-gray-200 flex items-center justify-center">
            {/* ZIP File Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-file-zip" viewBox="0 0 16 16">
              <path d="M6.5 7.5a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v.938l.4 1.599a1 1 0 0 1-.416 1.074l-.93.62a1 1 0 0 1-1.109 0l-.93-.62a1 1 0 0 1-.415-1.074l.4-1.599zm2 0h-1v.938a1 1 0 0 1-.03.243l-.4 1.598.93.62.93-.62-.4-1.598a1 1 0 0 1-.03-.243z" />
              <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm5.5-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9v1H8v1h1v1H8v1h1v1H7.5V5h-1V4h1V3h-1V2h1z" />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold">scu-favicons.zip</h3>
          </div>
        </div>

        {/* Right: Action Button */}
        <a
          href={downloadLink}
          download="scu-favicons.zip"
          className="flex items-center gap-2 bg-[#9E1B32] hover:bg-[#7a1526] text-white font-medium px-5 py-2.5 rounded transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download Assets
        </a>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl mb-6">Preview</h2>
        <div className="flex gap-8 items-end">
          <div className="text-center">
            <div className="w-32 h-32 bg-gray-100 rounded flex items-center justify-center mb-2 mx-auto border">
              <img src={`${previewLink}/favicon-96x96-icon-img.png`} alt="96x96 SCU Favicon" />
            </div>
            <span className="text-xs text-gray-500 font-mono">96x96</span>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gray-100 rounded flex items-center justify-center mb-2 mx-auto border">
              <img src={`${previewLink}/favicon-32x32-icon-img.png`} alt="32x32 SCU Favicon" />
            </div>
            <span className="text-xs text-gray-500 font-mono">32x32</span>
          </div>
          <div className="text-center">
            <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center mb-2 mx-auto border">
              <img src={`${previewLink}/favicon-16x16-icon-img.png`} alt="16x16 SCU Favicon" />
            </div>
            <span className="text-xs text-gray-500 font-mono">16x16</span>
          </div>
        </div>
      </div>


      <div className="mt-12">
        <h2 className="text-2xl">Quick Start</h2>
        <p className="text-gray-800">
          In most cases, browsers will display <a href="/favicon-96x96-icon-img.png">favicon-96x96-icon-img.png</a> correctly.
          For example, this website uses the following code in the head for its favicon:
        </p>

        {/* Code Block */}
        <div className="mt-4 relative group">
          <div className="absolute top-0 left-0 text-xs text-gray-700 px-2 py-1 rounded-br">
            HTML
          </div>
          <pre className="bg-[#ededed] p-6 rounded-md overflow-x-auto font-mono text-sm shadow-inner">
            <code>{codeSnippet}</code>
          </pre>
        </div>
      </div>

    </div>
  );
}

export default Favicon;
