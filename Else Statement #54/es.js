/* Else Statement */

function testElse(val) {
    var result = ""; // Current value of the 'result' variable is: [Empty Space] (In other words, an empty string)

    if (val > 5) {
        result = "Bigger than 5"; // Current value of the 'result' variable is: Bigger than 5 (If the 'if statement' condition is true)
    } else {
        result = "5 or Smaller" // Current value of the 'result' variable is: 5 or Smaller (If the 'if statement' condition is false)
    }

    return result; // Returns the 'result' variable value
}

console.log(testElse(4)); // Prints out to the browser console: 5 or Smaller (Because 4 is less than 5 therefore the 'if statement' condition is false, the 'else' block gets executed since the 'if statement' condition is false)