;(function(global){
    'use strict';

     // slider navigation button
     var previous = doucment.getElementById("previous");
     var next = doucment.getElementById("next");
     
     // click event listeners functions 
     next.addEventListener('click' , (evt)=>{
      evt.preventDefault();
      nextDiv();
     } , flase);


     next.addEventListener('click' , (evt)=>{
       evt.preventDefault();
     } , flase);

     
     function nextDiv(){
     }

     function previousDiv(){
     }
    
})(window);