/* String interpolation advanced 
  Complete the function getFullName such that it returns the full name of the person using interpolation. */

/**
 * @param {string} firstName
 * @param {string} lastName */
function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

// Sample usage - do not modify
console.log(getFullName("Sam", "Doe")); // "Sam Doe"
console.log(getFullName("Alex", "Blue")); // "Alex Blue"

/** passed test cases
  * returns a string
  * returns full name */
