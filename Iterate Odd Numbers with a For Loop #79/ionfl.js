/* Iterate Odd Numbers with a For Loop */

var ourArray = []; // Current value of the 'ourArray' variable is: [Empty Array]

for (var i = 0; i < 10; i += 2) {
    ourArray.push(i); // This means if 'i' is true then push the value in the variable 'ourArray'
}

console.log(ourArray); // Prints out to the browser console: [0, 2, 4, 6, 8]


var myArray = []; // Current value of the 'myArray' variable is: [Empty Array]

for (var i = 1; i < 10; i += 2) {
    myArray.push(i); // This means if 'i' is true then push the value in the variable 'myArray'
}

console.log(myArray); // Prints out to the browser console: [1, 3, 5, 7, 9]