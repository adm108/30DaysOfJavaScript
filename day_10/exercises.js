// 1, 2, 3, 4, 5, 6
const emptySet = new Set();

for (let i = 0; i < 11; i++) {
  emptySet.add(i);
}
// console.log(emptySet);
emptySet.delete(2);
// console.log(emptySet);
emptySet.clear();
// console.log(emptySet);

const myArray = ["Adam", "Martyna", "Zenon", "Kaziu", "Bogdan"];
const mySet = new Set(myArray);
// console.log(mySet);

const countries = ["Finland", "Sweden", "Norway"];
const myMap = new Map();
for (const country of countries) {
  myMap.set(country, country.length);
}
// console.log(myMap);

// 1, 2
let a = [4, 5, 8, 9];
let b = [3, 4, 5, 7];
let c = [...a, ...b];

let C = new Set(c);
// console.log(C);

let A = new Set(a);
let B = new Set(b);
let d = a.filter((number) => B.has(number));
let D = new Set(d);
// console.log(D);

let e = a.filter((number) => !B.has(number));
let E = new Set(e);
// console.log(E);

// 1
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

// 2
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
console.log(mostSpokenLanguages(countriesSecond, 14));
