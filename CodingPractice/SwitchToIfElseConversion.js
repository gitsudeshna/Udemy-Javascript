// //EXAMPLE - 1

// switch (new Date().getDay()) {
//   case 0:
//     day = "Sunday";
//     console.log("sunday funday");
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
//     break;
//   default:
//     day = "No Day";
// }
// console.log("day", day);
// // console.log("Date().getDay()",Date());
// // console.log("Date().getDay()",new Date().getDay());

// //EXAMPLE 1 => SWITCH TO IFELSE CONVERSION

// const myDay = new Date().getDay();
// console.log("myDay", myDay);
// console.log("Date", Date());
// if (myDay === 0) {
//   Day = "sunday";
// } else if (myDay === 1) {
//   Day = "monday";
// } else if (myDay === 2) {
//   Day = "tuesday";
// } else if (myDay === 3) {
//   Day = "wednesday";
// } else if (myDay === 4) {
//   Day = "thurseday";
// } else if (myDay === 5) {
//   Day = "friday";
// } else if (myDay === 6) {
//   Day = "saturday";
// }
// console.log("hey hii", Day);
// console.log("getDate()", new Date().getDate());
// console.log("getMon()", new Date().getMonth() + 1);
// console.log("getYear()", new Date().getFullYear());

//EXAMPLE - 2

// const today = "thurseday";
// switch (today) {
//   case "monday":
//     console.log("MON");
//     console.log("MON2");
//     break;
//   case "tuesday":
//     console.log("TUES");
//     break;
//   case "wednesday":
//   case "thurseday":
//     console.log("WED");
//     break;
//   case "friday":
//     console.log("FRI");
//     break;
//   case "satureday":
//   case "sunday":
//     console.log("SAT");
//     break;
//   default:
//     console.log("ENJOY MADI");
// }

//EXAMPLE 2 => SWITCH TO IF ELSE CONVERSION

const myToday = "thurseday";
console.log(myToday);
if (myToday === "monday") {
  console.log("MON");
  console.log("MON2");
} else if (myToday === "tuesday") {
  console.log("TUES");
} else if (myToday === "wednesday" || "thurseday") {
  console.log("WED");
} else if (myToday === "friday") {
  console.log("FRI");
} else if (myToday === "saturday" || "sunday") {
  console.log("SAT");
} else {
  console.log("ENJOY MADI");
}

// const myName = "Sudeshna";
// console.log(myName);
// if(myName == "Richu"){
//   console.log(`I am in home`);
// }else if(myName == "sudi"){
//   console.log('i am at office');
// }else{
//   console.log(`I don't know you.`);
// }
