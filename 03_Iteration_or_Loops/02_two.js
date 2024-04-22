// ********************************* while and do-while loop **********************************

/*
Certainly! Both while and do...while are loop constructs in JavaScript used for repetitive execution of a block of code. 
They differ in when their loop condition is evaluated.

while loop:
The while loop repeatedly executes a block of code as long as the specified condition evaluates to true. 
The condition is evaluated before the execution of the loop's body.

=> The loop condition is evaluated before the execution of the loop's body. 
   If the condition is false initially, the loop body won't be executed at all.

=> If the condition evaluates to false during any iteration, 
   the loop terminates, and control is transferred to the next statement after the loop.
*/

while (condition) {
  // Code block to be executed || syntax
}

// Example:

let i = 0;
while (i < 5) {
  console.log(i);
  i++; // Increment i to prevent an infinite loop
}

let myArray = ["flash", "ironman", "king"]
let arr = 0;
while (arr < myArray.length) {
    console.log(myArray[arr]);
    arr = arr + 1;
}

/*
do...while loop:
The do...while loop is similar to the while loop, 
but it guarantees that the block of code inside the loop is executed at least once before checking the loop condition. 
After the first execution, the loop continues to execute as long as the specified condition evaluates to true.

=> Unlike the while loop, the do...while loop evaluates the condition after the first execution of the loop's body. 
   This guarantees that the loop's body will be executed at least once, even if the condition is initially false.

=> If the condition evaluates to false during subsequent iterations, the loop terminates, 
   and control is transferred to the next statement after the loop.
*/

do {
    // Code block to be executed || syntax
} while (condition);

// Example

let index = 0;
do {
    console.log(index);
    index++; // Increment i to prevent an infinite loop
} while (index < 5);
