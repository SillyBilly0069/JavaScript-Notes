/* Accessing Object Properties with Bracket Notation */

// Besides using "." [dot] notation you can also use bracket notation to access a property in an object.
// You can use the bracket anytime, but it is required if the name has a space in it. (Only use brackets if a property has a space in it)

var testObj = {
    "an entree": "hamburger", // Property 'an entree' with a value of: hamburger
    "my side": "veggies", // Property 'my side' with a value of: veggies
    "the drink": "water" // Property 'the drink' with a value of: water
};

var entreeValue = testObj["an entree"]; // Current value of the 'entreeValue' variable is: hamburger (Because the 'testObj' variable has the property of 'an entree' and the 'an entree' value is 'hamburger' so you get: hamburger)
var drinkValue = testObj["the drink"]; // Current value of the 'drinkValue' variable is: water (Because the 'testObj' variable has the property of 'the drink' and the 'the drink' value is 'water' so you get: water)