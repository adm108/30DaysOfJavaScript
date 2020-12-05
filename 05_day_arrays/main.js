/* LEVEL 2 */
// 1. Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file.
var firstFile = require("./web_tech");
var secondFile = require("./countries");
// console.log(firstFile.webTechs);
// console.log(secondFile.countries);

// 4. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
// secondFile.countries.includes("Ethiopia")
//   ? console.log("ETHIOPIA")
//   : secondFile.countries.push("Ethiopia");

// 5. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
firstFile.webTechs.includes("Sass")
  ? console.log("Sass is a CSS preprocess")
  : firstFile.webTechs.push("Sass"),
  console.log(firstFile.webTechs);
