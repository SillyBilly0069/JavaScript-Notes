/* Else If Statement */

// If you have multiple conditions that need to be addressed, you can use 'else if statements'. It's a way of chaining 'if statements' together.

function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10"; // Returns: Greater than 10 (If the 'if statement' condition is true)
    } else if (val < 5) {
        return "Smaller than 5"; // Returns: Smaller than 5 (If the first 'if statement' condition is false)
    } else {
        return "Between 5 and 10"; // Returns: Between 5 and 10 (If the all 'if statements' conditions are false)
    }
}

console.log(testElseIf(7)); // Prints out to the browser console: Between 5 and 10 (Because 7 is not less than 5 and 7 is not greater than 10, both the first and second 'if statements' conditions are false so they don't get executed and moves to the next one which if all the 'if statements' conditions are false then 'else statement' is executed)


/*
A way to see the 'else if statements' is:

if (condition here is true) {
    // Execute code here
} else if (condition here is true and the first condition is false) {
    // Execute code here
} else {
    If all the 'if' conditions are false then:
    // Execute code here
}

In words it would be like:

(IF) this condition is true then print out something
(ELSE IF) this condition is true and the first condition is false then print out something
(ELSE) if both conditions were false then print out something

Or another way to say it is like this: If there is apples then take apples, if there is no apples then take bananas, if there are no apples and bananas then take oranges, if there are no apples or bananas or oranges then don't take anything.

Example:
function fruitStore() {
    var fruitAvailable = "Oranges";

    if (fruitAvailable == "Apples") {
        return "Buy Apples"; // Returns: Buy Apples (If there were apples)
    } else if (fruitAvailable == "Bananas") {
        return "Buy Bananas"; // Returns: Buy Bananas (If there were no apples)
    } else if (fruitAvailable == "Oranges") {
        return "Buy Oranges"; // Returns: Buy Oranges (If there were no apples or bananas)
    } else {
        return "Don\'t buy anything"; // Returns: Don't buy anything (If there were no apples or bananas or oranges)
    }
}

console.log(fruitStore("Oranges")); // Prints out to the browser console: Oranges (Because the value inside the 'fruitAvailable' variable is 'Oranges' and there were no apples or bananas so the 'Oranges' [else if statement] is true, therefore you get: Oranges)
*/