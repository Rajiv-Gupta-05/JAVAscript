const User = {
    _email: 'a@user.com',
    _password: "abcdef",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    },

    get password(){
        return this._password.toUpperCase()
    },

    set password(value){
        this._password = value
    }
}

const tea = Object.create(User) // Creating a new user object using the factory function
console.log(tea.email);
console.log(tea.password);

/**
  Factory functions are particularly useful when you need to create multiple instances of 
  objects with similar behavior but different state, 
  and they provide encapsulation and control over object creation.
 */