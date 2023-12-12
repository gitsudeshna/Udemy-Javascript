//The switch statement is used to perform different actions based on different conditions.

//EXAMPLE 1

// switch (new Date().getDay()) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case 6:
//     day = "Saturday";
// }
// console.log("day", day);
// console.log("Date().getDay()",Date());
// console.log("Date().getDay()",new Date().getDay());

//EXAMPLE 2

// const day = "2";

// switch (day) {
//   case "1":
//     console.log("its monday");
//     break;
//   case "2":
//     console.log("its sunday");
//     break;
//   case "3":
//     console.log("its tuesday");
//     break;
// }

// CHANGE THE FIRST EXAMPLE FROM SWITCH STATEMENT
// TO IF ELSE CONDITION.
console.log("hiii");
const myDay = new Date().getDay();

if (myDay === 0) {
  Day = "sunday";
} else if (myDay === 1) {
  Day = "monday";
} else if (myDay === 2) {
  Day = "tuesday";
} else if (myDay === 3) {
  Day = "wednesday";
} else if (myDay === 4) {
  Day = "thurseday";
} else if (myDay === 5) {
  Day = "friday";
} else {
  Day = "saturday";
}
console.log(Day);
