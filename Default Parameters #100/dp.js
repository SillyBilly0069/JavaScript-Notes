/* Default Parameters */

// In order to create more flexible functions you can use default parameters. The default parameters kicks in when the argument is not specified or is undefined.

const increment = (function() {
    return function increment(number, value = 1) {
        return number + value; // Returns: increments by 1 to whatever number, check lines 11 and 12
    };
})();

console.log(increment(5, 2)); // Prints out to the browser console: 7
console.log(increment(5)); // Prints out to the browser console: 6