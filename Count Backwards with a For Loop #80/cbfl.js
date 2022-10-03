/* Count Backwards with a For Loop */

var ourArray = []; // Current value of the 'ourArray' variable is: [Empty Array]

for (var i = 10; i > 0; i -= 2) {
    ourArray.push(i); // This means if 'i' is true then push the value in the variable 'ourArray'
}

console.log(ourArray); // Prints out to the browser console: [10, 8, 6, 4, 2]


var myArray = []; // Current value of the 'myArray' variable is: [Empty Array]

for (var i = 9; i > 0; i -= 2) {
    myArray.push(i); // This means if 'i' is true then push the value in the variable 'myArray'
}

console.log(myArray); // Prints out to the browser console: [9, 7, 5, 3, 1]