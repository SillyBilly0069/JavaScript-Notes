/* Assignment with a Returned Value */

// It's simple to assign a returned value to a variable


var changed = 0; // Current value of 'changed' variable is: 0

function change(num) {
    return (num + 5) / 3; // Current value is: 5 (Because '(num + 5) / 3' is the same as '(10 + 5) / 3' which is: 5) (The 'num' value is whatever you assigned it in the 'change()' function outside of this function. Check line 12)
}

changed = change(10); // Current value of 'changed' variable is: 5


var processed = 0; // Current value of 'processed' variable is: 0

function processArg(num) {
    return (num + 3) / 5; // Current value is: 2 (Because '(num + 3) / 5' is the same as '(7 + 3) / 5' which is: 2) (The 'num' value is whatever you assigned it in the 'processArg()' function outside of this function. Check line 21)
}

processed = processArg(7); // Current value of 'processed' variable is: 2