const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: "banana", price: "" },
  { product: "mango", price: 5 },
  { product: "potato", price: "1" },
  { product: "avocado", price: 1 },
  { product: "coffee", price: 1 },
  { product: "tea", price: 2 },
];

// 3
// countries.forEach((element) => console.log(element));

// 4
// names.forEach((element) => console.log(element));

// 5
// numbers.forEach((element) => console.log(element));

// 6
const countriesToUpperCase = countries.map((element) => element.toUpperCase());
// console.log(countriesToUpperCase);

// 7
const countriesLength = countries.map((element) => element.length);
// console.log(countriesLength);

// 8
const numbersToSquare = numbers.map((element) => element ** 2);
// console.log(numbersToSquare);

// 9
const namesToUpperCase = names.map((element) => element.toUpperCase());
// console.log(namesToUpperCase);

// 10
const productsPrices = products.map((element) => element.price);
// console.log(productsPrices);

// 11
const countriesWithLand = countries.filter(
  (element) => element.includes("land") || element.includes("Land")
);
// console.log(countriesWithLand);

// 12
const countriesWithSixCharacters = countries.filter(
  (element) => element.length === 6
);
// console.log(countriesWithSixCharacters);

// 13
const countriesWithSixOrMoreLetters = countries.filter(
  (element) => element.length >= 6
);
// console.log(countriesWithSixOrMoreLetters);

// 14
const countriesStartsWithE = countries.filter((element) =>
  element.startsWith("E")
);
// console.log(countriesStartsWithE);

// 15
const pricesWithValues = products.filter(
  (element) => typeof element.price === "number"
);
// console.log(pricesWithValues);

// 16
function getStringLists(array) {
  return array.filter((element) => typeof element === "string");
}
// console.log(getStringLists([1, 2, 3, "Adam", "Martyna", 5]));

// 17
const sum = numbers.reduce((acc, cur) => acc + cur, 0);
// console.log(sum);

// 18
const concatenateCountries = countries.reduce((acc, cur, currentIndex) => {
  if (currentIndex === countries.length - 1) {
    return acc + " and " + cur + " are north European countries.";
  } else {
    return acc + ", " + cur;
  }
});
// console.log(concatenateCountries);
// console.log(countries[countries.length - 1]);

// 19
const names2 = ["Adam", "Martyna", 3];
const oneIsNumber = names2.some((element) => typeof element === "number");
// console.log(oneIsNumber);

// 20
const nameLengthGreaterThanSeven = names.some((element) => element.length > 7);
// console.log(nameLengthGreaterThanSeven);

// 21
const countriesContainLand = countries.every((element) =>
  element.includes("land")
);
// console.log(countriesContainLand);

// 23
const findCountrySixLetters = countries.find((element) => element.length === 6);
// console.log(findCountrySixLetters);

// 24
const findCountrySixLettersIndex = countries.findIndex(
  (element) => element.length === 6
);
// console.log(findCountrySixLettersIndex);

// 25
const findIndexNorway = countries.findIndex((element) => element === "Norway");
// console.log(findIndexNorway);

// 26
const findIndexRussia = countries.findIndex((element) => element === "Russia");
// console.log(findIndexRussia);

// 1
const totalPrice = products
  .map((element) => element.price)
  .filter((element) => typeof element === "number")
  .reduce((acc, cur) => acc + cur);
// console.log(totalPrice);

// 2
var totalPrice2 = products.reduce(function (prev, cur) {
  if (typeof cur.price === "number" && typeof prev === "number") {
    return prev + cur.price;
  } else {
    return prev;
  }
}, 0);
// console.log(totalPrice2);

// 3
import { countriesSecond } from "./countries_data.js";
function categorizeCountries() {
  return countriesSecond.filter((element) => element.name.includes("land"));
}
// console.log(categorizeCountries());

// 4
function listOfObjects() {
  var myList = [];
  countriesSecond.forEach((element) => {
    let letter = element.name[0];
    if (myList == []) {
      myList.push({ letter: letter, count: 1 });
    } else {
      let foundIndex = myList.findIndex((object) => object.letter === letter);
      if (foundIndex === -1) {
        myList.push({ letter: letter, count: 1 });
      } else {
        myList[foundIndex].count += 1;
      }
    }
  });
  return myList;
}
// console.log(listOfObjects());

// 5
function getFirstTenCountries() {
  return countriesSecond.map((element) => element.name).slice(0, 10);
}
// console.log(getFirstTenCountries());

// 6
function getLastTenCountries() {
  return countriesSecond
    .map((element) => element.name)
    .slice(countriesSecond.length - 10, countriesSecond.length);
}
// console.log(getLastTenCountries());

// 7
function initialLetterManyTimes() {
  var myList = [];
  countriesSecond.forEach((element) => {
    let letter = element.name[0];
    if (myList == []) {
      myList.push({ letter: letter, count: 1 });
    } else {
      let foundIndex = myList.findIndex((object) => object.letter === letter);
      if (foundIndex === -1) {
        myList.push({ letter: letter, count: 1 });
      } else {
        myList[foundIndex].count += 1;
      }
    }
  });
  const myListFilter = myList.filter((element) => element.count > 1);
  return myListFilter;
}
// console.log(initialLetterManyTimes());

// 1
function sortCountriesByName() {
  // element.capital for sorting by capital
  return countriesSecond.sort((element) => element.name);
}
// console.log(sortCountriesByName());

function sortCountriesByPopulation() {
  return countriesSecond.sort((a, b) => b.population - a.population);
}
// console.log(sortCountriesByPopulation());

// 2
function mostSpokenLanguages(array, numberOfLanguages) {
  var myList = [];
  array.forEach((element) => {
    for (const language of element.languages) {
      if (myList == []) {
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
  });
  return myList.sort((a, b) => b.count - a.count).slice(0, numberOfLanguages);
}
// console.log(mostSpokenLanguages(countriesSecond, 11));

// 3
function mostPopulatedCountries(array, numberOfCountries) {
  var myList = [];
  array.forEach((element) => {
    myList.push({ country: element.name, population: element.population });
  });
  return myList
    .sort((a, b) => b.population - a.population)
    .slice(0, numberOfCountries);
}
// console.log(mostPopulatedCountries(countriesSecond, 3));

// 4
const statistics = {
  ages: [
    31,
    26,
    34,
    37,
    27,
    26,
    32,
    32,
    26,
    27,
    27,
    24,
    32,
    33,
    27,
    25,
    26,
    38,
    37,
    31,
    34,
    24,
    33,
    29,
    26,
  ],
  count: function () {
    return this.ages.length;
  },
  sum: function () {
    return this.ages.reduce((a, b) => a + b, 0);
  },
  min: function () {
    return Math.min(...this.ages);
  },
  max: function () {
    return Math.max(...this.ages);
  },
  range: function () {
    return Math.max(...this.ages) - Math.min(...this.ages);
  },
  mean: function () {
    return Math.round(this.sum() / this.count());
  },
  median: function () {
    let sortedAges = this.ages.sort((a, b) => a - b);
    let count = this.count();
    if (count % 2 != 0) {
      return sortedAges[Math.floor(count / 2)];
    } else {
      return (sortedAges[count / 2] + sortedAges[count / 2 - 1]) / 2;
    }
  },
  firstStepMode: function () {
    let myList = [];
    this.ages.forEach((element) => {
      if (myList == []) {
        myList.push({ mode: element, count: 1 });
      } else {
        let foundIndex = myList.findIndex((object) => object.mode === element);
        if (foundIndex === -1) {
          myList.push({ mode: element, count: 1 });
        } else {
          myList[foundIndex].count += 1;
        }
      }
    });
    return myList.sort((a, b) => b.count - a.count);
  },
  mode: function () {
    return this.firstStepMode()[0];
  },
  variance: function () {
    let mean = this.mean();
    let count = this.count();
    let sum = 0;
    for (const element of this.ages) {
      sum += (element - mean) ** 2;
    }
    return sum / count;
  },
  std: function () {
    return Math.sqrt(this.variance()).toFixed(1);
  },
  freqDist: function () {
    let listOfObjects = this.firstStepMode();
    let myList = [];
    let numberOfValues = this.count();
    for (const element of listOfObjects) {
      let percentage = ((element.count / numberOfValues) * 100).toFixed(1);
      let number = element.mode;
      myList.push({ percentage: percentage, value: number });
    }
    return myList;
  },
  describe: function () {
    var mode = this.mode();
    var freqDist = this.freqDist();
    console.log(mode);
    console.log(freqDist);
    return `Count: ${this.count()}\nSum: ${this.sum()}\nMin: ${this.min()}\nMax: ${this.max()}\nRange: ${this.range()}\nMean: ${this.mean()}\nMedian: ${this.median()}\nMode: ${mode}\nVariance: ${this.variance()}\nStandard Deviation: ${this.std()}\nFrequency Distribution: ${freqDist}`;
  },
};
// console.log(statistics.count());
// console.log(statistics.sum());
// console.log(statistics.min());
// console.log(statistics.max());
// console.log(statistics.range());
// console.log(statistics.mean());
// console.log(statistics.median());
// console.log(statistics.mode());
// console.log(statistics.variance());
// console.log(statistics.std());
// console.log(statistics.freqDist());
console.log(statistics.describe());
