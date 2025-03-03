/* Get division remainder by 2 
  Complete the function evenOrOdd such that it returns the string "even" when the number parameter it receives is even and "odd" otherwise.
  Can you make it work with negative numbers too? */

/**
 * @param {number} number */
export function evenOrOdd(number) {
    if(number%2===0){
        return "even";
    }
    return "odd";
}

/** passed test cases
  * Implements evenOrOdd() for even numbers
  * Implements evenOrOdd() for odd numbers
  * Works for negative numbers too */
