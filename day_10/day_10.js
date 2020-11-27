const firstSet = new Set();
firstSet.add("Facebook");
firstSet.add("Twitter");

// console.log(firstSet);
// console.log(firstSet.size);

const myArray = [1, 2, 3, 5];
const arrayToSet = new Set(myArray);
// console.log(arrayToSet);

const countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];
const map = new Map(countries);
console.log(map);
map.set("Poland", "Warsaw");
console.log(map);
