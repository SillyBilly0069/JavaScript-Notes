/* Use the Rest Operator with Function Parameters */

// The rest operator allows you to create a function that takes a variable number of arguments. The rest operator is 3 dots [...]

const sum = (function() {
    return function sum(...args) {
        return args.reduce((a, b) => a + b, 0);
    };
})();

console.log(sum(1, 2, 3)); // Prints out to the browser console: 5

// With the rest operator (...) you can have any number of arguments