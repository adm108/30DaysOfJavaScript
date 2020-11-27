// console.log("hello browser");
// let x = 7;
// console.log(typeof x);

// let firstName = "Asabeneh"; // first name of a person
// let lastName = "Yetayeh"; // last name of a person
// let country = "Finland"; // country
// let city = "Helsinki"; // capital city
// let age = 100; // age in years
// let isMarried = true;
// let decimalNumber = 1.5;
// let myName; // undefined

// console.log(firstName, lastName, country, city, age, isMarried);
// console.log(typeof firstName, typeof age, typeof myName);



// let myFirstName = "Adam";
// let myLastName = "Rogacewicz";
// let myAge = 27;
// let myCountry = "Poland";

// let myFirstName = "Adam",
//   myLastName = "Rogacewicz",
//   myAge = 28,
//   myCountr = "Poland";

// let yourAge = 27;

// console.log("I am " + myAge + " years old.");
// console.log("You are " + yourAge + " years old.");
// console.log(`I am ${myFirstName}`);



// let PI = 3.14;
// console.log(Math.ceil(PI));

// random number from - to 10
// let randomNumber = Math.floor(Math.random() * 11);
// console.log(randomNumber);



// let myString = "I am Adam\nI am 28 years old. \tI am g\\reat.    asda";
// console.log(myString);
// console.log(myString.length);

// let string = "adam rogacewicz";
// let string2 = "I love JavaScript. If you do not love J";
// console.log(string.lastIndexOf("cewicz"));
// console.log(string2[38]);



// Regular Expressions
// var r = /\w+@\w+\.(net|com|org)/;
// console.log(r.test("adam.rogacewicz@gmail.com"));

// var string3 = "Adam R. is the best programmer in the world";
// var r2 = /[a-z]+./gi;
// console.log(string3.match(r2));

// var string4 = "Martyna's number is: 513-118-056 and my number is 660-743-328";
// var r3 = /\d{3}-\d{3}-\d{3}/g;
// console.log(string4.match(r3));



// EXERCISE 1
// var name = "30 Days Of JavaScript";
// console.log(name.length);
// console.log(name.toUpperCase());
// console.log(name.toLowerCase());
// console.log(name.substr(3, 5));
// console.log(name.substring(3, name.lenght));
// console.log(name.includes("Script"));
// console.log(name.split(" "));



// var name2 = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
// console.log(name2.split(", "));



// console.log(name.replace("JavaScript", "Python"));
// console.log(name.charAt(15));
// console.log(name.charCodeAt(11));
// console.log(name.indexOf("a"));
// console.log(name.lastIndexOf("a"));



// var name3 =
//   "You cannot end a sentence with because because because is a conjunction";
// console.log(name3.indexOf("because"));
// console.log(name3.lastIndexOf("because"));
// console.log(name3.search("because"));



// var name4 = " 30 Days Of JavaScript ";
// console.log(name4.trim());



// var name5 = "30 Days Of JavaScript";
// var re = /a/g;
// console.log(name5.startsWith("3"));
// console.log(name5.endsWith("t"));
// console.log(name5.match(re));



// var name6 = "30 Days of";
// console.log(name6.concat(" JavaScript"));
// console.log(name.repeat(2));



// console.log(
//   "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
// );
// console.log(
//   '\"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.\"'
// );



// var number1 = '10';
// console.log(Number(number1) == 11);
// console.log(typeof(number1));

// var number2 = '9.8';
// console.log(Math.ceil(parseFloat(number2)) == 10);



// var word = 'python';
// var word2 = 'jargon';
// console.log(word.includes('on') == word2.includes('on'));

// var sentencte = 'I hope this course is not full of jargon.';
// console.log(sentencte.includes('jargon'));



// random numbers 0 - 100
// var random1 = Math.random() * 101;
// console.log(Math.floor(random1));

// random numbers 50 - 100
// var random2 = Math.random() * 51 + 50;
// console.log(Math.floor(random2));

// random numbers 0 - 255
// var random3 = Math.random() * 256;
// console.log(Math.floor(random3));



// var word = 'JavaScript'
// console.log(word[Math.floor(Math.random() * 10)]);



// console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125')



// var sentence = 'You cannot end a sentence with because because because is a conjunction';
// console.log(sentence.substr(sentence.indexOf('because'), 23));



// var sentence = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
// var re = /love/gi;
// console.log(sentence.match(re).length);



// var sentence = 'You cannot end a sentence with because because because is a conjunction';
// var re = /because/gi;
// console.log(sentence.match(re).length);




const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

var cleanText = sentence.replace(/[;%$@#&]/g, '');
var myArray = cleanText.match(/[a-z]+/gi);
// console.log(myArray);
// console.log(myArray.length);


function mostFrequentWord(array)
{
    if(array.length == 0)
        return null;
    var myDict ={};
    var maxElement = array[0], maxCount = 1;
    for (var i = 0; i < array.length; i++)
    {
        var el = array[i];
        if(myDict[el] == null)
            myDict[el] = 1;
        else
            myDict[el]++;
        if(myDict[el] > maxCount)
        {
            maxElement = el;
            maxCount = myDict[el];
        }
    }
    var myDict2 = new Object();
    myDict2[maxElement] = maxCount;
    return myDict2;
}

console.log(mostFrequentWord(myArray));



const sentence2 = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';

var myArray2 = sentence2.match(/\d+/g);
var listOfNumbers = myArray2.map(i=>Number(i));
console.log(myArray2);

function total(array){
    var sumOfNumbers = 0;
    for (var i in array) {
        sumOfNumbers += array[i]
    };
    return sumOfNumbers;
}

console.log(total(listOfNumbers));
