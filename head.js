const head = function(array) {
  if (array.length === 0) {
    return undefined;
  }
  return array[0];
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
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
