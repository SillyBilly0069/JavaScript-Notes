/* Access Multi-Dimensional Arrays with Indexes */

var myArray = [ [1, 2, 3], [4, 5, 6], [7, 8, 9], [ [10, 11, 12] , 13, 14] ];

var myData = myArray[2][1]; // Current value of 'myData' is: 8

// You can use bracket notation to select an element in a multi-dimensional or array of arrays

/*
Example:
var myArray = [ [1, 2, 3], [4, 5, 6], [7, 8, 9], [ [10, 11, 12] , 13, 14] ]; // This is line 11
                    0          1          2                   3

To access the second number (Aka 2) of the index '0' in 'myArray' variable you need to do this:
var myData = myArray[0][1];
console.log(myData); // This should print out 2 in the browser console

This selects the first array in 'myArray' then picks the second index of the array which is: 2

Index 0 of 'myArray' is: [1, 2, 3].
Index 1 of the array in 'myArray' variable is: 2

Index 0 of 'myArray' variable + indexes inside the array in 'myArray' variable: 
[ 1, 2, 3 ] // This is the index 0 of 'myArray' variable
  0  1  2   // These are the indexes of the index 0 (Aka this: [1, 2, 3]) in 'myArray' variable

[ [10, 11, 12], 13, 14] // The index 3 in 'myArray' is this
        0        1   2  // These are the indexes of the index 3 (Aka this: [ [10, 11, 12], 13, 14]) in 'myArray' variable

To access the third element (Aka 12) in the index 0 (Aka [10, 11, 12]) you need to do this:
var myData = myArray[3][0][2]; // The [3] is the 4th array in 'myArray' variable check line 11 above. The [0] is the index 0 of the array (Aka [10, 11, 12]) and the [2] is the index 2 element (Aka 12)

[ 10, 11, 12 ] // This is [0]
   0   1   2 // These are the indexes of the index [0] (Aka [10, 11, 12])

console.log(myData); // This should print out 12 in the browser console
*/