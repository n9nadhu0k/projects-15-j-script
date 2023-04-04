const counter  = document.querySelector(".counter");
// console.log(counter);
const buttons = document.querySelectorAll(".btn");
// console.log(buttons);

let count = 0;
// console.log(count);

buttons.forEach(function(btn){
  btn.addEventListener("click",function(e){
     const styles =  e.currentTarget.classList;
     console.log(styles);
     if(styles.contains("increase")){
      count++;
     } else if(styles.contains("decrease")){
      count--;
     } else{
      count = 0
     }
     counter.textContent = count;
     if(count >0){
      counter.style.color = "red"
     }
     if(count< 0){
      counter.style.color = "blue";
     }
     if(count === 0){
      counter.style.color = "grey"
     }
  })
})