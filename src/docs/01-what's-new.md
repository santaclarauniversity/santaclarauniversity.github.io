```v2.0.0```

Release Highlights:

- Migrated from Bootstrap 3 to Bootstrap 4.
- Audited content types.
- Better CSS/JS performance.
- New templates and documentation.

**Bootstrap 4**
- Upgraded to Bootstrap 4 alpha 6 (all `.less` -> `.scss`)

**Content Type Changes**

- **Grid System and Layout**
  - One column/two column "module" designations are deprecated in favor of columns. See: Site Pointer, Infographics, List Items, more.
- **Accordion**
  - Marked for deprecation - is now a Card with a special collapsible attribute.
- **Buttons**
  - Large "stroked" style is now deprecated.
  - Added new standard and outline buttons.
  - Increased the options for the the existing SCU custom buttons.
- **Panels**
  - Panels are now deprecated in favor of Cards.
- **Pull Quotes**
  - Pull Quotes are deprecated - they should be a type of stylized block.
- **Hero**
  - Renamed Jumbotron and uses BS4-standard code.
- **Image Gallery**
  - Renamed Carousel using BS4-shipped code.
- **Image Grid**
  - Removed in favor of gutter-less grids.

**Templates and Documentation**
- Typography: Reset to Bootstrap standards, most notably, made headers less opinionated (no color or transform)
- Typography: Headers now use a true bold font (used a browser-filled Trade Gothic previously).
- Added Accessibility Guidelines (TODO)
- Added new Email templates

**Fabricator and Build**

- `gulpfile.js`
  - Changed `bourbon` to load solely from `toolkit.scss` *(removed from gulpfile)*
  - Minimized complicated/large `config` JSON structure
  - Removed `bower` tasks.  `bower` scripts/styles are now loaded directly *(removed from gulpfile)*
    - Did the same for Bootstrap `.scss`
  - Now utilizing `run-sequence` for tasks that should be executed successively rather than simultaneously
  - Now utilizing `done` promise under `gulp` tasks which cannot have a simple return statement
  - Swapped `csslint` for `sass-lint`; swapped `jshint` for `eslint`
  - Changed `toolkit.js` and `fabricator.js` to properly **both** use `webpack` for compilation
  - Changed `babel` preset to `es2016` from `babili` so `toolkit.js` won't be minified in development mode
  - Added `gulp-autoprefixer` which removes need to write browser-specific CSS prefix rules entirely


- `package.json`
  - Removed extraneous Node deps
  - Added `gulp-autoprefixer`
  
- `./src/assets/toolkit/scripts/toolkit.js`
  - Removed extraneous JS code which was meant for leftover parts of Bootstrap landing pages
  - Updated to ES6 standard
  
  
- `.gitignore`
  - Updated to exclude `/css/` and `/js/` since there is no longer a reason to track them
  
  
- `bower.json`
  - Forcing bourbon to its `v5 beta` in anticipation of a full release
  
  

**Code Style**
- Converted `.scss` partials to 2 spaces for consistency across the rest of the codebase (including Bootstrap's `.scss`)

```v1.0.7```
- Removed extraneous images and prototypes from launched projects.
- Added the [Agenda](/content-types.html#agenda) content type.
- Added [Print Style Guide](/docs.html#print-style-guide) documentation.
- Refactored headers and footers - both now use type instead of images.
- Added new email templates.
- Moved landing page JS out of global JS files.

```v1.0.6```
- Updated Fontello - uses latest icon fonts available (most notably, Instagram is updated) and added the SCU seal.
- Replaced the PNG logos in the header with the seal from the Fontello icon set.
- Fixed the social demos to reintroduce the icon-based seal.


```v1.0.5```
- New CSS for [Cards](/content-types.html#card) based on Bootstrap 4.0-alpha2. The original CSS was based on `alpha0`, and some significant changes had been made in the meantime.
- Removed "Profile" as a content type.
- Content type demos now use `holder.js`.
- [Sidebar](/content-types.html#sidebar) markup fixed, CSS adjustments made.
- [Hero](/content-types.html#hero) content type added from White Whale's original design.
- Global footer updated to use social media icons instead of static images ([#54](https://github.com/santaclarauniversity/scu-web-assets/issues/54)).
- Added [Image Grid](/content-types.html#image-grid) content types.
- Added `.bg-img` utility classes.

```v1.0.4```
- Added spacer utility classes (more information on [homepage](/))
- Added new content types: [Blocks](/content-types.html#blocks), [Ribbons](/content-types.html#ribbons), [Statcards](/content-types.html#statcards).
- Landing page prototype: [MBA](/landing-pages/mba.html)
- Added new [Button](/content-types.html#button) styles (outline).
- Updated the [Roadshow Prototype](/demos/roadshow-comp.html) to showcase some of the new padding, margin, and typography utility classes along with the new Ribbon content type.
- Updated the Mission logos to be the correct ones (with doors) (thanks, Linda!)
- Fixed a long-standing display issue with [Person Spotlight](/content-types.html#person-spotlight) in the Content Type view.
- New [Instagram](/content-types.html#social-icons) logo ([#52](https://github.com/santaclarauniversity/scu-web-assets/issues/52))

```v1.0.3```
- Added the [Windowpane](/content-types.html#windowpane) content type and [demo](/demos/roadshow-comp.html).
- Added landing page templates: [Bold](/landing-pages/bold.html), [Minimal](/landing-pages/minimal.html), and [Startup](/landing-pages/startup.html).

```v1.0.2```
- Reorganized our structure to be more helpful for developers that are looking to leverage our toolkit ([#42](https://github.com/santaclarauniversity/scu-web-assets/issues/42))
- Fixed Header issues ([#46](https://github.com/santaclarauniversity/scu-web-assets/issues/46))

```v1.0.1```
- Added some packages and dependencies to make the install process easier.
- Added Pull Quote content type.
- Added "Startup" style marketing landing page.
- Changed the README to be slightly more helpful.

```v1.0```
- First version of toolkit
- Added content types, colors, typography demonstration, homepage demo, and other documentation.
