/**
 * Header and footer button functionality
 */
$(function () {
  // TODO temp: toggle subheader/normal header

  $('.header-toggler').click(function () {
    console.log("triggered");
    $('.core-nav').toggle();
    $('.compact-nav').toggle();
  });

  // toggles search overlay
  $('.fa-search').click(function (e) {
    // TODO fix event listener not removing
    e.preventDefault();

    $('.search-module').toggleClass('search-module--open');
    $('input.gsc-input').focus();

    if ($('.search-module--open')) {
      document.addEventListener("keyup", searchEsc);
    }
  });

  // closes search via X button
  $('.close-btn').click(function (e) {
    e.preventDefault();

    $('.drawer').removeClass('open');
    $('.search-module').removeClass('search-module--open');
  });

  // toggles quick links drawer
  $('.fa-map').click(function (e) {
    e.preventDefault();
    $('.drawer').toggleClass('open');
    document.addEventListener("keyup", searchEsc);
  });

  // dept switcher
  $('.custom-select').select2({
    theme: "bootstrap",
    placeholder: 'Departments and Programs'
  }).on('select2:select', function (evt) {
    var dest = $(evt.params.data.element).data('target');
    // window.location = dest;
  });

  $('#footer-toggler').click(function () {
    $('.footer-core').toggle();
    $('.footer-subfooter').toggle();
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
  }
}
