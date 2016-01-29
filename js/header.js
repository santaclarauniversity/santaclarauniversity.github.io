/*! jRespond.js v 0.10
  | Author: Jeremy Fields [jeremy.fields@viget.com], 2013
  | License: MIT */

// Universal Module Definition
;(function(window, name, fn) {
  // Node module pattern
  if (typeof module === 'object' &&
      module &&
      typeof module.exports === 'object') {
    module.exports = fn;
  } else {
    // Browser
    window[name] = fn;

    // AMD definition
    if (typeof define === 'function' && define.amd) {
      define(name, [], function(module) {
        return fn;
      });
    }
  }
}(this, 'jRespond', function(win, doc, undefined) {
  'use strict';

  return function(breakpoints) {
    // Array for registered functions
    var mediaListeners = [];

    /*
      Array that corresponds to mediaListeners and holds the
      current on/off state
      */
    var mediaInit = [];

    // Array of media query breakpoints; adjust as needed
    var mediaBreakpoints  = breakpoints;
    // Store the current breakpoint
    var curr              = '';
    // The previous breakpoint
    var prev              = '';

    // Window resize event timer stuff
    var resizeTimer;
    var resizeW           = 0;
    var resizeTimerFast   = 100;
    var resizeTimerSlow   = 500;
    var resizeTimerSpeed  = resizeTimerSlow;

    // Cross browser window width
    var winWidth = function() {
      var w = 0;

      // IE
      if (typeof (window.innerWidth) != 'number') {
        if (document.documentElement.clientWidth !== 0) {
          // Strict mode
          w = document.documentElement.clientWidth;
        } else {
          // Quirks mode
          w = document.body.clientWidth;
        }
      } else {
        // W3c
        w = window.innerWidth;
      }

      return w;
    };

    // Determine input type
    var addFunction = function(element) {
      if (element.length === undefined) {
        addToStack(element);
      } else {
        for (var i = 0; i < element.length; i++) {
          addToStack(element[i]);
        }
      }
    };

    // Send media to the mediaListeners array
    var addToStack = function(element) {
      var breakpoint = element.breakpoint;
      var enter      = element.enter || undefined;

      // Add function to stack
      mediaListeners.push(element);

      // Add corresponding entry to mediaInit
      mediaInit.push(false);

      if (testForCurr(breakpoint)) {
        if (enter !== undefined) {
          enter.call(null, {
            entering: curr,
            exiting: prev,
          });
        }
        mediaInit[(mediaListeners.length - 1)] = true;
      }
    };

    /*
      Loops through all registered functions and determines
      what should be fired
      */
    var cycleThrough = function() {
      var enterArray  = [];
      var exitArray   = [];

      for (var i = 0; i < mediaListeners.length; i++) {
        var breakpoint  = mediaListeners[i].breakpoint;
        var enter       = mediaListeners[i].enter || undefined;
        var exit        = mediaListeners[i].exit || undefined;

        if (breakpoint === '*') {
          if (enter !== undefined) {
            enterArray.push(enter);
          }
          if (exit !== undefined) {
            exitArray.push(exit);
          }
        } else if (testForCurr(breakpoint)) {
          if (enter !== undefined && !mediaInit[i]) {
            enterArray.push(enter);
          }
          mediaInit[i] = true;
        } else {
          if (exit !== undefined && mediaInit[i]) {
            exitArray.push(exit);
          }
          mediaInit[i] = false;
        }
      }

      var eventObject = {
        entering: curr,
        exiting: prev,
      };

      // Loop through exit functions to call
      for (var j = 0; j < exitArray.length; j++) {
        exitArray[j].call(null, eventObject);
      }

      // Then loop through enter functions to call
      for (var k = 0; k < enterArray.length; k++) {
        enterArray[k].call(null, eventObject);
      }
    };

    // Checks for the correct breakpoint against the mediaBreakpoints list
    var returnBreakpoint = function(width) {
      var foundBreakpoint = false;

      // Look for existing breakpoint based on width
      for (var i = 0; i < mediaBreakpoints.length; i++) {
        // If registered breakpoint found, break out of loop
        if (width >= mediaBreakpoints[i].enter &&
            width <= mediaBreakpoints[i].exit) {
          foundBreakpoint = true;
          break;
        }
      }

      // If breakpoint is found and it's not the current one
      if (foundBreakpoint && curr !== mediaBreakpoints[i].label) {
        prev = curr;
        curr = mediaBreakpoints[i].label;

        // Run the loop
        cycleThrough();

      // Or if no breakpoint applies
      } else if (!foundBreakpoint && curr !== '') {
        curr = '';

        // Run the loop
        cycleThrough();
      }
    };

    /*
      Takes the breakpoint/s arguement from an object and tests
      it against the current state
      */
    var testForCurr = function(element) {
      // If there's an array of breakpoints
      if (typeof element === 'object') {
        if (element.join().indexOf(curr) >= 0) {
          return true;
        }

      // If the string is '*' then run at every breakpoint
      } else if (element === '*') {
        return true;

      // Or if it's a single breakpoint
      } else if (typeof element === 'string' && curr === element) {
        return true;
      }
    };

    /*
      Self-calling function that checks the browser width and
      delegates if it detects a change
      */
    var checkResize = function() {
      // Get current width
      var w = winWidth();

      /*
        If there is a change speed up the timer and fire the
        returnBreakpoint function
        */
      if (w !== resizeW) {
        resizeTimerSpeed = resizeTimerFast;

        returnBreakpoint(w);

      // Otherwise keep on keepin' on
      } else {
        resizeTimerSpeed = resizeTimerSlow;
      }

      resizeW = w;

      // Calls itself on a setTimeout
      setTimeout(checkResize, resizeTimerSpeed);
    };
    checkResize();

    return {
      addFunc: function(elm) {
        addFunction(elm);
      },
      getBreakpoint: function() {
        return curr;
      },
    };
  };
}(this,this.document)));


$(document).ready(function() {
  var $header           = $('header.site-header');
  var $headerSlideMenus = $header.find('li.slide-menu');
  var $gatewayNav       = $header.find('.gateway-navigation');
  var $mainNav          = $header.find('.main-navigation');
  var $body             = $('body');
  var $window           = $(window);
  var mainNavOffset     = $mainNav.offset();

  var respond = jRespond([
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
  var initMobileMenus = function() {
    var $body = $('body');
    $body.wrapInner('<div id="js-mobile-content-wrapper"></div>');
    $('[data-toggle="offcanvas"]').on('click.mobile', function() {
      var $$        = $(this);
      var $menu     = $($$.data('target'));
      var bodyClass = $menu.hasClass('offcanvas-left') ?
          'active-left' :
          $menu.hasClass('offcanvas-right') ?
              'active-right' :
              false;
      if (!bodyClass) {
        return;
      }
      $body.toggleClass(bodyClass);
    });
  };

  var uninitMobileMenus = function() {
    $('[data-toggle="offcanvas"]')
      .off('.mobile')
      .off('.mobileclose');
    $('body')
      .removeClass('active-left')
      .removeClass('active-right');
    $('#js-mobile-content-wrapper>:first-child')
      .unwrap();
  };

  /*
    Add slidedown/slideup animations to header dropdowns using Bootstrap's
    events:
    */
  $header
    .find('.dropdown')
    .on('show.bs.dropdown', function() {
      $(this)
        .find('.dropdown-menu')
        .first()
        .stop(true, true)
        .slideDown(250);
    })
    .on('hide.bs.dropdown', function() {
      $(this)
        .find('.dropdown-menu')
        .first()
        .stop(true, true)
        .slideUp(250);
    });

  // Slide menus for tablet/desktop drawers in gateway navigation
  var toggleSlideMenus = function(e) {
    e.preventDefault();

    var $$        = $(this).parents('li.slide-menu');
    var $panel    = $$.find('div.slide-panel');
    var panelH    = $panel.outerHeight();
    var $animated = $mainNav.hasClass('affix') ?
      $gatewayNav.add($mainNav) :
      $gatewayNav;

    // We're closing it here
    if ($$.hasClass('open')) {
      $panel
        .find('.row')
        .fadeOut(function() {
          $panel
            .hide()
            .find('.row')
            .show();
        });

      /*
        $('body').stop().animate({
          "paddingTop": 0
        }, function() {
          $$.removeClass('open');
        });
       */
      $animated
        .stop()
        .animate({
          top: '-=' + panelH,
        }, {
          complete: function() {
            $$.removeClass('open');
            initMainNavAffix();
            if (!$mainNav.hasClass('affix')) {
              $mainNav.css('top', '');
            }
          },
          step: function(now, fx) {
            /*
              If ($this is $mainNav) and
              (now - $(window).scrollTop() <= $mainNav's default position ) then
             */
            var $this = $(this);
            if ($this.hasClass('affix') && $this.hasClass('main-navigation') &&
              (now + $(window).scrollTop() <= mainNavOffset.top)) {
              $this
                .removeClass('affix')
                .addClass('affix-top');
            }
          },
        });

    // Opening or switching here
    } else {
      var $otherPanel = $headerSlideMenus
        .not($$)
        .filter('.open')
        .removeClass('open')
        .find('div.slide-panel');

      if ($otherPanel.length) {
        panelH -= $otherPanel.outerHeight();
      }

      $animated
        .stop()
        .animate({
          top: '+=' + panelH,
        }, {
        complete: function() {
          initMainNavAffix();
          if (!$mainNav.hasClass('affix')) {
            $mainNav.css('top', $gatewayNav.outerHeight() +
              $gatewayNav.offset().top - $(document).scrollTop() - 1 + 'px');
          }
          /*
            $mainNav.css('top',$gatewayNav.outerHeight()+
            $gatewayNav.offset().top- $(document).scrollTop()-1+'px');
           */
        },
        step: function(now, fx) {
          var $this = $(this);

          if (!$animated.filter('.main-navigation').length &&
            $this.hasClass('gateway-navigation') &&
            (now + $gatewayNav.outerHeight() - 1 >=
              mainNavOffset.top - $(window).scrollTop())) {
            /*
             If $animated does not contain $mainNav, and $this = $gatewayNav,
             and $gatewayNav's bottome edge is past the main nav's top offset,
             convert main nav to affix and animate its top:
             */
            $mainNav
              .removeClass('affix-top')
              .addClass('affix')
              .css('top', (now + $gatewayNav.outerHeight() - 1));
          } else if ($this.hasClass('affix') &&
            $this.hasClass('main-navigation') &&
            (now + $(window).scrollTop() <= mainNavOffset.top)) {
            /*
             But if $this is $mainNav, and it gets to mainNavOffset.top
             (its original position), drop it off where it started.
             */
            $this
              .removeClass('affix')
              .addClass('affix-top');
          }
        },
      });

      $otherPanel.fadeOut();
      $$.addClass('open');
      $panel.fadeIn();
    }
  };

  var initToggleSlideMenus = function() {
    $headerSlideMenus.on('click.tabletUp', 'a[role="button"]',
      toggleSlideMenus);
  };

  var uninitToggleSlideMenus = function() {
    $headerSlideMenus.off('.tabletUp');
  };

  var initMainNavAffix = function() {
    var gOffset     = $gatewayNav.offset().top - $(document).scrollTop();
    var reaffixMain = false;
    var newTop      = (mainNavOffset.top >
      $gatewayNav.outerHeight() + gOffset - 1) ?
      mainNavOffset.top - $gatewayNav.outerHeight() - gOffset - 1 :
      $gatewayNav.outerHeight() + gOffset - 1;

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

  var adjustHeaderPositions = function() {
    initMainNavAffix();
    if ($headerSlideMenus.filter('.open').length) {
      $headerSlideMenus.filter('.open').each(function() {
        var $$          = $(this);
        var panelHeight = $$.find('div.slide-panel').outerHeight();
        $$.parents('.gateway-navigation').css('top', panelHeight + 'px');
        if ($mainNav.hasClass('affix')) {
          $mainNav.css('top',
            panelHeight - 1 + $gatewayNav.outerHeight() + 'px');
        }
      });
    }
  };

  // Hook up init functions with breakpoints:
  mediaCheck({
    media: '(max-width: 767px)', // Mobile only
    entry: function() {
      uninitToggleSlideMenus();
      initMobileMenus();
    },
    exit: function() {
      uninitMobileMenus();
      initToggleSlideMenus();
      setTimeout(function() {
        mainnavOffset = $mainNav.offset();
        initMainNavAffix();
      }, 250);
    },
  });

  mediaCheck({
    media: '(min-width: 1065px) and (max-width: 1199px)',
    entry: adjustHeaderPositions,
    exit: adjustHeaderPositions,
  });

  function initHomepageCanWeSwipe() {
    var $boxWrap  = $('.can-we-boxes');
    var $boxes    = $boxWrap.find('.can-we-box');
    var margin    = 30;
    var boxWidth, position;

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
      enter: function() {
        init();
        $boxes
          .on('swipeleft', swipeLeft)
          .on('swiperight', swipeRight);
        $window.on('resize', init);
      },
      exit: function() {
        $window.off('resize', init);
        $boxes
          .off('swipeleft')
          .off('swiperight');
        $boxes.css('width', 'auto');
        $boxWrap.css('left', 'auto');
      },
    });
  }

  initHomepageCanWeSwipe();
});
