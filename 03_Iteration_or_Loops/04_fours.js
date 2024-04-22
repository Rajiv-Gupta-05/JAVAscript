// *********************** for in loop ****************************

/*
 The for...in loop in JavaScript is used to iterate over the enumerable properties of an object. 
 It's particularly useful when you want to loop through the keys of an object. 
*/

const myObject = {
    game1: 'COD',
    game2: 'PUBG',
    game3: 'Clash of Clan'
};

// Iterate over each key in myObject using for...in loop
for (const key in myObject) {
    // Check if the property is directly present in the object (not inherited)
    if (myObject.hasOwnProperty(key)) {
        console.log(`${key}: ${myObject[key]}`);
    }
}

/*
This loop iterates over the keys of the myObject object and prints each key-value pair to the console. 
Additionally, it filters out inherited properties using the hasOwnProperty() 
method to ensure that only the object's own properties are processed.
*/

// ----------------------------------------------------------------------------------------------------

const programming = ["js", "rb", "py", "java", "cpp"]
for (const key in programming) {
    console.log(programming[key]);
}

// -------------------------------------------------------------------------------------------------------

const map = new Map();
map.set("IN", "India");
map.set("NR", "Nepal");
map.set("FR", "France");
map.set("NR", "Nepal");

for (const [key, value] in map) {
  console.log(key, ":-", value); // This will not iterable. || Empty result will print in the console.
}

/*
The for...in loop in JavaScript is not suitable for iterating over the elements of a Map object. 
Instead, you should use the for...of loop or the Map.prototype.forEach() method.
*/