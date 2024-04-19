// How data is stored in memory and access that data ?

// 1. Primitive (Call by value):- 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreVlaue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId); // false because Symbol is unique datatypes.

// 2. Non-Primitive or Referenece type :- Array, Objects, Functions || datatypes of these are "function"

const heros = ["rajiv", "kumar", "gupta"];
let muObj = {
    name: "rajiv",
    age: 25
}

const myFunction = function(){     // In javascript we can treat functions as a variables.
    console.log("hello functions");
}

console.log(typeof myFunction); // datatype for function is function-object



// If you want to master in javascript just know everything about the objects and browser-events.

/* JavaScript is a dynamically typed language. This means that variable types are determined at runtime, 
and you do not need to explicitly declare the type of a variable before using it. 
You can assign different types of values to a variable during its lifetime.
For example, in JavaScript, you can do the following:

let x = 10; // x is now a number
x = "Hello"; // x is now a string
x = true; // x is now a boolean
On the other hand, statically typed languages require you to declare the variable's type explicitly, 
and the type checking is done at compile-time, before the code is executed.

Languages like Java, C++, and TypeScript are statically typed, 
and they require you to specify the variable type explicitly when declaring them:

int x = 10; // x is a variable of type int
String name = "John"; // name is a variable of type String
JavaScript's dynamic typing allows for more flexibility but can lead to potential runtime errors if not handled carefully. 
Static typing, on the other hand, provides better type safety at the cost of some initial verbosity and strictness. */


