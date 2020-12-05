/* LEVEL 1 */
// 1. Declare a function fullName and it print out your full name.
const fullName = function () {
  return "Adam Rogacewicz";
};
// console.log(fullName());

// 2. Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
const fullName2 = (firstName, lastName) => `${firstName} ${lastName}`;
// console.log(fullName2("Adam", "Rogacewicz"));

// 3. Declare a function addNumbers and it takes two two parameters and it returns sum.
const addNumbers = (value1, value2) => value1 + value2;
// console.log(addNumbers(1, 2));

// 4. An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
function areaOfRectangle(length, width) {
  return length * width;
}
// console.log(areaOfRectangle(5, 4));

// 5. A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
function perimeterOfRectangle(length, width) {
  return 2 * (length + width);
}
// console.log(perimeterOfRectangle(5, 4));

// 6. A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
function volumeOfRectPrism(length, width, heigth) {
  return length * width * heigth;
}
// console.log(volumeOfRectPrism(4, 5, 6));

// 7. Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle.
function areaOfCircle(radius, pi = 3.14) {
  return pi * radius ** 2;
}
// console.log(areaOfCircle(2));

// 8. Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle.
const CircumOfCircle = (radius, pi = 3.14) => 2 * pi * radius;
// console.log(CircumOfCircle(4));

// 9. Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
const density = (mass, volume) => (mass / volume).toFixed(2);
// console.log(density(10, 3));

// 10. Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function .which calculates a speed of a moving object, speed.
const speed = (distance, time) => `${(distance / time).toFixed(2)} km/h`;
// console.log(speed(40, 0.2));

// 11. Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
const weigth = (mass, gravity = 9.81) => (mass * gravity).toFixed(1) + " N";
// console.log(weigth(40));

// 12. Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelciusToFahrenheit.
function convertCelciusToFahrenheit(value) {
  return `${(value * 9) / 5 + 32} degrees in Celcius`;
}
// console.log(convertCelciusToFahrenheit(30));

// 13. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
/*
The same groups apply to both men and women.
Underweight: BMI is less than 18.5
Normal weight: BMI is 18.5 to 24.9
Overweight: BMI is 25 to 29.9
Obese: BMI is 30 or more
*/
function bmi(weigth, heigth) {
  const bmiValue = weigth / heigth ** 2;
  if (bmiValue < 18.5) {
    return "underweigth " + bmiValue;
  } else if (bmiValue <= 24.9) {
    return "normal weigth " + bmiValue;
  } else if (bmiValue <= 29.9) {
    return "overweigth " + bmiValue;
  } else {
    return "obese " + bmiValue;
  }
}
// console.log(bmi(92, 1.9));

// 14. Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
function checkSeason(value) {
  if (["december", "january", "february"].includes(value.toLowerCase())) {
    return "Winter";
  } else if (["march", "april", "may"].includes(value.toLowerCase())) {
    return "Spring";
  } else if (["june", "july", "august"].includes(value.toLowerCase())) {
    return "Summer";
  } else if (
    ["september", "october", "november"].includes(value.toLowerCase())
  ) {
    return "Autumn";
  } else {
    return "Wrong month!";
  }
}
// console.log(checkSeason("august"));

// 15. Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
function findMax(x, y, z) {
  return Math.max(x, y, z);
}
// console.log(findMax(4, 5, 1));

/* LEVEL 2 */
// 1. Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
function solveLinEquation(a, b) {
  return -(b / a);
}
// console.log(solveLinEquation(1, 3));

// 2. Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
function solveQuadEquation(a, b, c) {
  const delta = b ** 2 - 4 * a * c;
  if (delta > 0) {
    const x1 = (-1 * b - Math.sqrt(delta)) / (2 * a);
    const x2 = (-1 * b + Math.sqrt(delta)) / (2 * a);
    return { x1, x2 };
  } else if (delta == 0) {
    const x3 = (-b / 2) * a;
    return { x3 };
  } else {
    return "that function does not have a root";
  }
}
// console.log(solveQuadEquation(1, 4, 4));
// console.log(solveQuadEquation(1, -1, -2));
// console.log(solveQuadEquation(1, 7, 12));
// console.log(solveQuadEquation());

// 3. Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
function printArray(array) {
  for (const element of array) {
    console.log(element);
  }
}
// printArray([1, 2, 3, "Adam"]);

// 4. Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
function showDateTime() {
  const dateObject = new Date();
  const month =
    (dateObject.getMonth() + 1 < 10 ? "0" : "") + (dateObject.getMonth() + 1);
  const day = (dateObject.getDate() < 10 ? "0" : "") + dateObject.getDate();
  const hours = (dateObject.getHours() < 10 ? "0" : "") + dateObject.getHours();
  const minutes =
    (dateObject.getMinutes() < 10 ? "0" : "") + dateObject.getMinutes();
  return `${day}/${month}/${dateObject.getFullYear()} ${hours}:${minutes}`;
}
// console.log(showDateTime());

// 5. Declare a function name swapValues. This function swaps value of x to y.
// TODO !

// 6. Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
function reverseArray(array) {
  const newArray = [];
  for (i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}
// console.log(reverseArray([1, 2, 3]));

// 7. Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalized array.
function capitalizeArray(array) {
  const newArray = [];
  for (const element of array) {
    newArray.push(element.toUpperCase());
  }
  return newArray;
}
// console.log(capitalizeArray(["adam", "asdas"]));

// 8. Declare a function name addItem. It takes an item parameter and it returns an array after adding the item.
const myArray = [1, 2, 3];
function addItem(value) {
  myArray.push(value);
  return myArray;
}
// console.log(addItem(6));

// 9. Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item.
function removeItem(index) {
  myArray.splice(index, 1);
  return myArray;
}
// console.log(removeItem(1));

// 10. Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
function sumOfNumbers(number) {
  let sum = 0;
  for (i = 1; i <= number; i++) {
    sum += i;
  }
  return sum;
}
// console.log(sumOfNumbers(5));

// 11. Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
function sumOfOdds(number) {
  let sum = 0;
  for (i = 1; i <= number; i++) {
    if (i % 2 == 0) {
      continue;
    } else {
      sum += i;
    }
  }
  return sum;
}
// console.log(sumOfOdds(5));

// 12. Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
function sumOfEven(number) {
  let sum = 0;
  for (i = 1; i <= number; i++) {
    if (i % 2 != 0) {
      continue;
    } else {
      sum += i;
    }
  }
  return sum;
}
// console.log(sumOfEven(5));

// 13. Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
function evensAndOdds(number) {
  let sumOdds = 0;
  let sumEvens = 0;
  for (i = 1; i <= number; i++) {
    if (i % 2 == 0) {
      sumEvens += 1;
    } else {
      sumOdds += 1;
    }
  }
  return `The number of odds are ${sumOdds}\nThe number of evens are ${sumEvens}`;
}
// console.log(evensAndOdds(5));

// 14. Write a function which takes any number of arguments and return the sum of the arguments.
function sumOfArguments() {
  let sum = 0;
  for (i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
// console.log(sumOfArguments(1));

// 15. Write a function which generates a randomUserIp.
function randomUserIp() {
  let num1 = Math.floor(Math.random() * 100) + 100;
  let num2 = Math.floor(Math.random() * 90) + 10;
  let num3 = Math.floor(Math.random() * 100) + 100;
  let num4 = Math.floor(Math.random() * 9) + 1;
  return `${num1}.${num2}.${num3}.${num4}`;
}
// console.log(randomUserIp());

// 16. Write a function which generates a randomMacAddress.
// it can be the same as above, something similar

// 17. Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
// TODO !

// 18. Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
function userIdGenerator() {
  const characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let userId = "";
  for (i = 0; i < 7; i++) {
    userId += characters[Math.floor(Math.random() * characters.length)];
  }
  return userId;
}
// console.log(userIdGenerator());

/* LEVEL 3 */
// 2. Write a function name rgbColorGenerator and it generates rgb colors.
function rgbColorGenerator() {
  const num1 = Math.floor(Math.random() * 256);
  const num2 = Math.floor(Math.random() * 256);
  const num3 = Math.floor(Math.random() * 256);
  return `rgb(${num1},${num2},${num3})`;
}
// console.log(rgbColorGenerator());

// 3. Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.
function arrayOfHexaColors(number) {
  let myArray = [];
  for (i = 0; i < number; i++) {
    let hexNumber1 = Math.floor(Math.random() * 256).toString(16);
    let hexNumber2 = Math.floor(Math.random() * 256).toString(16);
    let hexNumber3 = Math.floor(Math.random() * 256).toString(16);
    if (hexNumber1.length == 1) {
      hexNumber1 = "0" + hexNumber1;
    }
    if (hexNumber2.length == 1) {
      hexNumber2 = "0" + hexNumber2;
    }
    if (hexNumber3.length == 1) {
      hexNumber3 = "0" + hexNumber3;
    }
    let result = `#${hexNumber1}${hexNumber2}${hexNumber3}`;
    myArray.push(result);
  }
  return myArray;
}
// console.log(arrayOfHexaColors(5));

// 4. Write a function arrayOfRgbColors which return any number of RGB colors in an array.
function arrayOfRgbColors(number) {
  let myArray = [];
  for (i = 0; i < number; i++) {
    let rgbNumber1 = Math.floor(Math.random() * 256);
    let rgbNumber2 = Math.floor(Math.random() * 256);
    let rgbNumber3 = Math.floor(Math.random() * 256);
    myArray.push(`rgb(${rgbNumber1}, ${rgbNumber2}, ${rgbNumber3})`);
  }
  return myArray;
}
// console.log(arrayOfRgbColors(2));

// 5. Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.
function convertHexaToRgb(value) {
  let value1 = parseInt(value.slice(1, 3), 16);
  let value2 = parseInt(value.slice(3, 5), 16);
  let value3 = parseInt(value.slice(5), 16);
  return `rgb(${value1}, ${value2}, ${value3})`;
}
// console.log(convertHexaToRgb("32a8a0"));

// 6. Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.
function convertRgbToHexa(value1, value2, value3) {
  let first = value1.toString(16);
  let second = value2.toString(16);
  let third = value3.toString(16);
  if (first.length == 1) {
    first = "0" + first;
  }
  if (second.length == 1) {
    second = "0" + second;
  }
  if (third.length == 1) {
    third = "0" + third;
  }
  return `#${first}${second}${third}`;
}
// console.log(convertRgbToHexa(144, 122, 100));

// 7. Write a function generateColors which can generate any number of hexa or rgb colors.
function generateColors(color, number) {
  if (color == "hexa") {
    let myArray = [];
    for (i = 0; i < number; i++) {
      let value1 = Math.floor(Math.random() * 256).toString(16);
      let value2 = Math.floor(Math.random() * 256).toString(16);
      let value3 = Math.floor(Math.random() * 256).toString(16);
      if (value1.length == 1) {
        value1 = "0" + value1;
      }
      if (value2.length == 1) {
        value2 = "0" + value2;
      }
      if (value3.length == 1) {
        value3 = "0" + value3;
      }
      let result = `#${value1}${value2}${value3}`;
      myArray.push(result);
    }
    return myArray;
  } else if (color == "rgb") {
    let myArray = [];
    for (i = 0; i < number; i++) {
      let value1 = Math.floor(Math.random() * 256);
      let value2 = Math.floor(Math.random() * 256);
      let value3 = Math.floor(Math.random() * 256);
      let result = `rgb(${value1}, ${value2}, ${value3})`;
      myArray.push(result);
    }
    return myArray;
  } else {
    return "wrong values! try again!";
  }
}
// console.log(generateColors("hexoa", 20));

// 8. Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array.
function shuffleArray(array) {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
// console.log(shuffleArray([1, 2, 3, 4, 5, 6, 7]));

// 9. Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number.
function factorial(number) {
  if (number < 0) {
    return -1;
  } else if (number == 0) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
}
// console.log(factorial(5));

// 10. Call your function isEmpty, it takes a parameter and it checks if it is empty or not.
// TODO ???

// 11. Call your function sum, it takes any number of arguments and it returns the sum.
function sum(...args) {
  let sum = 0;
  for (const element of args) {
    sum += element;
  }
  return sum;
}
// console.log(sum(1, 2, 3, 3));

// 12. Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.
function sumOfArrayItems(array) {
  let sum = 0;
  for (const element of array) {
    if (typeof element != "number") {
      return "wrong values in the array";
    } else {
      sum += element;
    }
  }
  return sum;
}
// console.log(sumOfArrayItems([1, 2, 3, "1"]));

// 13. Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.
function average(array) {
  let sum = 0;
  for (const element of array) {
    if (typeof element != "number") {
      return "wrong values in the array";
    } else {
      sum += element;
    }
  }
  let average = sum / array.length;
  return average;
}
// console.log(average([1, 2, 3, 5.5, "a"]));

// 14. Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.
function modifyArray(array) {
  if (array.length < 5) {
    return "item not found";
  } else {
    array[4] = array[4].toUpperCase();
    return array;
  }
}
// console.log(
//   modifyArray(["Avocado", "Tomato", "Potato", "Mango", "Lemon", "Carrot"])
// );
// console.log(modifyArray(["Avocado", "Tomato", "Potato", "Mango"]));

// 15. Write a function called isPrime, which checks if a number is prime number.
function isPrime(value) {
  if (value == 1 || value < 0) {
    return "this is not a prime number";
  } else if (value == 2 || value == 3) {
    return "this is a prime number";
  } else {
    for (i = 2; i < Math.floor(value / 2); i++) {
      if (value % i == 0) {
        return "this is not a prime number";
      }
    }
  }
  return "this is a prime number";
}
// console.log(isPrime(97));

// 16. Write a functions which checks if all items are unique in the array.
function uniqueArray(array) {
  let newArray = [];
  for (const element of array) {
    if (newArray.includes(element)) {
      return false;
    } else {
      newArray.push(element);
    }
  }
  return true;
}
// console.log(uniqueArray([1, 2, 3, 4, 5, 6, "5", 4]));

// 17. Write a function which checks if all the items of the array are the same data type.
function uniqueDataType(array) {
  for (i = 1; i < array.length; i++) {
    if (typeof array[i] != typeof array[i - 1]) {
      return false;
    }
  }
  return true;
}
// console.log(uniqueDataType([1, 2, "1", 2]));

// 18. JavaScript variable name does not support special characters or symbols except $ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.
function isValidVariable(variable) {
  let wrongCharacters = ["`", "!", "#", "%"];
  for (const element of variable) {
    if (wrongCharacters.includes(element)) {
      return "wrong variable name";
    }
  }
  return "variable name is correct";
}
// console.log(isValidVariable("adam!"));

// 19. Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.
function arrayOfSevenNumbers() {
  let array = [];
  while (array.length < 7) {
    let number = Math.floor(Math.random() * 10);
    if (array.includes(number)) {
      continue;
    } else {
      array.push(number);
    }
  }
  return array;
}
// console.log(arrayOfSevenNumbers());

// 20. Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array.
var firstFile = require("./countries");
function reverseCountries(array) {
  let newArray = [];
  for (i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}
console.log(reverseCountries(firstFile.countries));
