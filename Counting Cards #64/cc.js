/* Counting Cards */

var count = 0; // Current value of the 'count' variable is: 0

function cc(card) {
    switch (card) {
        case 2: // This is readed like: If 'card' is equal to 2
        case 3: // This is readed like: If 'card' is equal to 3
        case 4: // This is readed like: If 'card' is equal to 4
        case 5: // This is readed like: If 'card' is equal to 5
        case 6: // This is readed like: If 'card' is equal to 6
            count++; // Increased the value by 1
            break; // If one of them is true it stops here, else if it's false moves to the next case

        case 10: // This is readed like: If 'card' is equal to 1
        case "J": // This is readed like: If 'card' is equal to 1
        case "Q": // This is readed like: If 'card' is equal to 1
        case "K": // This is readed like: If 'card' is equal to 1
        case "A": // This is readed like: If 'card' is equal to 1
            count--; // Decreases the value by 1
            break; // Last with no default option: If it's true it stops here, if it's false it returns the current value of the 'count' variable. (Only if it has no default option)
    }

    var holdbet = "Hold"; // Current value of 'holdbet' variable is: Hold

    if (count > 0) {
        holdbet = "Bet"; // Current value of 'holdbet' variable is: Bet (If the count is less than 0)
    }

    return count + " " + holdbet; // Returns the 'count' variable value and an additional space in between [" "] and then the 'holdbet' variable value
}

cc(2); cc(3); cc(7); cc(K); cc(A); // Imagine these as the cards on the table
console.log(cc(4)); // Returns: 1 Bet (Because the 'case' 4 is true and the it adds 1 number to the 'count' variable with the 'count++' and 1 is not less than 0 so the 'holdbet' variable value becomes: Bet)
