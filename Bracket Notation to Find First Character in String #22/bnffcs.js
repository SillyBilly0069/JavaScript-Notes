/* Bracket Notation to Find First Character in String */

var firstLetterOfFirstName = ""; // Current value of 'firstLetterOfFirstName' is: (Empty string) (Type: String)
var firstName = "Ada"; // Current value of 'firstName' is: Ada (Type: String)

firstLetterOfFirstName = firstName[0]; // Current value of 'firstLetterOfFirstName' is: A (Type: String)

var firstLetterOfLastName = ""; // Current value of 'firstLetterOfLastName' is: (Empty string) (Type: String)
var lastName = "Lovelace"; // Current value of 'lastName' is: Lovelace (Type: String)

firstLetterOfLastName = lastName[0]; // Current value of 'firstLetterOfLastName' is: L (Type: String)

/*
Most modern programming languages like JavaScript don't start counting at '1' like humans do. They start at 0 which is called 'Zero-based Indexing'.

Example:
The number 0 refers to first index of the string which would be letter 'A' in the 'firstName' variable and it would be letter 'L' in the 'lastName' variable.
*/