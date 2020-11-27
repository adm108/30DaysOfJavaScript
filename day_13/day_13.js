// console.log("%d %s of JavaScript", 30, "Days");

// console.log("%c30 Days Of JavaScript", "color:green"); // log output is green
// console.log(
//   "%c30 Days%c %cOf%c %cJavaScript%c",
//   "color:green",
//   "",
//   "color:red",
//   "",
//   "color:yellow"
// ); // log output green red and yellow text

const names = ["Asabeneh", "Brook", "David", "John"];
// console.table(names);

const user = {
  name: "Asabeneh",
  title: "Programmer",
  country: "Finland",
  city: "Helsinki",
  age: 250,
};
// console.table(user);

const countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];
// console.table(countries);
// console.time("Regular for loop");
// for (let i = 0; i < countries.length; i++) {
//   console.log(countries[i][0], countries[i][1]);
// }
// console.timeEnd("Regular for loop");

// console.time("for of loop");
// for (const [name, city] of countries) {
//   console.log(name, city);
// }
// console.timeEnd("for of loop");

// console.time("forEach loop");
// countries.forEach(([name, city]) => {
//   console.log(name, city);
// });
// console.timeEnd("forEach loop");

const users = [
  {
    name: "Asabeneh",
    title: "Programmer",
    country: "Finland",
    city: "Helsinki",
    age: 250,
  },
  {
    name: "Eyob",
    title: "Teacher",
    country: "Sweden",
    city: "London",
    age: 25,
  },
  {
    name: "Asab",
    title: "Instructor",
    country: "Norway",
    city: "Oslo",
    age: 22,
  },
  {
    name: "Matias",
    title: "Developer",
    country: "Denmark",
    city: "Copenhagen",
    age: 28,
  },
];
// console.table(users);

// console.info("30 Days Of JavaScript challenge is trending on Github");

const names2 = ["Asabeneh", "Brook", "David", "John"];
const countries2 = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];
const user2 = {
  name: "Asabeneh",
  title: "Programmer",
  country: "Finland",
  city: "Helsinki",
  age: 250,
};
const users2 = [
  {
    name: "Asabeneh",
    title: "Programmer",
    country: "Finland",
    city: "Helsinki",
    age: 250,
  },
  {
    name: "Eyob",
    title: "Teacher",
    country: "Sweden",
    city: "London",
    age: 25,
  },
  {
    name: "Asab",
    title: "Instructor",
    country: "Norway",
    city: "Oslo",
    age: 22,
  },
  {
    name: "Matias",
    title: "Developer",
    country: "Denmark",
    city: "Copenhagen",
    age: 28,
  },
];

// console.group("Names");
// console.log(names2);
// console.groupEnd();

// console.group("Countries");
// console.log(countries2);
// console.groupEnd();

// console.group("Users");
// console.log(user2);
// console.log(users2);
// console.groupEnd();

function consoleCount() {
  for (let i = 0; i < 10; i++) {
    console.count("Console count");
  }
  return;
}
consoleCount();
