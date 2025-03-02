/* Text ellipsis Project I 
  This is the first challenge where you can use the BROWSER tab.
  You are given the code inside the index.html, index.css, and index.js.
  You can now try your code by clicking on the BROWSER tab and interacting with the challenge. For example, in this challenge, you can write text inside the given text box.
  The code given in the index.js might be completely new to you, as it's the code that manipulates the DOM. This will be explained in several chapters later in this course.
  You may also have noticed that the function given to you is preceded by the export keyword. Make sure to keep this keyword as it allows us to import your code in the index.js file. This will also be explained in a later chapter. */

/**
 * @param {string} text */
export function getDescription(text) {
    console.log(text); // write something in the BROWSER and see it in the console
    return text.substring(0,10);
}

/** passed test cases
  * getDescription returns a string
  * getDescription returns first 10 chars */
