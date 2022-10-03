/* Comparisons with the Logical And Operator */

// With the logical AND '&&' operator both values need to be true. In other words, if all the values aren't true then it will become false

function testLogicalAnd(val) {
    if (val <= 50 && val >= 25) {
        return "Yes"; // Returns: Yes (If the 'val' number is less or equal to 50 and greater or equal to 25)
    }
    
    return "No"; // Returns: No (If the 'val' number is greater than 50 and less than 25)
}

console.log(testLogicalAnd(10)); // Prints out to the browser console: No (Because 10 is less than and NOT equal to 25)
