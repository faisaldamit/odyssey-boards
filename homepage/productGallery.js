const selections = document.getElementsByClassName("col");
const Pbutton = document.getElementById("img_prev");
const Nbutton = document.getElementById("img_next");
const products = Array.from(selections);

let productindex= 0;
let intervalls = null;
document.addEventListener("DOMContentLoaded",displayProducts);
document.addEventListener("DOMContentLoaded", showProducts);
function displayProducts (){
    if (products.length > 0 ){
        products[productindex].classList.add("colDisplay");
        products[productindex+1].classList.add("colDisplay");
        products[productindex+2].classList.add("colDisplay");
    }
    Pbutton.classList.add("hideNbutton");
}
function showProducts(){
   
    if(productindex <0){
     productindex= 0;  
    }
    
    
    else if(productindex > products.length){
       productindex = products.length;
    }  

    for (let product of products){
        product.classList.remove("colDisplay");
        products[productindex].classList.add("colDisplay");
        products[productindex+1].classList.add("colDisplay");
        products[productindex+2].classList.add("colDisplay");
    }
}
    
function prevImage(){
    productindex--;
    showProducts();
}

function nextImage(){
    productindex++;
    showProducts();
}