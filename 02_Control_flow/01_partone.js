// Example of if...else statement

// Define a variable
let age = 20;

// Check if the age is greater than or equal to 18
if (age >= 18) {
    // If true, execute this block of code
    console.log("You are an adult");
} else {
    // If false, execute this block of code
    console.log("You are a minor");
}

// ******************************************************************************************************

/* Example of nested if...else statement

  Nested if...else statements in JavaScript are used when you need to check for multiple conditions, 
  and each condition requires further evaluation. Here's an explanation with comments:
*/

// Define variables
let age1 = 20;
let isStudent = true;

// Check if the age is greater than or equal to 18
if (age1 >= 18) {
    // If true, check if the person is a student
    if (isStudent) {
        // If true, execute this block of code
        console.log("You are an adult student");
    } else {
        // If false, execute this block of code
        console.log("You are an adult non-student");
    }
} else {
    // If false, execute this block of code
    console.log("You are a minor");
}

// *******************************************************************************************

// Using && (logical AND) operator:

// Example using &&
let age2 = 20;
let isStudent1 = true;

// Check if the person is an adult and a student
if (age2 >= 18 && isStudent1) {
    console.log("You are an adult student");
} else {
    console.log("You are either not an adult or not a student");
}

// Using || (logical OR) operator:

// Example using ||
let temperature = 25;
let isSunny = false;

// Check if it's either sunny or the temperature is above 30 degrees Celsius
if (isSunny || temperature > 30) {
    console.log("It's a nice day to go out");
} else {
    console.log("You might want to stay indoors");
}

// ****************************************************************************************************





