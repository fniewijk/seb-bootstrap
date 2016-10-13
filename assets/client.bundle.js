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

	$(document).ready(function(){

	  menuFunction();

	  document.getElementById("weatherSearch").addEventListener("search", myFunction);

	  function myFunction() {
	    var x = document.getElementById("weatherSearch");
	    document.getElementById("demo").innerHTML = "You are searching for weather in: " + x.value;
	  }

	});


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = function(){
	  
	  $(".col").mouseover(function(){
	    $(this).css('background-color', '#598ad9');
	    $(this).css('border-radius', '3px');
	  });

	  $(".col").mouseout(function(){
	    $(this).css('background-color', '#7fa5e2');
	    $(this).css('border-radius', '8px');
	  });

	  $("h1").mouseover(function(){
	    $(this).css('background-color', '#598ad9');
	    $(this).css('border-radius', '3px');
	  });

	  $("h1").mouseout(function(){
	    $(this).css('background-color', '#7fa5e2');
	    $(this).css('border-radius', '8px');
	  });

	  $("button").click(function(){
	    $.get(window.location.href, function(data, status){
	        alert(window.location.href.toString());
	    });
	  });

	}


/***/ }
/******/ ]);