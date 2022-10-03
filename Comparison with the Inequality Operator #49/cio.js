/* Comparison with the Inequality Operator */

// The inequality operator is basically the opposite of the equality operator
// Just like the equality operator, this does type convertion as well

function testNotEqual(val) {
    if (val != 99) {
        return "Not Equal"; // Returns: Not Equal (if the 'if statement' condition is true)
    }
    return "Equal"; // Returns: Equal (if the 'if statement' condition is false)
}

console.log(testNotEqual(10)); // Prints out to the browser console: Not Equal (Because 99 is not equal to 10 | If the value is 10 instead of 99 then that means: 10 is not equal to 10 which is not true because 10 IS equal to 10 which it's true)