/* Use the 'parseInt()' Function */

// It takes a string and returns an integer. If the string cannot be converted into an integer it returns "NaN" --> [Not a Number]

function convertToInteger(str) {
    return parseInt(str); // Returns: A string value to a number
}

console.log(convertToInteger("56")); // Prints out to the browser console: 56 (Converted to a number since we passed a string to the 'convertToInteger() function) [Type: Number]