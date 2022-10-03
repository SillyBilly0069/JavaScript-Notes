/* Declare a Read-Only Variable with the const Keyword */

// Const is another way to declare a variable. It has all the features of let but it's also read-only. You cannot reassign a const.

function printManyTimes(str) {
    "use strict"; // This enables strict mode which catches common coding mistakes and unsafe actions. Example: If you create a variable and don't declare it with var, let, or const.

    const sentence = str + " is cool!"; // Current value of 'sentence' variable is: freeCodeCamp is cool! (The 'str' in this case is: freeCodeCamp. Check line 17)

    sentence = str + " is amazing!"; // Remove this.

    for (let i = 0; i < str.length; i+=2) {
        console.log(sentence); // Prints out to the browser console: freeCodeCamp is cool! (6 times because it has 12 letters, and we used 'i+=2' which means it will be like this: 2 letters 'fr' = freeCodeCamp is cool! . And loop again: 2 letters 'ee' = freeCodeCamp is cool! . etc. [Test it out in the browser console])
    }
}

console.log(printManyTimes("freeCodeCamp")); // Prints out to the browser console: SyntaxError: unknown: "sentence" is read-only

// If you declare a variable with the const keyword you cannot reassign it afterwards
// If you know for sure that you never want to reassign a variable, always use const so you don't accidentally reassign it when you don't mean to.

// To fix the error above you need to remove: sentence = str + " is amazing!";

// Once that is removed you will be able to run it and print out to the console: freeCodeCamp is cool!