import { cart } from "../data/cart.js";
import { products } from "../data/products.js";

let cartHtml;
cart.forEach(cartItem =>{
    let matchingItem, quantity;
    products.forEach(product =>{
        if(cartItem.productId === product.id){
            matchingItem = product;
            quantity = cartItem.quantity
            console.log(product.id)
        }
        
    })
    cartHtml += `
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
                        <span class="sp blue js-delete-link">Delete</span>
                    </div>
                </div>
                <div class="delivery-date">
                    <div class="delivery-options-title">
                        Choose a delivery option:
                    </div>
                    <div class="js-option-delivery">
                        <input class="js-radio-option" type="radio" name="delivery-${matchingItem.id}">
                        <div>
                            <div class="delivery-option-date">Tuesday, September 19</div>
                            <div class="delivery-option-price">FREE Shipping</div>
                        </div>
                    </div>
                    <div class="js-option-delivery">
                        <input class="js-radio-option" type="radio" name="delivery-${matchingItem.id}">
                        <div>
                            <div class="delivery-option-date">Thursday, September 21</div>
                            <div class="delivery-option-price">$4.99 - Shipping</div>
                        </div>
                    </div>
                    <div class="js-option-delivery">
                        <input class="js-radio-option" type="radio" name="delivery-${matchingItem.id}">
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
document.querySelector('.js-cart-summary').innerHTML = cartHtml;

cart.forEach(item =>{
    
})

