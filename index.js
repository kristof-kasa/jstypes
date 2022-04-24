// @ts-check

const example = require('./example');

(async () => {
  /**
   * Argument of type '{}' is not assignable to parameter of type 'CouldBeAComplexType'.
   * Type '{}' is missing the following properties from type 'CouldBeAComplexType': param1, param2, param3ts(2345)
   */
  await example.couldBeAComplexFunction('string', {})

  // Argument of type 'string' is not assignable to parameter of type 'number'.ts(2345)
  example.add('', 1);
})()