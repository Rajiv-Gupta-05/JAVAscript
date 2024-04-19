// ******************************** Array **********************************

const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ["rajiv", "kumar"]
const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]); // 1

// Array Methods

myArr.push(6)
myArr.push(7)
myArr.pop()
console.log(myArr); // [0,1,2,3,4,5,6]

myArr.unshift(9)
console.log(myArr); // [9,0,1,2,3,4,5,6] || this method add the number at the starting point.

myArr.shift()
console.log(myArr); // [0,1,2,3,4,5,6] || this method remove the starting number of the array.

console.log(myArr.includes(9)); // false
console.log(myArr.indexOf(9)); // -1

const newArr = myArr.join()
console.log(myArr); // [0,1,2,3,4,5,6]
console.log(newArr); // 0,1,2,3,4,5,6  -> in this, join can bind the array and convert it into the string.

// slice, splice--------------

console.log("A ", myArr); // A [0,1,2,3,4,5,6]

const myn1 = myArr.slice(1,3)
console.log(myn1); // [1,2]
console.log("B ", myArr); // B [0,1,2,3,4,5,6] || Slice Doesnot Manipulate original array

const myn2 = myArr.splice(1,3)
console.log(myn2);// [1,2,3]
console.log("C ", myArr); // C [0,4,5,6] || Splice Manipulate original array
