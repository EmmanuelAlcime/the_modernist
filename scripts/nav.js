;(function(){
    
$(document).ready(function(){
  $(window).scroll(function(){
   var scroll = $(window).scrollTop(); 
   if( scroll > 0 ){
      $(".header").addClass("fixed");
     
   }else{
      $(".header").removeClass("fixed");
    }
  });
console.log(scroll);
  });
})();