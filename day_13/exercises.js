// LEVEL 1
// 1. Display the countries array as a table
const countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];
// console.table(countries);

// 2. Display the countries object as a table
import { countriesSecond } from "./countries_data.js";
// console.table(countriesSecond.slice(0, 5));

// 3. Use console.group() to group logs
// console.group("Countries array");
// console.table(countries);
// console.groupEnd();

// console.group("Countries objects");
// console.table(countriesSecond.slice(0, 5));
// console.groupEnd();

// LEVEL 2
// 1. 10 > 2 * 10 use console.assert()
// console.assert(10 > 2 * 10, "10 is not higher number than 2 * 10");

// 2. Write a warning message using console.warn()
// console.warn("warning message");

// 3. Write an error message using console.error()
// console.warn("error message");

// LEVEL 3
// 1. Check the speed difference among the following loops: while, for, for of, forEach
console.time("while");
let i = 0;
let value = 0;
while (i <= 10) {
  value += i;
  i++;
}
console.log(value);
console.timeEnd("while");

console.time("for");
let value2 = 0;
for (let i = 0; i <= 10; i++) {
  value2 += i;
}
console.log(value2);
console.timeEnd("for");

console.time("for of");
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let value3 = 0;
for (const element of array) {
  value3 += element;
}
console.log(value3);
console.timeEnd("for of");

console.time("forEach");
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let value4 = 0;
array2.forEach((element) => {
  value4 += element;
});
console.log(value4);
console.timeEnd("forEach");
