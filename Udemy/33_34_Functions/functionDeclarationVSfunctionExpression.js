//FUNCTION DECLARATION
//=================================

// function calcAge(birthYear){
//     const age = 2023 - birthYear;
//     return age;
// }

// const temp = calcAge(1999);
// console.log(temp);

// ========================
// OR
// ========================

// function calcAge(birthYear){
//     return 2023 - birthYear;
// }

// const temp = calcAge(1999);
// console.log(temp);

// Question 1:
// Write a function named greet that takes a parameter name and returns a greeting message. For example, if the input is 'Alice', the function should return 'Hello, Alice!'.

// function Declaration
// ====================
// function greet(name) {
//   return `Hello,${name}`;
// }
// const wish = greet(`Sudeshna`);
// console.log(wish);
// function Expression
// ===================
// const greet = function (name) {
//   return `Hello, ${name}`;
// };
// const val = greet("Das");
// console.log(val);

// Question 2:
// Write a function named calculateArea that takes the radius of a circle as a parameter and returns the area of the circle. Assume π (pi) to be 3.14.

// Function Declaration
// ====================
// const val =calculateArea(5);
// console.log(val);
// function calculateArea(radius){
// return 3.14 * radius * radius;
// }

// FUnction Expression
//====================
// const calculateArea2 = function(radius){
// return 3.14 * radius* radius;
// }
// const area = calculateArea2(5);
// console.log(area);

//===========================
//FUNCTION EXPRESSION
//===========================
//  function without name is called anonymous function.
//and tha anonymous function we will store inside a variable .

// const calcAge2 = function(birthYear){
//     return 2023- birthYear;
// }
// const age2 = calcAge2(1999);
// console.log(age2);

//==================================
// function is a value which we can store it in any variable
//==================================
// const addTen = function(x) {
//       x += 5; // same as: x = x + 5
//           return x;}
//     let y = 7;
//          z =addTen (y);//same as :z = addten(y);
//     console.log(z);

//Function Declaration and Function Expression are two different ways to define functions in JavaScript. They have some key differences in terms of syntax and hoisting behavior.

// Function Declaration:
// A function declaration is a way to define a function where the function name is followed by a parameter list and a block of code. Function declarations are hoisted, meaning they are available throughout the scope in which they are defined, even before the actual declaration in the code.

// Function declarations have a name (e.g., functionName in the syntax), making them named functions.

// Function Expression:
// ============================
// A function expression is a way to define a function as a part of an expression, typically by assigning it to a variable. Function expressions are not hoisted in the same way as function declarations. They are only accessible after the expression has been assigned.

// Function expressions can be named (e.g., const functionName = function() {...}) or anonymous (e.g., const = function() {...}).

// --------------------
// Differences:
// Hoisting:

// Function declarations are hoisted, meaning they can be used before they are declared in the code.
// Function expressions are not hoisted, so they can only be used after the expression has been assigned.
// Usage:

// Function declarations can be used anywhere in the scope, including before the declaration.
// Function expressions can only be used after the expression has been assigned.
// Named vs. Anonymous:

// Function declarations have a name (e.g., functionName in the syntax), making them named functions.
// Function expressions can be named (e.g., const functionName = function() {...}) or anonymous (e.g., const = function() {...}).
