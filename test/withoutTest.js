const without = require('../without');
const assertArraysEqual = require('../assertArraysEqual');
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