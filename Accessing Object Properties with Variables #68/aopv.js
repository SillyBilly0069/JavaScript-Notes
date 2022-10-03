/* Accessing Object Properties with Variables */

// Bracket notation can also be used to look up object properties using variables

var testObj = {
    12: "Namath", // Property '12' with a value of: Namath
    16: "Montana", // Property '16' with a value of: Montana
    19: "Unitas" // Property '19' with a value of: Unitas
};

var playerNumber = 16; // Current value of the 'playerNumber' variable is: 16
var player = testObj[playerNumber]; // Current value of the 'player' variable is: Montana (Because the 'testObj' variable has the property of '16' and the '16' value is 'Montana' so you get: Montana)