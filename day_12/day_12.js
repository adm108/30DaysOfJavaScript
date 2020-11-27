let pattern = "love";
let flag = "gi";
let regEx = new RegExp(pattern, flag);
// console.log(regEx);

const str2 = "I love JavaScript";
const pattern2 = /love/;
const result2 = pattern2.test(str2);
// console.log(result2);

const str3 = "I love JavaScript";
const pattern3 = /love/g;
const result3 = str3.match(pattern3);
// console.log(result3);

const str4 = "I love JavaScript";
const pattern4 = /love/g;
const result4 = str4.search(pattern4);
console.log(result4);

const txt =
  "Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language";
matchReplaced = txt.replace(/Python|python/, "JavaScript");
console.log(matchReplaced);

const txt2 =
  "This regular expression example was made in December 6 21,  2019.";
const pattern5 = /\d{1,4}/g; // 1 to 4
const matches = txt2.match(pattern5);
console.log(matches); // ['6', '2019']
