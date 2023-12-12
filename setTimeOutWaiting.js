var currentDate = new Date().getTime();
console.log(currentDate);
var myTime = currentDate + 100000;
console.log(myTime);
while (currentDate <= myTime) {
  currentDate++;
  console.log(currentDate, myTime);
}
setTimeout(() => {
  console.log("Delayed for 3 second.");
}, "3000");

// var currentDate = new Date().getTime();
// console.log(currentDate);
// var myTime = currentDate+10000;
// while (currentDate < myTime) {
// console.log("HII")
// myTime++;
// setTimeout(() => {
//   console.log("Delayed for 3 second.");
// }, "3000");
// console.log(currentDate);
// }

//  let count = 0;

// while (count < 5) {
//   console.log("Count: " + count);
//   count++; // Increment the count variable
// }

// 1695901849309
// 1695901854309

// 1695901886205
