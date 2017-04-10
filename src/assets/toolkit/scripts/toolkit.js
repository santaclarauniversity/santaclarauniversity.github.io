require('imports-loader?$=jquery!bootstrap/js/dist/util');
require('imports-loader?$=jquery!bootstrap/js/dist/collapse');
require('imports-loader?$=jquery!bootstrap/js/dist/carousel');
require('imports-loader!holderjs/holder');

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
