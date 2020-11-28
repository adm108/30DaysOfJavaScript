/* LEVEL 1 */
// 3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
let num = 3;
// if (num > 0) {
//   let num2 = 4;
//   console.log(`${num} is a positive number`);
//   console.log(num2);
// }

/* LEVEL 2 */
// 1. Write a code which can give grades to students according to theirs scores
// 80 - 100, A;
// 70 - 89, B;
// 60 - 69, C;
// 50 - 59, D;
// 0 - 49, F;
function myFunc(score) {
  if (score >= 80 && score <= 100) {
    return "A";
  } else if (score >= 70 && score <= 89) {
    return "B";
  } else if (score >= 60 && score <= 69) {
    return "C";
  } else if (score >= 50 && score <= 59) {
    return "D";
  } else if (score >= 0 && score <= 49) {
    return "F";
  } else {
    return "Your value is not correct";
  }
}
// console.log(myFunc(67));

// 2. Check if the season is Autumn, Winter, Spring or Summer. If the user input is:
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer
function myFunc2(month) {
  if (["september", "october", "november"].includes(month.toLowerCase())) {
    return "Autumn";
  } else if (
    ["december", "january", "february"].includes(month.toLowerCase())
  ) {
    return "Winter";
  } else if (["march", "april", "may"].includes(month.toLowerCase())) {
    return "Spring";
  } else if (["june", "july", "august"].includes(month.toLowerCase())) {
    return "Summer";
  } else {
    return "Your month is not correct";
  }
}
// console.log(myFunc2("december"));

// 3. Check if a day is weekend day or a working day. Your script will take day as an input.
function myFunc3(value) {
  if (
    ["monday", "tuesday", "wednesday", "thursday", "friday"].includes(
      value.toLowerCase()
    )
  ) {
    return `${value[0].toUpperCase()}${value.slice(1)} is a working day!`;
  } else if (["saturday", "sunday"].includes(value.toLowerCase())) {
    return `${value[0].toUpperCase()}${value.slice(1)} is a weekend day!`;
  } else {
    return "Wrong day!";
  }
}
// console.log(myFunc3("saturday"));

/* LEVEL 3 */
// 1. Write a program which tells the number of days in a month (considering also leap years)
function myFunc4(month) {
  if (
    [
      "january",
      "march",
      "may",
      "july",
      "august",
      "october",
      "december",
    ].includes(month.toLowerCase())
  ) {
    return `${month[0].toUpperCase()}${month
      .toLowerCase()
      .slice(1)} has 31 days.`;
  } else if (
    ["april", "june", "september", "november"].includes(month.toLowerCase())
  ) {
    return `${month[0].toUpperCase()}${month
      .toLowerCase()
      .slice(1)} has 30 days.`;
  } else if (month.toLowerCase() == "february") {
    return "February has 28 days (29 in leap years).";
  } else {
    return "Your month name is incorrect";
  }
}
// console.log(myFunc4("february"));
