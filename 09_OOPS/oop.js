/*
 JavaScript introduced classes in ECMAScript 2015 (ES6). 
 Prior to ES6, JavaScript used prototype-based inheritance rather than classical object-oriented programming 
 constructs like classes. Classes in JavaScript provide a more familiar syntax for creating objects 
 and defining their behavior, making the language more accessible to developers coming from languages like Java or C++. 
*/

/* 1. Object Literals:
      Object literals are a way to create objects in JavaScript by directly specifying their properties and 
      values within curly braces {}. This is often a simpler and more concise alternative to 
      defining classes or using constructor functions. */

// Define an object literal called 'person' with properties 'name', 'age', and 'city'
let person = {
  name: "John",
  age: 30,
  city: "New York",

  // Define a method called 'getUserDetails' within the object
  getUserDetails: function () {
    console.log("Got user details from databases!!!");
    // Log the username using template literals
    console.log(`Username: ${this.name}`);
    // Log the entire object using 'this' keyword
    console.log(this);
  },
};

// Log the value of the 'name' property of the 'person' object
console.log(person.name); // Output: John

// Call the 'getUserDetails' method of the 'person' object
// This will log messages and the object details defined within the method
console.log(person.getUserDetails());

// Log the value of 'this' outside of any function or object
// In this context, 'this' refers to the global object (e.g., 'window' in a browser)
console.log(this); // Output: Window {...} (if running in a browser environment) || {} (if running in local environment.)

/*
    Object literals allow you to quickly define and initialize objects without the need for 
    separate class definitions or constructor functions. They're commonly used for creating simple data structures, 
    configuration objects, or passing data between functions.
*/

// ------------------------------------------------------------------------------------------------

/* 2. Constructor:
    In JavaScript, a constructor is a special method used for creating and initializing objects within a class. 
    It's typically defined within a class and invoked automatically 
    when you create a new instance of that class using the new keyword.  */

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greetings = function (){
        console.log(`Welcome ${this.username}`);
    }
    return this;
}
const userOne = new User("Rajiv", 10, true)
const userTwo = new User("Kishan", 22, false)
console.log(userOne);
console.log(userTwo);

/*
  => In JavaScript, constructors are functions used to create and initialize objects. 
     They're commonly used with the new keyword to create instances of classes or object blueprints. 

  => The User function is defined as a constructor function. It takes three parameters: username, loginCount, and isLoggedIn.
  => Inside the constructor function, properties like username, loginCount, 
     and isLoggedIn are assigned values based on the arguments passed to the constructor.
  => Additionally, a method called greetings is defined within the constructor. 
     This method logs a greeting message to the console, welcoming the user whose name is stored in the username property.
  => Though not necessary, the constructor function ends with return this;. 
     This statement is used to explicitly return the newly created object. 
     However, in JavaScript, constructors implicitly return this (the newly created object) 
     if no other object is returned explicitly.
  => Two instances of the User class are created using the new keyword:
     userOne: It's created with the username "Rajiv", a loginCount of 10, and isLoggedIn set to true.
     userTwo: It's created with the username "Kishan", a loginCount of 22, and isLoggedIn set to false.
  => After creating instances, you can access the properties and methods of each instance. For example, 
     you can call the greetings method on userOne to welcome the user stored in the username property.

  
     ==>>> Overall, this constructor function User serves as a blueprint for creating user 
           objects with specific properties and methods, 
           allowing for easy instantiation and initialization of user instances.
*/
