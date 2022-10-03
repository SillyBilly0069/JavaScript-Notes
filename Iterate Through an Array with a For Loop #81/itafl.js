/* Iterate Through an Array with a For Loop */

var ourArr = [9, 10, 11, 12]; // Current value of 'ourArr' variable is: [9, 10, 11, 12]
var ourTotal = 0; // Current value of 'ourTotal' variable is: 0

for (var i = 0; i < ourArr.length; i++) {
    ourTotal += ourArr[i]; // If 'i' is true then it changes the current value of 'ourTotal' variable and makes it 'ourArr[i] + ourArr[i]' in other words, it adds all the numbers inside the variable together and prints out the total which is: 42 (That's because you adding all the numbers inside the variable, and the array is: [9, 10, 11, 12] so '9 + 10 + 11 + 12 = 42' then it adds that value to the 'ourTotal' variable)
}

console.log(ourTotal); // Prints out to the browser console: 42


var myArr = [2, 3, 4, 5, 6]; // Current value of 'ourArr' variable is: [2, 3, 4, 5, 6]
var total = 0; // Current value of 'ourTotal' variable is: 0

for (var i = 0; i < myArr.length; i++) {
    total += myArr[i]; // If 'i' is true then it changes the current value of 'total' variable and makes it 'myArr[i] + myArr[i]' in other words, it adds all the numbers inside the variable together and prints out the total which is: 20 (That's because you adding all the numbers inside the variable, and the array is: [2, 3, 4, 5, 6] so '2 + 3 + 4 + 5 + 6 = 20' then it adds that value to the 'total' variable)
}

console.log(total); // Prints out to the browser console: 20