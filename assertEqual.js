const assertEqual = function(actual, expected) {
  //if (typeof actual === "number" && typeof expected === "number")// print if the two nubers are nubers only
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  }
};
module.exports = assertEqual;
