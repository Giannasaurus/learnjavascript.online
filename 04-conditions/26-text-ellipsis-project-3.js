/*Text ellipsis Project III 
  Complete the function getDescription such that it returns the first 10 characters of the text parameter it receives followed by an ellipsis. An ellipsis is the dot character written 3 times: ...
  However, whenever the text is 10 characters or less, the ellipsis should not be added because the text is not being trimmed!
  There are multiple ways to solve this challenge. Take your time and make as many mistakes as possible ;) And make sure to try it in the browser tab.
  video preview: https://imgur.com/a/text-ellipsis-project-3-vYp8qFI */

/**
 * @param {string} text */
export function getDescription(text) {
    console.log(text); // write something in the BROWSER and see it in the console
    if(text.length>10){
        return text.substring(0,10)+"...";
    }
    return text;
}

/** passed test cases
  * returns first 10 chars followed by ellipsis for long strings
  * returns original string when it receives a short string */
