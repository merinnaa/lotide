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
const flatten = function(array) {
  const flattenedArray = [];
  for (let element of array) {
    if (Array.isArray(element)) {
      flattenedArray.push(...element);
    } else {
      flattenedArray.push(element);
    }
  }
  return flattenedArray;
};

// Test case
const test = flatten([1, 2, [3, 4], 5, [6]]);
assertArraysEqual(test, [1, 2, 3, 4, 5, 6]);