/* LEVEL 1 */
// 1. Create an empty set
const emptySet = new Set();

// 2. Create a set containing 0 to 10 using loop
for (let i = 0; i < 11; i++) {
  emptySet.add(i);
}
// console.log(emptySet);

// 3. Remove an element from a set
emptySet.delete(2);
// console.log(emptySet);

// 4. Clear a set
emptySet.clear();
// console.log(emptySet);

// 5. Create a set of 5 string elements from array
const myArray = ["Adam", "Martyna", "Zenon", "Kaziu", "Bogdan"];
const mySet = new Set(myArray);
// console.log(mySet);

// 6. Create a map of countries and number of characters of a country
const countries = ["Finland", "Sweden", "Norway"];
const myMap = new Map();
for (const country of countries) {
  myMap.set(country, country.length);
}
// console.log(myMap);

/* LEVEL 2 */
let a = [4, 5, 8, 9];
let b = [3, 4, 5, 7];
let c = [...a, ...b];

// 1. Find a union b
let C = new Set(c);
// console.log(C);

// 2. Find a intersection b
let A = new Set(a);
let B = new Set(b);
let d = a.filter((number) => B.has(number));
let D = new Set(d);
// console.log(D);

// 3. Find a with b
let e = a.filter((number) => !B.has(number));
let E = new Set(e);
// console.log(E);

/* LEVEL 3 */
// 1. How many languages are there in the countries object file.
import { countriesSecond } from "./countries_data.js";

let languagesSet = new Set();
for (const country of countriesSecond) {
  for (const language of country.languages) {
    if (!languagesSet.has(language)) {
      languagesSet.add(language);
    }
  }
}
// console.log(languagesSet);
// console.log(languagesSet.size);

// 2. *** Use the countries data to find the 10 most spoken languages:
/* 
Your output should look like this
console.log(mostSpokenLanguages(countries, 10))[
  ({ English: 91 },
  { French: 45 },
  { Arabic: 25 },
  { Spanish: 24 },
  { Russian: 9 },
  { Portuguese: 9 },
  { Dutch: 8 },
  { German: 7 },
  { Chinese: 5 },
  { Swahili: 4 },
  { Serbian: 4 })
]

Your output should look like this
console.log(mostSpokenLanguages(countries, 3))
[ {'English':91}, {'French':45}, {'Arabic':25} ]
*/

function mostSpokenLanguages(arrayOfCountries, size) {
  let myList = [];
  for (const country of arrayOfCountries) {
    for (const language of country.languages) {
      if (myList === []) {
        myList.push({ language: language, count: 1 });
      } else {
        let foundIndex = myList.findIndex(
          (object) => object.language === language
        );
        if (foundIndex === -1) {
          myList.push({ language: language, count: 1 });
        } else {
          myList[foundIndex].count += 1;
        }
      }
    }
  }
  return myList.sort((a, b) => b.count - a.count).slice(0, size);
}
// console.log(mostSpokenLanguages(countriesSecond, 14));
