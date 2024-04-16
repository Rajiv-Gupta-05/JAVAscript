// objects is declared into ways: 1:- Literal, 2:- constructor
// singleton => a design pattern that tells us that we can create only one instance of a class and that instance can be accessed globally.

// Object Literals *********************

const mySym = Symbol("key1")

const jsUser = {
    name: "Rajiv",
    "full name": "Rajiv Gupta", // you donot access this object by using dot.
    [mySym]: "mykey1", // Symbol declaration syntax, just remeber it 
    age: 25,
    location: "ahmedabad",
    email: "rajiv@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full name"]); // In this way only you can access the fullname object..
console.log(jsUser[mySym]); // don't use "" for mysym.

jsUser.email = "rajiv@chatgpt.com"
// Object.freeze(jsUser)
jsUser.email = "rajiv@microsoft.com"
console.log(jsUser); // email is not change after freeze the object.

jsUser.greeting = function(){
    console.log("Hello JS User");
}
console.log(jsUser.greeting); // [Function (anonymous)]
console.log(jsUser.greeting()); // Hello JS User

jsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(jsUser.greeting()); // Hello JS User
console.log(jsUser.greetingTwo()); // Hello JS User, Rajiv

// Note:- Whenever accessing the value of object just use dot and some special cases like symbol use sqaure brackets [].