const numberBox = document.getElementById("increment-number");
let priceOfProduct = document.getElementById("price");
let numbers = 1; 
let intervalid = null ;
document.getElementById("Subtotale-value").innerHTML= numbers * 199.00;
function decrementing(){
    numbers-- ;
    numberBox.innerHTML= numbers;
    if(numbers<=0){
        document.getElementById("checkout-part").innerHTML= '<p class="empty-cart-message">Your cart is currently empty.</p>';
    }
    document.getElementById("Subtotale-value").innerHTML= numbers * 199.00;
}
function incrementing(){
    numbers++;
    numberBox.innerHTML= numbers;
    document.getElementById("Subtotale-value").innerHTML= numbers * 199.00;
}
