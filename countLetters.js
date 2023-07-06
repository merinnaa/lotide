const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`Assertion passed: ${actual} === ${expected}`);
  }
};
const letterPositions = function(sentence) {
  const results = {};
  
  return results;
};


const result = letterPositions("lighthouse in the house");
assertEqual(letterPositions("lighthouse in the house").e, [1]);
assertEqual(result["l"], 1);
assertEqual(result["h"], 4);
