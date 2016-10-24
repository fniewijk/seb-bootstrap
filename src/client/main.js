var menuFunction = require('./menu/menu.js');
var slideshowFunction = require('./slideshow/slideshow.js')
require('./main.scss');

$(document).ready(function(){

  menuFunction();
  slideshowFunction();

});
