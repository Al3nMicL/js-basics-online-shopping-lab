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

	let makePrice = () => Math.floor(Math.random() * 100); // assigns a random price 
 	// prepare the object format
 	let newObj = new Object;
 	let tempObj = Object.assign(
     	newObj,
      { itemName : item, itemPrice : makePrice() }
     	);
 	cart.push(newObj); // push the hash onto the array
  
 	return `${item} has been added to your cart.`;
}

function viewCart() {

	let cartKeys = Object.keys(cart); // for iterating
	let notifyEmpty = "Your shopping cart is empty." // if the cart is empty
 	let announcement = "In your cart, you have"; // if the cart has item(s)
 	// use map! medium article -> http://bit.ly/2X5kj1T
	let productNames = cart.map(entry => entry.itemName); // stores product names in an array
  let productPrices = cart.map(entry => entry.itemPrice); // stores product prices in an array

 	let sayItems = (announce, names, prices) => {
    let allItems = '';
		// see -> https://stackoverflow.com/a/41311568
    allItems = names.map((x, y) => ` ${x} at $${prices[y]}`);
          
    return `${announce}${allItems}.`;
  }
	// prepare the text output format
  let rawText = sayItems(announcement, productNames, productPrices);
	let message = '';	
	// determine the amount of items in cart then give appropriate message
	if (cartKeys.length > 1) {
		// the cart has more than one item 
	  let lastComma = rawText.lastIndexOf(',') + 1; // find the last comma in the rawText
	  // inject 'and' right after the last comma see -> https://stackoverflow.com/a/4314044
	  message = rawText.slice(0, lastComma) + " and" + rawText.slice(lastComma);
	} else if (cartKeys.length == 1) {
		// the cart has only one item
		message = rawText;
	} else {
		// the cart is empty	
		message = notifyEmpty;
	}

  return message; 

}

function total() {
 // use reduce! watch -> https://youtu.be/Wl98eZpkp-c?t=230
 let cartTotal = cart.reduce((sum, product) => sum + product.itemPrice, 0);
 return cartTotal;

}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
