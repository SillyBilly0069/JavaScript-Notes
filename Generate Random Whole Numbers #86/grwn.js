/* Generate Random Whole Numbers */

// Often you want a random whole number instead of a random decimal number. That can be accomplished with 'Math.floor()' function. This rounds down to the nearest whole number.

var randomNumberBetween0and19 = Math.floor(Math.random() * 20); // This will create a random whole number between 0 and 19 (Remember 'Math.random()' can never be 1. It can be 0, but it can never be 1) [In this case it can never be 20 instead of 1]

function randomWholeNum() {
    return Math.floor(Math.random() * 10); // This will create a random whole number between 0 and 9 (Remember 'Math.random()' can never be 1. It can be 0, but it can never be 1) [In this case it can never be 10 instead of 1]
}

console.log(randomeWholeNum()); // Prints out to the browser console: A random whole number between 0 and 9
console.log(randomNumberBetween0and19); // Prints out to the browser console: A random whole number between 0 and 19