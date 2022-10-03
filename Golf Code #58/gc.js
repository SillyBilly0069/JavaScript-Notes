/* Golf Code */

var names = ["Hole-in-one", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
// Indexes         0           1        2        3       4           5             6

function golfScore(par, strokes) {
    if (strokes == 1) {
        return names[0]; // Returns: Hole-in-one (If the number is equal to 1)
    } else if (strokes <= par - 2) {
        return names[1]; // Returns: Eagle (If the number is equal to 3 or 2)
    } else if (strokes == par - 1) {
        return names[2]; // Returns: Birdie (If the number is equal to 4)
    } else if (strokes == par) {
        return names[3]; // Returns: Par (If the number is equal to 5)
    } else if (strokes == par + 1) {
        return names[4]; // Returns: Bogey (If the number is equal to 6)
    } else if (strokes == par + 2) {
        return names[5]; // Returns: Double Bogey (If the number is equal to 7)
    } else if (strokes >= par + 3) {
        return names[6]; // Returns: Go Home! (If the number is equal to 8 or more)
    }
}

console.log(golfScore(5, 4)); // Prints out to the browser console: Birdie (Because the par is 5 and the strokes is 4 which is translated to 'strokes == par - 1 which is equal to 4' or simplier '4 == 5 - 1' which 5 - 1 is 4, and the result is: Birdie) [In this case only]

/*
Strokes     Return
1           "Hole-in-one!"
<= par - 2  "Eagle"
par - 1     "Birdie"
par         "Par"
par + 1     "Bogey"
par + 2     "Double Bogey"
>= par + 3  "Go Home!"
*/