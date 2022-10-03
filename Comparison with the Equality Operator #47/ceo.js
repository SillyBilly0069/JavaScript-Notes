/* Comparison with the Equality Operator */

// There are many comparison operators in JavaScript that will return a Boolean of true or false. Most common is the equality operator and it's often used in an if statement.

/*

The equality operator is '==' reason it's not '=' it's because '=' is the assignment operator.

== --> Equality Operator
= --> Assignment Operator 

*/


function testEqual(val) {
    if(val == 12) {
        return "Equal"; // Returns: Equal (if the 'if statement' condition is true) (Type: String)
    }
    return "Not Equal"; // Returns: Not Equal (if the 'if statement' condition is false) (Type: String)
}

console.log(testEqual(10)); // Prints out to the browser console: Not Equal (in this case only, depending on what you put in the 'testEqual(a number here)' function. In order for it to print out 'Equal' then you need to put '12' in the 'testEqual(12)' function, reason it becomes true it's because '12 is equal to 12'. Returns false if it's not equal just like in this case where '10 is not equal to 12')