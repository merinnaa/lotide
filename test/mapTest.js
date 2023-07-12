const map = require('../map');
const assertArraysEqual = require('../assertArraysEqual');
const numbers = [1, 2, 3, 4, 5];
const doubleNumbers = map(numbers, (num) => num * 2);
assertArraysEqual(doubleNumbers, [2, 4, 6, 8, 10]);

const names = ['Alice', 'Bob', 'Charlie'];
const nameLengths = map(names, (name) => name.length);
assertArraysEqual(nameLengths, [5, 3, 7]);

const words = ['hello', 'world', 'javascript'];
const uppercasedWords = map(words, (word) => word.toUpperCase());
assertArraysEqual(uppercasedWords, ['HELLO', 'WORLD', 'JAVASCRIPT']);