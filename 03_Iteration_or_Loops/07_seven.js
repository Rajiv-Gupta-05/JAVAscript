// ************************* map and reduce **********************************

/*

 => Certainly! In JavaScript, the map method is used to iterate over an array and 
    transform each element of that array according to a provided function. 

 => In JavaScript, map() is a method of the Array object. 
    It creates a new array by calling a function on every element of the original array and storing the results in a new array. map() returns the new array, and the original array is unchanged.
*/
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Using the map method to transform each element of the array
const newNums = myNumbers.map((num) => {
  // For each element 'num', we add 10 to it
  return num + 10;
});

console.log(newNums); // [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
/*
 So, the map method iterates over each element of the array, 
 applies the transformation specified in the callback function, and returns a new array with the transformed elements.
*/

// ------------------------------- Chaining ----------------------------------------

const newNumbers = [10, 12, 16, 18, 121, 132, 75, 32, 95, 26];

// Method chaining: multiple array methods applied in sequence
const numbers = newNumbers
  // First, we multiply each element by 10
  .map((num) => num * 10) 
  // Then, we add 1 to each element
  .map((num) => num + 1)
  // Finally, we filter out elements that are less than 100
  .filter((num) => num >= 100);

console.log(numbers);

/*
  Javascript Method Chaining allows us to run multiple methods on the same element within a single statement.
*/

