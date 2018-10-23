```v2.2```

This update brings some minor changes to content types and tooling:

- **Blocks**
  - Block elements had some redundancy with the Jumbotron element, so blocks have been deprecated and Jumbotrons should be used instead.
- **Jumbotrons**
  - Added a video jumbotron option.
  - Added a block example for Jumbotron.
- **Homepage**
  - Adjusted the Homepage styling to better match 1.x.
- **Tooling and Assets**
  - JavaScript bundle is now minified.

```v2.1.2```

This update includes a variety of patches and improvements to content types, and refines typography across the site with the use of **subpixel rendering**.

- **Accordion**
  - On extra-long accordion titles, the text didn't line up quite right with the chevron.
- **Carousel**
  - Increased color contrast on Carousel controls.
  - Darkened the caption for better readability.
- **Person Spotlight**
  - New Variant: Compact
    - Introduced a slightly smaller Person Spotlight variantion.
- **Pull Quote**
  - New Variant: Compact
    - Addressed the issue of reliance on a "profile" photo of the speaker. Now we have a new version that is just a large quoted text.
  - Spacing and typography changes that help Pull Quote respond better to medium-sized devices, not blow up to huge sizes on desktop devices, and generally weigh better visually
- **Sidebar**
  - On mobile, the sidebar menu is contained inside a dropdown made out of the top-level nav item. You can't actually click a link to go to that top-level section. We amended this by adding a link to the top-level item inside the menu, visible on mobile only. It's separated by a horizontal rule from the subsection links.


```v2.1.1```

This update reintroduces the legacy Header design, carousel enhancements, and various bugfixes.

- Reverted the removal of Trajan from the typestack.
- Refactored and refreshed the legacy header design to use Bootstrap 4 styles.
- Introduces thumbnail carousel view and various fixes.
- Dependency bump of Boostrap to 4.1.2.

##### Important Usage Notes

The redesigned header has been demoted and will be included in a future release. It is included for preview, testing, and feedback use only, and is not to be used at the time of this release.


```v2.1.0```

An incremental update with minor changes and bugfixes.

- Improved search behavior
- **Developers:** Updated NPM dependencies. CSS/JS assets are now in `/public`, and [Webpack has been migrated to 4.0](https://github.com/santaclarauniversity/scu-design-system/wiki/Webpack-4-Migration). 

```v2.0.4```

An incremental update with minor changes and bugfixes.

- Upgraded to [Bootstrap 4.1.1](https://blog.getbootstrap.com/2018/04/30/bootstrap-4-1-1/)
- Improved Search
- Updated [*Can We, Should We, Will We?*](/demos/homepage.html)

```v2.0.3```

An incremental update with minor changes and bugfixes.

- Fixes inconsistent Person Spotlight styles.
- **[Department Switcher](content-types.html#department-switcher)**
  - Now a content type for easier use within prototypes.
  - Fixed the markup on the [Department Switcher demo page](/demos/department-switcher.html).
- Updated to [Bootstrap 4.1](https://blog.getbootstrap.com/2018/04/09/bootstrap-4-1/).
- Carousel display fixes.

```v2.0.2```

An incremental update with small changes limited to some content types, including the header.

- **[Agenda](content-types.html#agenda)**
  - Completely redesigned content type with new styles and mobile compatibility
  - Useful for a sequence of events, such as a day plan
- **[Carousel](content-types.html#carousel)**
  - Updated markup to latest Bootstrap
  - Fixed slide indicators not showing up on demos
- **[Header](content-types.html#header)**
  - Changed the dividing bar (|) from a link to normal text
  - **Search**
    - Fixed some input display issues caused by remotely updated Google Search code
- **[Sidebar](content-types.html#sidebar)**
  - Various bug fixes

```v2.0.1```

Welcome to the redesigned SCU Design System!

- **Style Guide**
  - Restructured the [Style Guide](/style-guide.html). Fixed broken code examples.
  - Redesigned the landing page and navigation.
- **[Accordion](content-types.html#accordion)**
  - Restyled BS4 accordion (previously marked for deprecation) and introduced a new/improved accordion style
  - Card-based accordions (per BS4) are still availabile via **Accordion Cards**.
- **[Lists](content-types.html#lists)**
  - A new content type for lists with an ordered (numeric) set of items.
- **[Sidebar](content-types.html#sidebar)**
  - A new, lightweight sidebar design has been adopted that will allow for greater responsive behavior.
  - Adjustments to Sidebar behavior.
- **[Templates and Demos](/demos.html)**
  - Expanded number of demonstration layouts and updated their content types.
  - Removed *Kitchen Sink* demo, which will return in a future release.
  - _Experimental:_
    - New story display options: [Story](/demos/story.html) and [Story (Cover Image)](/demos/story-cover-image.html).
    - [Sidebar Breakout](/demos/sidebar-breakout-landing.html), a proof-of-concept layout that mixes sidebar layout with landing page layouts.
- **Dropdown Menus**
  - Modified the default BS4 dropdown behavior.
  - Added support for all `.navbar`s to have dropdown menu items
  - Links with dropdown send user to page on click
  - Dropdown pops out on hover over these links
  
```v2.0.0```
- Bootstrap dependency bump to BS4 stable.

```v2.0.0-beta.3```
- Bootstrap dependency bump to BS4 Beta 3.

```v2.0.0-beta.2```
- Bootstrap dependency bump to BS4 Beta 2.
- Updated grayscale palette to use a swatch.
- Further improved the search experience in the new header.
- Toolkit optimizations for developers.

```v2.0.0-beta```

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

- **New Content Types**
  - [Comparison Table](/content-types.html#comparison-table)
- **General Content Type Changes**
  - Updated Content Types for Bootstrap 4.
  - One column/two column "module" designations are deprecated in favor of columns. See: Site Pointer, Infographics, List Items, more.
- **Agenda**
  - Simple responsive table (built with Bootstrap grid) which is intended for scheduling events that have several parts.
- **Block**
  - Full-width block content featuring a button and the option for an interactive background (e.g. a map)
- **Buttons**
  - Large "stroked" style is now deprecated.
  - Maroon buttons are now deprecated (aliased to `brand-primary` to aid in the transition).
  - Added new standard and outline buttons.
  - Increased the options for the the existing SCU custom buttons.
  - Added `.btn-shadow` class for a drop shadow effect on buttons.
- **Jumbotron (formerly Hero)**
  - Renamed Jumbotron and uses BS4-standard code.
  - Transitioned `.high-contrast` to `.has-dim` for better accessibility.
  - Added background options for Jumbotrons, including `.bg-primary` and others.
- **Image Gallery**
  - Renamed Carousel using BS4-shipped code.
  - Otherwise unchanged in functionality, but has a slightly more modern look.
- **Image Grid**
  - Removed in favor of gutter-less grids.
- **Infographics**
  - Deprecated prix/window style.
  - Created new styles based on BS badges.
- **Panels**
  - Panels are now deprecated in favor of Cards.
- **Sidebar**
  - A new, lightweight sidebar design has been adopted that will allow for greater responsive behavior.
- **Site Pointer**
  - New secondary styles for site pointers.
- **Person Spotlight**
  - Redesigned Person Spotlight to be more universal; removes overlay and introduces left/right card style.
  - Removed "compact" version of person spotlight, as it utilizes media list code.
- **Pull Quotes**
  - Redesigned to be a more attention-grabbing type with space for a very large photo and quote.
- **Highlight (formerly Ribbons)**
  - Refactored ribbon code to work correctly across all browsers; renamed to Highlight. See [Wrapping Highlighted Text.](https://codepen.io/hotmeteor/pen/ibvJs)
- **Windowpane**
  - A new UI interaction has been added to Windowpanes. Using the `.has-overlay` class, an overlay will appear when hovering over a windowpane. This was often requested as a way to add more information about an item without going to a page. The overlay must have a call-to-action. This call to action will show on mobile devices where `:hover` states are not shown. The `list-group` option, though still supported, is not shown in the demo. These items would often overflow the Windowpane container.


### Templates and Documentation
- **Typography**
  - Reset to Bootstrap standards, most notably, made headers less opinionated (no color or transform), headers now use a true bold font (used a browser-filled Trade Gothic previously)
  - Added `.legacy-headers` class for matching the pre-2.0 header styles. [More information](/style-guide.html#utilities).
- **Templates**
  - Added new footer system with flexibility for major-unit branding.
  - New [Department Switcher](/demos/department-switcher.html) using `select2`.
  - New [headers](content-types.html#header) and [footers](content-types.html#footer).
  - New email template (Solid).
  - New [Cover Image](/demos/cover-image-layout.html) layout.
- **Documentation**
  - Added [Accessibility](docs.html#accessibility) guidelines.
  - Added [Header and Footer Guidelines](/docs.html#header-and-footer-guidelines).
- **Landing Pages**
  - Landing page templates have been removed from the public build but are still available in local code branches; the licenses for these templates do not specify if they can be made available within our toolkit and have been removed.
  - A number of prototypes have been removed from the Toolkit.

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
  - `./js/compiled-bundle.js`
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
  - Changed `scu.js` and `fabricator.js` to properly **both (together)** use `webpack` for compilation
  - Changed `babel` preset to `es2016` from `babili` so `scu.js` won't be minified in development mode
  - Added `gulp-autoprefixer` module which removes need to write browser-specific CSS prefix rules entirely
  - Added task `style:landing` to compile landing page CSS in parallel (also: files are now <1 KB each)
  - Added `gulp-size` to measure the size of output CSS files to `./css/`


- `package.json`
  - Removed extraneous Node deps
  - Added `gulp-autoprefixer` (CSS automatic vendor prefixes), `gulp-size` (track sizes of compiled CSS files)
  - Now using this file to describe Babel preset instead of having a `.babelrc`
 
 
- `./src/assets/toolkit/scripts/scu.js`
  - Removed extraneous JS code which was meant for leftover parts of Bootstrap landing pages
  - Upgraded to ES6 standard
  - Removed header code (vast majority of this file)
  

```v1.0.7```

Released November 15, 2016
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

Released Jul 26, 2016
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

Released June 17, 2016
- Added the [Windowpane](/content-types.html#windowpane) content type and [demo](/demos/roadshow-comp.html).
- Added landing page templates: [Bold](/landing-pages/bold.html), [Minimal](/landing-pages/minimal.html), and [Startup](/landing-pages/startup.html).

```v1.0.2```
- Reorganized our structure to be more helpful for developers that are looking to leverage our toolkit ([#42](https://github.com/santaclarauniversity/scu-web-assets/issues/42))
- Fixed Header issues ([#46](https://github.com/santaclarauniversity/scu-web-assets/issues/46))

```v1.0.1```

Released May 20, 2016
- Added some packages and dependencies to make the install process easier.
- Added Pull Quote content type.
- Added "Startup" style marketing landing page.
- Changed the README to be slightly more helpful.

```v1.0```
- First version of toolkit
- Added content types, colors, typography demonstration, homepage demo, and other documentation.
