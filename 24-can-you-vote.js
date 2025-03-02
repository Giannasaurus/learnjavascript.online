/* Can you vote? 
  Implement the function canVote such that it returns true whenever the age is 18 or above and false in all other scenarios. */

/**
 * @param {number} age */
function canVote(age) {
    if(age>=18){
        return true;
    }else{
        return false;
    }
}

// Sample usage - do not modify
console.log(canVote(25)); // true
console.log(canVote(18)); // true
console.log(canVote(10)); // false

/** passed test cases
  * returns true whenever for age 18 and above
  * returns false when age is less than 18 */
