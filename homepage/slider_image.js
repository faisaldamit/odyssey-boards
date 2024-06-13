const slides = document.getElementsByClassName("slide");
const images = Array.from(slides);
let slideindex = 0  ;
let intervalid = null ;
document.addEventListener("DOMContentLoaded",startslide);
document.addEventListener("DOMContentLoaded",showslide);
function startslide(){
    if (images.length > 0 ){
    images[slideindex].classList.add("displayslide");
    }
    intervalid = setInterval( NextSlide, 6000);
    
}
function showslide() {
    
    if( slideindex >= images.length ){
        slideindex = 0 ;
    }
    else if(slideindex < 0 ){
        slideindex = images.length - 1 ; 
    }
    for(let image of images){
        image.classList.remove("displayslide");
    }
    images[slideindex].classList.add("displayslide");
    intervalid = setInterval( NextSlide, 6000);
}
function PrevSlide(){
    slideindex-- ;
    showslide(slideindex);
    clearInterval(intervalid);
}


function NextSlide(){
    slideindex++ ;
    showslide(slideindex);
    clearInterval(intervalid);
}