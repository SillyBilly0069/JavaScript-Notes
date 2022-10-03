/* Compare Scopes of the var and let Keywords */

// Another major difference between the var and let keyword is that when you declare a variable with var, it is declared globally or locally if declared inside a function.
// However, let - the scope of let is limited to the block statement or expression that it was declared in.

function checkScope() {
    "use strict"; // This enables strict mode which catches common coding mistakes and unsafe actions. Example: If you create a variable and don't declare it with var, let, or const.

    let i = "function scope"; // Current value of the 'i' variable is: function scope
    
    if (true) {
        let i = "block scope"; // Current value of the 'i' variable is: block scope
        console.log("Block scope i is: ", i); // Prints out to the browser console: Block scope i is: "block scope"
    }
    console.log("Function scope i is: ", i); // Prints out to the browser console: Function scope i is: "function scope"
    return i; // Returns: Current value of the 'i' variable. In this case: function scope

/*
If 'var' keyword is used you get this:
Block scope i is: "block scope"
Function scope i is: "block scope"


But if you use 'let' keyword you get this:
Block scope i is: "block scope"
Function scope i is: "function scope"


If you comment out the first variable 'i' and make the inside the if statement variable 'var i' like this:
    // let i = "function scope";
    
    if (true) {
        var i = "block scope";
        console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
    return i;

You will get:
Block scope i is: "block scope"
Function scope i is: "block scope"


But if the variable inside the if statement was 'let' instead of 'var' like this:
    // let i = "function scope";
    
    if (true) {
        let i = "block scope";
        console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
    return i;

You will get:
Block scope i is: "block scope"
Function scope i is: ReferenceError: i is not defined
*/
}

console.log(checkScope()); // Prints out to the browser console: Block scope i is: "block scope" Function scope i is: "function scope"
