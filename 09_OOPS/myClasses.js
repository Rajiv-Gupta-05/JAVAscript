class User {
    constructor(name, email, password){
        this.name = name;
        this.email = email;
        this.password = password;
    }
    encryptPassword(){
        return `${this.password}abc`
    }
    chnageUserName(){
        return `${this.name.toUpperCase()}`
    }
}
const chai = new User ("rajiv", "rajiv@test.com", "123")
console.log(chai.encryptPassword());
console.log(chai.chnageUserName());

// behind the scene

/*
 When JavaScript encounters the class keyword, 
 it internally uses prototypal inheritance. 
 Each method defined inside the class is added to the prototype of the class, 
 allowing all instances of that class to access those methods.

 So, behind the scenes, the class declaration is essentially syntactic sugar for 
 the prototype-based inheritance model that JavaScript has always had.

 When you create a new instance of a class using new, JavaScript does the following:
  1. Creates a new empty object.
  2. Sets the prototype of this new object to the prototype property of the constructor function 
     (in this case, User.prototype).
  3. Calls the constructor function with this set to the newly created object.
  4. Returns the newly created object.

This process ensures that each instance of the class has its own set of properties and methods, 
but they share methods defined in the class's prototype, leading to memory efficiency.
*/