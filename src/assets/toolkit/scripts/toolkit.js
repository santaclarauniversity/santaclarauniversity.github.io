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
  }
};

var body,
  searchOverlay,
  overlayOpen;

var Search = {
  // prepares the overlay to be interacted w/ on document load
  init: function () {
    this.attachListener();

    body = document.body;
    searchOverlay = document.querySelector('.search-module');
    overlayOpen = false;
  },

  // toggles the search overlay in/out of view
  toggleSearchOverlay: function () {
    overlayOpen = !overlayOpen;

    // prevent background scrolling while overlay open
    body.classList.toggle('no-scroll', overlayOpen);
    searchOverlay.setAttribute('aria-hidden', !overlayOpen);
    searchOverlay.scrollTop = 0;

    // toggle overlay
    document.querySelector('.search-module').classList.toggle('search-module--open');
    $('.search-module-results').toggle();
  },

  // resets (cancels) search overlay listeners
  resetSearch: function () {
    $(document).off('keyup');
    $('.close-btn').off('click');
    $('.gsc-input').off('change paste keyup');
  },

  // opens overlay and its components
  openSearch: function () {
    this.toggleSearchOverlay();
    this.searchOpenListeners();
    this.setupSelect2();

    $('input.gsc-input').focus().val('');
  },

  // activates search icon on header to toggle overlay
  attachListener: function () {
    $('.fa-search').click(function (e) {
      e.preventDefault();
      Search.openSearch();
    });
  },

  // creates listeners that allow user to close search overlay (ESC button on keyboard and top right)
  searchOpenListeners: function () {
    this.searchCloseEscListener();
    this.searchCloseBtnListener();

    $('.gsc-input').on('change paste keyup', function () {
      $('.search-header').fadeOut();
      $('.search-module-results').show();
    });
  },

  // closes overlay when ESC is pressed on keyboard
  searchCloseEscListener: function () {
    $(document).on('keyup', function (evt) {
      if (evt.keyCode === 27) {
        evt.preventDefault();

        Search.resetSearch();
        Search.toggleSearchOverlay();
      }
    });
  },

  // closes overlay when the button in the top right is clicked
  searchCloseBtnListener: function () {
    $('.close-btn').click(function (e) {
      e.preventDefault();

      Search.resetSearch();
      Search.toggleSearchOverlay();
    });
  },

  // inits department switcher (which is external JS)
  setupSelect2: function () {
    $('#select2-header').selectWoo({
      theme: 'bootstrap',
      placeholder: $(this).data('placeholder')
    }).on('select2:select', function (evt) {
      window.location = $(evt.target).val();
    });
  }
};

// header and footer
$(function () {

  // toggle fixed header
  $(window).on('scroll', function() {

    var $nav = $('.nav-fixed, .nav-fixed.nav-fixed-custom');

    if (Math.round($(window).scrollTop()) > 100) {
      $nav.removeClass('initial');
    } else {
      $nav.addClass('initial');
    }
  });

  // top level navbar links w/ dropdowns should still link to the page
  $('.navbar').find('.dropdown-toggle').click(function () {
    window.open($(this).attr('href'), '_self');
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
        div: 'search-module-results',
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
          div: 'search-module-results',
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

  // note: may be more than one
  var $otherSelect2 = $('.custom-select:not(#select2-header)');

  if ($otherSelect2.length) {
    $otherSelect2.selectWoo({
      theme: 'bootstrap',
      placeholder: $(this).data('placeholder')
    }).on('select2:select', function (evt) {
      window.location = $(evt.target).val();
    });
  }
});

// homepage
$(function () {
  // TODO this -needs- to be scoped to -ONLY- the homepage

  /*
    animation window of 100vh - 100px (the viewport, excluding the header)
   */
  var triggerStart  = $('header').height();
  var triggerEnd    = $(window).height();

  var targetContent = $('.fadeable');
  var targetOverlay = targetContent.find('.overlay');
  var targetBtn     = targetContent.find('.actions');
  var targetVideo   = $('video');

  /*
    the last marked vertical scroll position, which helps the scroll listener
    determine how to animate
   */
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

  $(window).on('scroll', listen);

  // let user skip down past video
  $('.fa-chevron-down').click(function () {
    $('html, body').animate({
      scrollTop: $('.content-start').offset().top
    }, 'slow');
  });
});
