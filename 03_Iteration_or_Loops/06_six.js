// ******************** foreach and filter*************************

const coding = ["js", "ruby", "python", "cpp", "java"];

// Using forEach to iterate over each item in the 'coding' array
const values = coding.forEach((item) => {
  console.log(item);
  return item; // This return statement is within the forEach callback function
});

console.log(values); // undefined
/*
So, values will indeed be undefined because the forEach method doesn't return anything meaningful to assign to it. 
The console.log(values); statement will print undefined to the console.
*/

// ------------------------------------------ Filter-----------------------------------------------------
// Using Arrow Function with Implicit Return:
const myNums = [ 1,2,3,4,5,6,7,8,9,10]
const newNums  = myNums.filter( (nums) => nums > 4 )
console.log(newNums); // [ 5, 6, 7, 8, 9, 10 ]

// Using Arrow Function with Explicit Return:
const myNum = [ 1,2,3,4,5,6,7,8,9,10]
const newNum  = myNum.filter( (nums) => { // if we open scope then return keyword is compulsory.
    return nums > 4
} )
console.log(newNum); // [ 5, 6, 7, 8, 9, 10 ]

/*
 Both approaches produce the same result. The difference lies in the syntax used for the arrow function: 
 one uses an implicit return, while the other uses an explicit return. 
 Both are valid and achieve the desired filtering of the array.
*/

// -----------------------------------------------------------------------------------------------------------

const demo = []

myNum.forEach ( (num) => {
    if (num > 4) {
        demo.push(num)
    }
} )

console.log(demo); // [ 5, 6, 7, 8, 9, 10 ]

/*
 We're achieving the same result as in the previous examples, but instead of using the filter method, 
 we're using the forEach method along with an if statement to filter elements.
*/

// ---------------------------------------------------------------------------------------------------------

const books = [
    {
        title: 'Book one', genre: 'fiction', publish: 1981, edition: 2004
    },
    {
        title: 'Book two', genre: 'fantasy', publish: 1995, edition: 2010
    },
    {
        title: 'Book three', genre: 'science fiction', publish: 2007, edition: 2015
    },
    {
        title: 'Book four', genre: 'mystery', publish: 2012, edition: 2018
    },
    {
        title: 'Book five', genre: 'historical fiction', publish: 1965, edition: 1980
    }
];

const userBooks = books.filter( (bk) => {
    return bk.genre = 'fiction'
} )

const userBook = books.filter ( (bk) => {
    return bk.publish >= 2000 && bk.genre === 'science fiction';
} );
console.log(userBooks);
console.log(userBook);