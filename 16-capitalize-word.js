/* Capitalize word 
  Complete the function capitalize such that it capitalizes the word parameter it receives. There's no capitalize method in JavaScript, so you have to write it yourself.
  Look at the sample usage to understand what capitalization means, then look at the hints if it's still not clear.
  Consider Learn Programming if you're stuck. */

/**
 * @param {string} word */
function capitalize(word) {
    return word[0].toUpperCase() + word.substring(1).toLowerCase();
}

// Sample usage - do not modify
console.log(capitalize("sam")); // "Sam"
console.log(capitalize("ALEX")); // "Alex"
console.log(capitalize("chARLie")); // "Charlie"

/** passed test cases
  * returns a string
  * returns capitalized word */
