const assertObjectsEqual = require('../assertObjectsEqual');
const eqObjects = require('../eqObjects');
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertObjectsEqual(eqObjects(shirtObject, anotherShirtObject), true);
const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertObjectsEqual(eqObjects(shirtObject, longSleeveShirtObject), false);
