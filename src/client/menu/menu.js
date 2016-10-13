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

}
