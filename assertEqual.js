// const assertEqual = function(actual, expected) {
//   if (typeof actual === "number" && typeof expected === "number")
//   // if (actual !== expected) {
//   //   console.log(assertEqual);
//   // }
//     return actual === expected;
// };
// assertEqual("lighthouse", "Bootcamp");
// assertEqual(1, 1);
// console.assert();
let planetmoon = {
  mercury: 0,
  venus: 0,
  earth: 9,
  mars: 10,
  jupiter: 67,
  sqtrun: 10,
  pluto: 100
};
for (let planet in planetmoon) {
  //let numberOfPlanets = planetmoon[planet];
  
  console.log(`${planet}: ${planetmoon[planet]}`);
}