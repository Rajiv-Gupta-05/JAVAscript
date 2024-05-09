/*
  Getter Methods:
  -> A getter method is used to get the value of a specific property of an object.
  -> Getter methods are defined using the get keyword followed by the property name.
  -> When you access the property using dot notation, the getter method is automatically invoked.
  -> Getter methods do not require parentheses when invoked.

  Setter Method:
  -> A setter method is used to set the value of a specific property of an object.
  -> Setter methods are defined using the set keyword followed by the property name.
  -> When you assign a value to the property using dot notation, the setter method is automatically invoked.
  -> Setter methods receive a single parameter representing the new value to be assigned.
*/

/*
  Why Use Getter and Setter Methods?
   -> Encapsulation: Getters and setters allow you to encapsulate the internal state of an object, 
      providing controlled access to its properties.
   -> Validation: You can perform validation or transformation of values before setting or returning them.
   -> Computed Properties: Getters can compute and return values based on other properties of the object.
   -> Compatibility: They help maintain compatibility with existing code while adding custom behavior to property access.

   ==>>> Overall, getters and setters are powerful tools for managing the access and modification of object properties, 
         allowing for better control and flexibility in your code.
 */

class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
  get email() {
    return this._email.toUpperCase();
  }
  set email(value) {
    this._email = value;
  }
  get password() {
    return `${this._password}rajiv`;
  }
  set password(value) {
    this._password = value;
  }
}

const rajiv = new User("r@rajiv.ai", "abc");
console.log(rajiv.password);
console.log(rajiv.email);
