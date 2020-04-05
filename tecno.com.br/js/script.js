$(document).ready(function(){

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
     $("header").css({'background-color':'rgba(0,0,0,1)','transition':'.4s'});
    } else {
     $("header").css({'background-color':'transparent','transition':'.4s'});
    }
  });

  $("#btn-menu").click(function(){
      $(".menu").slideDown(2000);
  });
  $("#btn-closed").click(function(){
    $(".menu").slideUp(2000);
  });

});
