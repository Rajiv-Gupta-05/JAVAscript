/*
Asynchronous programming in JavaScript allows you to execute code without blocking the execution of other code. 
This is particularly useful for operations that may take some time to complete, 
such as fetching data from a server, reading files, or waiting for user input.
*/

// Simulating fetching data from a server
function fetchData(callback) {
    setTimeout(() => {
      const data = [1, 2, 3, 4, 5];
      callback(data);
    }, 2000); // Simulating a delay of 2 seconds
  }
  
  // Function to handle the fetched data
  function handleData(data) {
    console.log("Data fetched:", data);
  }
  
  // Call fetchData and pass handleData as a callback
  console.log("Fetching data...");
  fetchData(handleData);
  console.log("This line is executed immediately after calling fetchData");

  
  /*
    => We have a function called fetchData which simulates fetching data from a server. 
       It takes a callback function as an argument.
    => Inside fetchData, we use setTimeout to simulate a delay of 2 seconds. 
       After the delay, we call the callback function with the fetched data.
    => We have a function called handleData which simply logs the fetched data to the console.
    => We call fetchData and pass handleData as a callback. This initiates the process of fetching data, 
       and the code after fetchData continues executing immediately.
    => After 2 seconds, the fetched data is logged to the console by the handleData function.
    => The message "This line is executed immediately after calling fetchData" is logged to the console 
       before the fetched data, demonstrating that the code after fetchData continues executing '
       without waiting for the data to be fetched.
  */

// Function to be executed repeatedly
function sayHello() {
   console.log("Hello!");
 }
 
 // Call setInterval to execute sayHello every 2 seconds
 const intervalId = setInterval(sayHello, 2000);
 
 // After 10 seconds, stop the interval
 setTimeout(() => {
   clearInterval(intervalId);
   console.log("Interval stopped after 10 seconds");
 }, 10000);

 /*
   => We have a function called sayHello which logs "Hello!" to the console. 
      This is the function we want to execute repeatedly.
   => We call setInterval and pass sayHello as the first argument. 
      We also specify the interval duration in milliseconds as the second argument (2000 in this case), 
      so sayHello will be executed every 2000 milliseconds (2 seconds).
   => setInterval returns an interval ID, which we store in the variable intervalId.
   => After 10 seconds (10000 milliseconds), we call clearInterval and pass intervalId as the argument. 
      This stops the execution of sayHello by clearing the interval. 
      We also log a message to the console indicating that the interval has been stopped.
 */

// Conclusion:

/*

=> Asynchronous programming in JavaScript allows you to execute code without blocking the execution of other code. 
   This is crucial for tasks that may take time to complete, such as fetching data from a server, reading files,
   or waiting for user input.

** There are several ways to handle asynchronous code in JavaScript:

 1. Callbacks: This is the traditional approach where you pass a function (callback) as an argument to another function. 
    The callback is then executed when the asynchronous operation completes.
 2. Promises: Promises provide a cleaner way to handle asynchronous code compared to callbacks. 
    A Promise represents the eventual completion (or failure) of an asynchronous operation and allows you to chain multiple asynchronous operations together.
 3. Async/Await: Async functions, introduced in ES2017, 
    provide a more concise and readable way to write asynchronous code. 
    Async functions allow you to write asynchronous code as if it were synchronous by using 
    the async keyword and the await keyword to pause execution until a Promise is resolved.
*/

// Here's a quick example using async/await:

async function fetchData() {
   try {
     const response = await fetch('https://api.example.com/data');
     const data = await response.json();
     console.log(data);
   } catch (error) {
     console.error('Error fetching data:', error);
   }
 }
 
 fetchData();

 /*
  In this example, fetchData is an async function that fetches data from an API. 
  We use await to pause the execution until the fetch request is complete, 
  and then we parse the response as JSON. If there's an error during the fetching process, 
  it's caught and handled in the catch block.

  => Async/await makes asynchronous code more readable and easier to maintain compared to using callbacks or Promises.

  => Overall, asynchronous programming in JavaScript is essential for building responsive and efficient web applications, 
     allowing you to perform tasks without blocking the main execution thread.
 */