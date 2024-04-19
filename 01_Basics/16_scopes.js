// ******************************** Scopes ( Global and Block) **********************************

/* 1. Global Scope: Variables declared outside of any function have global scope. 
      They can be accessed from anywhere in the code.
   2. Block Scope: Variables declared within a block of code (typically within curly braces {}) have block scope. 
      This means they are only accessible within the block in which they are defined. */

// Global scope variable
var globalVar = "I'm in global scope";

function exampleFunction() {
  // Block scope variable within function
  var localVar = "I'm in block scope";
  console.log(localVar); // Output: I'm in block scope
  console.log(globalVar); // Output: I'm in global scope
}

// Accessing global scope variable
console.log(globalVar); // Output: I'm in global scope

// Trying to access block scope variable outside its scope will result in an error
// console.log(localVar); // This will throw an error

// Invoking the function to access block scope variable
exampleFunction();

// Nested block scope
function outerFunction() {
  var outerVar = "I'm in outer block scope";
  console.log(outerVar); // Output: I'm in outer block scope

  function innerFunction() {
    var innerVar = "I'm in inner block scope";
    console.log(innerVar); // Output: I'm in inner block scope
    console.log(outerVar); // Output: I'm in outer block scope
    console.log(globalVar); // Output: I'm in global scope
  }

  innerFunction();
}

// Invoking the outer function
outerFunction();

// Trying to access inner block scope variable outside its scope will result in an error
// console.log(innerVar); // This will throw an error

// ---------------------------------------------------------------------------------------------------------

function one() {
  // 'username' is declared in the scope of function 'one'
  const username = "rajiv";

  function two() {
    // 'website' is declared in the scope of function 'two'
    const website = "instagram";
    // 'two' function has access to variables declared in its parent scope ('one' function), so it can access 'username'
    console.log(username);
  }

  // Trying to access 'website' outside its scope, which results in an error
  console.log(website); // ReferenceError: website is not defined

  // Invoking 'two' function which has access to 'username'
  two();
}

// Invoking 'one' function, which initializes its own scope
one();

// ==================================================================================================================

if (true) {
  // 'name' is declared in the scope of the outer block
  const name = "Rajiv";
  if (name === "Rajiv") {
    // 'website' is declared in the scope of the inner block
    const website = " Facebook";
    // 'website' and 'name' are accessible within this block
    console.log(name + website); // Output: Rajiv Facebook
  }
  // Trying to access 'website' outside its scope, which results in an error
  console.log(website); // ReferenceError: website is not defined
}

// Trying to access 'name' outside its scope, which results in an error
console.log(name); // ReferenceError: name is not defined

// ************************************** Interesting ********************************************

console.log(addone(5)); // Output: 6
function addone(num) {
  return num + 1;
}
// The function declaration is hoisted, so it can be called before its declaration

console.log(addTwo()); // TypeError: addTwo is not a function
const addTwo = function (num) {
  return num + 2;
};
// Trying to call 'addTwo' before its declaration results in an error due to variable hoisting
