// let num = 3;
// if (num > 0) {
//   let num2 = 4;
//   console.log(`${num} is a positive number`);
//   console.log(num2);
// }

// console.log(num);

// function myFunc() {
//   return num;
// }
// console.log(myFunc());

// let num3 = -1;
// if (num3 > 0) {
//   console.log(`${num3} is a positive number`);
// } else {
//   console.log(`${num3} is a negative number`);
// }

// let a = "a";
// if (a > 0) {
//   console.log(`${a} is a positive number`);
// } else if (a < 0) {
//   console.log(`${a} is a negative number`);
// } else if (a == 0) {
//   console.log(`${a} is zero`);
// } else {
//   console.log(`${a} is not a number`);
// }

// let weather = "sunny";
// if (weather === "rainy") {
//   console.log("You need a rain coat.");
// } else if (weather === "cloudy") {
//   console.log("It might be cold, you need a jacket.");
// } else if (weather === "sunny") {
//   console.log("Go out freely.");
// }

// let weather2 = "cloudyy";
// switch (weather2) {
//   case "rainy":
//     console.log("You need a rain coat.");
//     break;
//   case "cloudy":
//     console.log("It might be cold, you need a jacket.");
//     break;
//   case "sunny":
//     console.log("Go out freely.");
//     break;
//   default:
//     console.log("No need for rain coat.");
// }

// let a = 5;
// let b = 5;

// function myFunction(x, y) {
//   if (a > b) {
//     return `${a} is greater than ${b}`;
//   } else if (b > a) {
//     return `${b} is greater than ${a}`;
//   } else {
//     return `${a} and ${b} are the same number`;
//   }
// }

// console.log(myFunction(a, b));

// function myFunc2(score) {
//   if (score >= 80 && score <= 100) {
//     return "A";
//   } else if (score >= 70 && score <= 89) {
//     return "B";
//   } else if (score >= 60 && score <= 69) {
//     return "C";
//   } else if (score >= 50 && score <= 59) {
//     return "D";
//   } else if (score >= 0 && score <= 49) {
//     return "F";
//   } else {
//     return "Your value is not correct";
//   }
// }

// console.log(myFunc2("asd"));

// function myFunc3(month) {
//   if (["september", "october", "november"].includes(month.toLowerCase())) {
//     return "Autumn";
//   } else if (
//     ["december", "january", "february"].includes(month.toLowerCase())
//   ) {
//     return "Winter";
//   } else if (["march", "april", "may"].includes(month.toLowerCase())) {
//     return "Spring";
//   } else if (["june", "july", "august"].includes(month.toLowerCase())) {
//     return "Summer";
//   } else {
//     return "Your month is not correct";
//   }
// }

// console.log(myFunc3("december"));
// console.log("April".toLowerCase());

// function myFunc4(value) {
//   if (
//     ["monday", "tuesday", "wednesday", "thursday", "friday"].includes(
//       value.toLowerCase()
//     )
//   ) {
//     return `${value[0].toUpperCase()}${value.slice(1)} is a working day!`;
//   } else if (["saturday", "sunday"].includes(value.toLowerCase())) {
//     return `${value[0].toUpperCase()}${value.slice(1)} is a weekend day!`;
//   } else {
//     return "Wrong day!";
//   }
// }
// console.log(myFunc4("saturday"));

// let now = new Date();
// console.log(now.getDate());
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.days);

function myFunc5(month) {
  if (
    [
      "january",
      "march",
      "may",
      "july",
      "august",
      "october",
      "december"
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

console.log(myFunc5("asd"));
