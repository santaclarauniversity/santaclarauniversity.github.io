/**
 * Toolkit JavaScript
 */

'use strict';

/**
 * Feature Gallery / Jumbotron
 * Adding swipe events to Bootstrap's Carousel
 * Requires jquery.event.swipe.js, move and swipe libraries
 * by Stephen Band http://stephband.info/jquery.event.swipe/
 */
// Adding swipe events to Jumbotrons and Feature Galleries:
$(document).ready(function() {
  $('.carousel.slide')
    .carousel({
      interval: false, // Knock off the autoplay
    })
    .carousel('pause')
    .on('swipeleft', function() {
      $(this).carousel('next');
    })
    .on('swiperight', function() {
      $(this).carousel('prev');
    })
    .on('movestart',function(e) {
      if ((e.distX > e.distY && e.distX < -e.distY) ||
        (e.distX < e.distY && e.distX > -e.distY)) {
        e.preventDefault();
      }
    });
});

/**
 * Jumbotron Feature
 */
$(function() {
  var $gallery = $('.gallery.module');
  var $image   = $gallery.find('.full-image .gallery-image img');

  $gallery.on('click', '.slides .gallery-image', function(e) {
    e.preventDefault();

    var $this   = $(this);
    var imgSrc  = $this.find('.thumbnail img').attr('src');
    var caption = $this.find('.gallery-caption').html() || '';

    console.log($this.find('.gallery-image img').length);

    $image
      .fadeOut(100, function() {
        $image.attr('src', imgSrc);
      })
      .fadeIn(100);

    caption.html(caption);

    return true;
  });
});

