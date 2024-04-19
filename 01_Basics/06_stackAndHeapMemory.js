// +++++++++++++++++++++++++++++++++++++ Stack and Heap memory +++++++++++++++++++++++++++++++++++

// How memory works in javascript?:

/* Two types of Memory:- Stack and heap 
All the Primitive datatypes uses: Stack Memory
All the Non-Primitive datatpes uses: Heap memory */

/* In JavaScript, when variable is declared into the stack memory, it always generates a copy for the same. 
When object is stored into the heap memory, it always generates a "reference" or original value. */

let myName = "rajivgupta"
let anotherName = myName
anotherName = "guptarajiv"

console.log(myName); // rajivgupta
console.log(anotherName); // guptarajiv


let user1 = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let user2 = user1
user2.email = "rajiv@gmail.com"

console.log(user1.email); // rajiv@gmail.com
console.log(user2.email); // rajiv@gmail.com
