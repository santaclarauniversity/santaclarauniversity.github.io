var SCU = {
  dev: function () {
    $('.navbar-toggler').click(function () {
      $('#navbarCollapseAudiences').delay(600).toggle();
    });

    $('.header-toggler').show().click(function () {
      $('.nav-top:not(.nav-top-custom)').toggle();
      $('.nav-top.nav-top-custom').toggle();

      $('.nav-fixed:not(.nav-fixed-custom)').toggle();
      $('.nav-fixed.nav-fixed-custom').toggle();
    });

    $('#footer-toggler').show().click(function () {
      $('.footer-core').toggle();
      $('.footer-subfooter').toggle();
    });
  }
};

var Search = {
  init: function () {
    this.attachListener();
  },
  openSearch: function () {
    $('.search-module').toggleClass('search-module--open');
    $('input.gsc-input').focus().val('');
    $('body').toggleClass('search-module-opened');
    this.searchOpenListeners();
    this.setupDepartments();
  },
  attachListener: function () {
    $('.fa-search').click(function (e) {
      e.preventDefault();
      Search.openSearch();
    });
  },
  searchOpenListeners: function () {
    this.searchOpenEscListener();
    this.searchCloseListener();
    this.searchClearFieldListener();
    $(".gsc-input").on("change paste keyup", function () {
      $('.search-header').fadeOut();
      $('.search-module-results').show();
    });
  },
  searchCloseListener: function () {
    $('.close-btn').click(function (e) {
      e.preventDefault();
      $('.search-module-results').hide();
      $('.search-module').removeClass('search-module--open');
      $('.search-header').show();
      $('body').css('overflow', 'visible');
    });
  },
  resetSearch: function () {
    $(document).off('keyup');
    $(".gsc-input").off("change paste keyup");
  },
  setupDepartments: function () {
    $('.custom-select').selectWoo({
      theme: 'bootstrap',
      placeholder: 'Departments, Services, and Programs',
    }).on('select2:select', function (evt) {
      var dest = $(evt.params.data.element).data('target');
      // window.location = dest;
    });
  },
  searchOpenEscListener: function () {
    $(document).on('keyup', function (evt) {
      if (evt.keyCode === 27) {
        evt.preventDefault();
        $('.search-module').removeClass('search-module--open');
        $('.search-module-results').hide();
        $('body').css('overflow', 'visible');
        Search.resetSearch();
      }
    });
  },
  searchClearFieldListener: function () {
    $(document).on('keyup', function (evt) {
      // (ignore ESC key)
      if (evt.keyCode !== 27 && !$('input.gsc-input').val()) {
        $('.search-header').show();
      }
    });
  }
};

// header and footer
$(function () {

  $(window).on('scroll', function() {
    if (Math.round($(window).scrollTop()) > 100) {
      $('.nav-fixed, .nav-fixed-custom').removeClass('initial');
    } else {
      $('.nav-fixed, .nav-fixed-custom').addClass('initial');
    }
  });

  Search.init();
  var myCallback = function myCallback() {
    if (document.readyState === 'complete') {
      // Document is ready when CSE element is initialized.
      // Render an element with both search box and search results in div with id 'test'.
      google.search.cse.element.render({
        div: 'search-input',
        tag: 'searchbox'
      }, {
        div: "search-module-results",
        tag: 'searchresults'
      });
    } else {
      // Document is not ready yet, when CSE element is initialized.
      google.setOnLoadCallback(function () {
        // Render an element with both search box and search results in div with id 'test'.
        google.search.cse.element.render({
          div: 'search-input',
          tag: 'searchbox'
        }, {
          div: "search-module-results",
          tag: 'searchresults'
        });
      }, true);
    }
  };

// Insert it before the CSE code snippet so that cse.js can take the script
// parameters, like parsetags, callbacks.
  window.__gcse = {
    parsetags: 'explicit',
    callback: myCallback
  };

  var cx = '015735913753929981099:fyhgumyaibi'; // Insert your own Custom Search engine ID here
  var gcse = document.createElement('script');gcse.type = 'text/javascript';
  gcse.async = true;
  gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(gcse, s);

});

// department switcher
$(function () {
  var $switcher = $('.switcher');

  $switcher.on('click', function () {
    $switcher.toggleClass('on');
    $switcher.toggleClass('two-column');
  });
});
