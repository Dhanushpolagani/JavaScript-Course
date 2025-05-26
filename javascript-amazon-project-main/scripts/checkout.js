import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from './checkout/payementSummary.js';
import { loadProducts } from "../data/products.js";
//import cart from "../data/cart-class.js";
//import '../data/backend-practice.js';
loadProducts(() =>{
renderOrderSummary();
renderPaymentSummary();   
}); 