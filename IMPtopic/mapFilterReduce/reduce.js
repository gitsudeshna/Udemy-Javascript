// const arr = [5, 1, 3, 2, 6];

// function findSum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   return sum;
// }

// console.log(findSum(arr));

// // const output = arr.reduce(function{acc, curr} {

// // })

// function findMax(arr) {
//   let max = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }

// console.log("maxValue=>", findMax(arr));

// const myoutput = arr.reduce(function (acc, curr) {
//   acc = acc + curr;
//   return acc;
// }, 0);

// console.log("myoutput", myoutput);

// const myReduce = arr.reduce(function (max, curr) {
//   if (curr > max) {
//     max = curr;
//   }
//   return max;
// }, 0);

// console.log("myReduceValue", myReduce);

const users = [
  { firstName: "John", lastName: "Saini", age: 26 },
  { firstName: "John", lastName: "Saini", age: 75 },
  { firstName: "John", lastName: "Saini", age: 50 },
  { firstName: "John", lastName: "Saini", age: 26 },
];

const outputOfMap = users.map((x) => x.firstName + " " + x.lastName);
console.log("outputOfMap", outputOfMap);

//{26:2, 75:1, 50:1}

const noOfAge = users.reduce(function (acc, curr) {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

console.log(noOfAge);

const filterFirstName = users.filter((x) => x.age < 30).map((x)=> x.firstName);

console.log(filterFirstName);





