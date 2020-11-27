//scope.js
a = 'JavaScript' // is a window scope this found anywhere
b = 10 // this is a window scope variable
function letsLearnScope() {
    console.log(a, b)
    if (true) {
        console.log(a, b)
    }
}
console.log(a, b) // accessible

// const person = {
//   firstName: "Asabeneh",
//   lastName: "Yetayeh",
//   age: 250,
//   country: "Finland",
//   city: "Helsinki",
//   skills: [
//     "HTML",
//     "CSS",
//     "JavaScript",
//     "React",
//     "Node",
//     "MongoDB",
//     "Python",
//     "D3.js",
//   ],
//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };
// person.nationality = "Ethiopian";
// person.country = "Finland";
// person.title = "teacher";
// person.skills.push("Meteor");
// person.skills.push("SasS");
// person.isMarried = true;

// person.getPersonInfo = function () {
//   let skillsWithoutLastSkill = this.skills
//     .splice(0, this.skills.length - 1)
//     .join(", ");
//   let lastSkill = this.skills.splice(this.skills.length - 1)[0];

//   let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`;
//   let fullName = this.getFullName();
//   let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`;
//   return statement;
// };
// console.log(person);
// console.log(person.getPersonInfo());

// const person = {
//   firstName: "Asabeneh",
//   age: 250,
//   country: "Finland",
//   city: "Helsinki",
//   skills: ["HTML", "CSS", "JS"],
//   title: "teacher",
//   address: {
//     street: "Heitamienkatu 16",
//     pobox: 2002,
//     city: "Helsinki",
//   },
//   getPersonInfo: function () {
//     return `I am ${this.firstName} and I live in ${city}, ${this.country}. I am ${this.age}.`;
//   },
// };

// const copyPerson = Object.assign({}, person);
// console.log(copyPerson);
// console.log(Object.keys(copyPerson));
// console.log(Object.values(copyPerson));
// // get the value and keys in an array
// console.log(Object.entries(copyPerson));
// // checking if a specific key or property exist in an object
// console.log(copyPerson.hasOwnProperty("age"));
