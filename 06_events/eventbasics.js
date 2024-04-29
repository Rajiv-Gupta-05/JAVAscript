/* 
In JavaScript, events are actions or occurrences that happen in the browser 
as a result of user interaction or other system events. 
They allow you to create dynamic and interactive web pages by responding 
to user actions such as clicks, mouse movements, keyboard inputs, and more. 
*/

/*
 1. Event Types: 
  => Mouse Events: These events occur when the user interacts with the mouse, 
     such as clicking a button, moving the cursor, or scrolling.
  => Keyboard Events: These events occur when the user interacts with the keyboard, 
     such as pressing a key or releasing a key.
  => Form Events: These events occur when the user interacts with HTML forms, 
     such as submitting a form or changing the value of an input field.
  => Document and Window Events: These events occur when the document or window undergoes changes,  
     such as when the page finishes loading or when the window is resized.
  => Custom Events: You can also create custom events to trigger specific actions in your JavaScript code.
*/

/*
 2. Event Handling:
    Event handling involves writing JavaScript code to respond to events when they occur. 
    This is typically done by attaching event listeners to HTML elements. 
    An event listener is a function that is executed when a specific event occurs on an element.
*/

// Adding an event listener for a click event
document.getElementById("myButton").addEventListener("click", function () {
  alert("Button clicked!");
});

/* In this example, when the element with the ID myButton is clicked, 
the anonymous function will be executed, showing an alert with the message "Button clicked!". */

/*
 3. Event Object:
    When an event occurs, JavaScript passes an event object to the event handler function. 
    This object contains information about the event, such as the type of event, 
    the target element, and any additional data related to the event. 
    You can access this object within the event handler function and 
    use its properties and methods to perform actions based on the event.

 4. Event Propagation:
    Events in JavaScript follow a propagation model, which determines the order in which 
    event handlers are executed when an event occurs on a nested hierarchy of elements. 
    There are two phases of event propagation: capturing phase and bubbling phase. 
    During the capturing phase, events are handled from the outermost ancestor element to the target element. 
    During the bubbling phase, events are handled from the target element back up to the outermost ancestor element. 
    You can control event propagation using the addEventListener() method's third parameter, 
    which specifies whether to use capturing or bubbling.
*/
