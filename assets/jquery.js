$(document).ready(function(){

  $(".col").mouseover(function(){
    $(this).css('background-color', '#598ad9');
    $(this).css('border-radius', '5px');
  });

  $(".col").mouseout(function(){
    $(this).css('background-color', '#7fa5e2');
    $(this).css('border-radius', '40px');
  });

  $("h1").mouseover(function(){
    $(this).css('background-color', '#598ad9');
    $(this).css('border-radius', '5px');
  });

  $("h1").mouseout(function(){
    $(this).css('background-color', '#7fa5e2');
    $(this).css('border-radius', '40px');
  });

  $("button").click(function(){
    $.get(window.location.href, function(data, status){
        alert(window.location.href.toString());
    });
  });

});
