// ********************************** This and Arrow Functions *****************************

// Creating an object 'user'
const user = {
  // Properties of the 'user' object
  username: "Rajiv",
  price: 999,

  // Method 'welcomeMessage' within the 'user' object
  welcomeMessage: function () {
    // Using 'this' keyword to refer to the current object ('user')
    console.log(`${this.username}, welcome to our website!`); // Output: Rajiv, welcome to our website!
    // Logging 'this' to show the current context, which is the 'user' object
    console.log(this);
  },
};

// Calling the 'welcomeMessage' method of the 'user' object
user.welcomeMessage();
// Output:
// Rajiv, welcome to our website!
// { username: 'Rajiv', price: 999, welcomeMessage: [Function: welcomeMessage] }

// Modifying the 'username' property of the 'user' object
user.username = "Kishan";

// Calling the 'welcomeMessage' method of the 'user' object again
user.welcomeMessage();
// Output:
// Kishan, welcome to our website!
// { username: 'Kishan', price: 999, welcomeMessage: [Function: welcomeMessage] }

// -------------------------------------------------------------------------------------------------------------

function chai () {
    let username = "Rajiv"
    console.log(this.username); // undefined
}
chai()

/*
   => chai() is a regular function and not a method of an object, 
    the value of this inside the function refers to the global object (window in the browser, global in Node.js).
   => However, in strict mode, this would be undefined in this case.
   => Since there is no username property defined on the global object, this.username evaluates to undefined.
   => Therefore, the output of console.log(this.username) is undefined.
    
*/

// ********************************************* Arrow Function **************************************************

const arrow = () => {
    // Declaring a variable 'username' within the scope of the arrow function
    let username = "Rajiv";
    // Logging 'this.username'
    console.log(this.username); // Output: undefined
}
// Calling the arrow function 'arrow'
arrow();

/*
Arrow functions do not have their own this context. 
Instead, they inherit the this value from the surrounding code (lexical scope).
*/

// --------------------------------------------------------------------------------------------------------

const addTwoNum = (num1, num2) => {
   return num1 + num2
}
console.log(addTwoNum(3,97)); // Basic arrow function


const addTwo = (num1, num2) => num1 + num2
console.log(addTwo(3,97)); // implicit return arrow function

/*
   => The first function addTwoNum uses a block body {} and explicitly returns the result using the return keyword.
   => The second function addTwo uses an implicit return. Since there is only one expression (num1 + num2), 
      it gets returned automatically without using the return keyword.
   => If we use {} then return keyword is compulsory to use but if we use () the return keyword is not compulsory.
*/

const add = (n1 , n2) => ({username: "Rajiv"}) // If we use object then we have to wrap that object in paranthesis.
console.log(add()); 
