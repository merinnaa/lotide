const tail = function(array) {
  if (array.length === 0) {
    return [];
  }
  

  for (let i = 1; i <= array.length; i++) {
   
    return array.slice(1);

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
module.exports = tail;
