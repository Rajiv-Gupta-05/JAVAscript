const promiseOne = new Promise(function (resolve, reject) {
  // Do an async task
  // DB calls, cryptography, network call
  setTimeout(function () {
    console.log("Async task is complete");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise consumed");
});

//---------------------------------------------------------------

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async Task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Task-2 promise consumed");
});

// ----------------------------------------------------------------

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Rajiv", email: "rajiv@promiseexample.com" });
  }, 1000);
});
promiseThree.then(function (user) {
  console.log(user);
});

// ------------------------------------------------------------------

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "RAJIV", password: "123" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});
promiseFour
  .then(function (user) {
    console.log(user);
    return user.username;
  })
  .then(function (username) {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    console.log("The Promise is either resolved or rejected");
  });

// ------------------------------------------------------------------

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "javascript", password: "123" });
    } else {
      reject("ERROR: js went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive();

// -------------------------------------------------------------------

async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json(); // await here
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
getAllUsers();

// --------------------------------------------------------------------------------

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data); // Log the JSON data
  })
  .catch((error) => {
    console.log(error);
  });

// Notes:

/*
    Promises in JavaScript are a fundamental tool for handling asynchronous operations. 
    They were introduced to simplify and improve the readability of asynchronous code, 
    especially when dealing with multiple asynchronous tasks.

    1. Asynchronous Programming: 
       JavaScript is single-threaded, meaning it can only do one thing at a time. 
       Asynchronous operations allow certain tasks to be executed without blocking the main thread, 
       enabling non-blocking behavior, which is crucial for web applications to remain responsive.
    2. Callbacks:
       Before promises, callbacks were the primary mechanism for handling asynchronous operations. 
       However, callback-based code often led to "callback hell" or deeply nested code, making it hard to read and maintain.
    3. Promise Object: 
       A promise is an object that represents the eventual completion (or failure) 
       of an asynchronous operation and its resulting value. 
       It can be in one of three states: pending, fulfilled (resolved), or rejected.
    4. Creating Promises: 
       Promises can be created using the Promise constructor. This constructor takes a function with two parameters, 
       resolve and reject. Inside this function, you perform the asynchronous operation and call resolve when it's successful, 
       or reject if it fails.
    5. Chaining: 
       One of the most powerful features of promises is chaining. Since promises have a .then() method, 
       you can chain multiple asynchronous operations together in a readable and sequential manner.
    6. Error Handling:
       Promises have a .catch() method to handle errors that occur during asynchronous operations. 
       This allows for centralized error handling and avoids repetitive error handling code.
    7. Promise.all():
       This method takes an array of promises and returns a single promise that resolves 
       when all of the promises in the array have resolved, or rejects if any of the promises reject.
    8. Promise.race():
       This method takes an array of promises and returns a single promise that resolves or 
       rejects as soon as one of the promises in the array resolves or rejects, with the value or reason from that promise.
    9. Async/Await:
       Introduced in ES2017, async functions and the await keyword provide a more synchronous way to 
       write asynchronous code using promises. async functions always return a promise, 
       and the await keyword can be used inside them to wait for the resolution of a promise.

    ==>>> Promises have become a cornerstone of modern JavaScript development, 
          enabling developers to write cleaner, more maintainable asynchronous code. 
          They provide a standardized way to work with asynchronous operations and 
          have largely replaced callback-based patterns in modern JavaScript codebases.
  */

// 1. Basic Promise Creation:

// Creating a promise
const myPromise = new Promise((resolve, reject) => {
  // Simulating an asynchronous operation (like fetching data from a server)
  setTimeout(() => {
    const randomNumber = Math.random();
    if (randomNumber > 0.5) {
      resolve(randomNumber); // If the operation is successful, resolve the promise
    } else {
      reject(new Error("Random number is too low")); // If it fails, reject the promise with an error
    }
  }, 1000); // Simulating a delay of 1 second
});

// Consuming the promise
myPromise
  .then((result) => {
    console.log("Promise resolved with value:", result); // Log the resolved value
  })
  .catch((error) => {
    console.error("Promise rejected with error:", error); // Log any errors that occur during the operation
  });

  /*
   Here, myPromise represents an asynchronous operation that resolves with a random number 
   greater than 0.5 after a delay of 1 second. If the random number is not greater than 0.5, it rejects with an error.
  */

// 2. Chaining Promises:

// Chaining promises
const fetchData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Data fetched successfully");
      }, 1000);
    });
  };
  
  fetchData()
    .then((data) => {
      console.log(data); // Log the fetched data
      return "Processed data"; // Return some processed data
    })
    .then((processedData) => {
      console.log(processedData); // Log the processed data
    })
    .catch((error) => {
      console.error("Error:", error); // Log any errors that occur during the operation
    });

    /*
    Here, fetchData() simulates fetching some data asynchronously. 
    Once the data is fetched successfully, it's processed further. 
    The then() method is used to chain these operations sequentially.
    */

// 3. Promise.all():

// Promise.all() example
const fetchUserData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("User data");
      }, 1000);
    });
  };
  
  const fetchPosts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Posts");
      }, 1500);
    });
  };
  
  Promise.all([fetchUserData(), fetchPosts()])
    .then(([userData, posts]) => {
      console.log("User data:", userData); // Log the user data
      console.log("Posts:", posts); // Log the posts
    })
    .catch((error) => {
      console.error("Error:", error); // Log any errors that occur during the operation
    });
  
/*
Here, Promise.all() is used to fetch user data and posts concurrently. 
It waits for all promises to resolve and then logs the results.
*/

// 4. Async/Await

// Async/Await example
const fetchDaata = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Data fetched successfully");
      }, 1000);
    });
  };
  
  const processData = async () => {
    try {
      const data = await fetchData(); // Wait for the data to be fetched
      console.log(data); // Log the fetched data
      return "Processed data"; // Return some processed data
    } catch (error) {
      console.error("Error:", error); // Log any errors that occur during the operation
    }
  };
  
  processData().then((result) => {
    console.log(result); // Log the processed data
  });
  
  /*
  Here, fetchData() is an asynchronous function that simulates fetching data. 
  processData() uses async/await to wait for the data to be fetched before proceeding. 
  This makes the asynchronous code look more synchronous and easier to read.
  */
