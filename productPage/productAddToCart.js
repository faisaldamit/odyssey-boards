const pictureOfProduct = document.getElementById("picture");
const nameOfProduct = document.getElementById("product");
const priceofmyproduct = document.getElementById("priceOfProduct");
// const numberBox = document.getElementById("increment-number");
// let priceOfProduct = document.getElementById("price");
// let numbers ; 
const productSB01 = {picture: pictureOfProduct ,
                    nameOfthisProduct: nameOfProduct,
                    price :priceofmyproduct
                    };
document.addEventListener("DOMContentLoaded",cartMessage());

function cartMessage(){


    document.getElementById("checkout-part").innerHTML= '<p class="empty-cart-message">Your cart is currently empty.</p>';

}


function addToCart(){
    numbers++;
    numberBox=numbers;
    document.getElementById("checkout-part").innerHTML=
    '<div class="col-sm-6"></div>'+
     '<div class="col-sm-3"><p class="chackout-part-of-cart">Quantity</p></div>'+
     '<div class="col-sm-3"><p class="chackout-part-of-cart">Total</p></div>'+
    '<div class="col-sm-6">'+
    '<div class="row">'+
      '<div class="col-sm-6" id="col">'+
        '<img src="product/product 1.jpg" alt="product1">'+
        '</div>'+
        '<div class="col-sm-6" id="col">'+
        '<h3>product1</h3>'+
        '</div>'+
    '</div>'+
    '</div>'+
    '<div class="col-sm-3" >'+
    '<div class="counter-for-products">'+
    '<button class="button1" type="button" id="minus-button" onclick="decrementing()">-</button>'+
    '<p id="increment-number">1</p>'+
    '<button class="button1" type="button" id="plus-button" onclick="incrementing()">+</button>'+
    '</div>'+
    '</div>'+
    '<div class="col-sm-3"id="col">'+
    '<h3 id="price">199.00</h3>'+
    '</div>'+
    '<hr>'+
    '<div class="row">'+
    '<div class="col-8"></div>'+
    '<div class="col-4">'+
    '<p class="chackout-part-of-cart" >Subtotale :</p>'+
    '<p class="Subtotale-value" id="Subtotale-value"></p>'+
    '<button class="btn btn-primary" id="checkout-btn" type="submit">'+
    'Checkout'+
    '</button>'+
    '</div>'+
    '</div>'+
    '<hr>'
    ;
}
// <!-- <div class="row">
//  <div class="col-sm-6"></div>
//     <div class="col-sm-3"><p class="chackout-part-of-cart">Quantity</p></div>
//     <div class="col-sm-3"><p class="chackout-part-of-cart">Total</p></div>
//  </div> -->