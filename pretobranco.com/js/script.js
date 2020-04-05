// ÁREA PARA O JQUERY
$(document).ready(function(){
    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
         $("header").css({'background-color':'rgba(0,0,0,1)','transition':'.4s'});
        } else {
         $("header").css({'background-color':'transparent','transition':'.4s'});
        }
      });
});

// ÁREA PARA JAVASCRIPT