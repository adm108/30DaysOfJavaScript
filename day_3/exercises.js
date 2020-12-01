/* LEVEL 1 */
// 1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = "Asabeneh";
let lastName = "Yetayeh";
let country = "Finland";
let city = "Helsinki";
let age = 100;
let isMarried = true;
let year = 2020;
// console.log(
//   typeof firstName,
//   typeof lastName,
//   typeof country,
//   typeof city,
//   typeof age,
//   typeof isMarried,
//   typeof year
// );

// 2. Check if type of '10' is equal to 10
// console.log("10" == 10);

// 3. Check if parseInt('9.8') is equal to 10
// console.log(parseInt("9.8") == 10);
// console.log(parseInt("9.8"));

// 4. Boolean value is either true or false. Write three JavaScript statement which provide truthy value. Write three JavaScript statement which provide falsy value.
// FALSE:
// console.log(4 === 4);
// console.log(4 !== "4");
// console.log("string" === "string");
// TRUE:
// console.log(4 !== 4);
// console.log(4 === "4");
// console.log("string" !== "string");

// 5. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
// console.log(4 > 3);
// console.log(4 >= 3);
// console.log(4 < 3);
// console.log(4 <= 3);
// console.log(4 == 4);
// console.log(4 === 4);
// console.log(4 != 4);
// console.log(4 !== 4);
// console.log(4 != "4");
// console.log(4 == "4");
// console.log(4 === "4");
// 5.1 Find the length of python and jargon and make a falsy comparison statement.
// console.log("python".length !== "jargon".length);

// 6. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
// console.log(4 > 3 && 10 < 12);
// console.log(4 > 3 && 10 > 12);
// console.log(4 > 3 || 10 < 12);
// console.log(4 > 3 || 10 > 12);
// console.log(!(4 > 3));
// console.log(!(4 < 3));
// console.log(!false);
// console.log(!(4 > 3 && 10 < 12));
// console.log(!(4 > 3 && 10 > 12));
// console.log(!(4 === "4"));
// 6.1 There is no 'on' in both dragon and python
// console.log(!("dragon".includes("on") && "python".includes("on")));

// 7. Use the Date object to do the following activities
var myData = new Date();
// 7.1 What is the year today?
// console.log(myData.getFullYear());
// 7.2 What is the month today as a number?
// console.log(myData.getMonth() + 1);
// 7.3 What is the date today?
// console.log(myData.getDate());
// 7.4 What is the day today as a number?
// console.log(myData.getDay());
// 7.5 What is the hours now?
// console.log(myData.getHours());
// 7.6 What is the minutes now?
// console.log(myData.getMinutes());
// 7.7 Find out the numbers of seconds elapsed from January 1, 1970 to now.
// console.log(myData.getTime());

/* LEVEL 2 */
// 5. Calculate the slope, x-intercept and y-intercept of y = 2x -2
function calculateSlope() {
  let x1 = 2;
  let x2 = 4;
  let firstPointY = 2 * x1 - 2;
  let secondPointY = 2 * x2 - 2;
  return (secondPointY - firstPointY) / (x2 - x1);
}
// console.log(calculateSlope());

// 6. Slope is (m = y2-y1/x2-x1). Find the slope between point (2, 2) and point(6,10)
// console.log((10 - 2) / (6 - 2));

// 7. Compare the slope of above two questions.
// There are the same value (2)

// 8. Calculate the value of y (y = x^2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
function sloap(value) {
  return value ** 2 + 6 * value + 9;
}
// console.log(sloap(-3));

// 10. If the length of your name is greater than 7 say, your name is long else say your name is short.
function myName(value) {
  if (value.length > 7) {
    return "Your name is long";
  } else {
    return "Your name is short";
  }
}
// console.log(myName('Magdalena'));

// 11. Compare your first name length and your family name length and you should get this output.
let firstName2 = "Adam";
let lastName2 = "Rogacewicz";
// firstName2.length > lastName2.length
//   ? console.log(
//       `Your name ${firstName2} is longer than your family name, ${lastName2}`
//     )
//   : console.log(
//       `Your name ${firstName2} is no longer than your family name, ${lastName2}`
//     );

// 12. Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
let myAge = 250;
let yourAge = 25;
// console.log(`I am ${myAge - yourAge} years older than you`)

// 15. Create a human readable time format using the Date time object
const now = new Date();
const year2 = now.getFullYear(); // return year
const month = now.getMonth() + 1; // return month(0 - 11)
const date = (now.getDate() < 10 ? "0" : "") + now.getDate(); // return date (1 - 31)
const hours = (now.getHours() < 10 ? "0" : "") + now.getHours(); // return number (0 - 23)
const minutes = (now.getMinutes() < 10 ? "0" : "") + now.getMinutes(); // return number (0 -59)
const seconds = now.getSeconds();
// 15.1 YYYY-MM-DD HH:mm
// console.log(`${year2}-${month}-${date} ${hours}:${minutes}`);
// 15.2 DD-MM-YYYY HH:mm
// console.log(`${date}-${month}-${year} ${hours}:${minutes}`);
// 15.3 DD/MM/YYYY HH:mm
// console.log(`${date}/${month}/${year} ${hours}:${minutes}`);

// 16. Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05)
// 16.1 YYYY-MM-DD HH:mm eg. 2020-01-02 07:05
// console.log(`${year2}-${month}-${date} ${hours}:${minutes}`);
