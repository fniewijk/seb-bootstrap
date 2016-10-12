$(document).ready(function(){

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

  document.getElementById("weatherSearch").addEventListener("search", myFunction);

  function myFunction() {
    var x = document.getElementById("weatherSearch");
    document.getElementById("demo").innerHTML = "You are searching for weather in: " + x.value;
  }

});
