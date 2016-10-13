var menuFunction = require('./menu/menu.js');

$(document).ready(function(){

  menuFunction();

  document.getElementById("weatherSearch").addEventListener("search", myFunction);

  function myFunction() {
    var x = document.getElementById("weatherSearch");
    document.getElementById("demo").innerHTML = "You are searching for weather in: " + x.value;
  }

});
