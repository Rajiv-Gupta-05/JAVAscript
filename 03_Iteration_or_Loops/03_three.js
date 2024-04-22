// ********************** for of loop ***********************

/*
The for...of loop in JavaScript is used to iterate over iterable objects such as arrays, strings, maps, sets, and more. 
It provides a concise and readable way to iterate over the elements of an iterable without needing to keep track of indices 
or use traditional for loops. 

=> The for...of loop provides a cleaner and more concise way to iterate over arrays and 
   other iterable objects compared to traditional for loops, 
   especially when you only need the values and don't need to work with indices.
*/

// Example array
const fruits = ["apple", "banana", "orange", "grape"];

// Iterate over each element of the array using for...of loop
for (const fruit of fruits) {
  console.log(fruit);
}

const greetings = "hello rajiv!";
for (const greet of greetings) {
  console.log(greet);
}

// map

const map = new Map();
map.set("IN", "India");
map.set("NR", "Nepal");
map.set("FR", "France");
map.set("NR", "Nepal");

console.log(map); // Map(3) { 'IN' => 'India', 'NR' => 'Nepal', 'FR' => 'France' } || It prints unique value only

for (const [key, value] of map) {
  console.log(key, ":-", value);
}

const myObject = {
  game1: "nfs",
  game2: "spiderman",
};

// Extracting keys of myObject using Object.keys() and iterating over them
//  for (const game of myObject)  { ||  "object is not iterable in this way"
for (const key of Object.keys(myObject)) {
  // Accessing the value of each key in myObject
  const value = myObject[key];
  console.log(`${key}: ${value}`);
}
