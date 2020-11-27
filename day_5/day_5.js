// const numbers = [1, 2, 3, 4];
// console.log("Numbers: ", numbers);

// const arr = [
//   "Asabeneh",
//   250,
//   true,
//   { country: "Finland", city: "Helsinki" },
//   { skills: ["HTML", "CSS", "JS", "React", "Python"] }
// ]; // arr containing different data types
// console.log(arr);

// let txt =
//   "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";

// let re = /[a-z]+/gi;
// console.log(txt.match(re));

// const arr = Array(5);
// console.log(arr);

// const arr = [1, 1, 2, 3, 4, 6, 4];
// console.log(arr.indexOf(4));

// const arr = [1, 1, 2, 3, 4, 6, 4];
// let indexOf = arr.indexOf(11);
// indexOf != -1
//   ? console.log("this number exists in the array")
//   : console.log("this fruit does not exist in the array");

// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers.splice(0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0));
// console.log(numbers);
// numbers.pop(3);
// numbers.shift();
// console.log(numbers);

// EXERCISES
// const arr = [];
// const arr2 = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(arr2.length);
// console.log(arr2[arr2.length - 1]);
// console.log(arr2[0]);
// console.log(arr2[parseInt(arr2.length / 2)]);

// const arr3 = [1, "Adam", false, NaN, [1, 2, 3], null];
// console.log(arr3.length);

const arr4 = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
  "Amazon2"
];
// console.log(arr4);
// console.log(arr4.length);
// console.log(arr4[0]);
// console.log(arr4[parseInt(arr4.length / 2)]);
// console.log(arr4[arr4.length - 1]);

// for (let i = 0; i < arr4.length; i++) {
//   console.log(arr4[i]);
// }

// for (let i = 0; i < arr4.length; i++) {
//   arr4[i] = arr4[i].toUpperCase();
// }

// console.log(arr4);
// console.log(
//   `${arr4.slice(0, arr4.length - 1).join(", ")} and ${
//     arr4[arr4.length - 1]
//   } are big IT companies`
// );

// arr4.includes("IBMM")
//   ? console.log("This company exists in the array")
//   : console.log("This company does not exists in the array");

// function myFunction(array) {
//   let countO = 0;
//   let myList = [];
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array[i].length; j++) {
//       if (["o", "O"].includes(array[i][j])) {
//         countO += 1;
//       }
//     }
//     if (countO > 1) {
//       myList.push(array[i]);
//       countO = 0;
//     }
//     countO = 0;
//   }
//   return myList;
// }

// console.log(myFunction(arr4));

// console.log(arr4.sort());
// console.log(arr4.reverse());
// console.log(arr4);
// console.log(arr4.slice(0, 3));
// console.log(arr4.slice(arr4.length - 3, arr4.length));

// arr4.length % 2 == 0
//   ? console.log([
//       arr4[parseInt(arr4.length / 2) - 1],
//       arr4[parseInt(arr4.length / 2)]
//     ])
//   : console.log([arr4[parseInt(arr4.length / 2)]]);

// arr4.shift();
// console.log(arr4);

// console.log(arr4);
// arr4.splice(2, 3);
// console.log(arr4);

// const arr5 = [1, 2, 3, 4, 5, 6];
// arr5.splice(3, 1);
// console.log(arr5);

// console.log(parseInt(arr4.length / 2));

// arr4.length % 2 == 0
//   ? arr4.splice(parseInt(arr4.length / 2) - 1, 2)
//   : arr4.splice(parseInt(arr4.length / 2), 1);

// console.log(arr4);

// console.log(arr4);
// arr4.splice(0);
// console.log(arr4);

// let text =
//   "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";

// let re = /[a-z]+/gi;
// let words = text.match(re);
// console.log(words);
// console.log(words.length);

// const shoppingCart = ["Meat", "Milk", "Coffee", "Tea", "Honey"];

// shoppingCart.includes("Meat")
//   ? console.log("Shopping cart has Meat!")
//   : shoppingCart.unshift("Meat");

// shoppingCart.includes("Sugar")
//   ? console.log("Shopping cart has sugar!")
//   : shoppingCart.push("Sugar");
// console.log(shoppingCart);

// shoppingCart.splice(shoppingCart.indexOf("Honey"), 1, "Green Tea");
// console.log(shoppingCart);

// let arr6 = [1, 2, 3, 4, 5];
// arr6.splice(3, 0, "x");
// console.log(arr6);

// const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
// const backEnd = ["Node", "Express", "MongoDB"];
// const fullStack = frontEnd.concat(backEnd);
// console.log(fullStack);

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort();
// console.log(ages[0]);
// console.log(ages[ages.length - 1]);

ages.length % 2 == 0
  ? console.log(
      (ages[parseInt(ages.length / 2)] + ages[parseInt(ages.length / 2) - 1]) /
        2
    )
  : console.log(ages[parseInt(ages.length / 2)]);

let result = 0;
for (let i = 0; i < ages.length; i++) {
  result += ages[i];
}
var average = result / ages.length;
console.log(ages[ages.length - 1] - ages[0]);
console.log(Math.abs(ages[0] - average));
console.log(Math.abs(ages[ages.length - 1] - average));
