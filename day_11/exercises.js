const constants = [2.72, 3.14, 9.81, 37, 100];
const countries = ["Finland", "Estonia", "Sweden", "Denmark", "Norway"];
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60,
};
const users = [
  {
    name: "Brook",
    scores: 75,
    skills: ["HTM", "CSS", "JS"],
    age: 16,
  },
  {
    name: "Alex",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "David",
    scores: 75,
    skills: ["HTM", "CSS"],
    age: 22,
  },
  {
    name: "John",
    scores: 85,
    skills: ["HTML"],
    age: 25,
  },
  {
    name: "Sara",
    scores: 95,
    skills: ["HTM", "CSS", "JS"],
    age: 26,
  },
  {
    name: "Martha",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "Thomas",
    scores: 90,
    skills: ["HTM", "CSS", "JS"],
    age: 20,
  },
];

// 1
let [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
// console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp);

// 2
let [fin, est, sw, den, nor] = countries;
// console.log(fin, est, sw, den, nor);

// 3
let { width, height, area, perimeter } = rectangle;
// console.log(width, height, area, perimeter);

// 1
for (const { name, scores, skills, age } of users) {
  //   console.log(name, scores, skills, age);
}
// 2
for (const { name, scores, skills, age } of users) {
  if (skills.length < 2) {
    // console.log(name, scores, skills, age);
  }
}

// 1
import { countriesSecond } from "./countries_data.js";

for (const { name, capital, population, languages } of countriesSecond) {
  //   console.log(name, capital, population, languages);
}

// 2
const student = ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]];
let [
  name,
  skills,
  scores,
  jsPoints = scores[2],
  reactPoints = scores[3],
  skillsLength = skills.length,
] = student;
// console.log(name, skillsLength, skills, scores, jsPoints, reactPoints);

// 3
const students = [
  ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]],
  ["John", ["HTM", "CSS", "JS", "React"], [85, 80, 85, 80]],
];
function convertArrayToObject(array) {
  let myObjects = [];
  for (const student of array) {
    myObjects.push({
      name: student[0],
      skills: student[1],
      scores: student[2],
    });
  }
  return myObjects;
}
// console.log(convertArrayToObject(students));

// 4
const student2 = {
  name: "David",
  age: 25,
  skills: {
    frontEnd: [
      { skill: "HTML", level: 10 },
      { skill: "CSS", level: 8 },
      { skill: "JS", level: 8 },
      { skill: "React", level: 9 },
    ],
    backEnd: [
      { skill: "Node", level: 7 },
      { skill: "GraphQL", level: 8 },
    ],
    dataBase: [{ skill: "MongoDB", level: 7.5 }],
    dataScience: ["Python", "R", "D3.js"],
  },
};

console.log(student2);
const copiedStudent = { ...student2 };
copiedStudent.skills.frontEnd.push({ skill: "Bootstrap", level: 8 });
copiedStudent.skills.backEnd.push({ skill: "Express", level: 9 });
copiedStudent.skills.dataBase.push({ skill: "SQL", level: 8 });
copiedStudent.skills.dataScience.push("SQL");
console.log(copiedStudent);
