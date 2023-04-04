const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
// #123765
const color = document.querySelector("#color");
const btn = document.querySelector("#btn");

btn.addEventListener("click",function(){
    let hexaDecimalColors = "#"
    for(let i = 0; i<6;i++){
        hexaDecimalColors += hex[randomColor()];
    }
    document.body.style.background = hexaDecimalColors;
    color.textContent = hexaDecimalColors
})

function randomColor(){
 return Math.floor(Math.random()*hex.length)
}