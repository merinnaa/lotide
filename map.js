const eqArrays = require('../eqArrays');

const assertArraysEqual = require('../assertArraysEqual');
const map = function(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i]));
  }
  return result;
};

module.exports = map;