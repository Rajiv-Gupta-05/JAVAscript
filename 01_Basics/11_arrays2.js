// *********************************** Array -2 *********************************

const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros);
// console.log(marvel_heros); // [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ] || Array inside another array.
// console.log(marvel_heros[3][1]); // flash

const heroes = marvel_heros.concat(dc_heros)
console.log(heroes); // [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ] || Includes all elements in a single array.

const allnewHeroes = [...marvel_heros, ...dc_heros] // Now both the array are spread not an array. || also called spread operator.
console.log(allnewHeroes); // [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const another_array = [1,2,3, [4,5,6], 7 , [6,7, [4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array); // [1,2,3,4,5,6,7,6,7,4,5]
// flat -> return a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// Infinity -> Check all the depths used in the given array, and you can also add depths manually like 1, 2, 3, and so on.


console.log(Array.isArray("rajiv")); // false -> this is not an array
console.log(Array.from("rajiv")); // [ 'r', 'a', 'j', 'i', 'v' ] -> Here from keyword can convert ("rajiv") to an array form.
console.log(Array.from({name: "rajiv"})) // [] -> returns an empty array is because the {name: "rajiv"} object doesn't have any iterable properties.


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));// [ 100, 200, 300 ] -> here "of" keyword returns a new array from a set of elements.

// Learn more about isArray, fromArray, and ofarray.
