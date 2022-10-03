/* Comparisons with the Logical Or Operator */

// With the logical Or (||) only 1 value/condition needs to be true in order for it to result as a true. If one is false and the other one is true then it will return true, if both are false then it will return false, and if both are true then it will return true

function testLogicalOr(val) {
    if (val < 10 || val > 20) {
        return "Outside"; // Returns: Outside (If the 'if statement' condition is true)
    }

    return "Inside"; // Returns: Inside (If the 'if statement' condition is false)
}

console.log(testLogicalOr(15)); // Prints out to the browser console: Inside (Because 15 is not less than 10, and 15 is not greater than 20)