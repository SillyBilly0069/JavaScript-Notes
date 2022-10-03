/* Differences Between the var and let Keywords */

/*
For a long time in JavaScript if you were going to declare a variable you had to use the var keyword.
But starting with ES6 in 2015 we can now declare variables with let and const as well.

One of the things is that 'let' does not let you declare a variable twice.
*/

/*
var catName = "Quincy";
var quote;

var catName = "Beau";

As you can see above the keyword var 'catName' was used twice, and it simply overwrote the value inside the 'catName'.
But if you use 'let' instead of 'var' keyword you would get an error saying: Duplicate declaration "catName"

This is good that it has an error because usually you don't want to declare the same variable twice in the same scope

Now in order for you to overwrite the value inside the 'catName' variable with 'let' you simply have to remove the let keyword and make it like this: catName = "Beau";

Like this:
let catName = "Quincy";
let quote;

catName = "Beau";
*/

let catName = "Quincy"; // Current value of the 'catName' variable is: Quincy
let quote; // Current value of the 'quote' variable is: undefined

catName = "Beau"; // Current value of the 'catName' variable is: Beau

function catTalk() {
    "use strict"; // This enables strict mode which catches common coding mistakes and unsafe actions. Example: If you create a variable and don't declare it with var, let, or const.

    catName = "Oliver"; // Current value of the 'catName' variable is: Oliver
    quote = catName + " says Meow!"; // Current value of the 'quote' variable is: Oliver says Meow!
}

console.log(catTalk()); // Prints out to the browser console: Oliver says Meow!