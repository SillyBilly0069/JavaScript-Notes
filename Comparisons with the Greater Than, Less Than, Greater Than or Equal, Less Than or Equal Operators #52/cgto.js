/* Comparisons with the Greater Than | Less Than | Greater Than or Equal | Less Than or Equal Operator */

/*

The greater than operator is the same as in math.

Example:
5 > 10 is not true because 5 is less than 10
10 > 5 is true because 10 is greater than 5

Same thing with the less than operators
5 < 10 is true because 5 is less than 10
10 < 5 is not true because 10 is greater than 5

You can use the greater or equal operator as well
5 >= 10 is not true because 5 is not greater or equal to 10
10 >= 5 is true because 10 is greater than 5 but not equal, but it's still true

You can use the less or equal operator too
5 <= 10 is true because 5 is less than 10 but not equal, but it's still true
10 <= is not true because 10 is not less than 5 or equal to it

*/

function testGreaterThan(val) {
    if (val > 100) {
        return "Over 100"; // Returns: Over 100 (If the 'if statement' condition is true)
    }

    if (val > 10) {
        return "Over 10"; // Returns: Over 10 (If the first 'if statement' condition is false)
    }

    return "10 or Under"; // Returns: 10 or Under (If both of the 'if statements' conditions are false)
}

console.log(testGreaterThan(10)); // Prints out to the browser console: 10 or Under (Because both of the 'if statements' conditions are false and we are passing 10 to the 'val' and 10 is not greater than 10, so you get as a result: 10 or Under)


function testGreaterOrEqual(val) {
    if (val >= 20) {
        return "20 or Over"; // Returns: 20 or Over (If the 'if statement' condition is true)
    }

    if (val >= 10) {
        return "10 or Over"; // Returns: 10 or Over (If the first 'if statement' condition is false)
    }

    return "Less than 10"; // Returns: Less than 10 (If both of the 'if statements' conditions are false)
}

console.log(testGreaterOrEqual(10)); // Prints out to the browser console: 10 or Over (Because the first 'if statement' condition is false and we are passing 10 to the 'val' and 10 is not greater but it's equal to 10, therefore the second 'if statement' condition is true so you get: 10 or Over)


function testLessThan(val) {
    if (val < 25) {
        return "Under 25"; // Returns: Under 25 (If the 'if statement' condition is true)
    }

    if (val < 55) {
        return "Under 55"; // Returns: Under 55 (If the first 'if statement' condition is false)
    }

    return "55 or Over"; // Returns: 55 or Over (If both of the 'if statements' conditions are false)
}

console.log(testLessThan(10)); // Prints out to the browser console: Under 25 (Because the first 'if statement' condition is true and we are passing 10 to the 'val' and 10 is less than 25, therefore the result is: Under 25)


function testLessOrEqual(val) {
    if (val <= 12) {
        return "Smaller Than or Equal to 12"; // Returns: Smaller Than or Equal to 12 (If the 'if statement' condition is true)
    }

    if (val <= 24) {
        return "Smaller Than or Equal to 24"; // Returns: Smaller Than or Equal to 24 (If the first 'if statement' condition is false)
    }

    return "More Than 24"; // Returns: More Than 24 (If both of the 'if statements' conditions are false)
}

console.log(testGreaterOrEqual(10)); // Prints out to the browser console: Smaller Than or Equal to 12 (Because the first 'if statement' condition is true and we are passing 10 to the 'val' and 10 is less and NOT equal to 12 which is true, so you get as a result: Smaller Than or Equal to 12)