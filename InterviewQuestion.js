// 1. Difference between null vs undefined ?

// ans - Null ->> 
// Null indicates the absence of a value for a variable. 
// Null is an object.
// Null is converted to zero (0) while performing primitive operations.
// Yes memory is allocated to null values as well

// Undefined ->> 
// Undefined indicates the absence of the variable itself.
// Undefined is a datatype.
// Undefined is converted to NaN while performing primitive operations.


// var iAmUseLess = null;
// console.log(iAmUseLess);                 // null
// console.log(typeof(iAmUseLess));         // object

// var iAmStandBy;
// console.log(iAmStandBy);                 // undefined
// console.log(typeof(iAmStandBy));         // undefined



// ==================================================================

// 2. Bug in React-Natie
// var Minus = 10 - "5"  //5  wrong
// 2.2 . type of null is object where object is not a typeof JavaScript.

// ==================================================================


// 3. What is Nan ? 

// In JavaScript, NaN is short for "Not-a-Number".

// In JavaScript, NaN is a number that is not a legal number.

// NaN is a property of the global object.

// The Number.isNaN() method returns true if the value is NaN, and the type is a Number.

// var value = NaN;
// console.log(value);

// var x = "Sudeshna" - "Das";
// console.log(x);


// var myNumber = "987654321";
// var myName = "Sude"

// console.log(isNaN(myNumber));
// console.log(isNaN(myName));

// if (isNaN(myName)){
//     console.log('Its not number type')
// }
// if (isNaN(myNumber)){
//     console.log('Its a number type')
// }

















// 4. DOM & BOM ?
// Document object model
// Browser object model
