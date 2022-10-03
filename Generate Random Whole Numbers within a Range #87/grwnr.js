/* Generate Random Whole Numbers within a Range */

// You can also generate whole numbers within a range

function ourRandomRange(ourMin, ourMax) {
    return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

var ourRandom = ourRandomRange(1, 9); // Current value of the 'ourRandom' variable is: A random whole number between 1 and 9

console.log(ourRandom); // Prints out to the browser console: A random whole number between 1 and 9 (In this case only) in 'ourRandom' variable


function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

var myRandom = randomRange(5, 15) // Current value of the 'myRandom' variable is: A random whole number between 5 and 15

console.log(myRandom); // Prints out to the browser console: A random whole number between 5 and 15 (In this case only) in 'myRandom' variable