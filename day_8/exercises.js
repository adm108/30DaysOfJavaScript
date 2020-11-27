// const dog = {
//   name: "Bona",
//   legs: 4,
//   color: "gold",
//   age: 3,
//   bark: function () {
//     return "woof woof";
//   },
//   other: function () {
//     let skills = this.color[2];
//     return skills;
//   },
//   weigth: "50 kg",
//   dogInfo: function () {
//     return `This is a dog named ${this.name} with ${this.legs} legs.`;
//   },
// };

// console.log(dog.dogInfo());

const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

// function theLargestNumberOfSkills() {
//   let user = null;
//   let index = 0;
//   let rightIndex = 0;
//   for (let element of Object.values(users)) {
//     if (user == null) {
//       user = element;
//       index += 1;
//     } else if (element.skills.length > user.skills.length) {
//       user = element;
//       rightIndex = index;
//       index += 1;
//     } else {
//       index += 1;
//     }
//   }
//   return [Object.keys(users)[rightIndex], user];
// }
// console.log(theLargestNumberOfSkills());

// function loggedInUsers() {
//   let count = 0;
//   for (const element of Object.values(users)) {
//     if (element.isLoggedIn == true) {
//       count += 1;
//     }
//   }
//   return count;
// }
// console.log(loggedInUsers());

// function userMoreThan50Points() {
//   let count = 0;
//   for (const element of Object.values(users)) {
//     if (element.points >= 50) {
//       count += 1;
//     }
//   }
//   return count;
// }
// console.log(userMoreThan50Points());

// function findMern() {
//   let index = 0;
//   let myArray = [];
//   for (const element of Object.values(users)) {
//     if (
//       element.skills.includes("MongoDB") &&
//       element.skills.includes("Express") &&
//       element.skills.includes("React") &&
//       element.skills.includes("Node")
//     ) {
//       myArray.push(Object.keys(users)[index]);
//       index += 1;
//     } else {
//       index += 1;
//     }
//   }
//   return myArray;
// }
// console.log(findMern());

users.Adam = {
  email: "adam.rogacewicz@gmail.com",
  skills: ["HTML", "CSS", "JavaScript", "Python", "SQL", "MongoDB"],
  age: 27,
  isLoggedIn: true,
  points: 100,
};

// console.log(users.Adam);
// console.log(Object.entries(users));
// for (const element of Object.entries(users)) {
//   console.log(element[0]);
// }
// console.log(Object.values(users));

const personAccount = {
  id: 1,
  firstName: "Adam",
  lastName: "Rogacewicz",
  incomes: [3500, 4200, 3200],
  expenses: [100, 22, 121, 212, 223],
  accountInfo: function () {
    return `This account belongs to ${this.firstName} ${this.lastName}.`;
  },
  totalIncome: function () {
    return this.incomes.reduce((a, b) => a + b, 0);
  },
  totalExpense: function () {
    return this.expenses.reduce((a, b) => a + b, 0);
  },
  addExpense: function (value) {
    this.expenses.push(value);
  },
  addIncome: function (value) {
    this.incomes.push(value);
  },
  accountBalance: function () {
    return `Account balance: ${this.totalIncome() - this.totalExpense()}`;
  },
};

// console.log(personAccount.accountBalance());
// personAccount.addExpense(500);
// console.log(personAccount.totalExpense());
// console.log(personAccount.accountBalance());

const users2 = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];

function signUp(username, email, password, confirmPassword) {
  for (const element of Object.values(users2)) {
    if (element.username == username) {
      return `User with ${username} already exists!`;
    }
  }
  if (password !== confirmPassword) {
    return "Wrong password";
  } else {
    let signs = "abcdefghijklmnop123456789";
    let randomId = "";
    for (i = 0; i < 6; i++) {
      randomId += signs.charAt(Math.floor(Math.random() * signs.length));
    }
    let newDate = new Date();
    let day = newDate.getDate();
    if (day < 10) {
      day = `0${day}`;
    }
    let month = newDate.getMonth() + 1;
    if (month < 10) {
      month = "0" + month;
    }
    let year = newDate.getFullYear();
    let hours = newDate.getHours();
    let minutes = newDate.getMinutes();
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    let ampm = null;
    if (hours < 12) {
      ampm = "AM";
    } else {
      ampm = "PM";
    }
    let date = `${day}/${month}/${year} ${hours}:${minutes} ${ampm}`;
    users2.push({
      _id: randomId,
      username: username,
      email: email,
      password: password,
      createdAt: date,
      isLoggedIn: false,
    });
  }
  return "Your account has been created!";
}

function signIn(email, password) {
  for (const element of Object.values(users2)) {
    if (
      element.email === email &&
      element.password === password &&
      element.isLoggedIn == false
    ) {
      element.isLoggedIn = true;
      return "Welcome!";
    } else if (
      element.email === email &&
      element.password === password &&
      element.isLoggedIn == true
    ) {
      return "You are already logged in!";
    }
  }
  return "You entered wrong email or password";
}

function rateProduct(username, rate) {
  if (rate < 0 || rate > 5) {
    return "Rate is incorrect";
  } else {
    for (const element of Object.values(users2)) {
      if (element.username === username) {
        products[1].ratings.push({ userId: element._id, rate: rate });
        return "Rate has been declared!";
      }
    }
    return "User with that username does not exist!";
  }
}

function averageRating(id) {
  for (const element of products) {
    if (id === element._id) {
      if (element.ratings.length < 1) {
        return "This product does not have ratings!";
      } else {
        let result = 0;
        for (const ratings of element.ratings) {
          result += ratings.rate;
        }
        let ratingsLength = element.ratings.length;
        return `Average rating: ${result / ratingsLength}`;
      }
    }
  }
  return "That product does not exist!";
}

function likeProduct(idProduct, username) {
  for (const element of users2) {
    if (username === element.username) {
      let idUser = element._id;
      for (const product of products) {
        if (idProduct === product._id) {
          if (product.likes.includes(idUser)) {
            const index = product.likes.indexOf(idUser);
            product.likes.splice(index, 1);
            return "Product has been unliked!";
          } else {
            product.likes.push(idUser);
            return "Product has been liked!";
          }
        }
      }
      return "That product does not exist!";
    }
  }
  return "User with that username does not exist!";
}

// console.log(
//   signUp("Adam", "adam.rogacewicz@gmail.com", "komputer10", "komputer10")
// );
// console.log(signIn("brook@brook.com", "123111"));
// console.log(Object.values(users2));

// console.log(Object.entries(users2));
// console.log(rateProduct("Adam", 5));
// console.log(products[1]);
// console.log(averageRating("hedfcg"));
// console.log(likeProduct("hedfcg", "Adam"));
// console.log(Object.values(users2));
// console.log(Object.values(products));
