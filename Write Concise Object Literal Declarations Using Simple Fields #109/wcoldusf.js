/* Write Concise Object Literal Declarations Using Simple Fields */

// ES6 added some nice support for easily defining object literals.

const createPerson = (name, age, gender) => ({ name, age, gender });
console.log(createPerson("Zodiac Hasbro", 56, "male")); // Prints out to the browser console: { name: "Zodiac Hasbro", age: 56, gender: "male" }