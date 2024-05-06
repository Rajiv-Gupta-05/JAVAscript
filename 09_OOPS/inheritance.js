class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

/* User: This is the superclass, defining a basic user with a username property and a logMe method to log the username. */

class Teacher extends User {
    constructor(username, email, password){
        super(username)
        this.email = email;
        this.password = password
    }

    addCourses(){
        console.log(`A New course was added by ${this.username}`);
    }
}

/* Teacher: This is the subclass of User, extending its functionality. 
   It inherits the username property and logMe method from User and adds its own properties 
   like email, password, and methods like addCourses. */

const chai = new Teacher("chai", "chai@abc.com", "111")
chai.addCourses() // Output: A New course was added by chai

const masalaChai = new User("masalachai")
masalaChai.logMe() // Output: USERNAME is masalachai

console.log(chai === masalaChai); // // Output: false, because they are different instances
console.log(chai instanceof Teacher); // Output: true, because chai is an instance of Teacher

/* Notes:
   -> Teacher inherits from User using the extends keyword.
   -> The super() method is used in the Teacher constructor to call the constructor of the superclass (User) 
      and initialize the username.
   -> Instances of Teacher can access methods from both Teacher and User, 
      while instances of User can only access methods defined in User.

   -> chai is an instance of Teacher with the username "chai". 
      It can access methods like addCourses inherited from Teacher and logMe from User.
   -> masalaChai is an instance of User with the username "masalachai". It can only access methods defined in the User class.
   -> The last two console.log statements demonstrate the difference
      between the instances and confirm that chai is an instance of Teacher.
*/