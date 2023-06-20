const assertEqual = function(actual, expected) {
  if (typeof actual === "number" && typeof expected === "number")
  // if (actual !== expected) {
  //   console.log(assertEqual);
  // }
    return actual === expected;
};
assertEqual("lighthouse", "Bootcamp");
assertEqual(1, 1);
console.assert();
