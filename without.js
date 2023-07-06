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
const without = function(source, itemsToRemove) {
  const newArray = [];
  for (let element of source) {
    if (!itemsToRemove.includes(element)) {
      newArray.push(element);
    }
  }
  return newArray;
};

// Test cases
const words = ["hello", "world", "lighthouse"];

//Removing one element
const test1 = without([1, 2, 3], [1]);
assertArraysEqual(test1, [2, 3]);

//Removing multiple elements
const test2 = without(["1", "2", "3"], [1, 2, "3"]);
assertArraysEqual(test2, ["1", "2"]);

//Original array should not be modified
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);