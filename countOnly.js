const assertEqual = function(allItems, itemsToCount) {
  //if (typeof actual === "number" && typeof expected === "number")// print if the two nubers are nubers only
  if (allItems !== itemsToCount) {
    console.log(`Assertion Failed: ${allItems} !== ${itemsToCount}`);
  } else {
    console.log(`Assertion passed: ${allItems} === ${itemsToCount}`);
  }
};

//assertEqual("lighthouse", "Bootcamp");
//assertEqual(1, 1);

const countOnly = function(allItems, itemsToCount) {
  let results = {};
  for (let item of allItems) {
    
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
        
      }
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
console.log(result1);
