/*
  1. Prototypes:
   In JavaScript, every object has a prototype. Think of a prototype as a template or a parent object. 
   When you create a new object, JavaScript looks up to its prototype for properties and methods 
   if it can't find them on the object itself.

  2. Prototype Chain: This is a mechanism in JavaScript where objects inherit properties and methods from their prototypes. 
   If a property or method is not found on the object itself, JavaScript traverses up the prototype chain until it finds it. 
   This chain continues until it reaches the root object, which is Object.prototype.

  3. Constructor Functions:
   These are functions used as templates to create objects. 
   When you create an object using a constructor function with the new keyword, 
   the prototype property of the constructor function becomes the prototype of the created object.

  4. prototype Property: 
   Every function in JavaScript has a special property called prototype. 
   This property is an object that will become the prototype for all objects created using that function as a constructor.

  5. __proto__ Property:
   This is a non-standard property (prior to ECMAScript 6) found on objects that refers to its prototype. 
   It allows direct access to an object's prototype.
*/

// Here's a simple example:

// Constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Adding a method to the prototype
Person.prototype.sayHello = function () {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

// Creating an object using the constructor function
const person1 = new Person("Alice", 30);
const person2 = new Person("Bob", 25);

// Both objects can access the method sayHello even though it's not defined directly on them
person1.sayHello(); // Output: Hello, my name is Alice and I am 30 years old.
person2.sayHello(); // Output: Hello, my name is Bob and I am 25 years old.

// Accessing the prototype explicitly using __proto__
console.log(person1.__proto__ === Person.prototype); // Output: true

/*
    => Person is a constructor function.
    => Person.prototype is the prototype object for objects created with new Person().
    => person1 and person2 are instances of the Person object. They inherit properties and methods from Person.prototype.
    => __proto__ is used to access the prototype of an object directly.
  */

// --------------------------------------------------------------------------------------------------------

// Define an array of heroes
let myHeroes = ["thor", "spiderman"];

// Define an object with hero powers
let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  // Define a method to get Spiderman's power
  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

// Add a method to the prototype of Object
Object.prototype.rajiv = function () {
  console.log(`rajiv is present in all objects`);
};

// Add a method to the prototype of Array
Array.prototype.heyRajiv = function () {
  console.log(`Rajiv is saying hello!!!!!`);
};

// Call the rajiv method on the heroPower object
heroPower.rajiv(); // Output: rajiv is present in all objects

// Attempt to call the rajiv method on the myHeroes array
myHeroes.rajiv(); // Output: rajiv is present in all objects

// Call the heyRajiv method on the myHeroes array
myHeroes.heyRajiv(); // Output: Rajiv is saying hello!!!!!

// Attempt to call the heyRajiv method on the heroPower object
heroPower.heyRajiv(); // Output: TypeError: heroPower.heyRajiv is not a function

/*
=> myHeroes is an array containing the names of two heroes: "thor" and "spiderman".
=> heroPower is an object with properties for hero names (keys) and their respective powers (values). 
   It also contains a method getSpiderPower to get Spiderman's power.
=> Object.prototype.rajiv adds a method rajiv to the prototype of all objects in JavaScript. 
   This method will be available on all objects.
=> Array.prototype.heyRajiv adds a method heyRajiv to the prototype of all arrays in JavaScript. 
   This method will be available on all arrays.
=> heroPower.rajiv() calls the rajiv method added to the Object prototype. 
   Since heroPower is an object, it inherits this method from its prototype.
=> myHeroes.rajiv() attempts to call the rajiv method on the array myHeroes. 
   Even though arrays are objects in JavaScript, they don't directly inherit methods added to Object.prototype. 
   Hence, this call will raise an error (myHeroes.rajiv is not a function).
=> myHeroes.heyRajiv() calls the heyRajiv method added to the Array prototype. 
   Since myHeroes is an array, it inherits this method from its prototype, and the method will execute successfully.
=> heroPower.heyRajiv() attempts to call the heyRajiv method on the heroPower object. 
   However, heyRajiv is a method added to the prototype of arrays (Array.prototype), 
   not to objects (Object.prototype). Therefore, calling heyRajiv on heroPower results in a TypeError, 
   indicating that heyRajiv is not a function.
*/

// ---------------------------------------------------------------------------------------------------------------

// Inheritance:

const User = {
  name: "chai",
  emai: "chai@gmail.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAVvailable: false,
};

const TASupport = {
  makeAssignment: "JS Assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};

Teacher.__proto__ = User;

// Modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher);

/*
  => User: Represents a basic user with properties name and email.
  => Teacher: Represents a teacher with a property makeVideo.
  => TeachingSupport: Represents a teaching support entity with a property isAvailable.
  => TASupport: Represents a teaching assistant support with properties makeAssignment, 
     fullTime, and a prototype set to TeachingSupport. This means TASupport inherits properties from TeachingSupport.

    =>> Teacher.__proto__ = User; This line sets the prototype of the Teacher object to User. 
                            This means Teacher will inherit properties from User. So now, 
                            Teacher has access to name and email properties as well.

    ==>>> Object.setPrototypeOf(TeachingSupport, Teacher);
          This line sets the prototype of TeachingSupport to Teacher. 
          This means TeachingSupport will inherit properties from Teacher. 
          However, TeachingSupport already has a prototype (Object.prototype) unless you intend to replace it.

    =>>> Prototype chains are used to establish relationships between these objects, 
         allowing them to inherit properties and methods from each other.
*/

// ---------------------------------------------------------------------------------------------------------

let anotherUserName = "ChaiAurCode     ";
String.prototype.trueLength = function () {
  console.log(`True Length is: ${this.trim().length}`);
};
anotherUserName.trueLength(); // Output: True Length is: 11
"rajiv".trueLength(); // Output: True Length is: 5
"kishanGupta".trueLength(); // Output: True Length is: 11

/*
    => anotherUserName is a string containing the value "ChaiAurCode ".
    => String.prototype.trueLength adds a method called trueLength to the prototype of the String object. 
       This method calculates the length of the string after trimming any leading or trailing whitespace.
    => anotherUserName.trueLength() calls the trueLength method on the string "ChaiAurCode ". 
       Since there are trailing spaces in the string, the trim() function removes them, 
       and then the length of the trimmed string is calculated, which is 11. So, the output is "True Length is: 11".
    => "rajiv".trueLength() calls the trueLength method on the string "rajiv". 
        Since there are no leading or trailing spaces in this string, its true length is its actual length, 
        which is 5. So, the output is "True Length is: 5".
    => "kishanGupta".trueLength() calls the trueLength method on the string "kishanGupta". 
        Again, there are no leading or trailing spaces, so the true length is the actual length of the string, 
        which is 11. So, the output is "True Length is: 11".
*/
