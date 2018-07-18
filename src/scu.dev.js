import 'bootstrap'
import 'select2'

import './scripts/header.legacy'

let $ = require('jquery');
window.jQuery = $;
window.$ = $;

$(() => {
  // enable any select2 modules embedded in page
  let customSelects = $('.custom-select:not(#select2-header)');
  if (customSelects.length > 0) {
    customSelects.selectWoo({ theme: 'bootstrap4' });
    customSelects.on('select2:select', (event) => {
      window.location = $(event.target).val();
    });
  }

  // enable any carousels embedded in page
  if (document.querySelector('.carousel')) {
    $('.carousel').carousel({ interval: 5000 });
  }
});
