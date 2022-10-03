/* Add New Properties to an Object */

var ourDog = {
    "name": "Camper", // Property 'name' with a value of: Camper
    "legs": 4, // Property 'legs' with a value of: 4
    "tails": 1, // Property 'tails' with a value of: 1
    "friends": ["everything!"] // Property 'friends' with a value of: ["everything!"]
};

ourDog.bark = "bow-wow"; // This adds a new property name 'bark' in the 'ourDog' variable object with a 'bark' value of: bow-wow

var myDog = {
    "name": "Happy Coder", // Property 'name' with a value of: Happy Coder
    "legs": 4, // Property 'legs' with a value of: 4
    "tails": 1, // Property 'tails' with a value of: 1
    "friends": ["freeCodeCamp Campers"] // Property 'friends' with a value of: ["freeCodeCamp Campers"]
};

myDog["bark"] = "woof!"; // This adds a new property name 'bark' in the 'myDog' variable object with a 'bark' value of: woof!