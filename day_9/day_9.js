// a callback function, the function could be any name
const callback = (n) => {
  return n ** 2;
};

// function take other function as a callback
function cube(callback, n) {
  return callback(n) * n;
}

// console.log(cube(callback, 3))

// Higher order function returning an other function
const higherOrder = (n) => {
  const doSomething = (m) => {
    const doWhatEver = (t) => {
      return 2 * n + 3 * m + t;
    };
    return doWhatEver;
  };

  return doSomething;
};
// console.log(higherOrder(2)(3)(10))

function sayHello() {
  console.log("Hello");
}
// setInterval(sayHello, 2000) // it prints hello in every 2 seconds

let sum = 0;
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((num) => (sum += num));
// console.log(sum);

const arr = [1, 2, 3, 4];
// arr.forEach((element, index, arr) => console.log(index, element, arr));

let sum2 = 0;
const numbers2 = [1, 2, 3, 4, 5];
numbers2.forEach((num) => (sum2 += num));
// console.log(sum2);

const numbers3 = [1, 2, 3, 4, 5];
const sum3 = numbers3.reduce((acc, cur) => acc + cur, 5);
// console.log(sum3);

const products = ["Milk", "Coffee", "Sugar", "Honey", "Apple", "Carrot"];
console.log(products.sort()); // ['Apple', 'Carrot', 'Coffee', 'Honey', 'Milk', 'Sugar']
//Now the original products array  is also sorted
// console.log(products);

let numbers4 = [1, 50, 3.4, 17, 250, 2];
numbers4.sort((a, b) => b - a);
// console.log(numbers4);

const users = [
  { name: "Asabeneh", age: 150 },
  { name: "Brook", age: 50 },
  { name: "Eyo", age: 100 },
  { name: "Elias", age: 22 },
];
users.sort((a, b) => {
  if (a.age < b.age) return -1;
  if (a.age > b.age) return 1;
  return 0;
});
console.log(users);
