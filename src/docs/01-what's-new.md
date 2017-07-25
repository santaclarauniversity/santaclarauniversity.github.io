```v2.0.0```

Release Highlights:

- Migrated from Bootstrap 3 to Bootstrap 4.
- Audited content types.
- Better CSS/JS performance.
- Quicker toolkit run/refresh time.
- New templates and documentation.
- Deprecated Trajan and removed from font stack.

### Bootstrap 4
- [Upgraded to Bootstrap 4](https://v4-alpha.getbootstrap.com/getting-started/introduction/)


### Content Type Changes

- **General Content Type Changes**
  - Updated Content Types for Bootstrap 4.
  - One column/two column "module" designations are deprecated in favor of columns. See: Site Pointer, Infographics, List Items, more.
- **Accordion**
  - _Marked for deprecation_ - is now a Card with a special collapsible attribute.
- **Agenda**
  - Simple responsive table (built with Bootstrap grid) which is intended for scheduling events that have several parts.
- **Block**
  - Full-width block content featuring a button and the option for an interactive background (e.g. a map)
- **Buttons**
  - Large "stroked" style is now deprecated.
  - Maroon buttons are now deprecated (aliased to `brand-primary` to aid in the transition).
  - Added new standard and outline buttons.
  - Increased the options for the the existing SCU custom buttons.
- **Jumbotron (formerly Hero)**
  - Renamed Jumbotron and uses BS4-standard code.
  - Transitioned `.high-contrast` to `.has-dim` for better accessibility.
  - Added background options for Jumbotrons, including `.bg-primary` and others.
- **Image Gallery**
  - Renamed Carousel using BS4-shipped code.
- **Image Grid**
  - Removed in favor of gutter-less grids.
- **Infographics**
  - Deprecated prix/window style.
  - Created new styles based on BS badges.
- **Panels**
  - Panels are now deprecated in favor of Cards.
- **Person Spotlight**
  - Redesigned Person Spotlight to be more universal; removes overlay and introduces left/right card style.
  - Removed "compact" version of person spotlight, as it utilizes media list code.
- **Pull Quotes**
  - https://github.com/santaclarauniversity/scu-web-assets/issues/78 (undergoing redesign)
- **Highlight (formerly Ribbons)**
  - Refactored ribbon code to work correctly across all browsers; renamed to Highlight. See [Wrapping Highlighted Text.](https://codepen.io/hotmeteor/pen/ibvJs)

### Templates and Documentation
- **Typography**
  - Reset to Bootstrap standards, most notably, made headers less opinionated (no color or transform), headers now use a true bold font (used a browser-filled Trade Gothic previously)
- **Templates**
  - Added new footer system with flexibility for major-unit branding.
  - Beta: [Department Switcher](/demos/department-switcher.html) using `select2`.
  - Beta: New header system.
  - New email template (Solid).
  - New [Cover Image](/demos/cover-image-layout.html) layout.
- **Documentation**
  - Added [Accessibility](docs.html#accessibility) guidelines.
  - Added [Header and Footer Guidelines](/docs.html#header-and-footer-guidelines).
  

### Fabricator and Build

- `./scss/` contains Sass files, which are identical to Less in purpose but with (*very*) slightly different syntax/execution in general
  - `./scss/landing/`
    - Contains landing page styles; these are compiled to their respective files (only `landing-*.scss`)
  - `./scss/partials/`
    - All of our (SCU) partial styles, just like they were in the original toolkit except Sass now
  - `./scss/_components.scss`
      - Bootstrap components we use on the site
  - `./scss/toolkit.scss`
    - Sass entry point; this is the file that gets compiled into `toolkit.css`.  It "loads" Bootstrap into itself, then
    applies our partials on top, which lets us use Bootstrap but with our customizations (notably, color, typography, etc.)
  - `./scss/variables.scss`
    - Our Bootstrap variable overrides
    
- `./js/` contains
  - `./js/toolkit.js`
    - Our custom JS output by Webpack to include Bootstrap, jQuery, etc. code which it depends on
  - `./js/fabricator.js`
    - Fabricator's Webpack output JS
    
- HTML changes (views, etc.)
  - Various changes to demos to make them work properly on Bootstrap 4
  - Upgraded landing pages to their Bootstrap 4 versions
  - Moved style guide to `./src/views/style-guide.html`, which sources from `./src/materials/style-guide/*.html`; this resolves
  a navigation issue caused by the style guide's original format


- `.eslintrc.json`
  - Moved from `.eslintrc` to help resolve strange issues with ESLint not working on some hosts


- `gulpfile.js`
  - Minimized complicated/large `config` JSON structure
  - Removed `bower` tasks.  `bower` scripts/styles are now loaded directly *(removed from gulpfile)*
    - Did the same for Bootstrap `.scss`
  - Now utilizing `run-sequence` for tasks that should be executed successively rather than simultaneously
  - Now utilizing `done` promise under `gulp` tasks which cannot have a simple return statement
  - Swapped `csslint` for `sass-lint`; swapped `jshint` for `eslint`
  - Changed `toolkit.js` and `fabricator.js` to properly **both (together)** use `webpack` for compilation
  - Changed `babel` preset to `es2016` from `babili` so `toolkit.js` won't be minified in development mode
  - Added `gulp-autoprefixer` module which removes need to write browser-specific CSS prefix rules entirely
  - Added task `style:landing` to compile landing page CSS in parallel (also: files are now <1 KB each)
  - Added `gulp-size` to measure the size of output CSS files to `./css/`


- `package.json`
  - Removed extraneous Node deps
  - Added `gulp-autoprefixer` (CSS automatic vendor prefixes), `gulp-size` (track sizes of compiled CSS files)
  - Now using this file to describe Babel preset instead of having a `.babelrc`
 
 
- `./src/assets/toolkit/scripts/toolkit.js`
  - Removed extraneous JS code which was meant for leftover parts of Bootstrap landing pages
  - Upgraded to ES6 standard
  - Removed header code (vast majority of this file)
  

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
