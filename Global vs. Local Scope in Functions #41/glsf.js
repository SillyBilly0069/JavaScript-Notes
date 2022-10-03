/* Global vs. Local Scope in Functions */

// It's possible to have variables global and local with the same name, when you do this, the local variable takes precedent over the global variable.

var outerWear = "T-Shirt"; // Current value of 'outerWear' is: T-Shirt (Type: String)

function myOutfit() {
    var outerWear = "sweater" // Current value of 'outerWear' is: sweater (Type: String)
    return outerWear; // Returns the 'outerWear' value which is: sweater (Type: String)
}

console.log(myOutfit()); // Prints to the browser console the 'myOutfit' function which then returns the 'outerWear' variable value inside the function which is: sweater (Type: String)
console.log(outerWear()); // Prints to the browser console the value of the 'outerWear' variable which is: T-Shirt (Type: String)