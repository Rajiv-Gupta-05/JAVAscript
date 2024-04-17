// +++++++++++++++++++ Functions And Parameters +++++++++++++++++++

function myName() {
  // () -> paranthesis, {} -> scope or definition
  console.log("R");
  console.log("A");
  console.log("J");
  console.log("I");
  console.log("V");
}
myName(); // myName -> Reference , () -> Execution

function addTwoNumbers(num1, num2) {
  console.log(num1 + num2);
}
addTwoNumbers(9, 8); // Here num1 , num2 is the parameters and 9 , 8 is the arguments
// Parameters are the placeholders defined in the function declaration. They act as variables within the function.
// Arguments are the actual values that are passed to the function when it is called.

// ----------------------------------------------------------------------

function addNumbers(num1, num2) {
    let result = num1 + num2;
    return result;  // This line ends the function execution
    console.log("Rajiv"); // This line is not executed
    // So, the line console.log("Rajiv"); is not printed,
    // because the function execution ends before reaching that line due to the return statement. 
    // If you want "Rajiv" to be printed, you should place it before the return statement or after the function call.
}

const result = addNumbers(3, 5);
console.log(result); // This will print the result of adding 3 and 5, which is 8
console.log("Rajiv"); // This will print "Rajiv" separately

// ----------------------------------------------------------------------

function loginUserMessage(username) {
    if(username === undefined) {
        console.log("Please enter the username");
        return
    }
    return `${username} has just logged in !`
}
const result1 = loginUserMessage('Rajiv')
console.log(result1);
console.log(loginUserMessage()); // if we didn't pass anything in the argument then it will print || undefined has just logged in !

// -------------------------------------------------------------------

function loginUser(name = 'Sam') {
    if(!name) {
        console.log("Please enter the name");
        return
    }
    return `${name} has just logged in !`
}
const result2 = loginUser('Rajiv')
console.log(result2);
console.log(loginUser());