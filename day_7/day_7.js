// function countSum(value1, value2) {
//   return value1 + value2;
// }

// console.log(countSum(4, 1));

// function sumAllNums() {
//   console.log(arguments);
// }

// sumAllNums(1, 2, 3, 4);

// function sumAllNums2() {
//   let sum = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     sum += arguments[i];
//   }
//   return sum;
// }
// console.log(sumAllNums2(1, 2, 3, 4));

// const sumAllNums3 = (...args) => {
//   let sum = 0;
//   for (const element of args) {
//     sum += element;
//   }
//   return sum;
// };

// console.log(sumAllNums3(1, 2, 3));

// const anonymousFun = function() {
//   console.log(
//     "I am an anonymous function and my value is stored in anonymousFun"
//   );
// };
// console.log(anonymousFun());

// (function(n) {
//   console.log(n * n);
// })(2);

// let squaredNum = (function(n) {
//   return n * n;
// })(10);
// console.log(squaredNum);

// const printFullName = (firstName, lastName) => `${firstName} ${lastName}`;

// console.log(printFullName("Adam", "Rogacewicz"));

// function weightOfObject(mass, gravity = 9.81) {
//   let weight = mass * gravity + " N"; // the value has to be changed to string first
//   return weight;
// }
// console.log(weightOfObject(100));

// Exercises

// const fullName1 = function() {
//   return "Adam Rogacewicz";
// };
// console.log(fullName1());

// const fullName2 = (firstName, lastName) => `${firstName} ${lastName}`;
// console.log(fullName2("Adam", "Rogacewicz"));

// const addNumbers1 = (value1, value2) => value1 + value2;
// console.log(addNumbers1(1, 2));

// function perimeterOfRectangle(length, width) {
//   return 2 * (length + width);
// }
// console.log(perimeterOfRectangle(5, 4));

// function areaOfRectangle(length, width) {
//   return length * width;
// }
// console.log(areaOfRectangle(5, 4));

// function volumeOfRectPrism(length, width, heigth) {
//   return length * width * heigth;
// }
// console.log(volumeOfRectPrism(4, 5, 6));

// function areaOfCircle(radius, pi = 3.14) {
//   return pi * radius ** 2;
// }
// console.log(areaOfCircle(2));

// const CircumOfCircle = (radius, pi = 3.14) => 2 * pi * radius;
// console.log(CircumOfCircle(4));

// const density = (mass, volume) => (mass / volume).toFixed(2);
// console.log(density(10, 3));

// const speed = (distance, time) => `${(distance / time).toFixed(2)} km/h`;
// console.log(speed(40, 0.2));

// const weigth = (mass, gravity = 9.81) => (mass * gravity).toFixed(1) + " N";
// console.log(weigth(40));

// function convertCelciusToFahrenheit(value) {
//   return `${(value * 9) / 5 + 32} degrees in Celcius`;
// }
// console.log(convertCelciusToFahrenheit(30));

// function bmi(weigth, heigth) {
//   const bmiValue = weigth / heigth ** 2;
//   if (bmiValue < 18.5) {
//     return "underweigth " + bmiValue;
//   } else if (bmiValue <= 24.9) {
//     return "normal weigth " + bmiValue;
//   } else if (bmiValue <= 29.9) {
//     return "overweigth " + bmiValue;
//   } else {
//     return "obese " + bmiValue;
//   }
// }
// console.log(bmi(92, 1.9));

// function checkSeason(value) {
//   if (["december", "january", "february"].includes(value.toLowerCase())) {
//     return "Winter";
//   } else if (["march", "april", "may"].includes(value.toLowerCase())) {
//     return "Spring";
//   } else if (["june", "july", "august"].includes(value.toLowerCase())) {
//     return "Summer";
//   } else if (
//     ["september", "october", "november"].includes(value.toLowerCase())
//   ) {
//     return "Autumn";
//   } else {
//     return "Wrong month!";
//   }
// }
// console.log(checkSeason("augusst"));

// function findMax(x, y, z) {
//   return Math.max(x, y, z);
// }
// console.log(findMax(4, 5, 1));
// console.log(findMax(0, -1, -4));

// function solveLinEquation(a, b) {
//   return -(b / a);
// }
// console.log(solveLinEquation(1, 3));

// function solveQuadEquation(a, b, c) {
//   const delta = b ** 2 - 4 * a * c;
//   if (delta > 0) {
//     const x1 = (-1 * b - Math.sqrt(delta)) / (2 * a);
//     const x2 = (-1 * b + Math.sqrt(delta)) / (2 * a);
//     return { x1, x2 };
//   } else if (delta == 0) {
//     const x3 = (-b / 2) * a;
//     return { x3 };
//   } else {
//     return "that function does not have a root";
//   }
// }
// console.log(solveQuadEquation(1, 4, 4));
// console.log(solveQuadEquation(1, -1, -2));
// console.log(solveQuadEquation(1, 7, 12));
// console.log(solveQuadEquation());

// function printArray(array) {
//   for (const element of array) {
//     console.log(element);
//   }
// }
// printArray([1, 2, 3, "Adam"]);

// function showDateTime() {
//   const dateObject = new Date();
//   return `${dateObject.getMonth() +
//     1}/${dateObject.getDate()}/${dateObject.getFullYear()} ${dateObject.getHours()}:${dateObject.getMinutes()}`;
// }
// console.log(showDateTime());

// function reverseArray(array) {
//   const newArray = [];
//   for (i = array.length - 1; i >= 0; i--) {
//     newArray.push(array[i]);
//   }
//   return newArray;
// }
// console.log(reverseArray([1, 2, 3]));

// function capitalizeArray(array) {
//   const newArray = [];
//   for (const element of array) {
//     newArray.push(element.toUpperCase());
//   }
//   return newArray;
// }
// console.log(capitalizeArray(["adam", "asdas"]));

// const myArray = [1, 2, 3];
// function addItem(value) {
//   myArray.push(value);
//   return myArray;
// }
// console.log(addItem(6));

// function removeItem(index) {
//   myArray.splice(index, 1);
//   return myArray;
// }
// console.log(removeItem(1));

// function sumOfNumbers(number) {
//   let sum = 0;
//   for (i = 1; i <= number; i++) {
//     sum += i;
//   }
//   return sum;
// }
// console.log(sumOfNumbers(5));

// function sumOfOdds(number) {
//   let sum = 0;
//   for (i = 1; i <= number; i++) {
//     if (i % 2 == 0) {
//       continue;
//     } else {
//       sum += i;
//     }
//   }
//   return sum;
// }
// console.log(sumOfOdds(5));

// function sumOfEven(number) {
//   let sum = 0;
//   for (i = 1; i <= number; i++) {
//     if (i % 2 != 0) {
//       continue;
//     } else {
//       sum += i;
//     }
//   }
//   return sum;
// }
// console.log(sumOfEven(5));

// function evensAndOdds(number) {
//   let sumOdds = 0;
//   let sumEvens = 0;
//   for (i = 1; i <= number; i++) {
//     if (i % 2 == 0) {
//       sumEvens += 1;
//     } else {
//       sumOdds += 1;
//     }
//   }
//   return `The number of odds are ${sumOdds}\nThe number of evens are ${sumEvens}`;
// }
// console.log(evensAndOdds(5));

// function sumOfArguments() {
//   let sum = 0;
//   for (i = 0; i < arguments.length; i++) {
//     sum += arguments[i];
//   }
//   return sum;
// }
// console.log(sumOfArguments(1));

// function randomUserIp() {
//   let num1 = Math.floor(Math.random() * 100) + 100;
//   let num2 = Math.floor(Math.random() * 90) + 10;
//   let num3 = Math.floor(Math.random() * 100) + 100;
//   let num4 = Math.floor(Math.random() * 9) + 1;
//   return `${num1}.${num2}.${num3}.${num4}`;
// }
// console.log(randomUserIp());

// function userIdGenerator() {
//   const characters =
//     "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
//   let userId = "";
//   for (i = 0; i < 7; i++) {
//     userId += characters[Math.floor(Math.random() * characters.length)];
//   }
//   return userId;
// }
// console.log(userIdGenerator());

// function rgbColorGenerator() {
//   const num1 = Math.floor(Math.random() * 256);
//   const num2 = Math.floor(Math.random() * 256);
//   const num3 = Math.floor(Math.random() * 256);
//   return `rgb(${num1},${num2},${num3})`;
// }
// console.log(rgbColorGenerator());

// const myNumber = 125;
// console.log(myNumber.toString(16));

// function arrayOfHexaColors(number) {
//   let myArray = [];
//   for (i = 0; i < number; i++) {
//     let hexNumber1 = Math.floor(Math.random() * 256).toString(16);
//     let hexNumber2 = Math.floor(Math.random() * 256).toString(16);
//     let hexNumber3 = Math.floor(Math.random() * 256).toString(16);
//     if (hexNumber1.length == 1) {
//       hexNumber1 = "0" + hexNumber1;
//     }
//     if (hexNumber2.length == 1) {
//       hexNumber2 = "0" + hexNumber2;
//     }
//     if (hexNumber3.length == 1) {
//       hexNumber3 = "0" + hexNumber3;
//     }
//     let result = `#${hexNumber1}${hexNumber2}${hexNumber3}`;
//     myArray.push(result);
//   }
//   return myArray;
// }
// console.log(arrayOfHexaColors(5));

// function arrayOfRgbColors(number) {
//   let myArray = [];
//   for (i = 0; i < number; i++) {
//     let rgbNumber1 = Math.floor(Math.random() * 256);
//     let rgbNumber2 = Math.floor(Math.random() * 256);
//     let rgbNumber3 = Math.floor(Math.random() * 256);
//     myArray.push(`rgb(${rgbNumber1}, ${rgbNumber2}, ${rgbNumber3})`);
//   }
//   return myArray;
// }
// console.log(arrayOfRgbColors(2));

// function convertHexaToRgb(value) {
//   let value1 = parseInt(value.slice(1, 3), 16);
//   let value2 = parseInt(value.slice(3, 5), 16);
//   let value3 = parseInt(value.slice(5), 16);
//   return `rgb(${value1}, ${value2}, ${value3})`;
// }

// function convertRgbToHexa(value1, value2, value3) {
//   let first = value1.toString(16);
//   let second = value2.toString(16);
//   let third = value3.toString(16);
//   if (first.length == 1) {
//     first = "0" + first;
//   }
//   if (second.length == 1) {
//     second = "0" + second;
//   }
//   if (third.length == 1) {
//     third = "0" + third;
//   }
//   return `#${first}${second}${third}`;
// }

// const myNumber = "10";
// console.log(parseInt(myNumber, 16));
// console.log(convertHexaToRgb("#3a152c"));
// console.log(convertRgbToHexa(12, 22, 123));

// function generateColors(color, number) {
//   if (color == "hexa") {
//     let myArray = [];
//     for (i = 0; i < number; i++) {
//       let value1 = Math.floor(Math.random() * 256).toString(16);
//       let value2 = Math.floor(Math.random() * 256).toString(16);
//       let value3 = Math.floor(Math.random() * 256).toString(16);
//       if (value1.length == 1) {
//         value1 = "0" + value1;
//       }
//       if (value2.length == 1) {
//         value2 = "0" + value2;
//       }
//       if (value3.length == 1) {
//         value3 = "0" + value3;
//       }
//       let result = `#${value1}${value2}${value3}`;
//       myArray.push(result);
//     }
//     return myArray;
//   } else if (color == "rgb") {
//     let myArray = [];
//     for (i = 0; i < number; i++) {
//       let value1 = Math.floor(Math.random() * 256);
//       let value2 = Math.floor(Math.random() * 256);
//       let value3 = Math.floor(Math.random() * 256);
//       let result = `rgb(${value1}, ${value2}, ${value3})`;
//       myArray.push(result);
//     }
//     return myArray;
//   } else {
//     return "wrong values! try again!";
//   }
// }
// console.log(generateColors("hexoa", 20));

// function shuffleArray(array) {
//   let currentIndex = array.length,
//     temporaryValue,
//     randomIndex;
//   while (0 !== currentIndex) {
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex -= 1;

//     temporaryValue = array[currentIndex];
//     array[currentIndex] = array[randomIndex];
//     array[randomIndex] = temporaryValue;
//   }
//   return array;
// }
// console.log(shuffleArray([1, 2, 3, 4, 5, 6, 7]));

// function factorial(number) {
//   if (number < 0) {
//     return -1;
//   } else if (number == 0) {
//     return 1;
//   } else {
//     return number * factorial(number - 1);
//   }
// }
// console.log(factorial(5));

// function sum(...args) {
//   let sum = 0;
//   for (const element of args) {
//     sum += element;
//   }
//   return sum;
// }
// console.log(sum(1, 2, 3, 3));

// function sumOfArrayItems(array) {
//   let sum = 0;
//   for (const element of array) {
//     if (typeof element != "number") {
//       return "wrong values in the array";
//     } else {
//       sum += element;
//     }
//   }
//   return sum;
// }
// console.log(sumOfArrayItems([1, 2, 3, "1"]));

// function average(array) {
//   let sum = 0;
//   for (const element of array) {
//     if (typeof element != "number") {
//       return "wrong values in the array";
//     } else {
//       sum += element;
//     }
//   }
//   let average = sum / array.length;
//   return average;
// }
// console.log(average([1, 2, 3, 5.5, "a"]));

// function modifyArray(array) {
//   if (array.length < 5) {
//     return "item not found";
//   } else {
//     array[4] == array[4].toUpperCase();
//     return array;
//   }
// }
// console.log(
//   modifyArray(["Avocado", "Tomato", "Potato", "Mango", "LEMON", "Carrot"])
// );
// console.log(modifyArray(["Avocado", "Tomato", "Potato", "Mango"]));

// function isPrime(value) {
//   if (value == 1 || value < 0) {
//     return "this is not a prime number";
//   } else if (value == 2 || value == 3) {
//     return "this is a prime number";
//   } else {
//     for (i = 2; i < Math.floor(value / 2); i++) {
//       if (value % i == 0) {
//         return "this is not a prime number";
//       }
//     }
//   }
//   return "this is a prime number";
// }
// console.log(isPrime(2));

// function uniqueArray(array) {
//   let newArray = [];
//   for (const element of array) {
//     if (newArray.includes(element)) {
//       return false;
//     } else {
//       newArray.push(element);
//     }
//   }
//   return true;
// }
// console.log(uniqueArray([1, 2, 3, 4, 5, 6, "5", 4]));

// function uniqueDataType(array) {
//   for (i = 1; i < array.length; i++) {
//     if (typeof array[i] != typeof array[i - 1]) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(uniqueDataType([1, 2, "1", 2]));

// function isValidVariable(variable) {
//   let wrongCharacters = ["`", "!", "#", "%"];
//   for (const element of variable) {
//     if (wrongCharacters.includes(element)) {
//       return "wrong variable name";
//     }
//   }
//   return "variable name is correct";
// }
// console.log(isValidVariable("adam!"));

// function arrayOfSevenNumbers() {
//   let array = [];
//   while (array.length < 7) {
//     let number = Math.floor(Math.random() * 10);
//     if (array.includes(number)) {
//       continue;
//     } else {
//       array.push(number);
//     }
//   }
//   return array;
// }
// console.log(arrayOfSevenNumbers());
