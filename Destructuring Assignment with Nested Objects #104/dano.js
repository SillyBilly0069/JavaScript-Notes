/* Destructuring Assignment with Nested Objects */

// We can use destructuring assignment to assign variables from nested objects.

const LOCAL_FORECAST = {
    today: { min: 72, max: 83 },
    tomorrow: { min: 73.3, max: 84.6 }
};

function getMaxOfTmrw(forecast) {
    "use strict"; // This enables strict mode which catches common coding mistakes and unsafe actions. Example: If you create a variable and don't declare it with var, let, or const.

    const { tomorrow: { max: maxOfTomorrow } } = forecast;

    return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST)); // Prints out to the browser console: 84.6