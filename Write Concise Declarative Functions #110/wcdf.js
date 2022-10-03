/* Write Concise Declarative Functions */

// An object can contain a function.

const bicycle = {
    gear: 2, // Property 'gear' with a value: 2
    setGear(newGear) {
        "use strict"; // This enables strict mode which catches common coding mistakes and unsafe actions. Example: If you create a variable and don't declare it with var, let, or const.
        this.gear = newGear; // Picks the 'gear' property and sets a 'newGear' value in the 'gear' property (Aka 3 in this case) Check line 13
    }
};

bicycle.setGear(3); // Sets the value of 'gear' property inside the 'bicycle' variable to: 3 (In this case only)
console.log(bicycle.gear); // Prints out to the browser console: 3