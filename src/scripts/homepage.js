$(() => {

  var triggerStart  = $('header').height();
  var triggerEnd    = $(window).height();

  var targetContent = $('.fadeable');
  var targetOverlay = targetContent.find('.overlay');
  var targetBtn     = targetContent.find('.actions');
  var targetVideo   = $('video');

  var lastScrollPos = 0;

  function animIn( ) {
    targetOverlay.fadeTo('fast', .75, function () {
      targetBtn.removeClass('fadeOutDown').addClass('fadeInUp');
    });
  }

  function animOut( ) {
    targetOverlay.fadeTo('fast', .01, function () {
      targetBtn.removeClass('fadeInUp').addClass('fadeOutDown');
    });
  }

  function listen( ) {
    var scrollPos = $(this).scrollTop();
    if (lastScrollPos === 0 && scrollPos >= triggerStart && scrollPos <= triggerEnd) {
      lastScrollPos = scrollPos;
      animIn();
      targetVideo.get(0).pause();
    }
    else if (lastScrollPos >= triggerStart && lastScrollPos <= triggerEnd && scrollPos > triggerEnd) {
      lastScrollPos = scrollPos;
    }
    else if (lastScrollPos >= triggerEnd && scrollPos >= triggerStart && scrollPos <= triggerEnd) {
      lastScrollPos = scrollPos;
      animIn();
    }
    else if (lastScrollPos > triggerStart && scrollPos <= triggerStart) {
      lastScrollPos = 0;
      animOut();
      targetVideo.get(0).play();
    }
  }

  // $(window).on('scroll', listen);

  // let user skip down past video
  $('.fa-chevron-down').click(function () {
    $('html, body').animate({
      scrollTop: $('.content-start').offset().top
    }, 'slow');
  });

});
