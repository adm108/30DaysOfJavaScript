/* LEVEL 1 */
// 1. Declare an empty array
const arr = [];

// 2. Declare an array with more than 5 number of elements
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8];

// 3. Find the length of your array
// console.log(arr2.length);

// 4. Get the first item, the middle item and the last item of the array
// 4.1 First item
// console.log(arr2[0]);
// 4.2 Middle item
// console.log(arr2[parseInt(arr2.length / 2)]);
// 4.3 Last item
// console.log(arr2[arr2.length - 1]);

// 5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const arr3 = [1, "Adam", false, NaN, [1, 2, 3], null];

// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
  "Amazon2",
];

// 7. Print the array using console.log()
// console.log(itCompanies);

// 8. Print the number of companies in the array
// console.log(itCompanies.length);

// 9. Print the first company, middle and last company
// 9.1 First company
// console.log(itCompanies[0]);
// 9.2 Middle company
// console.log(itCompanies[parseInt(itCompanies.length / 2)]);
// 9.3 Last company
// console.log(itCompanies[arr4.length - 1]);

// 10. Print out each company
// for (let i = 0; i < itCompanies.length; i++) {
//   console.log(itCompanies[i]);
// }

// 11. Change each company name to uppercase one by one and print them out
// for (let i = 0; i < itCompanies.length; i++) {
//   itCompanies[i] = itCompanies[i].toUpperCase();
// }
// console.log(itCompanies);

// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
// console.log(
//   `${itCompanies.slice(0, itCompanies.length - 1).join(", ")} and ${
//     itCompanies[itCompanies.length - 1]
//   } are big IT companies`
// );

// 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
// itCompanies.includes("IBMM")
//   ? console.log("This company exists in the array")
//   : console.log("This company does not exists in the array");

// 14. Filter out companies which have more than one 'o' without the filter method
function myFunction(array) {
  let countO = 0;
  let myList = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (["o", "O"].includes(array[i][j])) {
        countO += 1;
      }
    }
    if (countO > 1) {
      myList.push(array[i]);
      countO = 0;
    }
    countO = 0;
  }
  return myList;
}
// console.log(myFunction(itCompanies));

// 15. Sort the array using sort() method
// console.log(itCompanies.sort());

// 16. Reverse the array using reverse() method
// console.log(itCompanies.reverse());

// 17. Slice out the first 3 companies from the array
// console.log(itCompanies.slice(0, 3));

// 18. Slice out the last 3 companies from the array
// console.log(itCompanies.slice(itCompanies.length - 3, itCompanies.length));

// 19. Slice out the middle IT company or companies from the array
// itCompanies.length % 2 == 0
//   ? console.log([
//       itCompanies[parseInt(itCompanies.length / 2) - 1],
//       itCompanies[parseInt(itCompanies.length / 2)],
//     ])
//   : console.log([itCompanies[parseInt(itCompanies.length / 2)]]);

// 20. Remove the first IT company from the array
// itCompanies.shift();
// console.log(itCompanies);

// 21. Remove the middle IT company or companies from the array
// itCompanies.length % 2 == 0
//   ? itCompanies.splice(parseInt(itCompanies.length / 2) - 1, 2)
//   : itCompanies.splice(parseInt(itCompanies.length / 2), 1);
// console.log(itCompanies);

// 22. Remove the last IT company from the array
// itCompanies.splice(itCompanies.length - 1, 1);
// console.log(itCompanies);

// 23. Remove all IT companies
// console.log(itCompanies.splice());

/* LEVEL 2 */
// 2. First remove all the punctuations and change the string to array and count the number of words in the array
let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
let re = /[a-z]+/gi;
let words = text.match(re);
// console.log(words);
// console.log(words.length);

// 3. In the following shopping cart add, remove, edit items
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
// 3.1 add 'Meat' in the beginning of your shopping cart if it has not been already added
// shoppingCart.includes("Meat")
//   ? console.log("Shopping cart has Meat!")
//   : shoppingCart.unshift("Meat");
// 3.2 add Sugar at the end of you shopping cart if it has not been already added
// shoppingCart.includes("Sugar")
//   ? console.log("Shopping cart has sugar!")
//   : shoppingCart.push("Sugar");
// 3.3 remove 'Honey' if you are allergic to honey
// shoppingCart.splice(shoppingCart.indexOf("Honey"), 1);
// 3.4 modify Tea to 'Green Tea'
// shoppingCart.splice(shoppingCart.indexOf("Tea"), 1, "Green Tea");

// 6. Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = frontEnd.concat(backEnd);

/* LEVEL 3 */
// 1. The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
// 1.1 Sort the array and find the min and max age
ages.sort();
// 1.2 Find the median age(one middle item or two middle items divided by two)
// ages.length % 2 == 0
//   ? console.log(
//       (ages[parseInt(ages.length / 2)] + ages[parseInt(ages.length / 2) - 1]) /
//         2
//     )
//   : console.log(ages[parseInt(ages.length / 2)]);
// 1.3 Find the average age(all items divided by number of items)
let result = 0;
for (let i = 0; i < ages.length; i++) {
  result += ages[i];
}
var average = result / ages.length;
const countries = require("./countries");
// 1.4 Find the range of the ages(max minus min)
// console.log(ages[ages.length - 1] - ages[0]);
// 1.5 Compare the value of (min - average) and (max - average), use abs() method
// console.log(Math.abs(ages[0] - average));
// console.log(Math.abs(ages[ages.length - 1] - average));

/* LEVEL 3 */
// 1. Slice the first ten countries from the countries array
var countriesImport = require("./countries2");
console.log(countriesImport.countries.slice(0, 10));
// 2. Find the middle country(ies) in the countries array
// countriesImport.countries.length % 2 == 0
//   ? console.log(
//       countriesImport.countries[
//         parseInt(countriesImport.countries.length / 2) - 1
//       ],
//       countriesImport.countries[parseInt(countriesImport.countries.length / 2)]
//     )
//   : console.log(
//       countriesImport.countries[parseInt(countriesImport.countries.length / 2)]
//     );
// 3. Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
function myFunc(array) {
  let firstArray = [];
  let secondArray = [];
  if (array.length % 2 == 0) {
    firstArray = array.slice(0, array.length / 2);
    secondArray = array.slice(array.length / 2);
  } else {
    firstArray = array.slice(0, parseInt(array.length / 2) + 1);
    secondArray = array.slice(parseInt(array.length / 2) + 1);
  }

  return [firstArray, secondArray];
}
// This array is for checking correctness
var numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(myFunc(numbers));
// console.log(myFunc(countriesImport.countries));
