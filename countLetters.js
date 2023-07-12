const assertEqual = require('../assertEqual');
const countLetters = function(sentence) {
  const letterCount = {};

  for (const letter of sentence) {
    if (letter !== ' ') {
      if (letterCount[letter]) {
        letterCount[letter] += 1;
      } else {
        letterCount[letter] = 1;
      }
    }
  }

  return letterCount;
};
const result1 = countLetters("LHL");
console.log(assertEqual(result1));

const result2 = countLetters("Hello World");
console.log(assertEqual(result2));
module.exports = countLetters;
