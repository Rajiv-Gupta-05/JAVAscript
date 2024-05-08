// Get the property descriptor of Math.PI
const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');
console.log(descriptor); // Log the descriptor of Math.PI

// Define an object named chai
const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    // Method to order chai
    orderChai: function(){
        console.log("Chai nahi bani!");
    }
}

// Get the property descriptor of the 'name' property of chai
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// Redefine the 'name' property of chai with certain attributes
Object.defineProperty(chai, 'name', {
    writable: false,   // Make the 'name' property non-writable
    enumerable: false  // Make the 'name' property non-enumerable
})

// Log the property descriptor of the 'name' property of chai after redefinition
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// Loop through all properties of chai
for (let [key, value] of Object.entries(chai)) {
    // Check if the value is not a function
    if(typeof value !== 'function'){
        // Log key-value pairs if the value is not a function
        console.log(`${key}: ${value}`);
    }
}

/*
 This script demonstrates the use of Object.getOwnPropertyDescriptor() and Object.defineProperty() 
 to examine and modify property descriptors of objects. 
 It also shows how to loop through the properties of an object and log them, filtering out functions.
*/

