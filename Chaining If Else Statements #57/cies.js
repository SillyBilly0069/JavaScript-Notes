/* Chaining If Else Statements */

function testSize(num) {
    if (num < 5) {
        return "Tiny"; // Returns: Tiny (If the 'if statement' condition is true)
    } else if (num < 10) {
        return "Small"; // Returns: Small (If the first 'if statement' condition is false)
    } else if (num < 15) {
        return "Medium"; // Returns: Medium (If the second 'if statement' condition is false)
    } else if (num < 20) {
        return "Large"; // Returns: Large (If the third 'if statement' condition is false)
    } else {
        return "Huge"; // Returns: Huge (If all the 'if statements' conditions are false)
    }
}

console.log(testSize(7)); // Prints out to the browser console: Small (Because 7 is less than 10 so the second condition is true therefore the second 'if statement' condition gets executed) [In this case only since it's 7]