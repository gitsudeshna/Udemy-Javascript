// function  is simply a piece of code that we can reuse over and over again
// in our code. 2q
// its little bit like a variable but whole chunks of code.
// A variable hold a value. but a function can hold one or more
// complete lines of code.
// A JavaScript function is a block of code designed to perform a particular task.
// A JavaScript function is executed when "something" invokes it (calls it).
//===========
//In JavaScript, a function is a block of reusable code that can be defined once and executed multiple times within a program
// In JavaScript, a function is a reusable block of code that can be defined and
// then called by name to perform a specific task or to calculate a value.
//  Functions are one of the fundamental building blocks in JavaScript and are used for
//  organizing and encapsulating code into smaller, manageable pieces.
// when we write functions we also pass data into a function.so additionally
// a function can also return data as wel.
// A function can't only reuse a piece of code, but it can also receive data, and return data back.

// not all parameters need to return something, and not all functions need to accepts parameters.

//function used to keep our code dry. it means do not repeat yourself.
//===========
// eg:=>
// function functionName(){

// }

// function logger() {
//   console.log("My name is Sudi ");
// }
// logger(); //invoking/calling/running the function
// logger();
// logger();
// ===============================
// function addNumbers(a, b) {
//   return a + b;
// }

// // Calling the function
// var result = addNumbers(3, 5);
// console.log(result); // Output: 8
// ================================


// function fruitProcessor(apples, oranges) {
//   console.log("hiii", apples, oranges);
//   const juice = `juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log("hello", appleJuice);
// console.log("millo", fruitProcessor(5, 0));

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log("appleOrangeJuice", appleOrangeJuice);


// // Number is a built in function.

// const num = Number('23');
// console.log(num);

// function fruitProcessor(apple, orange){
// const juice = `juice prepared with ${apple} apples and ${orange} oranges`;
// return juice;
// }
// const mixedJuice = fruitProcessor(2, 6);
// console.log(mixedJuice);
// const meenaJuice = fruitProcessor(9, 0);
// console.log(meenaJuice);
// const lataJuice = fruitProcessor(5, 8);
// console.log(lataJuice);



//******************************************* */

// Named function expression
// const namedFunction = function myFunction() {
//     console.log("This is a named function expression.");
// };

// namedFunction();

// console.log(namedFunction.name);
// output:
// "This is a named function expression."
// "myFunction"
//Anonymous function expression
// const anonymousFunction = function() {
//     console.log("This is an anonymous function expression.");
// };

// anonymousFunction();

// console.log(anonymousFunction.name);

// // output:
// "This is an anonymous function expression."
// "anonymousFunction"
