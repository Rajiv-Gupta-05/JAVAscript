// ********************************** Strings *****************************************

const name = "Rajiv"
const repoCount = 53
console.log(`Hello my name is ${name} and my repocount in github is ${repoCount}`); // string interpolation

const gameName = new String("Rajiv-g-kumar")
console.log(gameName[0]); // key value pair accessing.
console.log(gameName.__proto__); // accesing the prototypes.

console.log(gameName.length);
console.log(gameName.toUpperCase()); // RAJIVG
console.log(gameName.charAt(3)); // i
console.log(gameName.indexOf('i')); // 3


const newString = gameName.substring(0, 4)
console.log(newString); // Raji

const anotherString = gameName.slice(-8, -4)
console.log(anotherString); // Raj

const newStringOne = "   rajiv   "
console.log(newStringOne); //   rajiv   
console.log(newStringOne.trim()); //rajiv

const url = "https://rajiv.com/rajiv%20gupta"
console.log(url.replace('%20', '-')); // https://rajiv.com/rajiv-gupta
console.log(url.includes('rajiv')); //true
console.log(url.includes('kumar')); //false

console.log(gameName.split('-')); // [ 'Rajiv', 'g', 'kumar' ]
