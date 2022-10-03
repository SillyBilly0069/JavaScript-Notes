/* Using Objects for Lookups */

function phoneticLookup(val) {
    var result = ""; // Current value of the 'result' variable is: [Empty String] (quotes without any spaces it's an empty string)

    var lookup = {
        "alpha": "Adams", // Property 'alpha' with a value of: Adams
        "bravo": "Boston", // Property 'bravo' with a value of: Boston
        "charlie": "Chicago", // Property 'charlie' with a value of: Chicago
        "delta": "Denver", // Property 'delta' with a value of: Denver
        "echo": "Easy", // Property 'echo' with a value of: Easy
        "foxtrot": "frank" // Property 'foxtrot' with a value of: frank
    };

    result = lookup[val]; // Current value of the result is the 'lookup' variable object value which in this case it's set to "charlie" in the line 20. Therefore the current value of the 'result' variable is: Chicago
    
    return result; // Returns: The value of the 'result' variable
}

console.log(phoneticLookup("charlie")); // Prints out to the browser console: Chicago (Because the value inside the 'charlie' property in the 'lookup' variable object is: Chicago)