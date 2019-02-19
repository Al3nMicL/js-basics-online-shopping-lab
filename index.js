var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

// Task 1 : addToCart function
function addToCart(item) {
 
 let makePrice = () => Math.floor(Math.random() * 100);

 let newObj = new Object;
 let tempObj = Object.assign(
     	newObj,
      { itemName : item, itemPrice : makePrice() }
     );
 cart.push(newObj);
  
 return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
