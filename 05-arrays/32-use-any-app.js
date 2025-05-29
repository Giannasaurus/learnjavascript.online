/* Use any app 
  Complete the function such that the app variable is added to the apps array. Then, return the apps array. */

/**
 * @param {array} apps
 * @param {string} app */
function useApp(apps, app) {
    apps.push(app)
    return apps
}

// Sample usage - do not modify
console.log(useApp(["Clock", "Twitter"], "Firefox")); // ["Clock", "Twitter", "Firefox"]
console.log(useApp([], "Safari")); // ["Safari"]

/** passed test cases
  * adds dynamic element provided to array */
