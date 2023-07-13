const assert = require('chai').assert;
const inspect = require('util').inspect;

// assertObjectsEqual function implementation

const assertObjectsEqual = function(actual, expected) {
  assert.deepEqual(actual, expected, `🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
};
module.exports = assertObjectsEqual;