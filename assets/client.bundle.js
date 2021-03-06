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
/***/ function(module, exports, __webpack_require__) {

	var menuFunction = __webpack_require__(1);
	var slideshowFunction = __webpack_require__(2)
	__webpack_require__(3);

	$(document).ready(function(){

	  menuFunction();
	  slideshowFunction();

	});


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = function(){

	  $(".menuLink").mouseover(function(){
	    $(this).css('background-color', '#598ad9');
	    $(this).css('border-radius', '3px');
	  });

	  $(".menuLink").mouseout(function(){
	    $(this).css('background-color', '#7fa5e2');
	    $(this).css('border-radius', '8px');
	  });

	}


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = function(){

	var slideIndex = 0;
	carousel();

	function carousel() {
	  var i;
	  var x = document.getElementsByClassName("mySlides");
	  for (i = 0; i < x.length; i++) {
	    x[i].style.display = "none";
	  }
	  slideIndex++;
	  if (slideIndex > x.length) {slideIndex = 1}
	  x[slideIndex-1].style.display = "block";
	  setTimeout(carousel, 2000); // Change image every 2 seconds
	  }
	}


/***/ },
/* 3 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);