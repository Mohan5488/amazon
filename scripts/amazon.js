import { products } from "../data/products.js";
import { cart,addToCart } from '../data/cart.js'
let html = '';
products.forEach(product =>{
    html += `
        <div class="product">
            <div class="product-image">
                <img src=${product.image} alt="" class="image">
            </div>
            <div class="product-name">
                ${product.name}
            </div>
            <div class="product-rating-container">
                <div class="product-rating-stars">
                    <img src="images/ratings/rating-${product.rating.stars * 10}.png" alt="" class="product-rating-image">
                </div>
                <div class="product-rating-count">${product.rating.count}</div>
            </div>
            <div class="product-price">$${(product.priceCents / 100).toFixed(2)}</div>
            <div class="product-quantity-container">
                <select class="quantity">
                    <option selected value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
            </div>
            <div class="product-space"></div>
            <button class="add-to-cart-button" data-product-id="${product.id}">Add to Cart</button>
        </div>
    `;
});
document.querySelector('.grid-container').innerHTML = html;

function updateCartQuantity(){
    let total_quantity = 0;
    cart.forEach(item =>{
        total_quantity += item.quantity;
    })
    document.querySelector('.cart-number').innerHTML = total_quantity;
}

document.querySelectorAll('.add-to-cart-button').forEach(button =>{
    button.addEventListener('click',()=>{
        const productId = button.dataset.productId;
        addToCart(productId)
        updateCartQuantity()
    })
});

let cartHtml = '';
cart.forEach(cartItem =>{

    const productId = cartItem.productId;
    let matchingItem,quantity;

    products.forEach(product =>{
        if(product.id === productId){
            matchingItem = product;
            quantity = cartItem.quantity
        }
    })

    
    cartHtml +=`
        <div class="js-cart-item">
            <div class="deliverydate">
                Delivery date: Wednesday, September 25
            </div>
            <div class="cart-item-details-grid">
                <div class="item-image">
                    <img class="product-image" src=${matchingItem.image} alt="">
                </div>
                <div class="cart-item-details">
                    <div class="title">${matchingItem.name}</div>
                    <div class="price">$${(matchingItem.priceCents / 100).toFixed(2)}</div>
                    <div>
                        <span class="sp">Quantity: ${quantity}</span>
                        <span class="sp blue">Update</span>
                        <span class="sp blue">Delete</span>
                    </div>
                </div>
                <div class="delivery-date">
                    <div class="delivery-options-title">
                        Choose a delivery option:
                    </div>
                    <div class="js-option-delivery">
                        <input class="js-radio-option" type="radio" name="delivery1">
                        <div>
                            <div class="delivery-option-date">Tuesday, September 19</div>
                            <div class="delivery-option-price">FREE Shipping</div>
                        </div>
                    </div>
                    <div class="js-option-delivery">
                        <input class="js-radio-option" type="radio" name="delivery1">
                        <div>
                            <div class="delivery-option-date">Thursday, September 21</div>
                            <div class="delivery-option-price">$4.99 - Shipping</div>
                        </div>
                    </div>
                    <div class="js-option-delivery">
                        <input class="js-radio-option" type="radio" name="delivery1">
                        <div>
                            <div class="delivery-option-date">Friday, September 22</div>
                            <div class="delivery-option-price">$9.99 - Shipping</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `

})

document.querySelector('.js-cart-summary').innerHTML = cartHtml