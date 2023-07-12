const assert = require('assert');
const findKey = function(object, callback) {
  for (let key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
  return undefined;
};


const data = {
  "blue": { stars: 1 },
  "green": { stars: 2 },
  "yellow": { stars: 3 },
  "red": { stars: 4 }
};

const result = findKey(data, value => value.stars === 3);
console.log(result);
const assertEqual = function(actual, expected) {
  try {
    assert.strictEqual(actual, expected);
    console.log('Assertion passed:', actual, 'equals', expected);
  } catch (error) {
    console.error('Assertion failed:', actual, 'does not equal', expected);
  }
};
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
module.exports = findKey;