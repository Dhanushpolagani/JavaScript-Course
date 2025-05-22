

function Cart(localStorageKey){
 const cart ={
     cartItems: undefined,

    


 loadFromStorage(){
this.cartItems = JSON.parse(localStorage.getItem('localstorageKey'));

if(!this.cartItems){
    this.cartItems = 
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
},


 saveStorage(){
    localStorage.setItem(localStorageKey, JSON.stringify(this.cartItems));
},

addToCart(productId){

        let matchingItem;
        this.cartItems.forEach((cartItem) => {
            if (productId === cartItem.productId) {
                matchingItem = cartItem;
            }
        });

        if(matchingItem){
            matchingItem.quantity += 1;
        } else{
        this.cartItems.push({
            productId: productId,
            quantity: 1,
            deliveryOptionId : '1'
        });
    }
this.saveStorage();
 },
 
 removeFromCart(productId){
    const newcart=[];
    this.cartItems.forEach((cartItem) =>{
        if(cartItem.productId !== productId){
            newcart.push(cartItem);
        }
    });
    this.cartItems = newcart;
    this.saveStorage();
 },
 



 updateDeliveryOption(productId,deliveryOptionId){
      let matchingItem;
        this.cartItems.forEach((cartItem) => {
            if (productId === cartItem.productId) {
                matchingItem = cartItem;
            }
        });

        matchingItem.deliveryOptionId = deliveryOptionId;
        this.saveStorage();
 } 

};
return cart;
}

const cart = Cart('cart-oop');
const businessCart = Cart('cart-business');

cart.loadFromStorage();


export default cart;



businessCart.loadFromStorage();

console.log(cart);
console.log(businessCart);
