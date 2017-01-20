/**
 * Toolkit JavaScript
 */

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


/**
 * Header functionality
 */
/*! jRespond.js v 0.10 | Author: Jeremy Fields [jeremy.fields@viget.com], 2013 | License: MIT */

// Universal Module Definition
(function (window, name, fn) {
  // Node module pattern
  if (typeof module === 'object' && module && typeof module.exports === 'object') {
    module.exports = fn;
  } else {
    // browser
    window[name] = fn;

    // AMD definition
    if (typeof define === 'function' && define.amd) {
      define(name, [], () => {
        return fn;
      });
    }
  }
}(this, 'jRespond', (function (win, doc, undefined) { // eslint-disable-line no-shadow-restricted-names

  return function (breakpoints) {

    // array for registered functions
    const mediaListeners = [];

    // array that corresponds to mediaListeners and holds the current on/off state
    const mediaInit = [];

    // array of media query breakpoints; adjust as needed
    const mediaBreakpoints = breakpoints;

    // store the current breakpoint
    let curr = '';

    // the previous breakpoint
    let prev = '';

    // window resize event timer stuff
    // let resizeTimer;
    let resizeW = 0;
    const resizeTmrFast = 100;
    const resizeTmrSlow = 500;
    let resizeTmrSpd = resizeTmrSlow;

    // cross browser window width
    const winWidth = () => {

      let w = 0;

      // IE
      if (typeof (window.innerWidth) !== 'number') {

        if (document.documentElement.clientWidth !== 0) {

          // strict mode
          w = document.documentElement.clientWidth;
        } else {

          // quirks mode
          w = document.body.clientWidth;
        }
      } else {

        // w3c
        w = window.innerWidth;
      }

      return w;
    };

    // takes the breakpoint/s arguement from an object and tests it against the current state
    const testForCurr = function (elm) {

      // if there's an array of breakpoints
      if (typeof elm === 'object') {
        if (elm.join().indexOf(curr) >= 0) {
          return true;
        }
        // if the string is '*' then run at every breakpoint
      } else if (elm === '*') {
        return true;

        // or if it's a single breakpoint
      } else if (typeof elm === 'string') {
        if (curr === elm) {
          return true;
        }
      }

      return false;
    };

    // send media to the mediaListeners array
    const addToStack = function (elm) {
      const brkpt = elm.breakpoint;
      const entr = elm.enter || undefined;

      // add function to stack
      mediaListeners.push(elm);

      // add corresponding entry to mediaInit
      mediaInit.push(false);

      if (testForCurr(brkpt)) {
        if (entr !== undefined) {
          entr.call(null, {
            entering: curr,
            exiting: prev,
          });
        }
        mediaInit[(mediaListeners.length - 1)] = true;
      }
    };

    // determine input type
    const addFunction = function (elm) {
      if (elm.length === undefined) {
        addToStack(elm);
      } else {
        for (let i = 0; i < elm.length; i++) {
          addToStack(elm[i]);
        }
      }
    };

    // loops through all registered functions and determines what should be fired
    const cycleThrough = () => {

      const enterArray = [];
      const exitArray = [];

      for (let i = 0; i < mediaListeners.length; i++) {
        const brkpt = mediaListeners[i].breakpoint;
        const entr = mediaListeners[i].enter || undefined;
        const exit = mediaListeners[i].exit || undefined;

        if (brkpt === '*') {
          if (entr !== undefined) {
            enterArray.push(entr);
          }
          if (exit !== undefined) {
            exitArray.push(exit);
          }
        } else if (testForCurr(brkpt)) {
          if (entr !== undefined && !mediaInit[i]) {
            enterArray.push(entr);
          }
          mediaInit[i] = true;
        } else {
          if (exit !== undefined && mediaInit[i]) {
            exitArray.push(exit);
          }
          mediaInit[i] = false;
        }
      }

      const eventObject = {
        entering: curr,
        exiting: prev,
      };

      // loop through exit functions to call
      for (let j = 0; j < exitArray.length; j++) {
        exitArray[j].call(null, eventObject);
      }

      // then loop through enter functions to call
      for (let k = 0; k < enterArray.length; k++) {
        enterArray[k].call(null, eventObject);
      }
    };

    // checks for the correct breakpoint against the mediaBreakpoints list
    const returnBreakpoint = function (width) {

      let foundBrkpt = false;

      // look for existing breakpoint based on width
      let i; // since this is used outside of the loop we want to give it greater scope
      for (i = 0; i < mediaBreakpoints.length; i++) {

        // if registered breakpoint found, break out of loop
        if (width >= mediaBreakpoints[i].enter && width <= mediaBreakpoints[i].exit) {
          foundBrkpt = true;

          break;
        }
      }

      // if breakpoint is found and it's not the current one
      if (foundBrkpt && curr !== mediaBreakpoints[i].label) {
        prev = curr;
        curr = mediaBreakpoints[i].label;

        // run the loop
        cycleThrough();

        // or if no breakpoint applies
      } else if (!foundBrkpt && curr !== '') {
        curr = '';

        // run the loop
        cycleThrough();
      }

    };

    // self-calling function that checks the browser width and delegates if it detects a change
    const checkResize = () => {

      // get current width
      const w = winWidth();

      // if there is a change speed up the timer and fire the returnBreakpoint function
      if (w !== resizeW) {
        resizeTmrSpd = resizeTmrFast;

        returnBreakpoint(w);

        // otherwise keep on keepin' on
      } else {
        resizeTmrSpd = resizeTmrSlow;
      }

      resizeW = w;

      // calls itself on a setTimeout
      setTimeout(checkResize, resizeTmrSpd);
    };
    checkResize();

    // return
    return {
      addFunc(elm) {
        addFunction(elm);
      },
      getBreakpoint() {
        return curr;
      },
    };

  };

}(this, this.document))));


$(document).ready(() => {
  const $header = $('header.site-header');
  const $headerSlideMenus = $header.find('li.slide-menu');
  const $gatewayNav = $header.find('.gateway-navigation');
  const $mainNav = $header.find('.main-navigation');
  const $body = $('body');
  const $window = $(window);
  const mainNavOffset = $mainNav.offset();

  const respond = jRespond([ // eslint-disable-line no-undef
    {
      label: 'mobile',
      enter: 0,
      exit: 767,
    }, {
      label: 'tablet',
      enter: 768,
      exit: 991,
    }, {
      label: 'laptop',
      enter: 992,
      exit: 1199,
    }, {
      label: 'desktop',
      enter: 1200,
      exit: 10000,
    },
  ]);

  // Offcanvas menus for mobile
  const initMobileMenus = () => {
    // const $body = $('body');
    $body.wrapInner('<div id="js-mobile-content-wrapper"></div>');
    $('[data-toggle="offcanvas"]').on('click.mobile', () => {
      const $$ = $(this);
      const $menu = $($$.data('target'));
      const bodyClass = $menu.hasClass('offcanvas-left') ? 'active-left' : // eslint-disable-line no-nested-ternary
        $menu.hasClass('offcanvas-right') ? 'active-right' : false;
      if (!bodyClass) {
        return;
      }
      $body.toggleClass(bodyClass);
    });
  };
  const uninitMobileMenus = () => {
    $('[data-toggle="offcanvas"]').off('.mobile').off('.mobileclose');
    $('body').removeClass('active-left').removeClass('active-right');
    $('#js-mobile-content-wrapper>:first-child').unwrap();
  };

  // Add slidedown/slideup animations to header dropdowns using Bootstrap's events:
  $('#scu-main-navigation+nav .scu-nav').hover(() => {
    $body.toggleClass('nav-dropdown-open');
  });

  const initMainNavAffix = () => {
    let gOffset;
    let newTop;

    // Pages that do not have a site header will break unless we check here
    if (!$header.length) {
      newTop = 0;
      // Otherwise, operate normally
    } else {
      gOffset = $gatewayNav.offset().top - $(document).scrollTop();
      // reaffixMain = false,
      newTop = (mainNavOffset.top > $gatewayNav.outerHeight() + gOffset - 1) ?
      mainNavOffset.top - $gatewayNav.outerHeight() - gOffset - 1 :
      $gatewayNav.outerHeight() + gOffset - 1;
    }

    // Main nav affix:
    if ($mainNav.data('bs.affix')) {
      $mainNav.data('bs.affix').options.offset.top = newTop;
    } else {
      $mainNav.affix({
        offset: {
          top: newTop,
        },
      });
    }
  };

  // Slide menus for tablet/desktop drawers in gateway navigation
  const toggleSlideMenus = function (e) {
    e.preventDefault();
    const $$ = $(this).parents('li.slide-menu');
    const $panel = $$.find('div.slide-panel');
    const $animated = $mainNav.hasClass('affix') ? $gatewayNav.add($mainNav) : $gatewayNav;
    let panelH = $panel.outerHeight();
    if ($$.hasClass('open')) { // We're closing it here
      $panel.find('.row').fadeOut(() => {
        $panel.hide().find('.row').show();
      });
      // $('body').stop().animate({"paddingTop": 0},() =>{$$.removeClass('open');});
      $animated.stop().animate({
        top: `-=${panelH}`,
      }, {
        complete() {
          $$.removeClass('open');
          initMainNavAffix();
          if (!$mainNav.hasClass('affix')) {
            $mainNav.css('top', '');
          }
        },
        step(now) {
          /*
           If ($this is $mainNav) and (now - $(window).scrollTop() <=
           $mainNav's default position ) then
           */
          const $this = $(this);
          if ($this.hasClass('affix') && $this.hasClass('main-navigation') &&
            (now + $(window).scrollTop() <= mainNavOffset.top)) {
            $this.removeClass('affix').addClass('affix-top');
          }
        },
      });
    } else { // Opening or switching here
      const $otherPanel = $headerSlideMenus.not($$).filter('.open').removeClass('open')
        .find('div.slide-panel');
      if ($otherPanel.length) {
        panelH -= $otherPanel.outerHeight();
      }
      $animated.stop().animate({
        top: `+=${panelH}`,
      }, {
        complete() {
          initMainNavAffix();
          if (!$mainNav.hasClass('affix')) {
            $mainNav.css('top', `${$gatewayNav.outerHeight() + $gatewayNav.offset().top -
            $(document).scrollTop() - 1}px`);
          }
        },
        step(now) {
          const $this = $(this);
          /*
           If $animated does not contain $mainNav, and $this = $gatewayNav, and
           $gatewayNav's bottome edge is past the main nav's top offset, convert
           main nav to affix and animate its top:
           */
          if (!$animated.filter('.main-navigation').length &&
            $this.hasClass('gateway-navigation') &&
            (now + $gatewayNav.outerHeight() - 1 >= mainNavOffset.top -
            $(window).scrollTop())) {
            $mainNav.removeClass('affix-top').addClass('affix').css('top',
              (now + $gatewayNav.outerHeight() - 1));
          } else if ($this.hasClass('affix') && $this.hasClass('main-navigation') &&
            (now + $(window).scrollTop() <= mainNavOffset.top)) {
            /*
             but if $this is $mainNav, and it gets to mainNavOffset.top (its
             original position), drop it off where it started.
             */
            $this.removeClass('affix').addClass('affix-top');
          }
        },
      });
      $otherPanel.fadeOut();
      $$.addClass('open');
      $panel.fadeIn();
    }
  };
  const initToggleSlideMenus = () => {
    $headerSlideMenus.on('click.tabletUp', 'a[role="button"]', toggleSlideMenus);
  };
  const uninitToggleSlideMenus = () => {
    $headerSlideMenus.off('.tabletUp');
  };

  const adjustHeaderPositions = () => {
    initMainNavAffix();
    if ($headerSlideMenus.filter('.open').length) {
      $headerSlideMenus.filter('.open').each(() => {
        const $$ = $(this);
        const panelHeight = $$.find('div.slide-panel').outerHeight();
        $$.parents('.gateway-navigation').css('top', `${panelHeight}px`);
        if ($mainNav.hasClass('affix')) {
          $mainNav.css('top', `${panelHeight - 1 + $gatewayNav.outerHeight()}px`);
        }
      });
    }
  };

  // Hook up init functions with breakpoints:
  mediaCheck({ // eslint-disable-line no-undef
    media: '(max-width: 767px)', // Mobile only
    entry: () => {
      uninitToggleSlideMenus();
      initMobileMenus();
    },
    exit: () => {
      uninitMobileMenus();
      initToggleSlideMenus();
      setTimeout(() => {
        // mainnavOffset = $mainNav.offset();
        initMainNavAffix();
      }, 250);
    },
  });
  mediaCheck({ // eslint-disable-line no-undef
    media: '(min-width: 1065px) and (max-width: 1199px)',
    entry: adjustHeaderPositions,
    exit: adjustHeaderPositions,
  });

  function initHomepageCanWeSwipe() {
    const $boxWrap = $('.can-we-boxes');
    const $boxes = $boxWrap.find('.can-we-box');
    const margin = 30;
    let boxWidth;
    let position;

    function init() {
      if ($window.width() >= 768) {
        return;
      }
      position = 1;
      $boxes.width($window.width() * 0.5);
      boxWidth = $boxes.outerWidth();
      $boxWrap.css('left', $body.width() - boxWidth - margin - 25);
    }

    function swipeLeft() {
      if (position >= $boxes.length) {
        return;
      }
      $boxWrap.animate({
        left: $boxWrap.position().left - boxWidth - margin,
      }, 300);
      position++;
    }

    function swipeRight() {
      if (position === 1) {
        return;
      }
      $boxWrap.animate({
        left: $boxWrap.position().left + boxWidth + margin,
      }, 300);
      position--;
    }

    respond.addFunc({
      breakpoint: 'mobile',
      enter: () => {
        init();
        $boxes
          .on('swipeleft', swipeLeft)
          .on('swiperight', swipeRight);
        $window.on('resize', init);
      },
      exit: () => {
        $window.off('resize', init);
        $boxes.off('swipeleft').off('swiperight');
        $boxes.css('width', 'auto');
        $boxWrap.css('left', 'auto');
      },
    });
  }

  initHomepageCanWeSwipe();
});
