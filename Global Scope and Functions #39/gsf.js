/* Global Scope and Functions */

/*
Scope refers to the visibility of variables.
Variables which are defined outside of a function block have global scope.
Global scope means they can be seen everywhere in your JavaScript code.
*/

var myGlobal = 10; // Current value of 'myGlobal' variable is: 10 (Type: Number)
// This variable can be seen in your JavaScript code because it's not inside of a function, you can use this both inside a function and outside a function

function fun() {
    myGlobal = 5; // Current value of 'myGlobal' variable is: 5 (because it was overwritten) (Type: Number)
    // Without the 'var', 'let', or 'const' keywords this variable is seen as global and can be used everywhere outside or inside functions, but if it has any of these keywords they can't be seen outside of the function but only inside this specific function
}