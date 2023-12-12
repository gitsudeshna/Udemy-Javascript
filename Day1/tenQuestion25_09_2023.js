// 2)
// const x = 10;

// function foo() {
//   console.log(x);
//   const x = 20;
// }

// foo();
// =================================
//3)
// const a = {
//   value: 42,
//   toString: function () {
//     console.log("-", this.value);
//     return this.value;
//   },
// };
// console.log(a);
// const b = {
//   value: 42,
//   toString: function () {
//     return this.value;
//   },
// };
// console.log(b);
// console.log(a == b);
// console.log(a === b);
// console.log(a.value == b.value);  // true
// console.log(a.value === b.value); // true

// 4)
//---------------------------------------------------------------
// function myFunction() {
//     console.log("First call");
//   }

//   myFunction.prototype = {
//     constructor: myFunction,
//     toString: function() {
//       return "Second call";
//     }
//   };

//   const obj = new myFunction();

//   console.log(obj);

//---------------------------------------------------------------

// function sayHi() {
//     console.log(name);
//     console.log(age);
//     var name = "John";
//     let age = 30;
//   }

//   sayHi();

//   O/P:=
//   ReferenceError: Cannot access 'age' before initialization

// var x = [0];
// if ([0]) {
//   console.log(x == true);
// } else {
//   console.log("It's false!");
// }

//------------------------------------------------------------------------

// function sayHi() {
//     console.log(name);               //undefined  bcz name declared with var keyword
//     console.log(age);                //Cannot access 'age' before initialization bcz age declared with let keyword
//     console.log(address);               //Cannot access 'address' before initialization
//     var name = "John";
//     let age = 30;
//     let address = "Bengalore";
//   }

//   sayHi();

//===========================================================================

// var x = [0];
// if ([0]) {
//   console.log("hii");
//   console.log(x == true); //here x will converted into 0, bcz == loose equality operator will convert foth value to same type so it
//                           //will convert []empty array or 0 to 0. so (0==true)where 0 is falsy and true is truthy so O/p is false.
// } else {
//   console.log("It's false!");
// }

//============================================================================

//const arr = [1, 2, 3];
//arr.foo = 'Hello';
//console.log(arr.length);           //3
//console.log(arr);                  //[1,2,3, foo:'Hello']

// const arr = [10, 29, [43]];
// arr.key = "value";
// console.log(arr.length)    //3
// console.log(arr)   //[ 10, 29, [ 43 ], key: 'value' ]

// const arr = [ 10, 29, [ 43 ], {key: 'value'} ]
// console.log(arr.length)    //4
// console.log(arr)   //[ 10, 29, [ 43 ], {key: 'value'} ]

//==================================================================
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// function sayHello() {
//     console.log(this.message);
//   }

//   const obj1 = {
//     message: 'Hello from obj1!',
//   };

//   const obj2 = {
//     message: 'Hello from obj2!',
//   };

//   obj1.sayHello = sayHello;
//   obj2.sayHello = sayHello;

//   obj1.sayHello();
//   obj2.sayHello();

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//===========================================================

//   const arr = [1, 2, 3];
//   arr[-1] = 0;

//   console.log(arr.length);  //3
//   console.log(arr);    //[ 1, 2, 3, '-1': 0 ]

//   arrays are primarily designed to hold elements with non-negative integer indices.
//   When you add properties with negative indices or non-integer keys to an array,
//   they are treated as regular object properties, not array elements. As a result,
//   they do not affect the length property of the array.

//===========================================================

//   let x = 5;

// (function () {
//   console.log(x);   //ReferenceError: Cannot access 'x' before initialization
//   let x = 10;
// })()


//============================================================

// var a=5;
// console.log(a)    //5
// function test(){
// var a=19;    
// console.log(a)    //19
// }
//  test();
// console.log(a)    //5

//============================================================


// const a=5;
// console.log(a)       //5
// function test(){
// const a=19;
// console.log(a)       //19
// }
//  test();
// console.log(a)       //5



//============================================================

// let a=5;
// console.log(a)  //5
// function test(){
// let a=19;
// console.log(a)  //19
// }
//  test();
// console.log(a)   //5