// Object.create() used to create a new object from an existing object.
// the existing object act as a prototype to the newly created object.

// let person = {
//   city: "London",

//   calculateAge: function () {
//     let currentYear = new Date().getFullYear();
//     let age = currentYear - this.yearOfBirth;
//     console.log(age);
//   },
// };

// var john = Object.create(person);
// john.name = "money";
// john.yearOfBirth = 1999;
// john.occupation = "teacher";
// console.log(john);
// john.calculateAge();

// let mark = Object.create(person, {
//   name: { value: "Mark" },
//   getFullYear: { value: 1999 },
// });
// console.log(mark);
// console.log(person == john.__proto__);

// EXAMPLE - 2

// const existingObject = {
//     greet: function(){
//         console.log(`Hello, my name is ${this.myName}`)
//     }
// };

// const newObject = Object.create(existingObject);
// newObject.myName = "Sita";
// newObject.greet();

// EXAMPLE - 3

const personPrototype = {
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

const person = Object.create(personPrototype, {
  name: {
    value: "John",
    writable: true,
    enumerable: true,
    configurable: true,
  },
  age: {
    value: 30,
    writable: true,
    enumerable: true,
    configurable: true,
  },
});

console.log(person.name); // Output: John
console.log(person.age); // Output: 30
person.greet(); // Output: Hello, my name is John
console.log(person);
