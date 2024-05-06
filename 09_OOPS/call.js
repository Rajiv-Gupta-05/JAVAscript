/*
  call method:
  =>>The call method is a way to invoke a function with a specified this value and arguments provided individually. 
     Here's its basic syntax: 
     functionName.call(thisArg, arg1, arg2, ...);
*/

/*
  this keyword:
  =>>The this keyword in JavaScript refers to the context within which a function is executed. 
     It's determined by how the function is called. Here are some common scenarios:

    1. Global Context: When used outside of any function or object, 
       this refers to the global object, which is window in a web browser and global in Node.js.
       console.log(this === window); // Output: true (in a browser)
    
    2. Function Context: When used inside a function, this usually refers to the object that the function is a method of.
       However, when the function is called without an object reference, this refers to the global object.

    3. Constructor Context: When a function is used as a constructor with the new keyword, 
       this refers to the newly created object.

       Note:- Understanding how this behaves in different contexts is crucial for writing effective JavaScript code. 
              The call method can be particularly useful for explicitly setting the this value 
              when calling functions in JavaScript.
*/

function setUserName(username){
    this.username = username;
}
function createUser(username, email, password){
    setUserName.call(this, username);
    this.email = email;
    this.password = password;
}

const chai = new createUser("chai", "chai@fb.com", "222");
console.log(chai);