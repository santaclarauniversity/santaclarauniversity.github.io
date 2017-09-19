/**
 * Header and footer button functionality
 */
$(function () {
  // toggles the mobile fa-bars menu
  $('.navbar-toggler').click(function() {
    $('#navbarCollapseLower').delay(600).toggle();
  });

  // temp: toggles header/footer formats between unit-specific (e.g. School of Engineering) h/f and normal h/f
  // (e.g. homepage)
  $('.header-toggler').click(function () {
    $('.core-nav').toggle();
    $('.compact-nav').toggle();
  });

  $('#footer-toggler').click(function () {
    $('.footer-core').toggle();
    $('.footer-subfooter').toggle();
  });

  // toggles search overlay
  $('.fa-search').click(function (e) {
    e.preventDefault();

    $('.search-module').toggleClass('search-module--open');
    $('input.gsc-input').focus();
    $('input.gsc-input').val('');

    if ($('.search-module--open')) {
      $('body').css('overflow', 'hidden');
      document.addEventListener("keyup", searchEsc);
    } else {
      $('body').css('overflow', 'visible');
    }
  });

  // closes search via X button
  $('.close-btn').click(function (e) {
    e.preventDefault();

    $('.drawer').removeClass('open');
    $('.search-module').removeClass('search-module--open');
  });

  // toggles sitemap
  $('.sitemap-toggle').click(function (e) {
    e.preventDefault();
    $('.drawer').toggleClass('open');
    document.addEventListener("keyup", searchEsc);
  });

  // dept switcher
  $('.custom-select').selectWoo({
    theme: "bootstrap",
    placeholder: 'Departments, Services, and Programs'
  }).on('select2:select', function (evt) {
    var dest = $(evt.params.data.element).data('target');
    // window.location = dest;
  });
});


/**
 * Department Switcher
 */
$(function () {
  var $switcher = $('.switcher');

  $switcher.on('click', function () {
    $switcher.toggleClass('on');
    $switcher.toggleClass('two-column');
  });
});

function searchEsc(e) {
  if (e.which === 27) {
    e.preventDefault();
    document.removeEventListener("keyup", searchEsc);
    $('.search-module').removeClass('search-module--open');
    $('.drawer').removeClass('open');
    $('body').css('overflow', 'visible');
  }
}
