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
