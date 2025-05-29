/* Get last character 
  Complete the function getLastCharacter such that it returns the last character of the name parameter it receives.
  Consider Learn Programming if you're stuck. */

/**
 * @param {string} name */
function getLastCharacter(name) {
    return name.at(-1);
}

// Sample usage - do not modify
console.log(getLastCharacter("Sam")); // "m"
console.log(getLastCharacter("Alex")); // "x"
console.log(getLastCharacter("Charley")); // "y"

/** passed test cases
  * returns a string
  * returns last character */
