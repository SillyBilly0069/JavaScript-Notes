/* Create Strings using Template Literals */

// Template literals are a special type of string that makes creating complex strings easier.

// You make them using: `` [Backticks]

const person = {
    name: "Zodiac Hasbro", // Property 'name' with a value: Zodiac Hasbro
    age: 56 // Property 'age' with a value: 56
};

// Template literal with multi-line and string interpolation
const greeting = `Hello, my name is ${person.name}! 
I am ${person.age} years old.`; /*
Current value of the 'greeting' variable is:
Hello, my name is Zodiac Hasbro!
I am 56 years old.
*/

console.log(greeting); /*
Prints out to the browser console:
Hello, my name is Zodiac Hasbro!
I am 56 years old.
*/

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"], // Property 'success' with a value: ["max-length", "no-amd", "prefer-arrow-functions"]
    failure: ["no-var", "var-on-top", "linebreak"], // Property 'failure' with a value: ["no-var", "var-on-top", "linebreak"]
    skipped: ["id-blacklist", "no-dup-keys"] // Property 'skipped' with a value: ["id-blacklist", "no-dup-keys"]
};

function makeList(arr) {
    const resultDisplayArray = []; // Current value of the 'resultDisplayArray' variable is: [Empty String]

    for (let i = 0; i < arr.length; i++) {
        resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`);
    }

    return resultDisplayArray; // Returns: ["<li class="text-warning>no-var</li>", "<li class="text-warning>var-on-top</li>", "<li class="text-warning>linebreak</li>"]
}

const resultDisplayArray = makeList(result.failure); // Current value of the 'resultDisplayArray' variable is: ["<li class="text-warning>no-var</li>", "<li class="text-warning>var-on-top</li>", "<li class="text-warning>linebreak</li>"]

console.log(resultDisplayArray); // Prints out to the browser console: ["<li class="text-warning>no-var</li>", "<li class="text-warning>var-on-top</li>", "<li class="text-warning>linebreak</li>"]