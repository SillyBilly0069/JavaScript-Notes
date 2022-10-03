/* Write Higher Order Arrow Function */

// Arrow functions work really well with higher order functions such as map, filer, and reduce.

// Main thing to know is that map, filter, and reduce take functions as arguments for processing collections of data.

// Whenever one function takes another function as an argument, that's a good time for an arrow function.

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
    return squaredIntegers;
};

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);