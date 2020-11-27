try {
  // code that may throw an error
} catch (err) {
  // code to be executed if an error occurs
} finally {
  // code to be executed regardless of an error occurs or not
}

// try {
//   let lastName = "Yetayeh";
//   let fullName = fistName + " " + lastName;
// } catch (err) {
//   console.error(err); // we can use console.log() or console.error()
// } finally {
//   console.log("In any case I will be executed");
// }

// try {
//   let lastName = "Yetayeh";
//   let fullName = fistName + " " + lastName;
// } catch (err) {
//   console.log("Name of the error", err.name);
//   console.log("Error message", err.message);
// } finally {
//   console.log("In any case I will be executed");
// }

// throw "Error2"; // generates an exception with a string value
// throw 42; // generates an exception with the value 42
// throw true; // generates an exception with the value true
// throw new Error("Required"); // generates an error object with the message of Required

const throwErroExampleFun = () => {
  let message;
  let x = prompt("Enter a number: ");
  try {
    if (x == "") throw "empty";
    if (isNaN(x)) throw "not a number";
    x = Number(x);
    if (x < 5) throw "too low";
    if (x > 10) throw "too high";
  } catch (err) {
    console.log(err);
  }
};
throwErroExampleFun();
