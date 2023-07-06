const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`Assertion passed: ${actual} === ${expected}`);
  }
};
// const countLetters = function(numberOfLetters) {
//   let result = {};

//   for (let i = 0; i <= numberOfLetters.length; i++) {
//     // for (let letter in numberOfLetters) {
//       if (countLetters(numberOfLetters[i]), letter) {
//         result.push(i);
//       }
//       //     result[i] = 1;
//       //   }
//       //   console.log(numberOfLetters[i] + " " + [i]);
//       // }

//       for (let letter in result) {
//         console.log(`Letter '${numberOfLetters}': ${result[letter]} occurrences`);
//       }
//       return result;
//     }
//   }

// //};
// const result = countLetters("lighthouse in the house");
// //  console.log(eqArrays([1, 2, 3], [1, 2, 3])); // true
// //  console.log(eqArrays([1, 2, 3], [3, 2, 1])); // false
// //  console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // true
// //  console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]));