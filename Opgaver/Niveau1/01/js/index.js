const myButton = document.querySelector("#my-button");
// const colorsList = ["#eee", "#7f7"];

// console.log(myButton);

myButton.addEventListener("click", function(){

  // let randomnum = Math.floor(Math.random() * colorsList.length);
  // myButton.style.backgroundColor = colorsList[randomnum];
  
  // myButton.style.backgroundColor = "#7f7";
  
  myButton.classList.toggle("color--change");
})