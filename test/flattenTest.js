const flatten = require('../flatten');
const eqArrays = require('../aqArrays');
const assertArraysEqual = require('../assertArraysEqual');
// Test case
const test = flatten([1, 2, [3, 4], 5, [6]]);
assertArraysEqual(test, [1, 2, 3, 4, 5, 6]);
