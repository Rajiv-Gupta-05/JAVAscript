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

// ----------------------------------------------------------------------

function calculateCartPrice (...number1) { 
    // Here ... is the rest operator or spread operator, it can include all the remaining arguments in bundle.
    return number1
}
console.log(calculateCartPrice(100, 200, 300, 400, 500)); // [ 100, 200, 300, 400, 500 ]

// -------------------------------------------------------------------------

const user = {
    username: "Rajiv",
    price: 199
}

function handleObject (anyobject) {
    console.log(`Username is ${anyobject.username} and Price is ${anyobject.price}`);
    // Username is Rajiv and Price is 199
}

handleObject(user)

// ---------------------------------------------------------------------------

const myNewArray = [200 , 400, 600 , 100 , 1000] // Define an array containing five elements

// Define a function that takes an array as an argument and returns the element at index 2
function returnThirdArray (getArray) {
    return getArray[2]
}

// Call the returnThirdArray function with myNewArray as an argument and log the result
console.log(returnThirdArray(myNewArray)); // 600
console.log(returnThirdArray([200, 400, 600, 100, 1000])); // we can also get the same result if we pass the argument in this way.
