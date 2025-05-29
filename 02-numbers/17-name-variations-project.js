/* Name variations Project 
  In this project, you will practice your newly acquired string skills!
  Complete the given functions as described in the comments and try the app that you just built in the BROWSER tab.
  Take your time, make as many mistakes as possible and learn from them!
  video preview: https://imgur.com/a/name-variations-oHu0wOZ */

/** @param {string} name */
export function getNumberOfChars(name) {
    // number of characters in: name
    return name.length;
}

/** @param {string} name */
export function getFirstChar(name) {
    // first character of: name
    return name[0];
}

/** @param {string} name */
export function getLastChar(name) {
    // last character of: name
    return name.at(-1);
}

/** @param {string} name */
export function getLower(name) {
    // name all in lower case (example: "ABC" becomes "abc")
    return name.toLowerCase();
}

/** @param {string} name */
export function getUpper(name) {
    // name all in upper case (example: "abc" becomes "ABC")
    return name.toUpperCase();
}

/** @param {string} name */
export function getCapitalized(name) {
    // capitalized version of name (example: "alEX" becomes "Alex")
    return name[0].toUpperCase() + name.substring(1).toLowerCase();
}

/** passed test cases
  * Implements getNumberOfChars()
  * Implements getFirstChar()
  * Implements getLastChar()
  * Implements getLower()
  * Implements getUpper()
  * Implements getCapitalized() */
