/* LEVEL 1 */
// 1. Iterate 0 to 10 using for loop, do the same using while and do while loop
// 1.1 For loop
// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }
// 1.2 While loop
// let i = 0;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// 2. Iterate 10 to 0 using for loop, do the same using while and do while loop
// 2.1 For loop
// for (let i = 10; i >= 0; i--) {
//   console.log(i);
// }
// 2.2 While loop
// let i = 10;
// while (i >= 0) {
//   console.log(i);
//   i--;
// }

// 3. Iterate 0 to n using for loop
// const n = 5
// for(let i = 0; i <= n; i++){
//     console.log(i)
// }

// 4. Write a loop that makes the following pattern using console.log():
// #
// ##
// ###
// ####
// #####
// ######
// #######
// for (let i = 1; i <= 7; i++) {
//   console.log("#".repeat(i));
// }

// 5. Use loop to print the following pattern:
// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 x 10 = 100
// for (let i = 0; i <= 10; i++) {
//   console.log(`${i} x ${i} = ${i * i}`);
// }

// 6. Using loop print the following pattern:
//  i    i^2   i^3
//  0    0     0
//  1    1     1
//  2    4     8
//  3    9     27
//  4    16    64
//  5    25    125
//  6    36    216
//  7    49    343
//  8    64    512
//  9    81    729
//  10   100   1000
// for (let i = 0; i <= 10; i++) {
//   console.log(`${i} ${i ** 2} ${i ** 3}`);
// }

// 7. Use for loop to iterate from 0 to 100 and print only even numbers
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 == 0) {
//     console.log(i)
//   }
// }

// 8. Use for loop to iterate from 0 to 100 and print only odd numbers
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 != 0) {
//     console.log(i)
//   }
// }

// 9. Use for loop to iterate from 0 to 100 and print only prime numbers
let prime = [];
for (let i = 0; i <= 100; i++) {
  if (i == 0 || i == 1) {
    continue;
  } else if (i == 2 || i == 3) {
    prime.push(i);
  } else {
    let value = false;
    for (let j = 2; j <= parseInt(i / 2) + 1; j++) {
      if (i % j == 0) {
        value = true;
        break;
      }
    }
    if (value == false) {
      prime.push(i);
    }
  }
}
// console.log(prime);

// 10. Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let j = 0;
for (let i = 0; i <= 100; i++) {
  j += i;
}
// console.log(j);

// 11. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let even = 0;
let odd = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    even += i;
  } else {
    odd += i;
  }
}
// console.log(`Even ${even}, Odd ${odd}`);

// 12. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
let even2 = 0;
let odd2 = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    even2 += i;
  } else {
    odd2 += i;
  }
}
// console.log([even2, odd2]);

// 13. Develop a small script which generate array of 5 random numbers
let arr = [];
while (arr.length < 6) {
  let number = Math.random() * 101;
  arr.push(Math.floor(number));
}
// console.log(arr);

// 14. Develop a small script which generate array of 5 random numbers and the numbers must be unique
let arr2 = [];
while (arr2.length < 6) {
  let number = Math.floor(Math.random() * 101);
  if (arr2.includes(number)) {
    continue;
  } else {
    arr2.push(number);
  }
}
// console.log(arr2);

// 15. Develop a small script which generate a six characters random id:
function myFunc() {
  let result = "";
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let charactersLength = characters.length;
  for (let i = 0; i <= 5; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
// console.log(myFunc());

/* LEVEL 2 */
// 1. Develop a small script which generate any number of characters random id:
function myFunc2(number) {
  let result = "";
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let charactersLength = characters.length;
  for (let i = 1; i <= number; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
// console.log(myFunc2(10));

// 2. Write a script which generates a random hexadecimal number - '#ee33df'.
// TODO !

// 3. Write a script which generates a random rgb color number.
function myFunc3() {
  let array = [];
  for (let i = 0; i <= 2; i++) {
    array.push(Math.floor(Math.random() * 256));
  }
  return "rgb(" + array.join(",") + ")";
}
// console.log(myFunc3());

// 4. Using the above countries array, create the following new array.
// ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];
let countriesUpperCase = [];
for (const element of countries) {
  countriesUpperCase.push(element.toUpperCase());
}
// console.log(countriesUpperCase);

// 5. Using the above countries array, create an array for countries length'.
// [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
let countriesLength = [];
for (const element of countries) {
  countriesLength.push(element.length);
}
// console.log(countriesLength);

// 6. Use the countries array to create the following array of arrays:
/*  
[
    ["Albania", "ALB", 7],
    ["Bolivia", "BOL", 7],
    ["Canada", "CAN", 6],
    ["Denmark", "DEN", 7],
    ["Ethiopia", "ETH", 8],
    ["Finland", "FIN", 7],
    ["Germany", "GER", 7],
    ["Hungary", "HUN", 7],
    ["Ireland", "IRE", 7],
    ["Japan", "JAP", 5],
    ["Kenya", "KEN", 5],
];
*/
let arr3 = [];
for (const element of countries) {
  arr3.push([element, element.slice(0, 3).toUpperCase(), element.length]);
}
// console.log(arr3);

// 7. In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
let arr4 = [];
for (const element of countries) {
  let re = /land/g;
  if (element.match(re)) {
    arr4.push(element);
  }
}
// if (arr4 != []) {
//   console.log(arr4);
// } else {
//   console.log("All these countries are without land");
// }

// 8. In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
let arr5 = [];
for (const element of countries) {
  let re = /[a-z]+ia/gi;
  if (element.match(re)) {
    arr5.push(element);
  }
}
// if (arr5 != []) {
//   console.log(arr5);
// } else {
//   console.log("These are countries ends without ia");
// }

// 9. Using the above countries array, find the country containing the biggest number of characters.
let result = null;
for (const element of countries) {
  if (result == null) {
    result = element;
  } else if (element.length > result.length) {
    result = element;
  }
}
// console.log(result);

// 10. Using the above countries array, find the country containing only 5 characters.
let arr6 = [];
for (const element of countries) {
  if (element.length == 5) {
    arr6.push(element);
  }
}
// console.log(arr6);

// 11. Find the longest word in the webTechs array
var firstFile = require("./web_tech");
let longestWord = "";
for (const element of firstFile.webTechs) {
  if (element.length > longestWord.length) {
    longestWord = element;
  }
}
// console.log(longestWord);

// 12. Use the webTechs array to create the following array of arrays:
// [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
let arr7 = [];
for (const element of firstFile.webTechs) {
  arr7.push([element, element.length]);
}
// console.log(arr7);

// 13. An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
const mernStack = [];
for (const element of firstFile.webTechs) {
  if (["MongoDB", "Express", "React", "Redux", "Node"].includes(element)) {
    mernStack.push(element);
  }
}
// console.log(mernStack);

// 14. Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items
// for (const element of firstFile.webTechs) {
//   console.log(element);
// }

// 15. This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
let fruits = ["banana", "orange", "mango", "lemon"];
let reversedFruits = [];
for (let i = fruits.length - 1; i >= 0; i--) {
  reversedFruits.push(fruits[i]);
}
// console.log(reversedFruits);

// 16. Print all the elements of array as shown below.
const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];
// for (const element of fullStack) {
//   for (const language of element) {
//     console.log(language);
//   }
// }

/* LEVEL 3 */
// 1. Copy countries array (Avoid mutation)
var countriesArray = require("./countries");

// 2. Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
var copyOfArray = countriesArray.countries;
var sortedCountries = copyOfArray.sort();

// 3. Sort the webTechs array and mernStack array
var sortedWebTechs = firstFile.webTechs.sort();
var sortedMernStack = firstFile.mernStack.sort();

// 4. Extract all the countries contain the word 'land' from the countries array and print it as array
let countriesWithLand = [];
for (const element of countriesArray.countries) {
  let re = /land/g;
  if (element.match(re)) {
    countriesWithLand.push(element);
  }
}
// console.log(countriesWithLand);

// 5. Find the country containing the hightest number of characters in the countries array
let mostCharacters = "";
for (const element of countriesArray.countries) {
  if (element.length > mostCharacters.length) {
    mostCharacters = element;
  }
}
// console.log(mostCharacters);

// 6. It's the same task as fourth :)

// 7. Extract all the countries containing only four characters from the countries array and print it as array
let fourCharacters = [];
for (const element of countriesArray.countries) {
  if (element.length == 4) {
    fourCharacters.push(element);
  }
}
// console.log(fourCharacters);

// 8. Extract all the countries containing two or more words from the countries array and print it as array
let moreWords = [];
for (const element of countriesArray.countries) {
  if (element.split(" ").length > 1) {
    moreWords.push(element);
  }
}
// console.log(moreWords);

// 9. Reverse the countries array and capitalize each country and stored it as an array
let newArray = [];
for (let i = countriesArray.countries.length - 1; i >= 0; i--) {
  newArray.push(countriesArray.countries[i].toUpperCase());
}
// console.log(newArray);
