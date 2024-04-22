// ************************************ for loop **************************************

/*
A for loop is a control flow statement in programming that allows you to repeatedly 
execute a block of code a certain number of times. 
It's particularly useful when you know how many times you want to execute a piece of code.
*/

for (let i = 0; i < 10; i++) {
  const element = i;
  console.log(element); // 0,1,2,3,4,5,6,7,8,9
}
// Putting it all together, this loop will iterate over the first 10 elements of the array array,
// printing each element to the console.

// -------------------------------------------------------------------------------------------------------

for (let i = 1; i <= 10; i++) {
  console.log(`Outer Loop values: ${i}`);
  // Outer loop: iterates from 1 to 10
  // Each iteration of the outer loop prints the value of i

  for (let j = 1; j <= 10; j++) {
    // Inner loop: iterates from 1 to 10
    // Each iteration of the inner loop prints the multiplication table for the current value of i

    console.log(i + "*" + j + "=" + i * j); // Prints the multiplication table
  }
}

// ----------------------------------------------------------------------------------------------------------

// Define an array named myArray containing three elements
let myArray = ["flash", "batman", "superman"];

// Start a for loop to iterate over each element of the array
for (let index = 0; index < myArray.length; index++) {
    // Retrieve the current element from myArray using the index
    const element = myArray[index];
    
    // Print the current element to the console
    console.log(element);
}

//------------------------------------------- break and continue ---------------------------------------------

/*
The break statement is used to terminate the loop prematurely. When encountered inside a loop, 
it immediately exits the loop and continues with the next statement after the loop.
*/

for (let i = 0; i <= 10; i++) {
    if (i === 5) {
        break; // Exit the loop when i equals 5
    }
    console.log(i);
}

/*
The continue statement is used to skip the current iteration of the loop and move to the next iteration. 
When encountered inside a loop, it skips the remaining code in the loop's body and proceeds with the next iteration.
*/

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue; // Skip the rest of the loop body when i equals 5
    }
    console.log(i);
}

