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
        .on('movestart', function(e) {
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
    var $image = $gallery.find('.full-image .gallery-image img');

    $gallery.on('click', '.slides .gallery-image', function(e) {
        e.preventDefault();

        var $this = $(this);
        var imgSrc = $this.find('.thumbnail img').attr('src');
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

/**
 * Department Switcher
 */
$(function() {
    var $switcher = $('.switcher');

    $switcher.on('click', function() {
        $switcher.toggleClass('on');
        $switcher.toggleClass('two-column');
    });
});


/**
 * Header functionality
 */
/*! jRespond.js v 0.10 | Author: Jeremy Fields [jeremy.fields@viget.com], 2013 | License: MIT */

// Universal Module Definition
;(function(window, name, fn) {
    // Node module pattern
    if (typeof module === 'object' && module && typeof module.exports === 'object') {
        module.exports = fn;
    } else {
        // browser
        window[name] = fn;

        // AMD definition
        if (typeof define === 'function' && define.amd) {
            define(name, [], function() {
                return fn;
            });
        }
    }
}(this, 'jRespond', function(win, doc, undefined) {

    return function(breakpoints) {

        // array for registered functions
        var mediaListeners = [];

        // array that corresponds to mediaListeners and holds the current on/off state
        var mediaInit = [];

        // array of media query breakpoints; adjust as needed
        var mediaBreakpoints = breakpoints;

        // store the current breakpoint
        var curr = '';

        // the previous breakpoint
        var prev = '';

        // window resize event timer stuff
        // var resizeTimer;
        var resizeW = 0;
        var resizeTmrFast = 100;
        var resizeTmrSlow = 500;
        var resizeTmrSpd = resizeTmrSlow;

        // cross browser window width
        var winWidth = function() {

            var w = 0;

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

        // determine input type
        var addFunction = function(elm) {
            if (elm.length === undefined) {
                addToStack(elm);
            } else {
                for (var i = 0; i < elm.length; i++) {
                    addToStack(elm[i]);
                }
            }
        };

        // send media to the mediaListeners array
        var addToStack = function(elm) {
            var brkpt = elm.breakpoint;
            var entr = elm.enter || undefined;

            // add function to stack
            mediaListeners.push(elm);

            // add corresponding entry to mediaInit
            mediaInit.push(false);

            if (testForCurr(brkpt)) {
                if (entr !== undefined) {
                    entr.call(null, {entering: curr, exiting: prev});
                }
                mediaInit[(mediaListeners.length - 1)] = true;
            }
        };

        // loops through all registered functions and determines what should be fired
        var cycleThrough = function() {

            var enterArray = [];
            var exitArray = [];

            for (var i = 0; i < mediaListeners.length; i++) {
                var brkpt = mediaListeners[i].breakpoint;
                var entr = mediaListeners[i].enter || undefined;
                var exit = mediaListeners[i].exit || undefined;

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

            var eventObject = {
                entering: curr,
                exiting: prev,
            };

            // loop through exit functions to call
            for (var j = 0; j < exitArray.length; j++) {
                exitArray[j].call(null, eventObject);
            }

            // then loop through enter functions to call
            for (var k = 0; k < enterArray.length; k++) {
                enterArray[k].call(null, eventObject);
            }
        };

        // checks for the correct breakpoint against the mediaBreakpoints list
        var returnBreakpoint = function(width) {

            var foundBrkpt = false;

            // look for existing breakpoint based on width
            for (var i = 0; i < mediaBreakpoints.length; i++) {

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

        // takes the breakpoint/s arguement from an object and tests it against the current state
        var testForCurr = function(elm) {

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
        };

        // self-calling function that checks the browser width and delegates if it detects a change
        var checkResize = function() {

            // get current width
            var w = winWidth();

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
            addFunc: function(elm) {
                addFunction(elm);
            },
            getBreakpoint: function() {
                return curr;
            },
        };

    };

}(this, this.document))); // jshint ignore:line


$(document).ready(function() {
    var $header = $('header.site-header'),
        $headerSlideMenus = $header.find('li.slide-menu'),
        $gatewayNav = $header.find('.gateway-navigation'),
        $mainNav = $header.find('.main-navigation'),
        $body = $('body'),
        $window = $(window),
        mainNavOffset = $mainNav.offset();

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
                var $$ = $(this),
                    $menu = $($$.data('target')),
                    bodyClass = $menu.hasClass('offcanvas-left') ? 'active-left' :
                        $menu.hasClass('offcanvas-right') ? 'active-right' : false;
                if (!bodyClass) {
                    return;
                }
                $body.toggleClass(bodyClass);
            });
        },
        uninitMobileMenus = function() {
            $('[data-toggle="offcanvas"]').off('.mobile').off('.mobileclose');
            $('body').removeClass('active-left').removeClass('active-right');
            $('#js-mobile-content-wrapper>:first-child').unwrap();
        };

    // Add slidedown/slideup animations to header dropdowns using Bootstrap's events:
    $('#scu-main-navigation+nav .scu-nav').hover(function() {
        $body.toggleClass('nav-dropdown-open');
    });

    // Slide menus for tablet/desktop drawers in gateway navigation
    var toggleSlideMenus = function(e) {
            e.preventDefault();
            var $$ = $(this).parents('li.slide-menu'),
                $panel = $$.find('div.slide-panel'),
                panelH = $panel.outerHeight(),
                $animated = $mainNav.hasClass('affix') ? $gatewayNav.add($mainNav) : $gatewayNav;
            if ($$.hasClass('open')) { // We're closing it here
                $panel.find('.row').fadeOut(function() {
                    $panel.hide().find('.row').show();
                });
                // $('body').stop().animate({"paddingTop": 0},function(){$$.removeClass('open');});
                $animated.stop().animate({top: '-=' + panelH}, {
                    complete: function() {
                        $$.removeClass('open');
                        initMainNavAffix();
                        if (!$mainNav.hasClass('affix')) {
                            $mainNav.css('top', '');
                        }
                    },
                    step: function(now) {
                        /*
                         If ($this is $mainNav) and (now - $(window).scrollTop() <=
                         $mainNav's default position ) then
                         */
                        var $this = $(this);
                        if ($this.hasClass('affix') && $this.hasClass('main-navigation') &&
                            (now + $(window).scrollTop() <= mainNavOffset.top)) {
                            $this.removeClass('affix').addClass('affix-top');
                        }
                    },
                });
            } else { // Opening or switching here
                var $otherPanel = $headerSlideMenus.not($$).filter('.open').removeClass('open')
                    .find('div.slide-panel');
                if ($otherPanel.length) {
                    panelH -= $otherPanel.outerHeight();
                }
                $animated.stop().animate({top: '+=' + panelH}, {
                    complete: function() {
                        initMainNavAffix();
                        if (!$mainNav.hasClass('affix')) {
                            $mainNav.css('top', $gatewayNav.outerHeight() +
                                $gatewayNav.offset().top - $(document).scrollTop() - 1 + 'px');
                        }
                    },
                    step: function(now) {
                        var $this = $(this);
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
        },
        initToggleSlideMenus = function() {
            $headerSlideMenus.on('click.tabletUp', 'a[role="button"]', toggleSlideMenus);
        },
        uninitToggleSlideMenus = function() {
            $headerSlideMenus.off('.tabletUp');
        };

    var initMainNavAffix = function() {
        var gOffset, newTop;

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

    var adjustHeaderPositions = function() {
        initMainNavAffix();
        if ($headerSlideMenus.filter('.open').length) {
            $headerSlideMenus.filter('.open').each(function() {
                var $$ = $(this),
                    panelHeight = $$.find('div.slide-panel').outerHeight();
                $$.parents('.gateway-navigation').css('top', panelHeight + 'px');
                if ($mainNav.hasClass('affix')) {
                    $mainNav.css('top', panelHeight - 1 + $gatewayNav.outerHeight() + 'px');
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
                // mainnavOffset = $mainNav.offset();
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
        var $boxWrap = $('.can-we-boxes'),
            $boxes = $boxWrap.find('.can-we-box'),
            margin = 30,
            boxWidth, position;

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
            $boxWrap.animate({left: $boxWrap.position().left - boxWidth - margin}, 300);
            position++;
        }

        function swipeRight() {
            if (position === 1) {
                return;
            }
            $boxWrap.animate({left: $boxWrap.position().left + boxWidth + margin}, 300);
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
                $boxes.off('swipeleft').off('swiperight');
                $boxes.css('width', 'auto');
                $boxWrap.css('left', 'auto');
            },
        });
    }

    initHomepageCanWeSwipe();
});


/**
 * Everything from here to the end is extra functionality for the Bootstrap "landing page" themes
 */

/*
 image-grid.js
 */
+function($) {
    // ENTER CLASS DEFINITION
    // ======================

    // var dataApi = '[data-grid="images"]';

    var ImageGrid = function(element, options) {
        this.cleanWhitespace(element);

        this.row = 0;
        this.rownum = 1;
        this.elements = [];
        this.element = element;
        this.albumWidth = $(element).width();
        this.images = $(element).children();
        this.options = $.extend({}, ImageGrid.DEFAULTS, options);

        $(window).on('resize', $.proxy(this.handleResize, this));

        this.processImages();
    };

    ImageGrid.VERSION = '3.3.1';

    ImageGrid.TRANSITION_DURATION = 350;

    ImageGrid.DEFAULTS = {
        padding: 10,
        targetHeight: 300,
        display: 'inline-block',
    };

    ImageGrid.prototype.handleResize = function() {
        this.row = 0;
        this.rownum = 1;
        this.elements = [];
        this.albumWidth = $(this.element).width();
        this.images = $(this.element).children();
        this.processImages();
    };

    ImageGrid.prototype.processImages = function() {
        var that = this;
        this.images.each(function(index) {
            var $this = $(this);
            var $img = $this.is('img') ? $this : $this.find('img');

            var w = typeof $img.data('width') !== 'undefined' ?
                $img.data('width') : $img.width();

            var h = typeof $img.data('height') !== 'undefined' ?
                $img.data('height') : $img.height();

            $img.data('width', w);
            $img.data('height', h);

            var idealW = Math.ceil(w / h * that.options.targetHeight);
            var idealH = Math.ceil(that.options.targetHeight);

            that.elements.push([this, idealW, idealH]);

            that.row += idealW + that.options.padding;

            if (that.row > that.albumWidth && that.elements.length) {
                that.resizeRow(that.row - that.options.padding);

                that.row = 0;
                that.elements = [];
                that.rownum += 1;
            }

            if (that.images.length - 1 === index && that.elements.length) {
                that.resizeRow(that.row);

                that.row = 0;
                that.elements = [];
                that.rownum += 1;
            }
        });
    };

    ImageGrid.prototype.resizeRow = function(row) {
        // var that = this;
        var imageExtras = (this.options.padding * (this.elements.length - 1));
        var albumWidthAdjusted = this.albumWidth - imageExtras;
        var overPercent = albumWidthAdjusted / (row - imageExtras);
        var trackWidth = imageExtras;
        // var lastRow = row < this.albumWidth;

        for (var i = 0; i < this.elements.length; i++) {
            var $obj = $(this.elements[i][0]);
            var fw = Math.floor(this.elements[i][1] * overPercent);
            var fh = Math.floor(this.elements[i][2] * overPercent);
            var isNotLast = i < (this.elements.length - 1);

            trackWidth += fw;

            if (!isNotLast && trackWidth < this.albumWidth) {
                fw += (this.albumWidth - trackWidth);
            }

            fw--;

            var $img = $obj.is('img') ? $obj : $obj.find('img');

            $img.width(fw);
            $img.height(fh);

            this.applyModifications($obj, isNotLast);
        }
    };

    ImageGrid.prototype.applyModifications = function($obj, isNotLast) {
        var css = {
            'margin-bottom': this.options.padding + 'px',
            'margin-right': (isNotLast) ? this.options.padding + 'px' : 0,
            display: this.options.display,
            'vertical-align': 'bottom',
            // 'overflow'       : 'hidden'
        };
        $obj.css(css);
    };

    ImageGrid.prototype.cleanWhitespace = function(element) {
        // var textNodes =
        $(element)
            .contents()
            .filter(function() {
                return (this.nodeType === 3 && !/\S/.test(this.nodeValue));
            })
            .remove();
    };

    // IMAGE GRID PLUGIN DEFINITION
    // ============================

    function Plugin(option) {
        return this.each(function() {
            var $this = $(this);
            var data = $this.data('bs.image-grid');
            var options = $.extend({}, ImageGrid.DEFAULTS, $this.data(),
                typeof option === 'object' && option);

            if (!data) {
                $this.data('bs.image-grid', (data = new ImageGrid(this, options)));
            }

            if (typeof option === 'string') {
                data[option].call($this);
            }
        });
    }

    var old = $.fn.imageGrid;

    $.fn.imageGrid = Plugin;
    $.fn.imageGrid.Constructor = ImageGrid;


    // IMAGE GRID NO CONFLICT
    // ======================

    $.fn.imageGrid.noConflict = function() {
        $.fn.imageGrid = old;
        return this;
    };


    // IMAGE GRID DATA-API
    // ===================

    $(function() {
        $('[data-grid="images"]').imageGrid();
    });


}(jQuery); // jshint ignore:line


/*
 stage.js
 */
+function($) {
    // STAGE CLASS DEFINITION
    // ======================

    var dataApi = '[data-toggle="stage"]';
    var Stage = function(element, options) {
        this.element = element;
        this.options = options;
    };

    Stage.VERSION = '3.3.5';

    Stage.TRANSITION_DURATION = 150;

    Stage.DEFAULTS = {
        easing: 'cubic-bezier(.2,.7,.5,1)',
        duration: 300,
        delay: 0,
        distance: 250,
        hiddenElements: '#sidebar',
    };

    Stage.prototype.isOpen = function() {
        return $(this.element).hasClass('stage-open');
    };

    Stage.prototype.toggle = function() {
        if (this.isOpen()) {
            this.close();
        } else {
            this.open();
        }
    };

    Stage.prototype.open = function() {
        var that = this;

        $(document.body).css('overflow', 'hidden');

        if ('ontouchstart' in document.documentElement) {
            $(document).on('touchmove.bs.stage', function(e) {
                e.preventDefault();
            });
        }

        $(this.options.hiddenElements).removeClass('hidden');

        $(window).one('keydown.bs.stage', $.proxy(function(e) {
            e.which === 27 && this.close();
        }, this));

        $(this.element)
            .on('click.bs.stage', $.proxy(this.close, this))
            .trigger('open.bs.stage')
            .addClass('stage-open');

        if (!$.support.transition) {
            $(that.element)
                .css({
                    left: this.options.distance + 'px',
                    position: 'relative',
                })
                .trigger('opened.bs.stage');
            return;
        }

        $(this.element)
            .css({
                '-webkit-transition': '-webkit-transform ' +
                    this.options.duration + 'ms ' + this.options.easing,
                '-ms-transition': '-ms-transform ' +
                    this.options.duration + 'ms ' + this.options.easing,
                transition: 'transform ' +
                    this.options.duration + 'ms ' + this.options.easing,
            });

        this.element.offsetWidth; // force reflow

        $(this.element)
            .css({
                '-webkit-transform': 'translateX(' + this.options.distance + 'px)',
                '-ms-transform': 'translateX(' + this.options.distance + 'px)',
                transform: 'translateX(' + this.options.distance + 'px)',
            })
            .one('bsTransitionEnd', function() {
                $(that.element).trigger('opened.bs.stage');
            })
            .emulateTransitionEnd(this.options.duration);
    };

    Stage.prototype.close = function() {
        $(window).off('keydown.bs.stage');

        var that = this;

        function complete() {
            $(document.body).css('overflow', 'auto');

            if ('ontouchstart' in document.documentElement) {
                $(document).off('touchmove.bs.stage');
            }

            $(that.options.hiddenElements).addClass('hidden');

            $(that.element)
                .removeClass('stage-open')
                .css({
                    '-webkit-transition': '',
                    '-ms-transition': '',
                    transition: '',
                })
                .css({
                    '-webkit-transform': '',
                    '-ms-transform': '',
                    transform: '',
                })
                .trigger('closed.bs.stage');
        }

        if (!$.support.transition) {

            $(this.element)
                .trigger('close.bs.stage')
                .css({
                    left: '',
                    position: '',
                })
                .off('click.bs.stage');

            return complete();
        }

        $(this.element)
            .trigger('close.bs.stage')
            .off('click.bs.stage')
            .css({
                '-webkit-transform': 'none',
                '-ms-transform': 'none',
                transform: 'none',
            })
            .one('bsTransitionEnd', complete)
            .emulateTransitionEnd(this.options.duration);
    };


    // STAGE PLUGIN DEFINITION
    // =======================

    function Plugin(option) {
        return this.each(function() {
            var $this = $(this);
            var data = $this.data('bs.stage');
            var options = $.extend(
                {},
                Stage.DEFAULTS,
                $this.data(),
                typeof option === 'object' && option
            );

            if (!data) {
                $this.data('bs.stage', (data = new Stage(this, options)));
            }
            if (typeof option === 'string') {
                data[option]();
            }
        });
    }

    var old = $.fn.stage;

    $.fn.stage = Plugin;
    $.fn.stage.Constructor = Stage;


    // STAGE NO CONFLICT
    // =================

    $.fn.stage.noConflict = function() {
        $.fn.stage = old;
        return this;
    };


    // STAGE DATA-API
    // ==============

    $(document).on('click', dataApi, function() {
        var options = $(this).data();
        var $target = $(this.getAttribute('data-target'));

        if (!$target.data('bs.stage')) {
            $target.stage(options);
        }

        $target.stage('toggle');
    });

}(jQuery); // jshint ignore:line


/*
 zoom.js
 */
+function($) {
    /**
     * The zoom service
     */
    function ZoomService() {
        this._activeZoom =
            this._initialScrollPosition =
                this._initialTouchPosition =
                    this._touchMoveListener = null;

        this._$document = $(document);
        this._$window = $(window);
        this._$body = $(document.body);

        this._boundClick = $.proxy(this._clickHandler, this);
    }

    ZoomService.prototype.listen = function() {
        this._$body.on('click', '[data-action="zoom"]', $.proxy(this._zoom, this));
    };

    ZoomService.prototype._zoom = function(e) {
        var target = e.target;

        if (!target || target.tagName !== 'IMG') {
            return;
        }

        if (this._$body.hasClass('zoom-overlay-open')) {
            return;
        }

        if (e.metaKey || e.ctrlKey) {
            return window.open((e.target.getAttribute('data-original') || e.target.src), '_blank');
        }

        if (target.width >= ($(window).width() - Zoom.OFFSET)) {
            return;
        }

        this._activeZoomClose(true);

        this._activeZoom = new Zoom(target);
        this._activeZoom.zoomImage();

        // todo(fat): probably worth throttling this
        this._$window.on('scroll.zoom', $.proxy(this._scrollHandler, this));

        this._$document.on('keyup.zoom', $.proxy(this._keyHandler, this));
        this._$document.on('touchstart.zoom', $.proxy(this._touchStart, this));

        // we use a capturing phase here to prevent unintended js events
        // sadly no useCapture in jquery api (http://bugs.jquery.com/ticket/14953)
        if (document.addEventListener) {
            document.addEventListener('click', this._boundClick, true);
        } else {
            document.attachEvent('onclick', this._boundClick, true);
        }

        if ('bubbles' in e) {
            if (e.bubbles) {
                e.stopPropagation();
            }
        } else {
            // Internet Explorer before version 9
            e.cancelBubble = true;
        }
    };

    ZoomService.prototype._activeZoomClose = function(forceDispose) {
        if (!this._activeZoom) {
            return;
        }

        if (forceDispose) {
            this._activeZoom.dispose();
        } else {
            this._activeZoom.close();
        }

        this._$window.off('.zoom');
        this._$document.off('.zoom');

        document.removeEventListener('click', this._boundClick, true);

        this._activeZoom = null;
    };

    ZoomService.prototype._scrollHandler = function() {
        if (this._initialScrollPosition === null) {
            this._initialScrollPosition = $(window).scrollTop();
        }
        var deltaY = this._initialScrollPosition - $(window).scrollTop();
        if (Math.abs(deltaY) >= 40) {
            this._activeZoomClose();
        }
    };

    ZoomService.prototype._keyHandler = function(e) {
        if (e.keyCode === 27) {
            this._activeZoomClose();
        }
    };

    ZoomService.prototype._clickHandler = function(e) {
        if (e.preventDefault) {
            e.preventDefault();
        } else {
            event.returnValue = false;
        }

        if ('bubbles' in e) {
            if (e.bubbles) {
                e.stopPropagation();
            }
        } else {
            // Internet Explorer before version 9
            e.cancelBubble = true;
        }

        this._activeZoomClose();
    };

    ZoomService.prototype._touchStart = function(e) {
        this._initialTouchPosition = e.touches[0].pageY;
        $(e.target).on('touchmove.zoom', $.proxy(this._touchMove, this));
    };

    ZoomService.prototype._touchMove = function(e) {
        if (Math.abs(e.touches[0].pageY - this._initialTouchPosition) > 10) {
            this._activeZoomClose();
            $(e.target).off('touchmove.zoom');
        }
    };


    /**
     * The zoom object
     */
    function Zoom(img) {
        this._fullHeight =
            this._fullWidth =
                this._overlay =
                    this._targetImageWrap = null;

        this._targetImage = img;

        this._$body = $(document.body);
    }

    Zoom.OFFSET = 80;
    Zoom._MAX_WIDTH = 2560;
    Zoom._MAX_HEIGHT = 4096;

    Zoom.prototype.zoomImage = function() {
        var img = document.createElement('img');
        img.onload = $.proxy(function() {
            this._fullHeight = Number(img.height);
            this._fullWidth = Number(img.width);
            this._zoomOriginal();
        }, this);
        img.src = this._targetImage.src;
    };

    Zoom.prototype._zoomOriginal = function() {
        this._targetImageWrap = document.createElement('div');
        this._targetImageWrap.className = 'zoom-img-wrap';

        this._targetImage.parentNode.insertBefore(this._targetImageWrap, this._targetImage);
        this._targetImageWrap.appendChild(this._targetImage);

        $(this._targetImage)
            .addClass('zoom-img')
            .attr('data-action', 'zoom-out');

        this._overlay = document.createElement('div');
        this._overlay.className = 'zoom-overlay';

        document.body.appendChild(this._overlay);

        this._calculateZoom();
        this._triggerAnimation();
    };

    Zoom.prototype._calculateZoom = function() {
        this._targetImage.offsetWidth; // repaint before animating

        var originalFullImageWidth = this._fullWidth;
        var originalFullImageHeight = this._fullHeight;

        // var scrollTop = $(window).scrollTop();

        var maxScaleFactor = originalFullImageWidth / this._targetImage.width;

        var viewportHeight = ($(window).height() - Zoom.OFFSET);
        var viewportWidth = ($(window).width() - Zoom.OFFSET);

        var imageAspectRatio = originalFullImageWidth / originalFullImageHeight;
        var viewportAspectRatio = viewportWidth / viewportHeight;

        if (originalFullImageWidth < viewportWidth && originalFullImageHeight < viewportHeight) {
            this._imgScaleFactor = maxScaleFactor;
        } else if (imageAspectRatio < viewportAspectRatio) {
            this._imgScaleFactor = (viewportHeight / originalFullImageHeight) * maxScaleFactor;
        } else {
            this._imgScaleFactor = (viewportWidth / originalFullImageWidth) * maxScaleFactor;
        }
    };

    Zoom.prototype._triggerAnimation = function() {
        this._targetImage.offsetWidth; // repaint before animating

        var imageOffset = $(this._targetImage).offset();
        var scrollTop = $(window).scrollTop();

        var viewportY = scrollTop + ($(window).height() / 2);
        var viewportX = ($(window).width() / 2);

        var imageCenterY = imageOffset.top + (this._targetImage.height / 2);
        var imageCenterX = imageOffset.left + (this._targetImage.width / 2);

        this._translateY = viewportY - imageCenterY;
        this._translateX = viewportX - imageCenterX;

        var targetTransform = 'scale(' + this._imgScaleFactor + ')';
        var imageWrapTransform = 'translate(' + this._translateX + 'px, ' +
            this._translateY + 'px)';

        if ($.support.transition) {
            imageWrapTransform += ' translateZ(0)';
        }

        $(this._targetImage)
            .css({
                '-webkit-transform': targetTransform,
                '-ms-transform': targetTransform,
                transform: targetTransform,
            });

        $(this._targetImageWrap)
            .css({
                '-webkit-transform': imageWrapTransform,
                '-ms-transform': imageWrapTransform,
                transform: imageWrapTransform,
            });

        this._$body.addClass('zoom-overlay-open');
    };

    Zoom.prototype.close = function() {
        this._$body
            .removeClass('zoom-overlay-open')
            .addClass('zoom-overlay-transitioning');

        // we use setStyle here so that the correct vender prefix for transform is used
        $(this._targetImage)
            .css({
                '-webkit-transform': '',
                '-ms-transform': '',
                transform: '',
            });

        $(this._targetImageWrap)
            .css({
                '-webkit-transform': '',
                '-ms-transform': '',
                transform: '',
            });

        if (!$.support.transition) {
            return this.dispose();
        }

        $(this._targetImage)
            .one($.support.transition.end, $.proxy(this.dispose, this))
            .emulateTransitionEnd(300);
    };

    Zoom.prototype.dispose = function() {
        if (this._targetImageWrap && this._targetImageWrap.parentNode) {
            $(this._targetImage)
                .removeClass('zoom-img')
                .attr('data-action', 'zoom');

            this._targetImageWrap.parentNode.replaceChild(this._targetImage, this._targetImageWrap);
            this._overlay.parentNode.removeChild(this._overlay);

            this._$body.removeClass('zoom-overlay-transitioning');
        }
    };

    // wait for dom ready (incase script included before body)
    $(function() {
        new ZoomService().listen();
    });

}(jQuery); // jshint ignore:line


/*
 enter.js
 */
+function($) {
    // ENTER CLASS DEFINITION
    // ======================

    var dataApi = '[data-transition="entrance"]';
    var Enter = function(element, options) {
        if (!$.support.transition) {
            return;
        }

        this.element = element;
        this.options = options;
        this.handler = null;

        this.addEventListeners();
    };

    Enter.VERSION = '3.3.5';

    Enter.DEFAULTS = {
        easing: 'cubic-bezier(.2,.7,.5,1)',
        duration: 1200,
        delay: 0,
    };

    Enter.prototype.addEventListeners = function() {
        var boundScrollHandler = $.proxy(this.checkForEnter, this);

        // this.listener =
        $(window).on('scroll.enter', (this.handler = function() {
            window.requestAnimationFrame(boundScrollHandler);
        }));

        this.checkForEnter();
    };

    Enter.prototype.removeEventListeners = function() {
        $(window).off('scroll.enter', this.handler);
    };

    Enter.prototype.checkForEnter = function() {
        var windowHeight = window.innerHeight;
        var rect = this.element.getBoundingClientRect();

        if ((windowHeight - rect.top) >= 0) {
            setTimeout($.proxy(this.triggerEntrance, this), this.options.delay);
        }
    };

    Enter.prototype.triggerEntrance = function() {
        this.removeEventListeners();

        $(this.element)
            .css({
                '-webkit-transition': '-webkit-transform ' +
                    this.options.duration + 'ms ' + this.options.easing,
                '-ms-transition': '-ms-transform ' + this.options.duration + 'ms ' +
                    this.options.easing,
                transition: 'transform ' + this.options.duration + 'ms ' +
                    this.options.easing,
            })
            .css({
                '-webkit-transform': 'none',
                '-ms-transform': 'none',
                transform: 'none',
            })
            .trigger('enter.bs.enter');
    };


    // ENTER PLUGIN DEFINITION
    // =======================

    function Plugin(option) {
        return this.each(function() {
            var $this = $(this);
            var data = $this.data('bs.enter');
            var options = $.extend(
                {},
                Enter.DEFAULTS,
                $this.data(),
                typeof option === 'object' && option
            );

            if (!data) {
                $this.data('bs.enter', (data = new Enter(this, options)));
            }
            if (typeof option === 'string') {
                data[option]();
            }
        });
    }

    var old = $.fn.enter;

    $.fn.enter = Plugin;
    $.fn.enter.Constructor = Enter;


    // ENTER NO CONFLICT
    // =================

    $.fn.enter.noConflict = function() {
        $.fn.enter = old;
        return this;
    };


    // ENTER DATA-API
    // ==============

    $(function() {
        $(dataApi).enter();
    });

}(jQuery); // jshint ignore:line
