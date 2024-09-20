export const cart =JSON.parse(localStorage.getItem('cart')) ||[];
console.log(cart)
export function saveToStorage(){
    localStorage.setItem('cart',JSON.stringify(cart))
}
export function addToCart(productId){
    let matchingItem;
    cart.forEach(product =>{
        if(productId === product.productId){
            matchingItem = product;
        }
    })
    if(matchingItem){
        matchingItem.quantity +=1
        console.log(`item incremented - ${matchingItem.productId}`);
    }else{
        cart.push({
            productId,
            quantity : 1
        })
        console.log('item added');
    }
    saveToStorage()
}

function deleteItem(){
    
}