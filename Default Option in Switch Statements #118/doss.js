/* Default Option in Switch Statements */

// The default option is kind of like 'else' in an 'if else statement'

function switchOfStuff(val) {
    var answer = ""; // Current value of the 'answer' variable is: [Empty String] (quotes without any spaces it's an empty string)

    switch (val) {
        case "a": // This is readed like: If 'val' is equal to "a"
            answer = "apple"; // Current value of the 'answer' variable is: apple (If this case is true)
            break; // If it's true it stops here, else if it's false moves to the next case
        
        case "b": // This is readed like: If 'val' is equal to "b"
            answer = "bird"; // Current value of the 'answer' variable is: bird (If this case is true)
            break; // If it's true it stops here, else if it's false moves to the next case
        
        case "c": // This is readed like: If 'val' is equal to "c"
            answer = "cat"; // Current value of the 'answer' variable is: cat (If this case is true)
            break; // If it's true it stops here, else if it's false moves to the next case
        
        default: // This is just like the 'else' in the 'if else statement'
            answer = "stuff"; // Current value of the 'answer' variable is: stuff (If all the 'cases' are false)
            break; // If all the 'cases' are false it stops here
    }

    return answer; // Returns the current value of the 'answer' variable
}

console.log(switchOfStuff("a")); // Prints out to the browser console: apple (Because the first 'case' in the 'switch statement' is true)