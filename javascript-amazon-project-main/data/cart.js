export let cart;

loadFromStorage();

export function loadFromStorage(){
cart = JSON.parse(localStorage.getItem('cart'));

if(!cart){
    cart = 
[{
    productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 2,
    deliveryOptionsId: '1'
   // image:'images/products/athletic-cotton-socks-6-pairs.jpg'
},{
    productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity: 1,
    deliveryOptionsId:'2'
   // image:'images/products/intermediate-composite-basketball.jpg'
}];
 
}
}

function saveStorage(){
    localStorage.setItem('cart', JSON.stringify(cart));
}


 export function addToCart(productId){

        let matchingItem;
        cart.forEach((cartItem) => {
            if (productId === cartItem.productId) {
                matchingItem = cartItem;
            }
        });

        if(matchingItem){
            matchingItem.quantity += 1;
        } else{
        cart.push({
            productId: productId,
            quantity: 1,
            deliveryOptionId : '1'
        });
    }
saveStorage();
 }
 export function removeFromCart(productId){
    const newcart=[];
    cart.forEach((cartItem) =>{
        if(cartItem.productId !== productId){
            newcart.push(cartItem);
        }
    });
    cart = newcart;
    saveStorage();
 }
 export function updateDeliveryOption(productId,deliveryOptionId){
      let matchingItem;
        cart.forEach((cartItem) => {
            if (productId === cartItem.productId) {
                matchingItem = cartItem;
            }
        });

        matchingItem.deliveryOptionId = deliveryOptionId;
        saveStorage();

 }

 export function loadCart(fun = () =>{}){
   const xhr = new XMLHttpRequest();
 
 xhr.addEventListener( 'load',() =>{
 console.log(xhr.response);
 fun();
 });
 
   xhr.open('GET','https://supersimplebackend.dev/Cart');
   xhr.send();
 }