// TODO Revisit to fix Webpack loading required external JS
/*require('imports-loader?$=jquery!bootstrap/js/dist/util');
require('imports-loader?$=jquery!bootstrap/js/dist/collapse');
require('imports-loader?$=jquery!bootstrap/js/dist/carousel');
require('imports-loader!holderjs/holder');*/

function searchEsc(e) {
  if (e.which === 27) {
    e.preventDefault();

    $('.fa-search').click();
  }
}

/**
 * Header and footer button functionality
 */
$(document).ready(() => {
  // TODO temp: toggle subheader/normal header
  $('.header-toggler').click(() => {
    $('.core-nav').toggle();
    $('.compact-nav').toggle();
  });

  // toggles search overlay
  $('.fa-search').click((e) => {
    e.preventDefault();

    if ($('.search-module--open')) {
      document.addEventListener("keyup", searchEsc);
    } else {
      document.removeEventListener("keyup", searchEsc);
    }

    $('.search-module').toggleClass('search-module--open');
    $('input.gsc-input').focus();
  });

  // closes search via X button
  $('.close-btn').click((e) => {
    e.preventDefault();

    $('.drawer').removeClass('open');
    $('.search-module').removeClass('search-module--open');
    document.removeEventListener("keyup", searchEsc);
  });

  // toggles quick links drawer
  $('.fa-bars').click((e) => {
    e.preventDefault();

    $('.drawer').toggleClass('open');
  });

  // dept switcher
  $(document).ready(function () {
    $('#departments').select2({
      theme: "bootstrap",
      placeholder: 'Departments and Programs',
    });
    $('#departments').on('select2:select', function (evt) {
      var dest = $(evt.params.data.element).data('target');
      // window.location = dest;
    });
  });

  $('#footer-toggler').click(() => {
    $('.footer-core').toggle();
    $('.footer-subfooter').toggle();
  });
});

/**
 * Feature Gallery / Jumbotron
 * Adding swipe events to Bootstrap's Carousel
 * Requires jquery.event.swipe.js, move and swipe libraries
 * by Stephen Band http://stephband.info/jquery.event.swipe/
 */
// Adding swipe events to Jumbotrons and Feature Galleries:
$(document).ready(() => {
  $('.carousel.slide')
    .carousel({
      interval: false, // Knock off the autoplay
    })
    .carousel('pause')
    .on('swipeleft', () => {
      $(this).carousel('next');
    })
    .on('swiperight', () => {
      $(this).carousel('prev');
    })
    .on('movestart', function (e) {
      if ((e.distX > e.distY && e.distX < -e.distY) ||
        (e.distX < e.distY && e.distX > -e.distY)) {
        e.preventDefault();
      }
    });
});

/**
 * Jumbotron Feature
 */
$(() => {
  const $gallery = $('.gallery.module');
  const $image = $gallery.find('.full-image .gallery-image img');

  $gallery.on('click', '.slides .gallery-image', function (e) {
    e.preventDefault();

    const $this = $(this);
    const imgSrc = $this.find('.thumbnail img').attr('src');
    const caption = $this.find('.gallery-caption').html() || '';

    console.log($this.find('.gallery-image img').length);

    $image
      .fadeOut(100, () => {
        $image.attr('src', imgSrc);
      })
      .fadeIn(100);

    caption.html(caption);

    return true;
  });
});

/**
 * Department Switcher
 */
$(() => {
  const $switcher = $('.switcher');

  $switcher.on('click', () => {
    $switcher.toggleClass('on');
    $switcher.toggleClass('two-column');
  });
});
