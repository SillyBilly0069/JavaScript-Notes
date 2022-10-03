/* Write Arrow functions with Parameters */

// Just like in a normal function, you can pass arguments to arrow functions.

// Converting this function into an arrow function:
// const myConcat = function(arr1, arr2) {
//     return arr1.concat(arr2);
// };

// console.log(myConcat([1, 2], [3, 4, 5]));


// Arrow function:

const myConcat = (arr1, arr2) => arr1.concat(arr2); // Returns: [1, 2, 3, 4, 5] (In this case only)

console.log(myConcat([1, 2], [3, 4, 5])); // Prints out to the browser console: [1, 2, 3, 4, 5]