// ************************************ Truthy and Fasly ******************************************

// Falsy values
let falsyValue1 = false;        // false || BigInt || 0n
let falsyValue2 = 0;            // 0 , -0
let falsyValue3 = "";           // Empty string
let falsyValue4 = null;         // null
let falsyValue5 = undefined;    // undefined
let falsyValue6 = NaN;          // NaN (Not a Number)

// Check if the falsy values are falsy
console.log("Falsy values:");
console.log(!!falsyValue1);     // Output: false
console.log(!!falsyValue2);     // Output: false
console.log(!!falsyValue3);     // Output: false
console.log(!!falsyValue4);     // Output: false
console.log(!!falsyValue5);     // Output: false
console.log(!!falsyValue6);     // Output: false

// Truthy values
let truthyValue1 = true;        // true
let truthyValue2 = 10;          // Non-zero number
let truthyValue3 = "false";     // Non-empty string
let truthyValue4 = {};          // Object
let truthyValue5 = [];          // Array
let truthyValue6 = "0"          // String value
let truthyValue7 = function(){} // empty function

// Check if the truthy values are truthy
console.log("\nTruthy values:");
console.log(!!truthyValue1);    // Output: true
console.log(!!truthyValue2);    // Output: true
console.log(!!truthyValue3);    // Output: true
console.log(!!truthyValue4);    // Output: true
console.log(!!truthyValue5);    // Output: true
console.log(!!truthyValue6);    // Output: true
console.log(!!truthyValue7);    // Output: true

/*
  => Falsy values are those that coerce to false when evaluated in a boolean context.
  => Truthy values are those that coerce to true when evaluated in a boolean context.
  => The !! operator is used to explicitly convert a value to its boolean equivalent. 
     The first ! negates the value, and the second ! negates it again, effectively converting it to its boolean value.

  Note: Understanding truthy and falsy values is important in JavaScript, 
        especially when working with conditions and boolean expressions.
*/

// **************************************************************************************************************

// How to check Array is empty?

const userEmail = []

if (userEmail.length === 0) {
    console.log("Array is empty");
}

// How to check object is empty?

const emptyObj = {}

if(Object.keys(emptyObj).length === 0) {
    console.log("Objet is empty");
}

// ************************************************************************************************

// Nullish Coalescing Operator (??): nul, undefined

/*
 The nullish coalescing operator ?? is used to provide a default value when dealing with null or undefined values. 
 It returns the right-hand operand when the left-hand operand is null or undefined; otherwise, 
 it returns the left-hand operand. Here's an explanation with an example:
*/

// Example of nullish coalescing operator

// Define variables with null or undefined values
let foo = null;
let bar = undefined;
let baz = "Hello";

// Using nullish coalescing operator to provide default values
let result1 = foo ?? "Default Value"; // foo is null, so "Default Value" is assigned to result1
let result2 = bar ?? 69; // bar is undefined, so "Default Value" is assigned to result2
let result3 = baz ?? "Rajiv"; // baz is not null or undefined, so its value "Hello" is assigned to result3

// Output the results
console.log(result1); // Output: "Default Value"
console.log(result2); // Output: "Default Value"
console.log(result3); // Output: "Hello"


// *****************************************************************************************************

// Ternary Operator

/*
The ternary operator, also known as the conditional operator, is a concise way to write conditional statements in JavaScript. 
It's often used as a shorthand for simple if...else statements. Here's an explanation with an example and comments:
*/

// condition ? true: false

// Example of ternary operator

// Define a variable
let age = 20;

// Using ternary operator to check if the person is an adult
let message = (age >= 18) ? "You are an adult" : "You are a minor";

// Output the result
console.log(message); // Output: "You are an adult"
