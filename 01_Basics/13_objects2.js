// *************************** Singleton (Constructor) *********************** 

const tinderUser = new Object() // object declaration with empty objecrt  || This is singleton object **
const tinderUser2 = {} // This is also a object declaration with empty object || This is not a singleton object **

tinderUser.id = "123abc"
tinderUser.name = "Kishan"
tinderUser.isLoggedIn = false
// console.log(tinderUser); // { id: '123abc', name: 'Kishan', isLoggedIn: false }

const regularUser = {
    email: "some@email.com",
    fullname: {
        userfullname: {
            firstname: "rajiv",
            lastname: "gupta"
        }
    }
}
console.log(regularUser.fullname); // { userfullname: { firstname: 'rajiv', lastname: 'gupta' } }
console.log(regularUser.fullname.userfullname); // { firstname: 'rajiv', lastname: 'gupta' }

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = Object.assign({} , obj1 , obj2)  
// assign => Copy the values of all of the enumerable own properties from one or more source objects to a target object.
// {} => optional paranthesis which is used to combine all the objects in a single paranthesis.
// ({} , obj1 , obj2) => {}-> target , (obj1,obj2)) -> source
console.log(obj3); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
const obj4 = {...obj1, ...obj2} // spread operator to assign all the objects. SImple method.
console.log(obj4); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' } || Same result, latest and easy to spread.

const users = [
    {
        id: 1,
        email: "r@gmail.com"
    },
    {
        id: 2,
        email: "g@gmail.com"
    }
]

users[1].email // In this way, we can access object1 from an array containing multiple objects.

console.log(tinderUser);
console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'isLoggedIn' ] || we can print keys of object
console.log(Object.values(tinderUser)); // [ '123abc', 'Kishan', false ] || we can print values of object
console.log(Object.entries(tinderUser)); // [ [ 'id', '123abc' ], [ 'name', 'Kishan' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn')); 
// hasOwnProperty => this method Determines whether an object has a property with the specified name. 



