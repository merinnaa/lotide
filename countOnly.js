const assertEqual = function(actual, expected) {
  if (typeof actual === "number" && typeof expected === "number")
    if (actual !== expected) {
      console.log(assertEqual);
    }
  return actual === expected;
};
//assertEqual("lighthouse", "Bootcamp");
//assertEqual(1, 1);
//console.assert();

const countOnly = function(allItems, itemsToCount) {
  let results = {};
  for (let item of allItems) {
    results = item++;
    console.log(item);
    
    if (item = 0, item <= itemsToCount, item++) {
      return item;
    }
  }
  return results;
};
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];
const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

