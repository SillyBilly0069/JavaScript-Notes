/* Delete Properties From an Object */

var ourDog = {
    "name": "Camper", // Property 'name' with a value of: Camper
    "legs": 4, // Property 'legs' with a value of: 4
    "tails": 1, // Property 'tails' with a value of: 1
    "friends": ["everything!"], // Property 'friends' with a value of: ["everything!"]
    "bark": "bow-wow" // Property 'bark' with a value of: bow-wow
};

delete ourDog.bark; // This will delete the 'bark' property from the 'ourDog' variable object

var myDog = {
    "name": "Happy Coder", // Property 'name' with a value of: Happy Coder
    "legs": 4, // Property 'legs' with a value of: 4
    "tails": 1, // Property 'tails' with a value of: 1
    "friends": ["freeCodeCamp Campers"], // Property 'friends' with a value of: ["freeCodeCamp Campers"]
    "bark": "woof" // Property 'bark' with a value of: woof
};

delete myDog.tails; // This will delete the 'tails' property from the 'myDog' variable object