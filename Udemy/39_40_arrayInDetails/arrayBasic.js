let arr = ["a", "b", "c", "d", "e"];

//SLICE
console.clear();
console.log("===-------------===");
console.log(arr.slice(2)); // [ 'c', 'd', 'e' ]
console.log(arr); // [ 'c', 'd', 'e' ]
console.log(arr.slice(1, 3)); // [ 'b', 'c' ]
console.log(arr.slice(-4)); // [ 'b', 'c', 'd', 'e' ]
console.log(arr.slice(-2)); // [ 'd', 'e' ]
console.log(arr.slice(1, -2)); // [ 'b', 'c' ]
console.log(arr.slice()); // [ 'a', 'b', 'c', 'd', 'e' ]
console.log([...arr]); //[ 'a', 'b', 'c', 'd', 'e' ] spread operator

//SPLICE
console.log(arr.splice(2)); //[ 'c', 'd', 'e' ]
console.log(arr.splice(-1)); //[ 'b' ]
console.log(arr); //[ 'a' ]
//  IMP
//here after splice the values are reduced so the below result is for
//the full array values.
console.log(arr.splice(2)); //[ 'c', 'd', 'e' ] if this will be not here

console.log(arr.splice(-1)); //[ 'e' ]
console.log(arr); //[ 'a', 'b', 'c', 'd' ]

const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
// Inserts at index 1
console.log(months); //
const myMonths = ["Jan", "March", "April", "June"];
myMonths.splice(4, 0, "May"); //[ 'Jan', 'March', 'April', 'June', 'May' ]
// Replaces 1 element at index 4
console.log(myMonths);

const myFish = ["angel", "clown", "drum", "mandarin", "sturgeon"];
const removed = myFish.splice(1, 2);
console.log(removed);
console.log(myFish);

//REVERSE
const arrValue = ["a", "b", "c", "d", "e"];
const arrValue2 = ["j", "i", "h", "g", "f"];
// console.log(arrValue2.reverse());
// console.log(arrValue2);

//CONCAT
const letters = arrValue.concat(arrValue2);
console.log(letters); //['a', 'b', 'c', 'd','e', 'j', 'i', 'h','g', 'f']
console.log([...arrValue, ...arrValue2]); //using spread operator //o/p:- //['a', 'b', 'c', 'd','e', 'j', 'i', 'h','g', 'f']

console.log("====================================");
//JOIN
console.log(letters.join("-"));

const elements = ["Fire", "Air", "Water"];

console.log(elements.join()); //output: "Fire,Air,Water"

console.log(elements.join("")); //Expected output: "FireAirWater"

console.log(elements.join("-")); //output: "Fire-Air-Water"
