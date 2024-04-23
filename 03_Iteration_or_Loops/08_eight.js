// **************************** reduce *****************************

const myNums = [1, 2, 3, 4, 5]; // Array containing numbers
const total = myNums.reduce((acc, currVal) => {
  return acc + currVal; // Adding current value to the accumulator
}, 0); // Initial value of the accumulator
console.log(total); // Output the total

/*
  => The reduce() method in JavaScript is a powerful array method used to reduce an array to a single value. 
     It iterates over each element of the array and applies a callback function to combine them into a single value.  
     
  => In this case, the initial value of the accumulator is 0, specified as the second argument to reduce().
  => Inside the callback function, the current value currVal is added to the accumulator acc. 
     This process is repeated for each element in the array.
  => Finally, the result of the accumulation is stored in the variable total.
  => total is then logged to the console using console.log().
*/

// -------------------------------------------------------------------------------------------------------------------

const shoppingCart = [
    {
        itemname: 'js course',
        price: 2999,
    },
    {
        itemname: 'py course',
        price: 3999,
    },
    {
        itemname: 'ruby course',
        price: 4999,
    },
    {
        itemname: 'cpp course',
        price: 999,
    }
];

const addCart = shoppingCart.reduce((acc , item) => {
    return item.price + acc;
},0)
console.log(addCart);

// ----------------------------------------------------------------------------------------------------------

const arrays = [[1, 2], [3, 4], [5, 6]];

const flattened = arrays.reduce((accumulator, currentValue) => {
  return accumulator.concat(currentValue);
}, []);

console.log(flattened); // Output: [1, 2, 3, 4, 5, 6]

// -----------------------------------------------------------------------------------------------------------

const data = [
    { category: 'A', value: 10 },
    { category: 'B', value: 20 },
    { category: 'A', value: 30 },
    { category: 'C', value: 40 }
  ];
  
  const groupedByCategory = data.reduce((accumulator, item) => {
    (accumulator[item.category] = accumulator[item.category] || []).push(item);
    return accumulator;
  }, {});
  
  console.log(groupedByCategory);
  /*
  Output:
  {
    A: [ { category: 'A', value: 10 }, { category: 'A', value: 30 } ],
    B: [ { category: 'B', value: 20 } ],
    C: [ { category: 'C', value: 40 } ]
  }
  */
  