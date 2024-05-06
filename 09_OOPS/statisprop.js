/*
  => Static properties and methods in JavaScript belong to the class itself rather than to instances of the class. 
     They are accessed using the class name, rather than through an instance.
  => Static properties are shared among all instances of a class and are accessed directly through the class name. 
     They are declared using the static keyword.


 */
class User{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

/* In this example, createId is a static method. 
   It doesn't require an instance of the class to be called. It can be invoked directly on the class. */

const rajiv = new User("rajiv")
console.log(rajiv.createId()); // TypeError: rajiv.createId is not a function

/* Since createId is a static method, it cannot be called on an instance of the class (rajiv). Instead, 
   it should be called directly on the class itself. */

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email;
    }

}
const iphone = new Teacher("iphone", "iphone@apple.com")
iphone.logMe() // Output: Username: iphone

/*
  ==>>> In this subclass Teacher, the logMe method is inherited from the User class. 
        This demonstrates that instance methods are inherited by subclasses. 
        However, static methods like createId are not inherited by subclasses unless explicitly implemented in the subclass.

  ==>>> In summary, static properties and methods in JavaScript provide a way to define class-level functionality 
        that is not tied to individual instances of the class. 
        They can be accessed directly on the class itself and are useful for utility functions, constants, or factory methods.
 */