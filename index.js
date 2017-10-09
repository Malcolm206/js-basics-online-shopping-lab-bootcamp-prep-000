var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var addItem = { [item] : (Math.floor(Math.random()*100) + 1) }
 cart.push(addItem)
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  // write your code here
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.')
  } else {
    var list = `In your cart, you have`
    for(var i =0; i<cart.length; i++) {
      var x = cart[i]
      var y = Object.keys(x)
      var z = Object.values(x)
      var a = parseFloat(z[0])
      list = list + ` ${y[0]} at $${a}`
      if (i === cart.length - 2) {
        list = list + ',and'
      } if(i === cart.length - 1) {
        list = list + `.`
      } else {
        list = list + `,`
      }
    }
    console.log(list)
  }
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
