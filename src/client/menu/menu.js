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
