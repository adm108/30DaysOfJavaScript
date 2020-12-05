/* LEVEL 1 */
// 1. Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
var name = "30 Days Of JavaScript";

// 2. Print the string on the browser console using console.log().
// console.log(name);

// 3. Print the length of the string on the browser console using console.log().
// console.log(name.length);

// 4. Change all the string characters to capital letters using toUpperCase() method.
// console.log(name.toUpperCase());

// 5. Change all the string characters to lowercase letters using toLowerCase() method.
// console.log(name.toLowerCase());

// 6. Cut (slice) out the first word of the string using substr() or substring() method.
// console.log(name.substr(3, 5));

// 7. Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
// console.log(name.substring(3, name.lenght));

// 8. Check if the string contains a word Script using includes() method.
// console.log(name.includes("Script"));

// 9. Split the string into an array using split() method.
// console.log(name.split(" "));

// 10. Split the string 30 Days Of JavaScript at the space using split() method.
// console.log(name.split(" "));

// 11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
var name2 = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
// console.log(name2.split(", "));

// 12. Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
// console.log(name.replace("JavaScript", "Python"));

// 13. What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
// console.log(name.charAt(15));

// 14. What is the character code of J in '30 Days Of JavaScript' string using charCodeAt().
// console.log(name.charCodeAt(11));

// 15. Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript.
// console.log(name.indexOf("a"));

// 16. Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
// console.log(name.lastIndexOf("a"));

// 17. Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'.
var name3 =
  "You cannot end a sentence with because because because is a conjunction";
// console.log(name3.indexOf("because"));

// 18. Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'.
// console.log(name3.lastIndexOf("because"));

// 19. Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'.
// console.log(name3.search("because"));

// 20. Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
var name4 = " 30 Days Of JavaScript ";
// console.log(name4.trim());

// 21. Use startsWith() method with the string 30 Days Of JavaScript and make the result true.
var name5 = "30 Days Of JavaScript";
// console.log(name5.startsWith("3"));

// 22. Use endsWith() method with the string 30 Days Of JavaScript and make the result true.
// console.log(name5.endsWith("t"));

// 23. Use match() method to find all the a’s in 30 Days Of JavaScript.
var re = /a/g;
// console.log(name5.match(re));

// 24. Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'.
var name6 = "30 Days of";
// console.log(name6.concat(" JavaScript"));

// 25. Use repeat() method to print 30 Days Of JavaScript 2 times.
// console.log(name.repeat(2));

/* LEVEL 2 */
// 1. Using console.log() print out the following statement.
/*
"The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
*/
// console.log(
//   "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
// );

// 2. Using console.log() print out the following quote by Mother Teresa.
/* 
"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
*/
// console.log(
//   "\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\""
// );

// 3. Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
var number = "10";
// console.log(Number(number) == 10);
// console.log(typeof number);

// 4. Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
var number2 = "9.8";
// console.log(Math.ceil(parseFloat(number2)) == 10);

// 5. Check if 'on' is found in both python and jargon.
var word = "python";
var word2 = "jargon";
// console.log(word.includes('on') == word2.includes('on'));

// 6. I hope this course is not full of jargon. Check if jargon is in the sentence.
var sentencte = "I hope this course is not full of jargon.";
// console.log(sentencte.includes('jargon'));

// 7. Generate a random number between 0 and 100 inclusively.
var random = Math.random() * 101;
// console.log(Math.floor(random));

// 8. Generate a random number between 50 and 100 inclusively.
var random2 = Math.random() * 51 + 50;
// console.log(Math.floor(random2));

// 9. Generate a random number between 0 and 255 inclusively.
var random3 = Math.random() * 256;
// console.log(Math.floor(random3));

// 10. Access the 'JavaScript' string characters using a random number.
var word3 = "JavaScript";
// console.log(word3[Math.floor(Math.random() * word3.length)]);

// 11. Use console.log() and escape characters to print the following pattern.
/* 
1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125 
*/
// console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125')

// 12. Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'.
var sentence2 =
  "You cannot end a sentence with because because because is a conjunction";
// console.log(sentence2.substr(sentence2.indexOf("because"), 23));

/* LEVEL 3 */
// 1. 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
var sentence3 =
  "Love is the best thing in this world. Some found their love and some are still looking for their love.";
var re2 = /love/gi;
// console.log(sentence3.match(re2).length);

// 2. Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'.
var sentence4 =
  "You cannot end a sentence with because because because is a conjunction";
var re3 = /because/gi;
// console.log(sentence4.match(re3).length);

// 3. Clean the following text and find the most frequent word (hint, use replace and regular expressions).
const sentence5 =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
var cleanText = sentence5.replace(/[;%$@#&]/g, "");
var myArray = cleanText.match(/[a-z]+/gi);
// console.log(myArray);
// console.log(myArray.length);

function mostFrequentWord(array) {
  if (array.length == 0) return null;
  var myDict = {};
  var maxElement = array[0],
    maxCount = 1;
  for (var i = 0; i < array.length; i++) {
    var el = array[i];
    if (myDict[el] == null) myDict[el] = 1;
    else myDict[el]++;
    if (myDict[el] > maxCount) {
      maxElement = el;
      maxCount = myDict[el];
    }
  }
  var myDict2 = new Object();
  myDict2[maxElement] = maxCount;
  return myDict2;
}
// console.log(mostFrequentWord(myArray));

// 4. Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'.
const sentence6 =
  "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";

var myArray2 = sentence6.match(/\d+/g);
var listOfNumbers = myArray2.map((i) => Number(i));
// console.log(myArray2);
// console.log(listOfNumbers);

function total(array) {
  var sumOfNumbers = 0;
  for (var i in array) {
    sumOfNumbers += array[i];
  }
  return sumOfNumbers;
}
console.log(total(listOfNumbers));
