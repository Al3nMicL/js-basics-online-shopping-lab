var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

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
 
 let found = cart.find(product => product.itemName == item);
 if (found) {
 	// use filter! see -> https://stackoverflow.com/a/10024926
  cart = cart.filter(product => product.itemName != item);
 	return cart;

 } else {

 	return "That item is not in your cart.";

 }

}

function placeOrder(cardNumber) {
 
 let card = cardNumber;
 let regex1 = /^\d*$/; // regex for 1 or more numbers
 let notifyInvalid = "Sorry, we don't have a credit card on file for you.";
 // test to see if there are numbers provided in card
 if (regex1.test(card)) { 
 	// add up the total of the cart
	let cartTotal = cart.reduce((sum, product) => sum + product.itemPrice, 0);
	// empty the cart
	while (cart.length > 0) { cart.pop(); }
	// provide transaction summary
	return `Your total cost is $${cartTotal}, which will be charged to the card ${card}.`	

 } else {
 	// notify invalid form of payment
 	return notifyInvalid;
 }

}
