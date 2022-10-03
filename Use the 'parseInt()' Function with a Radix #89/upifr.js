/* Use the 'parseInt()' Function with a Radix */

// The 'parseInt()' function can also be used with a Radix. The radix specifies the base of the number in the string, such as base 2 or base 7 or base 8. A base 2 would be a binary which is one of the most common ones to use. The default is base 10 (That's what we use normally every day)

function convertToInteger(str) {
    return parseInt(str, 2) // This will convert the string into a number and it will use 'base 2' (Instead of the default of base 10 it will be using base 2. So, the computer knows that this is a binary number)
}

console.log(convertToInteger("10011")); // Prints out to the browser console: 19 (Because '10011' is 19 in binary) (Type: Number)