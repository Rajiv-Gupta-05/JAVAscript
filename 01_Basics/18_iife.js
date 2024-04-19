// ##################### Immediately Invoked Function Expression (IIFE) #################### 

// Why IIFE is used ?
/* 
 In JavaScript, Immediately Invoked Function Expressions (IIFE) are often used to 
 avoid polluting the global scope and encapsulate code within a private scope. 
 An IIFE is a JavaScript function that is immediately executed after it's created.
*/

(function chai() { // named IIFE because there is name of IIFE function which is chai.
  console.log("DB is connected");
})(); // This is IIFE || semicolon is compulsory

( (name) => { // Simple IIFE because there is no name of IIFE function
    console.log(`DB is Connected TOO! ${name}`);
})("Rajiv"); // semicolon is compulsory in both normal function and arrow function.

// --------------------------------------------------------------------------------

// Global variable declared
var globalVar = "I'm in global scope";

// IIFE to encapsulate code and avoid polluting global scope
(function () {
  // Variables declared inside the IIFE do not pollute the global scope
  var localVar = "I'm inside the IIFE";
  console.log(localVar); // Output: I'm inside the IIFE
})();

// Trying to access localVar outside the IIFE will result in an error
// console.log(localVar); // This will throw an error

// Accessing globalVar outside the IIFE
console.log(globalVar); // Output: I'm in global scope
