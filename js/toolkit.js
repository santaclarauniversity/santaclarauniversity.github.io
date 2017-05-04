/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	var _this = this;

	// TODO Revisit to fix Webpack loading required external JS
	/*require('imports-loader?$=jquery!bootstrap/js/dist/util');
	require('imports-loader?$=jquery!bootstrap/js/dist/collapse');
	require('imports-loader?$=jquery!bootstrap/js/dist/carousel');
	require('imports-loader!holderjs/holder');*/

	/**
	 * Header and footer button functionality
	 */
	$(document).ready(() => {
	  $('.header-toggler').click(() => {
	    $('.core-nav').toggle();
	    $('.compact-nav').toggle();
	  });

	  $('.fa-search').click(e => {
	    e.preventDefault();

	    $('.search-module').toggleClass('search-module--open');
	    $('.search-input__input').focus();
	  });

	  $('.fa-bars').click(e => {
	    e.preventDefault();

	    $('.drawer').toggleClass('open');
	  });

	  $('.close-btn').click(e => {
	    e.preventDefault();

	    $('.drawer').removeClass('open');
	    $('.search-module').removeClass('search-module--open');
	  });

	  $('#footer-toggler').click(() => {
	    $('.footer-core').toggle();
	    $('.footer-subfooter').toggle();
	  });
	});

	/**
	 * Feature Gallery / Jumbotron
	 * Adding swipe events to Bootstrap's Carousel
	 * Requires jquery.event.swipe.js, move and swipe libraries
	 * by Stephen Band http://stephband.info/jquery.event.swipe/
	 */
	// Adding swipe events to Jumbotrons and Feature Galleries:
	$(document).ready(() => {
	  $('.carousel.slide').carousel({
	    interval: false }).carousel('pause').on('swipeleft', () => {
	    $(_this).carousel('next');
	  }).on('swiperight', () => {
	    $(_this).carousel('prev');
	  }).on('movestart', function (e) {
	    if (e.distX > e.distY && e.distX < -e.distY || e.distX < e.distY && e.distX > -e.distY) {
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

	    $image.fadeOut(100, () => {
	      $image.attr('src', imgSrc);
	    }).fadeIn(100);

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

/***/ }
/******/ ]);