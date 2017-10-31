This doc covers some of the things we expect most pages will have to reconcile, but [there is way more detail in the Bootstrap 4 docs](https://v4-alpha.getbootstrap.com/migration/) which discusses everything you might need to do to migrate.

## Grid

- **Grid now uses flexbox**. This has lots of implications, so if you are not already familiar with flexbox, [check this out before trying to dive in](https://css-tricks.com/snippets/css/a-guide-to-flexbox/).
  - [There's also a Bootstrap 4 doc on how to use flexbox in the new grid](https://v4-alpha.getbootstrap.com/utilities/flexbox/)
- New responsive grid tier `xl` for device width >= 1200px
- `xs` columns have been replaced by `.col`; i.e., `.col-xs-4` becomes just `.col-4`
- `.col` has more uses than just that: 
  - e.g. given a `.row` with several `.col`s, each `.col` will have equal width
- `.col-*-offset-*` is now just `.offset-*-*`

## Colors

Note that SCU colors are different from default Bootstrap 4 colors. Go to brand.scu.edu to see the Toolkit colors.

- There are now many more color options available on most elements, like Button, which could be `.btn-primary`, `.btn-dark`, `.btn-light`, `.btn-secondary` just to name a few

## Images

- Replace `.img-responsive` by `.img-fluid`

## Glyphicons

- Deprecated. Toolkit uses Font Awesome, [which has plenty of icons](http://fontawesome.io/icons/)

## Content Types

- Panel is deprecated, replaced by Cards which are available in Toolkit 2.0

## Utilities

- `.pull-left` and `.pull-right` have been replaced by `.float-{sm,md,lg,xl}-{left,right,none}`
