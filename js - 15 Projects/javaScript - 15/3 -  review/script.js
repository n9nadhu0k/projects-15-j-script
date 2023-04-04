const reviews = [
    {
    id: 1,
    name: "sharper nan",
    job: "web devloper",
    img: "./img_ 1.jpg",
    text: "Lorem ipsum dolor consectetur  adipisicing  elit. Quo, illo suscipit! Explicabo eum totam odit?  eum totam odit?  eum totam odit?  eum totam odit? "
    },
    {
    id: 2,
    name: "sharper",
    job: "game devloper",
    img: "./img_2.jpg",
    text: "Lorem ipsum dolor sit amet consectetur  adipisicing  elit. Quo, illo suscipit! Explicabo eum totam odit?  eum totam odit?  eum totam odit?  eum totam odit? "
    },
    {
    id: 3,
    name: "sharp",
    job: "ios devloper",
    img: "./img_3.jpg",
    text: "Lorem ipsum dolor sit  consectetur  adipisicing  elit. Quo, illo suscipit! Explicabo eum totam odit?  eum totam odit?  eum totam odit?  eum totam odit? "
    },
    {
    id: 4,
    name: "john",
    job: "app devloper",
    img: "./img_4.jpg",
    text: "Lorem ipsum dolor sit amet  adipisicing  elit. Quo, illo suscipit! Explicabo eum totam odit?  eum totam odit?  eum totam odit?  eum totam odit? "
    },
]

const img = document.querySelector("img");
console.log(img);

const names = document.querySelector(".names");
console.log(names);

const job = document.querySelector(".job");
console.log(job);

const text = document.querySelector(".text");
console.log(text);

const left = document.querySelector("#left");
console.log(left)

const right = document.querySelector("#right");
console.log(right)

const random = document.querySelector(".random");
console.log(random)
const container = document.querySelector(".review_container")


const colors = ["blue","red","orange","blue","yellow"];

window.addEventListener("DOMContentLoaded",function(){
    showPerson();  // invoked
})

// show person function

 let currentItem = 0;

function showPerson(){
    const items = reviews[currentItem];
    console.log(items);
          img.src = items.img;
          names.textContent =items.name;
          job.textContent =items.job;
          text.textContent = items.text;

}
// show next person when click the right button

right.addEventListener("click",function(){
    currentItem++;
    if(currentItem > reviews.length-1){
        currentItem = 0;
    }
    showPerson();
})
// show next person when click the left button

left.addEventListener("click",function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length-1
    }
    showPerson();
})

// show random person :

random.addEventListener("click",function(){
    showPerson();
   currentItem =  Math.floor(Math.random()* reviews.length)
})
















