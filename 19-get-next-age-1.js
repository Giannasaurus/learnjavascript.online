/* Get next age I 
  Complete the function getNextAge such that it returns the age next year (by adding 1 to the current age).
  Note that the age is provided by the user in a text box (which you can try in the browser tab).
  Do not worry about getting NaN when the text box is empty for now, we'll deal with that in a future chapter.
  Consider Learn Programming if you're stuck. */

/**
 * @param {string} age */
export function getNextAge(age) {
    return Number.parseInt(age,10)+1
}

/** passed test cases
  * Implements getNextAge() */
