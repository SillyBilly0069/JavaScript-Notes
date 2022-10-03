/* Use the Conditional (Ternary) Operator */

// Ternary operator is a one line if else expression

/*
Syntax:
condition ? statement-if-true : statement-if-false;
*/

function checkEqual(a, b) {
// If-else statement:
    // if (a === b) {
    //     return true; // Returns: true (If 'a' is equal and data type equal with 'b')
    // } else {
    //     return false; // Returns: false (If 'a' is not equal or is not data type equal with 'b')
    // }

// Ternary Operator:
    return a === b ? true : false; // This is an example you wouldn't use this but you would use (return a === b;) instead. Both do the same thing. But this is just an example for the ternary operator
}

console.log(checkEqual(1, 2)); // Prints out to the browser console: False (Because 1 is not equal to 2 but the data type is the same. Though both the numbers and the data type needs to be equal in order for it to be true)