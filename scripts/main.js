;(function(){
    'use strict';

     // slider navigation button
     var previous = document.getElementById("previous");
     var next = document.getElementById("next");
     var sliderDivs = document.getElementsByClassName("hero--slider__sliderShow");
     var index_val = 0; 

     setInterval(nextDiv,3000);

     // click event listeners functions 
     next.addEventListener('click' , (evt)=>{
      evt.preventDefault();
      nextDiv();
     } , false);


     previous.addEventListener('click' , (evt)=>{
       evt.preventDefault();
       previousDiv();
     } , false);

     
     function nextDiv(){
       console.log(index_val);
       if( index_val <  sliderDivs.length){
           index_val++;
        
           sliderDivs['mainCaption'].innerHTML = sliderDivs[index_val].innerHTML;
           console.log(sliderDivs['mainCaption']);   
            console.log(index_val);   
        }
        else if(index_val > 1){
          index_val = 0;
          sliderDivs['mainCaption'].innerHTML = sliderDivs[0].innerHTML;
          console.log("index_val is greater");
        }
      }


     function previousDiv(){
       index_val--;
       console.log(index_val);
       if (index_val >= 0){
         sliderDivs['mainCaption'].innerHTML = sliderDivs[index_val].innerHTML;
         console.log(sliderDivs['mainCaption']);      
       }
       else{
      
        index_val= sliderDivs.length - 1;
        sliderDivs['mainCaption'].innerHTML = sliderDivs[index_val].innerHTML;
       } 
     }
    
})(window);