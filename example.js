// @ts-check

/**
 * @param {number} num1 
 * @param {number} num2 
 * @returns {number}
 */
function add(num1, num2) {
  return num1 + num2
}

/**
 * @param {number} num1 
 * @param {number} num2 
 * @returns {string}
 */
function shouldShowTypeError(num1, num2) {
  // Type 'number' is not assignable to type 'string'
  return num1 + num2
}

/**
 * @param {string} firstArg
 * @param {import('./example.types').CouldBeAComplexType} secondArg
 * @returns {Promise<string>}
 */
async function couldBeAComplexFunction(firstArg, secondArg) {
  return new Promise((resolve) => {
    resolve(secondArg.param1)
  })
}

/**
 * @param {string} firstArg firstArg is required
 * @param {string=} secondArg secondArg is not required 
 * @returns {string}
 */
function funcWithOptArgs(firstArg, secondArg) {
  // like in TS it won't warn you about you will return undefined instead of a string :(
  return secondArg
}

module.exports = {
  add, couldBeAComplexFunction, funcWithOptArgs
}