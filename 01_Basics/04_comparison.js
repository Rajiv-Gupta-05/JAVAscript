// ************************* Comparisons ****************************

console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);

// Javascript don't allow you to compare two different datatypes.
// Javascript only compare the same datatypes.

console.log("2" > 1); // javascript convert "2" into 2.
console.log("02" > 1);

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); // true ==> The rason is that an eqaulity check == and comparisons > < >= <= work differently.
// Comparisons convert null to a number, treating it as 0. That's why null>=0 is true.

console.log(undefined == 0); //false
console.log(undefined > 0); //false
console.log(undefined < 0); //false

console.log("2" === 2); // false  |  "===" strictly check the value and datatypes also.
