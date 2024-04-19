// ********************* Object de-structure and Json API **************************

// Define an object named 'course' with properties such as 'coursename', 'price', and 'courseInstructor'.
const course = {
    coursename: "js",
    price: "999",
    courseInstructor: "rajiv"
}
// Using object destructuring with renaming, extract the 'courseInstructor' property from the 'course' object and rename it to 'instructor'.
const {courseInstructor: instructor} = course
console.log(instructor); // Output the value of the 'instructor' variable, which is "rajiv".

/* {
    "name": "rajiv",
    "coursename": "js", || JSON Format (javascript object notation)
    "price": "free"
   } */

// ++++++++++++++++++++++++++++ JSON API ++++++++++++++++++++++++++++

/* To call a JSON API in JavaScript, you typically use the fetch() function,  
which is a modern way to make network requests. Here's a basic example: */

fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Work with JSON data here
    console.log(data);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

  /*
   1. fetch('https://api.example.com/data'): This line initiates a network request to the URL 'https://api.example.com/data' 
      using the fetch() function. It sends a GET request by default.
    2. .then(response => { ... }): This part of the code sets up a callback function to handle the response when it's received. 
       The response parameter represents the response from the server.
    3. if (!response.ok) { ... }: This line checks if the response was successful. 
       The ok property of the response object is true if the status is within the successful range (200-299). 
       If the response is not ok, an error is thrown.
    4. return response.json();: If the response is ok, this line parses the response body as JSON. 
       The json() method returns a Promise that resolves with the JSON data parsed from the response body.
    5. .then(data => { ... }): This part of the code sets up a callback function to handle the JSON data once it's parsed. 
       The data parameter represents the JSON data.
    6. console.log(data);: Inside this callback function, you can work with the JSON data. 
       In this example, it simply logs the data to the console.
    7. .catch(error => { ... }): This part of the code sets up a callback function to handle any errors 
       that may occur during the fetch operation or processing of the response. 
       If an error occurs at any point in the chain (e.g., network error, JSON parsing error), it will be caught here.


       By using fetch() with promises, 
       you can handle asynchronous operations like network requests in a clean and concise way in JavaScript.
  */

