const tail = function(array) {
  if (array.length === 0) {
    return undefined;
  }
  for (let i = 1; i <= array.length; i++) {
    return array[i];
  }
};
//console.log();

const assert = require('assert');

const assertEqual = function(actual, expected) {
  try {
    assert.strictEqual(actual, expected);
    console.log('✅Assertion passed:', actual, 'equals', expected);
  } catch (error) {
    console.error('🛑Assertion failed:', actual, 'does not equal', expected);
  }
};
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]);