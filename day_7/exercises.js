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

// 7. Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
function areaOfCircle(radius, pi = 3.14) {
  return pi * radius ** 2;
}
// console.log(areaOfCircle(2));

// 8. Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
const CircumOfCircle = (radius, pi = 3.14) => 2 * pi * radius;
// console.log(CircumOfCircle(4));

// 9. Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
const density = (mass, volume) => (mass / volume).toFixed(2);
// console.log(density(10, 3));

// 10. Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
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

// 3.
