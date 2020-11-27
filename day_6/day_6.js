const numbers = [1, 2, 3, 4, 5];
const newArr = [];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  newArr.push(i * i);
}

console.log(newArr); // [0, 1, 4, 9, 16]

// EXERCISES
// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// let i = 0;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i <= 10);

// for (let i = 10; i >= 0; i--) {
//   console.log(i);
// }

// let i = 10;
// while (i >= 0) {
//   console.log(i);
//   i--;
// }

// let i = 10;
// do {
//   console.log(i);
//   i--;
// } while (i >= 0);

// for (let i = 1; i <= 7; i++) {
//   console.log("#".repeat(i));
// }

// for (let i = 0; i <= 10; i++) {
//   console.log(`${i} x ${i} = ${i * i}`);
// }

// for (let i = 0; i <= 10; i++) {
//   console.log(`${i} ${i ** 2} ${i ** 3}`);
// }

// let arr = [];
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 == 0) {
//     arr.push(i);
//   }
// }
// console.log(arr);

// let arr = [];
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 != 0) {
//     arr.push(i);
//   }
// }
// console.log(arr);

// let prime = [];
// for (let i = 0; i <= 100; i++) {
//   if (i == 0 || i == 1) {
//     continue;
//   } else if (i == 2 || i == 3) {
//     prime.push(i);
//   } else {
//     let value = false;
//     for (let j = 2; j <= parseInt(i / 2) + 1; j++) {
//       if (i % j == 0) {
//         value = true;
//         break;
//       }
//     }
//     if (value == false) {
//       prime.push(i);
//     }
//   }
// }
// console.log(prime);

// let j = 0;
// for (let i = 0; i <= 100; i++) {
//   j += i;
// }
// console.log(j);

// let even = 0;
// let odd = 0;
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 == 0) {
//     even += i;
//   } else {
//     odd += i;
//   }
// }
// console.log(`Even ${even}, Odd ${odd}`);

// let even = 0;
// let odd = 0;
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 == 0) {
//     even += i;
//   } else {
//     odd += i;
//   }
// }
// console.log([even, odd]);

// let arr = [];
// while (arr.length < 6) {
//   let number = Math.random() * 101;
//   arr.push(Math.floor(number));
// }
// console.log(arr);

// let arr = [];
// while (arr.length < 6) {
//   let number = Math.floor(Math.random() * 101);
//   if (arr.includes(number)) {
//     continue;
//   } else {
//     arr.push(number);
//   }
// }
// console.log(arr);

// function myFunc() {
//   let result = "";
//   let characters =
//     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//   let charactersLength = characters.length;
//   for (let i = 0; i <= 5; i++) {
//     result += characters.charAt(Math.floor(Math.random() * charactersLength));
//   }
//   return result;
// }
// console.log(myFunc());

// let countries = [
//   "ALBANIA",
//   "BOLIVIA",
//   "CANADA",
//   "DENMARK",
//   "ETHIOPIA",
//   "FINLAND",
//   "GERMANY",
//   "HUNGARY",
//   "IRELAND",
//   "JAPAN",
//   "KENYA"
// ];
// let countries2 = [];
// let lengthCountries = [];
// for (const element of countries) {
//   countries2.push(element.toLowerCase());
//   lengthCountries.push(element.length);
// }
// console.log(countries2);
// console.log(lengthCountries);

let countries3 = [
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
// let arr = [];
// for (const element of countries3) {
//   let re = /land/g;
//   if (element[0].match(re)) {
//     arr.push(element[0]);
//   }
// }
// console.log(arr);

// let arr2 = [];
// for (const element of countries3) {
//   let re2 = /[a-z]+ia/gi;
//   if (element[0].match(re2)) {
//     arr2.push(element[0]);
//   }
// }
// console.log(arr2);

// let result = null;
// for (const element of countries3) {
//   if (result == null) {
//     result = element[0];
//   } else if (element[0].length > result.length) {
//     result = element[0];
//   }
// }
// console.log(result);

// let arr3 = [];
// for (const element of countries3) {
//   if (element[0].length == 5) {
//     arr3.push(element[0]);
//   }
// }
// console.log(arr3);

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

// let longestWord = "";
// for (const element of webTechs) {
//   if (element.length > longestWord.length) {
//     longestWord = element;
//   }
// }
// console.log(longestWord);

// let arr4 = [];
// for (const element of webTechs) {
//   arr4.push([element, element.length]);
// }
// console.log(arr4);

// const mernStack = [];
// for (const element of webTechs) {
//   if (["MongoDB", "Express", "React", "Redux", "Node"].includes(element)) {
//     mernStack.push(element);
//   }
// }
// console.log(mernStack);

// for (const element of webTechs) {
//   console.log(element);
// }

// let fruits = ["banana", "orange", "mango", "lemon"];

// let reversedFruits = [];
// for (let i = fruits.length - 1; i >= 0; i--) {
//   reversedFruits.push(fruits[i]);
// }
// console.log(reversedFruits);

// const fullStack = [
//   ["HTML", "CSS", "JS", "React"],
//   ["Node", "Express", "MongoDB"]
// ];

// for (const element of fullStack) {
//   for (const language of element) {
//     console.log(language);
//   }
// }
