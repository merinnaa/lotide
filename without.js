const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');
const without = function(source, itemsToRemove) {
  const newArray = [];
  for (let element of source) {
    if (!itemsToRemove.includes(element)) {
      newArray.push(element);
    }
  }
  return newArray;
};
module.exports = without;