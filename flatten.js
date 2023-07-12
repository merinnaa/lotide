const eqArrays = require('../aqArrays');
const assertArraysEqual = require('../assertArraysEqual');
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
module.exports = flatten;