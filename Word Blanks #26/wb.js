/* Word Blanks */

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = ""; // Current value of 'result' is: (Empty string) (Type: String)
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb + "."; // Current results: The [Space] {Adjective} [Space] {Noun} [Space] {Verb} [Space] to the store [Space] {Adverb}. (Type: String)
    return result; // Returns the 'result' variable
}

console.log(wordBlanks("dog",   "big",    "ran",  "quickly")); // Results: The big dog ran to the store quickly. (Type: String)
console.log(wordBlanks("bike",  "slow",   "flew", "slowly")); // Results: The slow bike flew to the store slowly. (Type: String)
//                      Noun | Adjective | Verb |  Adverb