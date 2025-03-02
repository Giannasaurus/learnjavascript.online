/* Nutrition table I 
  It's very common in JavaScript to return a string that represents some HTML code. In fact, we'll be doing this quite often in the DOM Chapters. String interpolation comes in handy here because it supports multi-line strings and interpolation.
  Complete the function renderTableRow such that it returns the following HTML:
      <tr>
        <td>label here</td>
        <td>value here</td>
      </tr>
  where label here and value here are replaced with the parameters label and value respectively. Make sure to look at the code in the index.js to see how this function is being used (the DOM code will most likely not be understandable at the point, that's because we haven't explained it yet).
  Don't forget to look at the end result in the BROWSER tab! */

/**
 * @param {string} label
 * @param {string} value */
export function renderTableRow(label, value) {
    console.log(label, value);
    return `<tr>
    <td>${label}</td>
    <td>${value}</td>
</tr>`;
}

/** passed test cases
  renderTableRow returns HTML string
  returns correct HTML */
