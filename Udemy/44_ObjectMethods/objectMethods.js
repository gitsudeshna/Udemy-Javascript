const myObject = {
  firstName: "Sudeshna",
  lastName: "Das",
  age: 25,
  city: "Kolkata",
  myMethod: function () {
    return this.firstName + this.lastName;
  },
};

console.log(myObject.myMethod()); //SudeshnaDas
console.log(myObject.myMethod); //[Function: myMethod]
console.log(myObject);

// o/p
// {
//     firstName: 'Sudeshna',
//     lastName: 'Das',
//     age: 25,
//     city: 'Kolkata',
//     myMethod: [Function: myMethod]
//   }

// What is this?
// In JavaScript, the this keyword refers to an object.
// Which object depends on how this is being invoked (used or called).

// The this keyword refers to different objects depending on how it is used:

// In an object method, this refers to the object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), apply(), and bind() can refer this to any object.

// Note
// this is not a variable. It is a keyword. You cannot change the value of this.

// JavaScript Methods
// JavaScript methods are actions that can be performed on objects.

// A JavaScript method is a property containing a function definition.

// Property	Value
// firstName	John
// lastName	Doe
// age	50
// eyeColor	blue
// fullName	function() {return this.firstName + " " + this.lastName;}

// => Methods are functions stored as object properties.

// Accessing Object Methods
// ========================
// objectName.methodName()  //syntax
// name = person.fullName(); //example

// If you access the fullName property, without (), it will return the function definition:
// name = person.fullName;
