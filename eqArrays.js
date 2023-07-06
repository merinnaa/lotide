let eqArrays = function(array1, array2) {
  // Check if the arrays have the same length
  if (array1.length !== array2.length) {
    return false;
  }

  // Iterate over the elements of the arrays
  for (let i = 0; i < array1.length; i++) {
    // Check if the elements at the same index are not equal
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  // All elements are equal
  return true;
};

// Test cases
console.log(eqArrays([1, 2, 3], [1, 2, 3])); // true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // false
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // false

