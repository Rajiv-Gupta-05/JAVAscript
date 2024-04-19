// ************************* Numbers ***************************

const score = 400 // Here javascript know that this is number.
console.log(score); // 400

const balance = new Number(400) // Explicitly define the datatypes is Number.
console.log(balance); // [Number:400] 

console.log(balance.toString()); // convert number to string datatypes
console.log(balance.toString().length); //3
console.log(balance.toFixed(2)); //400.00

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(3)); // 124

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); // 1,00,000 it converts into indian currency and uses commas.

// ************************* Maths **************************

console.log(Math); // Object [Math] {}
console.log(Math.abs(-4)); // 4 it print absolute value (it will convert -ve value to +ve but not +ve to _ve.)
console.log(Math.round(4.69)); //5
console.log(Math.ceil(4.69)); // 5 || ceiling value means if littlebit more than 4 than it returns 5 
console.log(Math.floor(4.69)); // 4 || floor value means it always take the lower value 
console.log(Math.min(4, 8, 5, 1, 9, 10)); // min.value -1
console.log(Math.max(8, 9, 1, 5, 22, 11, 88, 2)); // max-value- 88

console.log(Math.random); // it will generates random number between 0-1.
console.log((Math.random()*10) + 1); // it will not generate 0 value. The min. value it will generate is 1.

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min) // it will generate the random number between min and max.

