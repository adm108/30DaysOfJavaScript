var word = "python";
var word2 = "jargon";
// console.log(word.includes('on') == word2.includes('on'));

let num1 = 6;
let num2 = 4;
let string = "asd";
// console.log(num1 / num2);
// console.log(NaN === NaN);
// console.log(isNaN(num1));
// console.log(typeof NaN);
// console.log(3 !== '3');

const check = 4 > 3 && 10 > 5;
// console.log(check);

let number = 5;
// number > 0
//     ? console.log(`${number} is a positive number`)
//     : console.log(`${number} is a negative number`)
// number = -10;
// number > 0
//     ? console.log(`${number} is a positive number`)
//     : console.log(`${number} is a negative number`)

// console.log((3 > 2) > 1);

// const now = new Date();
// console.log(now);
// console.log(now.getMonth());
// console.log(now.getFullYear());
// console.log(now.getDay());
// console.log(now.getTime());

// const year = now.getFullYear(); // return year
// const month = now.getMonth() + 1; // return month(0 - 11)
// const date = now.getDate(); // return date (1 - 31)
// const hours = now.getHours(); // return number (0 - 23)
// const minutes = now.getMinutes(); // return number (0 -59)
// const seconds = now.getSeconds();
// console.log(`${date}/${month}/${year} ${hours}:${minutes}:${seconds}`)

// EXERCISES
var firstName = "Adam";
var lastName = "Rogacewicz";
var country = "Poland";
var city = "Poznań";
var age = 27;
var isMarried = false;
var yearNow = 2020;

// console.log(typeof firstName);
// console.log(typeof lastName);
// console.log(typeof country);
// console.log(typeof city);
// console.log(typeof age);
// console.log(typeof isMarried);
// console.log(typeof yearNow);

// console.log(parseInt('9.8') == 10);
// console.log(parseInt('9.8'));

// console.log(4 === '4');
// console.log('python'.length == 'jargon'.length);

// console.log(!(4 === '4'))
// console.log(!('dragon'.includes('on') && 'python'.includes('on')));

var myData = new Date();
// console.log(myData.getFullYear());
// console.log(myData.getMonth() + 1);
// console.log(myData.getDate());
// console.log(myData.getDay());
// console.log(myData.getHours());
// console.log(myData.getMinutes());
// console.log(myData.getTime());

function sloap(value) {
  return value ** 2 + 6 * value + 9;
}
// console.log(sloap(-3));
// console.log((10 - 2) / (6 - 2));

function myName(value) {
  if (value.length > 7) {
    return "Your name is long";
  } else {
    return "Your name is short";
  }
}
// console.log(myName('Magdalena'));

let firstName2 = "Adam";
let lastName2 = "Rogacewicz";

// firstName2.length > lastName2.length
//     ? console.log(`Your name ${firstName2} is longer than your family name, ${lastName2}`)
//     : console.log(`Your name ${firstName2} is no longer than your family name, ${lastName2}`);

let myAge = 250;
let yourAge = 25;
// console.log(`I am ${myAge - yourAge} years older than you`)

const now = new Date();
// console.log(now);
// console.log(now.getMonth());
// console.log(now.getFullYear());
// console.log(now.getDay());
// console.log(now.getTime());

const year = now.getFullYear(); // return year
const month = now.getMonth() + 1; // return month(0 - 11)
const date = now.getDate(); // return date (1 - 31)
const hours = (now.getHours() < 10 ? "0" : "") + now.getHours(); // return number (0 - 23)
const minutes = (now.getMinutes() < 10 ? "0" : "") + now.getMinutes(); // return number (0 -59)
const seconds = now.getSeconds();

console.log(`${year}/${month}/${date} ${hours}:${minutes}`);
console.log(`${date}/${month}/${year} ${hours}:${minutes}`);
console.log(`${date}-${month}-${year} ${hours}:${minutes}`);
console.log(minutes);
console.log(`${year}-${month}-${date} ${hours}:${minutes}`);

const new2 = new Date("2014-02-12T15:04");
console.log(new2.getFullYear());
