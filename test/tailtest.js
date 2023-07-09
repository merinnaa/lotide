// const tail = require('../tail');
// const assertEqual = require('../assertEqual');
// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result, ["Lighthouse", "Labs"]);
const tail = require('../tail');
const assert = require('chai').assert;


describe('tail', () => {
  it('returns the tail of an array with multiple elements', () => {
    assert.deepEqual(tail([1, 2, 3, 4]), [2, 3, 4]);
  });

  it('returns an empty array for an empty array', () => {
    assert.deepEqual(tail([]), []);
  });

  it('returns an empty array for an array with only one element', () => {
    assert.deepEqual(tail([1]), []);
  });
});