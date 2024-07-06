var product = {
	name: document.getElementById('product').textContent,
	image: document.getElementById('picture').src,
	price: document.getElementById('priceOfProduct').textContent,
};
function addToCart() {
	localStorage.setItem('cartItem', JSON.stringify(product));
	window.location.href = '../Cartpage/cartpage.html';
}
document.addEventListener('DOMContentLoaded', function () {
	console.log(document.getElementById('productImage').src);
});

function displayCart() {
	const cartItems = document.getElementById('checkout-part');
	product = JSON.parse(localStorage.getItem('cartItem'));

	if (product) {
		const item = document.createElement('div');
		item.innerHTML = `
   
    <div class="col-sm-6"></div>
        <div class="col-sm-3"><p class="chackout-part-of-cart">Quantity</p></div>
        <div class="col-sm-3"><p class="chackout-part-of-cart">Total</p></div>
        <div class="col-sm-6">
    <div class="row">
        <div class="col-sm-6" id="col">
        <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="col-sm-6" id="col">
        <h3>${product.name}</h3>
            </div>
        </div>
        </div>
        <div class="col-sm-3" >
        <div class="counter-for-products">
        <button class="button1" type="button" id="minus-button" onclick="decrementing()">-</button>
        <p id="increment-number">1</p>
        <button class="button1" type="button" id="plus-button" onclick="incrementing()">+</button>
        </div>
        </div>
        <div class="col-sm-3"id="col">
        <h3 id="price">${product.price}</h3>
        </div>
        <hr>
        <div class="row">
        <div class="col-8"></div>
        <div class="col-4">
        <p class="chackout-part-of-cart" >Subtotale :</p>
        <p class="Subtotale-value" id="Subtotale-value"></p>
        <button class="btn btn-primary" id="checkout-btn" type="submit">
        Checkout
        </button>
        </div>
        </div>
        <hr>`;
		cartItems.appendChild(item);
	} else {
		cartItems.innerHTML = `<p class="empty-cart-message">Your cart is currently empty.</p>`;
	}
}

//    document.addEventListener("DOMContentLoaded",displayCart());
