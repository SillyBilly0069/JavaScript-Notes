/* Use the Spread Operator to Evaluate Arrays In-Place */

// The spread operator looks just like the rest operator, 3 dots [...]. But it expands an already existing array. Or it spreads out an array. It takes an array and it spreads it out into its individual parts.

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];

let arr2; // Current value of the 'arr2' variable is: undefined

(function() {
    arr2 = [...arr1]; // Current value of the 'arr2' variable is: ['JAN', 'FEB', 'MAR', 'APR', 'MAY']
    arr1[0] = 'potato';
})();

console.log(arr2); // Prints out to the browser console: ['JAN', 'FEB', 'MAR', 'APR', 'MAY']