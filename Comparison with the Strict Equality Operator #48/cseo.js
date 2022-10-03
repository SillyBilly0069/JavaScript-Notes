/* Comparison with the Strict Equality Operator */


/*

The strict equality operator is '===' which to be true both values need to be: equal and the same data type.
=== --> Strict Equality Operator
== --> Equal Operator
= --> Assignment Operator

Example with '===' (Strict Equality Operator):
3 === 3 --> This is 'true' because both are a number and both have 3 which is the same value (first checks in this case: Number is equal to Number --> True | second checks: 3 is equal to 3 --> True | results: True)
3 === '3' --> This is 'false' because one is a number the other one is a string but both have 3 which is the same value but (first checks in this case: Number is equal to String --> False | second checks 3 is equal to 3 --> True | results: True)

* In the strict equality operator if one of the checks is false then the whole thing becomes false, both need to be true in order for it to be true as a result.
* With the '==' (Equal Operator) both [3 == 3] and [3 == '3'] would return true. (3 == '3') in this case the string will be converted into a number which then will make it true, ONLY with the 'Equal Operator'
* Anything inside "double quotes" or "single quotes" or `template literals` is a string

*/

function testStrict(val) {
    if (val === 7) {
        return "Equal"; // Returns: Equal (if the 'if statement' condition is true)
    }
    return "Not Equal"; // Returns: Not Equal (if the 'if statement' condition is false)
}

console.log(testStrict(10)); // Prints out to the browser console: Not Equal (Because 10 is not equal to 7. If the value is '7' [Aka 7 in a string] it would also be false because it doesn't have the same data type, but if the value is a number 7 then that returns to true and prints out "Equal" instead of "Not Equal")