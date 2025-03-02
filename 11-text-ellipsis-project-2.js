/* Text ellipsis Project II 
  Complete the function getDescription such that it returns the first 10 characters of the text parameter it receives followed by an ellipsis. An ellipsis is the dot character written 3 times: ...
  Note: for this challenge, the ... should always be there, even if the text was shorter than 10 characters. */

/**
 * @param {string} text */
export function getDescription(text) {
    console.log(text); // write something in the BROWSER and see it in the console
    return text.substring(0,10) + "...";
}

/** passed test cases
  * returns a string
  * returns first 10 chars followed by ellipsis */
