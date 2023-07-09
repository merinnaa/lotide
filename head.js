const assertEqual = require('./assertEqual');
const head = function(array) {
  if (array.length === 0) {
    return undefined;
  }
  return array[0];
};
//console.log();

const assert = require('assert');

// const assertEqual = function(actual, expected) {
//   try {
//     assert.strictEqual(actual, expected);
//     console.log('✅Assertion passed:', actual, 'equals', expected);
//   } catch (error) {
//     console.error('🛑Assertion failed:', actual, 'does not equal', expected);
//   }
// };

module.exports = head;