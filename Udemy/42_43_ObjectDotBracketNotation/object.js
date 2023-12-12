//its a data structure in Java Script.
const jonasArray = [
  "jonas",
  "schedtmann",
  2023 - 1999,
  "teacher",
  ["michael", "Peter", "Steaven"],
];
// console.log(jonasArray);

// we cant reference array elemets by their name, only by their order number
// to solve this problem we have another data structure in JS which is objects.

// in objects we define key value pairs. we can give each of the values here a name.
//first we show curly braces in code block if else statement, switch statement or to define a function body.

// but here in object we use curly braces to define a new object.
// object we define in key value pairs.

//  key is basically the variable name and value is the value assigned to that variable.

const Sudeshna = {
  firstName: "Jonas",
  lastName: "Das",
  age: 2023 - 1999,
  job: "teacher",
  friends: ["nj", "sinu", "banni"],
};

// above 5 (firstName,lastName,age,job,friends) are the keys. and value assigned to them are values.
// object using curly braces is called object literal.
// diff between array and object.

// ------------OBJECT in JS--------------

// An object in JavaScript is a collection of properties and methods. Properties are named values, and methods are functions that can be performed on the object.

//diff between array and object is -
// order of the values doesn't matters when we wants to retrieve them. because we access object elements using the name or key. but in array order of the values matters because we access the element of array using the order of the element.

// console.log(Sudeshna);

//DOT and Bracket notation
// There are two ways to access properties: dot notation and bracket notation.
// -----------------Bracket Notation------------------
// This notation involves using square brackets [] in which we have an expression that evaluates to a value. The value serves as the key for the Property.
// syntax - object[expression]

// For both bracket and dot=>

// 1>with dot and bracket notations, we can access the value of a property by its key.
// eg-for dot notation
// console.log(Sudeshna.firstName);
// eg-for bracket notation
// console.log("Sudeshna", Sudeshna["firstName"]);
// 2>Modify the value of an existing property by its key.
// eg-for dot notation
// Sudeshna.firstName = "RichYou";
// console.log(Sudeshna);
// eg-for bracket notation
// Sudeshna['firstName'] = "Rummy";
// console.log(Sudeshna);
// 3>add a new property to an Object.
// eg-for dot notation
// Sudeshna.location = "Odisha";
// console.log(Sudeshna);
// eg-for bracket notation
// Sudeshna['location'] = "Hyderabad";
// console.log(Sudeshna);

// IMP
// Dot Notation only allows static keys while Bracket Notation accepts dynamic keys

const obj = {
    name: 'deecode',
    age: 80,
    language: 'javascript'
}

const myKey = "language";

const target = obj.myKey;
console.log(target);   //undefined
// -> because this property is not present inside the obj "obj".
const target2 = obj[myKey];
console.log(target2);   //undefined
// -> this is because bracket notation can take expression and in side myKey the value is language and in 'obj' object the language keys value is javascript.

const myObj = {
    myName: "sandy",
    age: 40,
    language: "React Native"
}

const accessAge = "age";
myObj.accessAge = 41;
console.log('myObjDotNot',myObj);
// o/p- { myName: 'sandy', age: 40, language: 'React Native', accessAge: 41 }
myObj[accessAge] = 42; 
console.log('myObjBracketNot',myObj);
// o/p- { myName: 'sandy', age: 42, language: 'React Native', accessAge: 41 }


// const person1 = {};
// person1['firstname'] = 'Mario';
// person1['lastname'] = 'Rossi';

// console.log(person1.firstname);
// Expected output: "Mario"

// const person2 = {
//   firstname: 'John',
//   lastname: 'Doe',
// };

// console.log(person2['lastname']);
// Expected output: "Doe"

// Syntax:
// object.propertyName
// object[expression]
