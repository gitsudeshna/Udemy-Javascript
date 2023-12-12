// 1)I wanna print all the elements of an array using for loop.
// 2)I want to get the data type of all the elements in an array myLength.

// const arr = ['Sudeshna','Das',2023-1999,'teacher',['teena','meena','reeta']];
// const myLength = [];
// for(i= 0; i<arr.length; i++){
//     console.log(arr[i],typeof(arr[i]));
//     myLength.push(typeof(arr[i]));
// }
// console.log(myLength);

// print the age for all the years given in the array.
// const years = [1999,2000,1978,1987];
// const ages = [];
// for(i=0; i<years.length;i++){
//     ages.push(2023-years[i]);
// }
// console.log(ages);

// =========================================Breaking and Continue===========================================

// The break statement "jumps out" of a loop.

// The continue statement "jumps over" one iteration in the loop.

//================continue if the type is not equal to string==================
// const arr = [
//   "Sudeshna",
//   "Das",
//   2023 - 1999,
//   "teacher",
//   ["teena", "meena", "reeta"],
// ];

// for (i = 0; i < arr.length; i++) {
//   if (typeof arr[i] !== "string") {
//     continue;
//   }
//   console.log(arr[i]);
// }

//====================break if the type is number====================
// const arr = [
//   "Sudeshna",
//   "Das",
//   2023 - 1999,
//   "teacher",
//   ["teena", "meena", "reeta"],
// ];

// for(i=0; i<arr.length;i++){
//     if(typeof arr[i] === 'number'){
//         break;
//     }
//     console.log(arr[i]);
// }

// challenge - from number 1-10 if the number is 3 then it should break and continue as well.
const temp = [];
for (i = 0; i <= 10; i++) {
  if (i === 3) {
    break;
  }
  temp.push(i);
}
console.log(temp); //[ 0, 1, 2 ]

const temp2 = [];
for (i = 0; i <= 10; i++) {
  if (i === 3) {
    continue;
  }
  temp2.push(i);
}
console.log(temp2); //[0, 1, 2, 4,  5, 6, 7, 8, 9, 10]
