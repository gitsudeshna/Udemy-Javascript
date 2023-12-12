// let printFullName = function (hometown, designation) {
//   console.log(
//     this.firstName + " " + this.lastName + " form " + hometown + " " + designation
//   );
// };

// let name1 = {
//   firstName: "Sudeshna",
//   lastName: "Das",
// };
// printFullName.call(name1, "Tensa", "Developer");

// let name2 = {
//   firstName: "John",
//   lastName: "Murthy",
// };

// printFullName.call(name2, "Barsuan", "Tester");

// // =======================================================

// let nameObj = {
//   name: "Tony",
// };

// let PrintName = {
//   name: "steve",
//   sayHi: function (age) {
//     console.log(this.name + " age is " + age);
//   },
// };

// PrintName.sayHi.call(nameObj, 42);
// PrintName.sayHi.call(PrintName, 52);
//================================================================

// Call() Method: The call() method calls the function directly and
// sets this to the first argument passed to the call method and
// if any other sequences of arguments preceding the first argument are
// passed to the call method then they are passed as an argument to the function.

// const a = {
//   nameIs: "sudi",
// };

// const b = {
//   nameIs: "figs",
//   myCall: function (age) {
//     console.log(this.nameIs + " " + age);
//   },
// };

// b.myCall.call(a, 10);
// b.myCall.call(b, 20);

// const alex = {
//   nameIs: "sudeshna",
// };

// const blex = {
//   nameIs: "samantha",
//   myCallMethod: function (age) {
//     console.log(this.nameIs + " " + age);
//   },
// };

// blex.myCallMethod.call(alex, 10);

// the call() method calls the function directly and sets this to the first argument passed to the call method.
// if any other sequence of argument preceeding the first argument of the call method then it will passed as an argument to the function.

const firstVar = {
  firstName: "alex",
  secondName: "aoa",
};

const secondVar = {
  firstName: "blex",
  secondName: "bob",
  myCall: function () {
    console.log(this.firstName + " " + this.secondName);
  },
};

secondVar.myCall.call(secondVar);
