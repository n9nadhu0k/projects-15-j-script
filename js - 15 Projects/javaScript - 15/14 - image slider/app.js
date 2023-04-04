
var slider_image = document.querySelector(".slider_img");

var images = ["a.jpg","c.jpg","d.jpg"];

var i =0;
function prev(){
    if(i <=0) i = images.length;
    i--;
    return setImg();
}
function next(){
    if(i >= images.length -1) i = -1;
    i++;
    return setImg();

}
function setImg(){
    return slider_image.setAttribute("src","images/" + images[i]);
}