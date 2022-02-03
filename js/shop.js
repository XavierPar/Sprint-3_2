// If you have time, you can move this variable "products" to a json file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery'
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery'
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
    
    // 1. Loop for to the array products to get the item to add to cart
    for (let i = 0; i < products.length; i++) {
    // 2. Add found product to the cartList array
    //console.log("producto numero", products[i]);
        if (products[i].id === id) {
            console.log("funciona loop 1", "true"); //check that is selected
            cartList.push (products[i]); 
            console.log (cartList);
        } 
    }
}


// Exercise 2
function cleanCart() {
    cartList.length = 0 
    //https://stackoverflow.com/questions/1232040/how-do-i-empty-an-array-in-javascript (I use the method 2 in this link)
    console.log('cleanded')
}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    let sum =0;
    console.log('suma antes de empezar', sum);
    for (let i = 0; i<cartList.length; i++) {
        sum+=cartList[i].price; //we add the new prices to the original sum
        
    }
    console.log('suma depués del loop', sum); // we can check results
}


// Exercise 4
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
    cartList.sort(function (a, b) { //sort items
        if (a.id > b.id) {
          return 1;
        }
        if (a.id < b.id) {
          return -1;
        }
        // a must be equal to b
        return 0;
    });
    cartList.forEach(object => { // now that is sorted add the quantity to all products, 
        object.quantity = 1;    //if I did that inside the for loop it modified both cart and cartList being unable to set products to more than quantity 2
      })
    for(let i = 0; i<cartList.length; i++) { // Looking into the cartList array
            if(cartList[i]==cartList[i-1]){ // looking for duplicates inside the same cartList array
                cart[cart.length-1].quantity ++;
                // console.log(cart); this was used to check and find bugs. Activate if there are problems
        } else{
                cart.push (cartList[i]);
                // console.log(cart); this was used to check and find bugs. Activate if there are problems
            }
        console.log("final cart log: "+cart);  // this is used to check the final result
    } 
    
}
    


// Exercise 5
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    cart.forEach(object => { // creates the promotions value
        object.subtotal = object.price*object.quantity;
    })
    // Vartiables to work the discounts
        var getoil = cart.find(x => x.id === 1);
        var oilQuantity = getoil.quantity; 
        var getcupcake = cart.find(y => y.id === 3);
        var cupcakeQuantity = getcupcake.quantity; 
    //Discounts themselves, first oil...then cupcake mix  
    if (oilQuantity>=3) {
        let oilsubtotal = getoil.subtotal;
        let oilDiscountSubstrate = oilQuantity*0.5; // -0.5 per oil, so the price lowers from 10.5 to 10
        getoil.subtotalWithDiscount= oilsubtotal-(oilDiscountSubstrate); //we make the discount happen
        console.log ("oil quantity: "+oilQuantity +", "+"total oil price with discount: "+getoil.subtotalWithDiscount); // to check results
    } 

    if (cupcakeQuantity>=10) {
        let cupcakesubtotal =  getcupcake.subtotal;
        getcupcake.subtotalWithDiscount= cupcakesubtotal*(2/3); //we make the discount happen
        console.log ("cupcake quantity: "+cupcakeQuantity +", "+"total cupcake price with discount: "+getcupcake.subtotalWithDiscount); // to check results
    } 
        
}


// ** Nivell II **

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

// Exercise 9
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
}
