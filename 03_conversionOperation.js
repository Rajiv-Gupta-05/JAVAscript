// ************************* Conversions *************************

let score  = 45

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" -> convert easily into number 33.
// "33abc" -> it return NaN(Not a Number)
// true -> 1; false -> 0;

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(typeof isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 -> true; 0 -> false;
// "" -> false
// "Rajiv" -> true

let someNumber = 69

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

// ************************* Operations *************************

let value = 3
let negValue = -value
console.log(negValue);

console.log(6+9);
console.log(2**2);
console.log(2%3);

let str1 = "Hello"
let str2 = " Rajiv"
let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log(+true);
console.log(+"");

let num1, num2, num3
num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++;
++gameCounter
console.log(gameCounter);

// link to study in details:
// https://tc39.es/ecma262/multipage/abstract-operations