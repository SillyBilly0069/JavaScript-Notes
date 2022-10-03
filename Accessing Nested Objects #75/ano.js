/* Accessing Nested Objects */

var myStorage = {
    "car": { // Property 'car' with a value of: "inside": {"glove box": "maps", "passenger seat": "crumbs"}
        "inside": { // Property 'inside' with a value of: {"glove box": "maps", "passenger seat": "crumbs"}
            "glove box": "maps", // Property 'glove box' with a value of: maps
            "passenger seat": "crumbs" // Property 'passenger seat' with a value of: crumbs
        },

        "outside": { // Property 'outside' with a value of: {"trunk": "jack"}
            "trunk": "jack" // Property 'trunk' with a value of: jack
        }
    }
};

var gloveBoxContents = myStorage.car.inside["glove box"]; // Current value of the 'gloveBoxContents' variable is: maps (Reason for that is because it checks 'myStorage' variable object then the 'car' property, then the 'inside' property, then the 'glove box' property which it's value is: maps)
console.log(gloveBoxContents); // Prints out to the browser console: maps