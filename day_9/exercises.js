/* LEVEL 1 */
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

// 1. Explain the difference between forEach, map, filter, and reduce.
// forEach - looping through all elements in the array, use only with arrays, map - the same as forEach but map modify an array, filter - filter out items which full fill filtering conditions and return a new array, reduce - reduce takes a callback function. The call back function takes accumulator, current, and optional initial value as a parameter and returns a single value. It is a good practice to define an initial value for the accumulator value. If we do not specify this parameter, by default accumulator will get array first value. If our array is an empty array, then Javascript will throw an error.

// 2. Define a call function before you them in forEach, map, filter or reduce.
const someNumbers = [1, 2, 3, 4];
const sumArray = (arr) => {
  let sum = 0;
  const callBack = function (element) {
    sum += element;
  };
  someNumbers.forEach(callback);
  return sum;
};
// console.log(sumArray(numbers))

// 3. Use forEach to console.log each country in the countries array.
// countries.forEach((element) => console.log(element));

// 4. Use forEach to console.log each name in the names array.
// names.forEach((element) => console.log(element));

// 5. Use forEach to console.log each number in the numbers array.
// numbers.forEach((element) => console.log(element));

// 6. Use map to create a new array by changing each country to uppercase in the countries array.
const countriesToUpperCase = countries.map((element) => element.toUpperCase());
// console.log(countriesToUpperCase);

// 7. Use map to create an array of countries length from countries array.
const countriesLength = countries.map((element) => element.length);
// console.log(countriesLength);

// 8. Use map to create a new array by changing each number to square in the numbers array
const numbersToSquare = numbers.map((element) => element ** 2);
// console.log(numbersToSquare);

// 9. Use map to change to each name to uppercase in the names array
const namesToUpperCase = names.map((element) => element.toUpperCase());
// console.log(namesToUpperCase);

// 10. Use map to map the products array to its corresponding prices.
const productsPrices = products.map((element) => element.price);
// console.log(productsPrices);

// 11. Use filter to filter out countries containing land.
const countriesWithLand = countries.filter(
  (element) => element.includes("land") || element.includes("Land")
);
// console.log(countriesWithLand);

// 12. Use filter to filter out countries having six character.
const countriesWithSixCharacters = countries.filter(
  (element) => element.length === 6
);
// console.log(countriesWithSixCharacters);

// 13. Use filter to filter out countries containing six letters and more in the country array.
const countriesWithSixOrMoreLetters = countries.filter(
  (element) => element.length >= 6
);
// console.log(countriesWithSixOrMoreLetters);

// 14. Use filter to filter out country start with 'E';
const countriesStartsWithE = countries.filter((element) =>
  element.startsWith("E")
);
// console.log(countriesStartsWithE);

// 15. Use filter to filter out only prices with values.
const pricesWithValues = products.filter(
  (element) => typeof element.price === "number"
);
// console.log(pricesWithValues);

// 16. Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
function getStringLists(array) {
  return array.filter((element) => typeof element === "string");
}
// console.log(getStringLists([1, 2, 3, "Adam", "Martyna", 5]));

// 17. Use reduce to sum all the numbers in the numbers array.
const sum = numbers.reduce((acc, cur) => acc + cur, 0);
// console.log(sum);

// 18. Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
const concatenateCountries = countries.reduce((acc, cur, currentIndex) => {
  if (currentIndex === countries.length - 1) {
    return acc + " and " + cur + " are north European countries.";
  } else {
    return acc + ", " + cur;
  }
});
// console.log(concatenateCountries);

// 19. Explain the difference between some and every
// logical values, some - only one element is enough to satisfy the condition, every - each element must satisfy the condition

// 20. Use some to check if some names' length greater than seven in names array
const nameLengthGreaterThanSeven = names.some((element) => element.length > 7);
// console.log(nameLengthGreaterThanSeven);

// 21. Use every to check if all the countries contain the word land
const countriesContainLand = countries.every((element) =>
  element.includes("land")
);
// console.log(countriesContainLand);

// 22. Explain the difference between find and findIndex.
// find: returns the first element which satisfies the condition, findIndex - returns the position of the first element which satisfies the condition

// 23. Use find to find the first country containing only six letters in the countries array
const findCountrySixLetters = countries.find((element) => element.length === 6);
// console.log(findCountrySixLetters);

// 24. Use findIndex to find the position of the first country containing only six letters in the countries array
const findCountrySixLettersIndex = countries.findIndex(
  (element) => element.length === 6
);
// console.log(findCountrySixLettersIndex);

// 25. Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
const findIndexNorway = countries.findIndex((element) => element === "Norway");
// console.log(findIndexNorway);

// 26. Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
const findIndexRussia = countries.findIndex((element) => element === "Russia");
// console.log(findIndexRussia);

/* LEVEL 2 */
// 1. Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
const totalPrice = products
  .map((element) => element.price)
  .filter((element) => typeof element === "number")
  .reduce((acc, cur) => acc + cur);
// console.log(totalPrice);

// 2. Find the sum of price of products using only reduce reduce(callback))
var totalPrice2 = products.reduce(function (prev, cur) {
  if (typeof cur.price === "number" && typeof prev === "number") {
    return prev + cur.price;
  } else {
    return prev;
  }
}, 0);
// console.log(totalPrice2);

// 3. Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
import { countriesSecond } from "./countries_data.js";
function categorizeCountries() {
  return countriesSecond.filter((element) => element.name.includes("land"));
}
// console.log(categorizeCountries());

// 4. Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.
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

// 5. Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array
function getFirstTenCountries() {
  return countriesSecond.map((element) => element.name).slice(0, 10);
}
// console.log(getFirstTenCountries());

// 6. Declare a getLastTenCountries function which which returns the last ten countries in the countries array.
function getLastTenCountries() {
  return countriesSecond
    .map((element) => element.name)
    .slice(countriesSecond.length - 10, countriesSecond.length);
}
// console.log(getLastTenCountries());

// 7. Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)
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

/* LEVEL 3 */
// 1. Use the countries information, in the data folder. Sort countries by name, by capital, by population
function sortCountriesByName() {
  return countriesSecond.sort((element) => element.name);
}
// console.log(sortCountriesByName());

function sortCountriesByCapital() {
  // element.capital for sorting by capital
  return countriesSecond.sort((element) => element.capital);
}
// console.log(sortCountriesByCapital());

function sortCountriesByPopulation() {
  return countriesSecond.sort((a, b) => b.population - a.population);
}
// console.log(sortCountriesByPopulation());

// 2. *** Find the 10 most spoken languages:
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

// 3. *** Use countries_data.js file create a function which create the ten most populated countries
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

// 4. *** Try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create an object called statistics and create all the functions which do statistical calculations as method for the statistics object. Check the output below.
/*
const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
console.log('Count:', statistics.count()) // 25
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
console.log('Range: ', statistics.range() // 14
console.log('Mean: ', statistics.mean()) // 30
console.log('Median: ',statistics.median()) // 29
console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
console.log('Variance: ',statistics.var()) // 17.5
console.log('Standard Deviation: ', statistics.std()) // 4.2
console.log('Variance: ',statistics.var()) // 17.5
console.log('Frequency Distribution: ',statistics.freqDist()) # [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]

console.log(statistics.describe())
Count: 25
Sum:  744
Min:  24
Max:  38
Range:  14
Mean:  30
Median:  29
Mode:  (26, 5)
Variance:  17.5
Standard Deviation:  4.2
Frequency Distribution: [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
*/

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

// console.log(statistics.describe());
