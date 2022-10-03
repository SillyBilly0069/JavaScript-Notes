/* Accessing Nested Arrays */

// Array bracket notation can be changed to access nested arrays

var myPlants = [
    {
        type: "flowers", // Property 'type' with a value of: flowers
        list: [
            "rose", // Array 'list' value: rose             // index 0
            "tulip", // Array 'list' value: tulip           // index 1
            "dandelion" // Array 'list' value: dandelion    // index 2
        ]
    }, // index 0

    {
        type: "trees", // Property 'type' with a value of: trees
        list: [
            "fir", // Array 'list' value: fir       // index 0
            "pine", // Array 'list' value: pine     // index 1
            "birch" // Array 'list' value: birch    // index 2
        ]
    } // index 1
];

var secondTree = myPlants[1].list[1]; // Current value of 'secondTree' variable is: pine (Reason for that because you're accessing 'myPlants' variable then you access the index 1 in the 'myPlants' array, then you access the index 1 of the 'list' array inside the 'myPlants' array which then you get the second value of the list array which is: pine)