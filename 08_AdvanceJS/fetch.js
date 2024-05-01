/*
  In JavaScript, "fetch" is a modern API for making HTTP requests. 
  It provides a more powerful and flexible way to fetch resources from a server compared to older methods like XMLHttpRequest. 
*/

// Basic Syntax
fetch(url)
  .then((response) => {
    // Handle response
  })
  .catch((error) => {
    // Handle error
  });

/*
  # Handling Responses:
    The fetch function returns a Promise that resolves to the Response object representing the response to the request. 
    You can use methods like json(), text(), blob(), etc., 
    on the Response object to extract the data from the response in different formats.

  # Handling Errors:
    If the request fails (e.g., due to network issues, server errors, etc.), 
    the Promise will be rejected, and you can catch the error using the .catch() method.

  # Customizing the Request:
    You can pass an optional options object as the second parameter to fetch to customize the request. 
    This object can include settings like method (GET, POST, PUT, DELETE, etc.), headers, body, credentials, cache mode, etc.
*/

// Using Fetch with Async/Await:
async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

/*
  # Cross-Origin_Requests (CORS):
    Fetch follows the same-origin policy by default, 
    which means it can only make requests to the same origin as the script that initiated the request. 
    For making cross-origin requests, the server needs to enable CORS (Cross-Origin Resource Sharing).
 
  # Browser Support:
    Fetch is supported in all modern browsers, but not in Internet Explorer. 
    For IE compatibility, you may need to use a polyfill or a library like Axios.

  # PolyFills:
    To ensure compatibility with older browsers, you may need to use a polyfill for fetch. 
    Polyfills are code snippets that provide the missing functionality in older browsers.

 ==>>> Overall, fetch provides a cleaner and more intuitive interface for making HTTP requests in JavaScript, 
       making it a preferred choice for many developers.

 ==>>> A fetch() promise only rejects when a network error is encountered 
       (which is usually when there's a permission issue or similar). 
        A fetch() promise does not reject on HTTP errors (404, etc).
        Instead, a .then() handler must check the Response.ok and/or Response.status properties.
*/

