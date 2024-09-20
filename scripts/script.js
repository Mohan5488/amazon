import { products } from "../data/products.js";

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

const cart = [];
document.querySelectorAll('.add-to-cart-button').forEach(button =>{
    button.addEventListener('click',()=>{
        const productId = button.dataset.productId;
        let matchingItem;
        cart.forEach(product =>{
            if(productId === product.productId){
                matchingItem = product;
            }
        })
        if(matchingItem){
            matchingItem.quantity +=1
        }else{
            cart.push({
                productId,
                quantity : 1
            })
        } 
    })
});



