/* Comparison with the Strict Inequality Operator */

// The strict inequality operator is basically the opposite of the strict equality operator.
// Just like the strict equality operator, it does not convert types but checks them

function testStrictNotEqual(val) {
    if (val !== 17) {
        return "Not Equal"; // Returns: Not Equal (if the 'if statement' condition is true)
    }

    return "Equal"; // Returns: Equal (if the 'if statement' condition is false)
}

console.log(testStrictNotEqual(10)); // Prints out to the browser console: Not Equal (Because 17 is not equal to 10 but the type is the same [number] but just like before if one of the values are not identical and have a false value then the whole thing becomes false | If it was 17 instead of 10 then that would be: 17 === 17 which is true, both numbers are the same and the type is the same as well [Number] both checks are true, therefore the answer is true and the result is: Equal)