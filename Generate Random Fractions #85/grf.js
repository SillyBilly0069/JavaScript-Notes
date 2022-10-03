/* Generate Random Fractions */

// There is a simple way to create a random decimal number in JavaScript, it's with the 'Math.random()' function

function randomFraction() {
    return Math.random(); // When you run this you have 0,[Some other random numbers behind the 0] it's always going to be a number between 0 and it could be 0 as well. But mainly it's between 0 and 1 but it could not be 1
}

console.log(randomFraction()); // Prints out to the browser console: 0,[Some other random numbers behind 0] Example: 0,5196435464132