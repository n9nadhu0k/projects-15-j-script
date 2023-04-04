let click = document.querySelector(".click");
console.log(click);
let span = document.querySelector("span");
console.log(click);
let inner = document.querySelector(".inner");
console.log(inner);

click.addEventListener("click",function(){
    inner.style.display = "block";
})
span.addEventListener("click",function(){
    inner.style.display = "none";
})