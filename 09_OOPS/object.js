function multiplyBy5(num) {
    return num*5;
}
multiplyBy5.power = 2;
console.log(multiplyBy5(5)); // 25
console.log(multiplyBy5.power); // 2
console.log(multiplyBy5.prototype); // {}

// -----------------------------------------------------------------------------------------------------------

function createuser(username, age){
    this.username = username;
    this .age = age;
}
createuser.prototype.incrementr = function (){
    this.score++;
}
createuser.prototype.printMe = function(){
    console.log(`Price is ${this.score}`);
}
const chai = new createuser("chai",25)
const tea = createuser("tea", 250)

chai.printMe()

/*
  Notes:
  Here's what happens behind the scenes when the new keyword is used:

  => A new object is created: The new keyword initiaes the creation of a new javascript object.

  => A prototype is linked: The newly created object gets linked to the prototype property of the constructor function
     This means that it has access to properties and methods defined on the constructor's prototype.

  => The constructor is called: The constructor function is called with the specified argument and this is bound to
     the newly created object. If no explicit return value is specified from the constructor, javascript assumes this, 
     the newly created object, to be the intended return value.

  => The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value
     (object, array, function, etc.), the newly created object is returned.
*/