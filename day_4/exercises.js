/* LEVEL 1 */
// 3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
let num = 3;
// if (num > 0) {
//   let num2 = 4;
//   console.log(`${num} is a positive number`);
//   console.log(num2);
// }

/* LEVEL 2 */
// 1. Write a code which can give grades to students according to theirs scores
// 80 - 100, A;
// 70 - 89, B;
// 60 - 69, C;
// 50 - 59, D;
// 0 - 49, F;
function myFunc(score) {
  if (score >= 80 && score <= 100) {
    return "A";
  } else if (score >= 70 && score <= 89) {
    return "B";
  } else if (score >= 60 && score <= 69) {
    return "C";
  } else if (score >= 50 && score <= 59) {
    return "D";
  } else if (score >= 0 && score <= 49) {
    return "F";
  } else {
    return "Your value is not correct";
  }
}
// console.log(myFunc(67));
