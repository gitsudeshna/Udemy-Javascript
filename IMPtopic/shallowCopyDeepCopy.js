
// There are 2 ways to clone the object in javascript
// 1.shallow copy, 2. deep copy
// 

//shallow copy:-

// let developer1 = { name: "Nilanjan" };
// console.log(developer1);

// let developer2 = developer1;
// developer2.name = "Sudeshna";

// console.log(developer1);
// console.log(developer2);

// //deep copy:-

// let employee = {eid: "E102",ename: "Jack"}
// console.log(employee);

// let newEmployee = JSON.parse(JSON.stringify(employee));
// // let obj2 = JSON.parse(JSON.stringfy(obj1))
// console.log("1.1", employee);
// console.log("1.2", newEmployee);

// newEmployee.ename = "Beck";
// console.log("2.1", employee);
// console.log("2.2", newEmployee);

// // NEW EXAMPLE 1

// const originalArray = [1, 2, 3, { key: 'value' }];

// // Creating a shallow copy using the spread operator
// const shallowCopyArray = [...originalArray];

// // Modifying the nested object in the shallow copy
// shallowCopyArray[4] = 'new value';

// console.log(originalArray);       // [1, 2, 3, { key: 'new value' }]
// console.log(shallowCopyArray);    // [1, 2, 3, { key: 'new value' }]

// ///////////////////////////////////////

// //NEW EXAMPLE2

// const originalObject = {
//     name: 'John',
//     age: 30,
//     address: { city: 'New York', country: 'USA' }
//   };
  
//   // Creating a shallow copy using Object.assign()
//   const shallowCopyObject = Object.assign({}, originalObject);
  
//   // Modifying the nested object in the shallow copy
//   shallowCopyObject.address.city = 'Los Angeles';

//   console.log(originalObject);        // { name: 'John', age: 30, address: { city: 'Los Angeles', country: 'USA' } }
//   console.log(shallowCopyObject);     // { name: 'John', age: 30, address: { city: 'Los Angeles', country: 'USA' } }
// //   shallowCopyObject.name = 'murthy';
// //   console.log('1', originalObject);
// //   console.log('2', shallowCopyObject);
//   originalObject.name="krishna"
//   console.log('1', originalObject);
//   console.log('2', shallowCopyObject);
  


  //

// const myOriginalArray = [1, 2, [3, 4], 5, 6,{ key: 'value' }, [56,78]];

// // Creating a shallow copy using the slice() method
// const myShallowCopyArray = myOriginalArray.slice();
// // Modifying the nested array in the shallow copy
// myShallowCopyArray[2][0] = 99;

// console.log(myOriginalArray);       // [1, 2, [99, 4]]
// console.log('1',myShallowCopyArray);    // [1, 2, [99, 4]]

// myShallowCopyArray[3] = 10
// console.log(myOriginalArray);   
// console.log('2',myShallowCopyArray);

// myShallowCopyArray[5].key = 'test';
// console.log(myOriginalArray);   
// console.log('3',myShallowCopyArray);

// myShallowCopyArray[6][1] = 22;
// console.log(myOriginalArray);   
// console.log('3',myShallowCopyArray);

// const originalObject = {
//     name: 'John',
//     age: 30,
//     address: { city: 'New York', country: 'USA' }
// };

// // Creating a shallow copy using Object.assign()
// const shallowCopyObject = Object.assign({}, originalObject);

// // Modifying a property within the object
// originalObject.name = 'krishna';

// console.log('1', originalObject);      // { name: 'krishna', age: 30, address: { city: 'New York', country: 'USA' } }
// console.log('2', shallowCopyObject);   // { name: 'krishna', age: 30, address: { city: 'New York', country: 'USA' } }

function modifyArray(arr) {
    arr.push(4);
}

let myArray = [1, 2, 3];
modifyArray(myArray);
console.log(myArray); // Output: [1, 2, 3, 4] (original array is modified)
