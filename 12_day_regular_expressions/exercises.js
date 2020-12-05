/* LEVEL 1 */
// 1. Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’.
let text =
  "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.";
let pattern = /\d+/g;
let matches = text.match(pattern);
let total = 0;
for (const element of matches) {
  total += parseInt(element);
}
// console.log(total);

// 2. The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.
let text2 =
  "The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction";
let pattern2 = /-?\d+/g;
let points = text2.match(pattern2);
// console.log(points);
let pointsNumbers = [];
for (const element of points) {
  pointsNumbers.push(parseInt(element));
}
let sortedPointsNumbers = pointsNumbers.sort((a, b) => {
  return a - b;
});
let distance = Math.abs(
  sortedPointsNumbers[sortedPointsNumbers.length - 1] - sortedPointsNumbers[0]
);
// console.log(distance);

// 3. Write a pattern which identify if a string is a valid JavaScript variable.
function isValidVariable(variable) {
  let pattern1 = /[-]/g;
  let pattern2 = /^\d/g;
  let pattern3 = /^[a-zA-Z]/g;
  if (pattern3.test(variable)) {
    if (pattern1.test(variable) | pattern2.test(variable)) {
      return false;
    }
    return true;
  } else {
    return false;
  }
}
// console.log(isValidVariable("first_name"));
// console.log(isValidVariable("first-name"));
// console.log(isValidVariable("1first_name"));
// console.log(isValidVariable("firstname"));

/* LEVEL 2*/
// 1. Write a function called tenMostFrequentWords which get the ten most frequent word from a string.
function MostFrequentWords(sentence, numberOfWords) {
  let pattern = /[a-z]+/gi;
  let match = sentence.match(pattern);
  let myList = [];
  for (const word of match) {
    let foundIndex = myList.findIndex((object) => object.word === word);
    if (foundIndex === -1) {
      myList.push({ word: word, count: 1 });
    } else {
      myList[foundIndex].count += 1;
    }
  }
  return myList.sort((a, b) => b.count - a.count).slice(0, numberOfWords);
}
// console.log(
//   MostFrequentWords(
//     "I love A. teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.",
//     10
//   )
// );

/* LEVEL 3 */
// 1. Write a function which cleans text. Clean the following text. After cleaning, count three most frequent words in the string.
function cleanText(sentence) {
  let pattern = /@|%|#|&|;|\$/g;
  let cleanText = sentence.replace(pattern, "");
  return cleanText;
}
// console.log(
//   cleanText(
//     "%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?"
//   )
// );
const mySentence = cleanText(
  "%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?"
);
console.log(MostFrequentWords(mySentence, 3));
