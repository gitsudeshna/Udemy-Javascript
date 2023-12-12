// Object.assign()
//////////////////////////BASIC PROGRAM USING Object.assign()////////////////////////////

// EXAMPLE 1:
// const test = { c: 7, d: 6 };
// const target = { a: 1, b: 2 };
// const source = { b: 4, c: 5 };

// const returnedTarget = Object.assign(test, target, source);

// console.log('test', test);                    //"test", {a: 1,b: 4,c: 5,d: 6}
// console.log('target',target);                 //"target", {a: 1,b: 2}
// console.log('source', source);                //"source", {b: 4,c: 5}
// console.log(returnedTarget === test);         //true
// console.log(returnedTarget === target);       //false
// console.log(returnedTarget === source);       //false

//the value we will assign first will be final output of all. in this case (test).

/////////////////////////////////////////////////////////////////////////////////////////
// const course = {
//   name: "Web Programming",
//   score: 92
// };
// const grade = {
//   name: "java",
// };
// const finalResult = Object.assign(course, grade);
// console.log('course', course);               //"course", {name: "java",score: 92}
// console.log('grade', grade);                 //"grade", {name: "java"}
// console.log('finalResult', finalResult);     //"finalResult", {name: "java",score: 92}
// console.log(finalResult === course);         //true
// console.log(finalResult === grade);          //false
//////////////////////////////

// function printName(options) {
//   const defaults = {
//     firstName: "John",
//     lastName: "Bottle",
//   };

//   options = defaults;

//   console.log(`${options.firstName} ${options.lastName}`);
// }

// printName({
//   firstName: "Jane",
//   lastName: "mane",
// });

// IN THIS SCENERIO WE WILL GET BOTH THE VALUE FROM DEFAULTS,
// IT WILL NOT TAKE OPTIONS FIRST VALUE ALSO FOR FIRST.
// IF 2 VALUES ARE THERE EVEN THOUGH IT WILL PRIORITIES THE DEFAULT

// FOR THIS WE USE Object.assign()
// its a built-in js method used for copying the values of one or more
// source objects into a target object.

//its commonly used for object clonning and merging.


/////////////////////////

function printName(options) {
  const defaults = {
    firstName: "John",
    lastName: "Bottle",
  };
  const myFunction = {
      firstName: "third",
      lastName: "fourth",
    };
 const myOptions = Object.assign(myFunction, options, defaults);

  console.log(`${myOptions.firstName} ${myOptions.lastName}`);
  console.log(myFunction);
  console.log(`options`,options);
  console.log(`defaults`, defaults);
}

printName({
  firstName: "Jane",
  // lastName: "mane",
});

function printName(options) {
    const defaults = {
      firstName: "John",
      lastName: "Bottle",
    };
    const myFunction = {
        firstName: "third",
        lastName: "fourth",
      };
  options = Object.assign(myFunction, options, defaults);
  
    console.log(`${options.firstName} ${options.lastName}`);
    console.log(myFunction);
    console.log(`options`,options);
    console.log(`defaults`, defaults);
  }
  
  printName({
    firstName: "Jane",
    // lastName: "mane",
  });


