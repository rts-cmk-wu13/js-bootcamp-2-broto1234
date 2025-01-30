// const buttonsElm = document.querySelectorAll(".btn");
// // console.log(buttonsElm)

// buttonsElm.forEach(function(btn){
  
//   // console.log(btn)
  
//   btn.addEventListener("click", function(){
    
//     buttonsElm.forEach(function(b){
//       b.classList.remove("active--bgc");
//     })      
//       btn.classList.add("active--bgc");   
//     })  
// })


const buttonsElm = document.querySelectorAll(".btn");
const btnNC = document.querySelector(".btn--noChange");
// console.log(buttonsElm)

buttonsElm.forEach(function(btn){
  
  // console.log(btn)
  
  btn.addEventListener("click", function(){
    
    buttonsElm.forEach(function(b){
      b.classList.remove("active--bgc");
    })
    
    if(btnNC == btn) {
      btn.classList.romove("active--bgc");  } 

      btn.classList.add("active--bgc");
    })     
    // let btnNC = btnNochange.lastElementChild;
    // console.log(btnNC)
})
