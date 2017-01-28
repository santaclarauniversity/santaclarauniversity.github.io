```v2.0.3```
- Fixed broken JavaScript links
- Made **some** updates to our in-progress `/scss/_variables.scss`; still needs to be checked thoroughly
- Fixed `gulp --dev` not adding `/scss/bootstrap/` if it did not already exist

```v2.0.2```
- Converted `.scss` partials to 2 spaces for consistency across the rest of the codebase (including Bootstrap's `.scss`)
- Added some small Bootstrap 4 tweaks on certain content types (demos on toolkit views not updated yet)

```v2.0.1```
- Completely stopped tracking `/scss/bootstrap/`
- Now using method of creating our own Bootstrap loader to subvert using its `_variables.scss` and `_custom.scss`
  - Load in `toolkit.scss` then load Bootstrap ourselves (e.g. avoiding `/scss/bootstrap/bootstrap.scss`) via `components.scss` and `variables.scss`
- Made some minor optimizations to `gulpfile`
- Added `partials/_typography.scss` back to pipeline (bold font now works properly, too)

```v2.0.0```
- Upgraded to Bootstrap 4 alpha 6 (all `.less` -> `.scss`))
  - Stylesheets are the same, but are now SCSS files; still need to fully "upgrade" to BS4
- `/js/` and `/css/` are now reserved entirely for completed scripts and stylesheets; moved custom script sources in `/js/` to `/src/assets/toolkit/`
- Cleaned gulpfile and extraneous Node deps from `package.json`
  - Changed `for..in` loops on Bower to ES6 `forEach`
  - Added check on Bower tasks to prevent them from running unless necessary (only the first time it is run)
  - Now utilizing `run-sequence` for tasks that **should** be executed successively rather than simultaneously
  - Now utilizing `done` promise under Gulp tasks which cannot have a simple return statement
- Removed CSSLint for SASSLint; removed JSHint for ESLint
- Removed extraneous JS code from `toolkit.js` which was meant for leftover parts of Bootstrap landing pages
- Updated `toolkit.js` to ES6 standard
- Changed `toolkit.js` and `fabricator.js` to properly **both** use Webpack for compilation
- Changed Babel preset to `es2016` from `babili` so `toolkit.js` won't be minified in development mode
- Updated `.gitignore` to exclude `/css/` and `/js/` since there is no longer a reason to track them
- Bootstrap loads all but `_variables.scss` and `_custom.scss` from Bower (these files are our custom overrides, which should remain tracked)
  - In other words, all files inside `/scss/bootstrap/` *except* these two will **not be tracked** (they should **never** be changed anyway)


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
