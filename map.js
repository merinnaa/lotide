const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};
const map = function(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i]));
  }
  return result;
};

const numbers = [1, 2, 3, 4, 5];
const doubleNumbers = map(numbers, (num) => num * 2);
assertArraysEqual(doubleNumbers, [2, 4, 6, 8, 10]);

const names = ['Alice', 'Bob', 'Charlie'];
const nameLengths = map(names, (name) => name.length);
assertArraysEqual(nameLengths, [5, 3, 7]);

const words = ['hello', 'world', 'javascript'];
const uppercasedWords = map(words, (word) => word.toUpperCase());
assertArraysEqual(uppercasedWords, ['HELLO', 'WORLD', 'JAVASCRIPT']);