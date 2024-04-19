// **************************** JavaScript Execution Context ****************************

/* 
In JavaScript, the execution context refers to the environment in which JavaScript code is executed. 
It includes variables, functions, and objects that are accessible at a particular point during the execution of code. 
Understanding execution context is crucial for understanding how JavaScript code operates.
*/

// There are 3 types of execution context in javascript.

/*
1. Global Execution Context: This is the default or outermost execution context. 
   It's created when the JavaScript code is executed and contains any code that's not inside any function. 
   In a browser environment, the global execution context is associated with the global object (window in browsers).

2. Function Execution Context: Whenever a function is invoked, a new execution context is created for that function. 
   This execution context includes the function's arguments, local variables, and any inner functions. 
   Each function call creates its own execution context, and these contexts form a stack known as the "call stack".

3. Eval Execution Context (not recommended): When code is executed inside the eval() function, 
   a new execution context is created. However, using eval() is generally discouraged due to security concerns and 
   performance implications.
*/

/*
Within each execution context, JavaScript keeps track of several important things, including:

=> Variable environment: It contains all the declared variables and functions in that particular context.
=> Scope chain: It refers to the chain of variables accessible in that context, including variables from outer scopes.
=> this keyword: It refers to the object that is currently executing the code.
*/

// -------------------------------------------------------------------------------------------------------------------

/*
In JavaScript, code execution typically occurs in two main phases: the Memory creation phase and the execution phase. 
Understanding these phases is crucial for understanding how JavaScript code behaves.
*/

/*
1. Memory Creation Phase:
   => During the memory creation phase, JavaScript performs several important tasks:
   => Variable and function declarations are hoisted: 
      This means that JavaScript moves variable and function declarations to the top of 
      their containing scope before code execution. However, only the declarations are hoisted, not the initializations or assignments.
   => Memory is allocated for variables and functions: 
      Space in memory is reserved for all variables and functions declared within the current scope.
   => The scope chain is established: JavaScript creates the scope chain, 
      which determines the order in which variables are resolved during execution.
   => The value of this keyword is determined: In non-arrow functions, 
      the value of this is determined during the creation phase based on how the function is called.

2. Execution Phase:
   => Once the memory creation phase is complete, JavaScript moves to the execution phase:
   => Code is executed line by line: JavaScript begins executing the code from top to bottom, 
      following the order specified in the code.
   => Values are assigned to variables: Any initializations or assignments of variables are performed during the execution phase.
   => Functions are invoked: When a function is called, 
      a new execution context is created, and the code inside the function is executed.

*/

// #####################################################################################################################

// Example

console.log(myVar); // Undefined (hoisted declaration)
var myVar = 5; // Variable declaration and initialization
console.log(myVar); // 5 (assigned value during execution phase)

function myFunction() {
  console.log("Inside myFunction");
}

myFunction(); // Function call (execution phase)

/*
In this example:

  => During the memory creation phase, 
     the variable myVar and the function myFunction are hoisted to the top of their containing scope.
  => During the execution phase, myVar is assigned the value 5.
  => The function myFunction is invoked, creating a new execution context for it, 
     and the code inside the function is executed.
*/

// ************************************ Call Stack *******************************************

/*
 The call stack is a fundamental concept in JavaScript (and many other programming languages) 
 that helps manage the execution of function calls. It keeps track of the execution context of functions 
 in a Last-In-First-Out (LIFO) manner. When a function is called, 
 a new frame representing that function's execution context is pushed onto the call stack. 
 When a function completes, its frame is popped off the stack, and control returns to the context that called it.
*/

// Let's illustrate the call stack with a simple example:


function firstFunction() {
    console.log("Inside firstFunction");
    secondFunction();
  }
  
  function secondFunction() {
    console.log("Inside secondFunction");
  }
  
  firstFunction();
  
/*
Here's what happens in the call stack:

  1. The firstFunction() is called from the global execution context. 
     So, the firstFunction() execution context is pushed onto the call stack.
  2. Inside firstFunction(), console.log("Inside firstFunction") is executed, and then secondFunction() is called. 
     So, the secondFunction() execution context is pushed onto the call stack.
  3. Inside secondFunction(), console.log("Inside secondFunction") is executed.
  4. secondFunction() completes its execution, so its execution context is popped off the call stack.
  5. Control returns to firstFunction(), which has nothing more to execute. 
     So, its execution context is popped off the call stack as well.
  6. The call stack is now empty, and the program execution is complete.
*/
