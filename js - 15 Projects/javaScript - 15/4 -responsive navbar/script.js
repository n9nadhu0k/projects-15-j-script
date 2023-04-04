let nav_links = document.querySelector(".nav_link");
console.log(nav_links);

let linesButton = document.querySelector(".lines");
console.log(linesButton);

linesButton.addEventListener("click",function(){
    nav_links.classList.toggle("display")
    linesButton.children[0].classList.toggle("toggle1")
    linesButton.children[1].classList.toggle("toggle2")
    linesButton.children[2].classList.toggle("toggle3")
})
