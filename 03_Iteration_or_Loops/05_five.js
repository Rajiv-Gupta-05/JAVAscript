// ******************************* for each *************************************

/*
arrays do have a forEach method, which is used to iterate over the elements of an array. 
It executes a provided function once for each array element.
*/

// Example array
const numbers = [1, 2, 3, 4, 5];

// Iterate over each element of the array using forEach method
numbers.forEach(function (number) {
  console.log(number);
});

/*
This method is particularly useful when you want to perform the same operation on each element 
of an array without needing to keep track of indices or create a separate loop structure.
*/

const coding = ["js", "python", "cpp", "ruby", "swift", "java"];

coding.forEach(function (item) {
  // normal function
  console.log(item);
});

coding.forEach((item1) => {
  // arrow function
  console.log(item1);
});

function printMe(item) {
    console.log(item);
}
coding.forEach(printMe) // in this method, just give the reference of function not execute the funcion

coding.forEach ((item, index, arr)=> {
    console.log(item, index, arr);
})
/*
Output:
js 0 [ 'js', 'python', 'cpp', 'ruby', 'swift', 'java' ]
python 1 [ 'js', 'python', 'cpp', 'ruby', 'swift', 'java' ]
cpp 2 [ 'js', 'python', 'cpp', 'ruby', 'swift', 'java' ]
ruby 3 [ 'js', 'python', 'cpp', 'ruby', 'swift', 'java' ]
swift 4 [ 'js', 'python', 'cpp', 'ruby', 'swift', 'java' ]
java 5 [ 'js', 'python', 'cpp', 'ruby', 'swift', 'java' ]
*/

const myCoding = [
    {
        languageName: 'javascript',
        languageFileName: 'js'
    },
    {
        languageName: 'java',
        languageFileName: 'java'
    },
    {
        languageName: 'python',
        languageFileName: 'py'
    }
]

myCoding.forEach((item)=> {
    console.log(item.languageFileName);
    console.log(item.languageName);
})


// ***************************************callback function**********************************************

/*
 In JavaScript, a callback function is a function that is passed as an argument to another 
 function and is executed after some operation has been completed, often asynchronously. 
 Callback functions are a fundamental concept in JavaScript, especially in asynchronous programming.
*/

// Function that takes a callback function as an argument
function doSomething(callback) {
  console.log("Doing something...");
  // Simulating an asynchronous operation (e.g., fetching data from a server)
  setTimeout(function () {
    console.log("Operation completed!");
    // Call the callback function after the operation is completed
    callback();
  }, 2000); // Simulate a delay of 2 seconds
}

// Callback function passed to doSomething
function callbackFunction() {
  console.log("Callback function executed!");
}

// Call the doSomething function and pass the callbackFunction as an argument
doSomething(callbackFunction);

/*
 => Callback functions are commonly used in scenarios where you want to perform some operation 
    asynchronously and execute some code afterward, such as handling responses from APIs,  
    processing data from a database, or handling user interactions.

 => Callback functions allow for more flexible and modular code, as they enable you to separate concerns and 
    define behavior independently from the main function.

 => Callback functions are a fundamental building block for more advanced asynchronous patterns in JavaScript, 
    such as Promises and async/await.
*/

// ---------------------------------------------------------------------------------------------------------------
