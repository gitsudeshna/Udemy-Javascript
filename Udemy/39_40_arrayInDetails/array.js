// /*
const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);
//["Michael", "Steven", "Peter"];
// console.log(friends[friends.length - 2]); //Steven
// console.log(friends);
["Michael", "Steven", "Peter"];
friends[2] = "Jay";
// console.log(friends);
["Michael", "Steven", "Jay"];
const years = new Array(1991, 1984, 2008, 2020);
// console.log(years[1]);
// We can declare different data types inside an array in JavaScript. JavaScript allows arrays to contain elements of any data type, including strings, numbers, booleans, objects, and even other arrays.

const mixedArray = [
  "apple",
  42,
  true,
  { name: "John", age: 25 },
  ["dog", "cat", "bird"],
];

// console.log(mixedArray); // Output: ['apple', 42, true, { name: 'John', age: 25 }, ['dog', 'cat', 'bird']]

// console.log(mixedArray[0]); // Output: 'apple'
// console.log(mixedArray[1]); // Output: 42
// console.log(mixedArray[2]); // Output: true
// console.log(mixedArray[3]); // Output: { name: 'John', age: 25 }
// console.log(mixedArray[3].name); // Output: 'John'
// console.log(mixedArray[4]); // Output: ['dog', 'cat', 'bird']
// console.log(mixedArray[4][2]); // Output: "bird"

// const friend = ["Michael", "Steven", "Peter"];
// const friend1 = new Array("Michael", "Steven", "Peter");

// console.log(friend);  //["Michael", "Steven", "Peter"]
// console.log(friend1);  //["Michael", "Steven", "Peter"]
// console.log(friend[2]);  //"Peter"
// console.log(friend1[2]);  //"Peter"
const firstName = "Sonu";
const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends];
console.log(jonas);
console.log("jonasLength==>", jonas.length);

// Exercise

const calcAge = function (birthYear) {
  return 2023 - birthYear;
};

const myYears = [1999, 2000, 2002, 2018];

const age1 = calcAge(myYears[0]);
const age2 = calcAge(myYears[1]);
const age3 = calcAge(myYears[2]);
const age4 = calcAge(myYears[myYears.length - 1]);
console.log("firstType", age1, age2, age3, age4);

const ages = [
  calcAge(myYears[0]),
  calcAge(myYears[1]),
  calcAge(myYears[2]),
  calcAge(myYears[myYears.length - 1]),
];
console.log("secondType", ages);

const friendship = ["A", "B", "C"];
console.log(friendship);

//Add elements at the end of an array     --push--
friendship.push("D");
console.log(friendship);

// Add element at the begining of an array  --unshift--
friendship.unshift("john");
console.log(friendship);

// Remove the last element of an array    --pop--
friendship.pop();
const popped = friendship.pop();
console.log("popped", popped);
console.log(friendship);

// Remove element from the begining of an array  --shift--
friendship.shift();
console.log(friendship);

console.log(friendship.indexOf("B"));
console.log(friendship.indexOf("A"));
console.log(friendship.indexOf("Bob")); //o/p : -1

friendship.push(23);
// includes function check wheather the element comes under array or not
console.log(friendship.includes("A"));
console.log(friendship.includes("Bob"));
console.log(friendship.includes("23"));
console.log(friendship.includes(23));

if (friendship.includes("D")) {
  console.log("you have a friend called peter");
}
if (friendship.includes("A")) {
  console.log("you have a friend called A");
}
// */
//============================*********************========================

// Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

// Your tasks:

// Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

// And now let's use arrays! So, create an array called bills containing the test data below.

// Create an array called tips containing the tip value for each bill, calculated from the function you created before.

// BONUS: Create an array total containing the total values, so the bill + tip.

// TEST DATA: 125, 555, and 44.

//===========================********************==========================

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

//  or >>
/*
const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
*/
const bills = [125, 555, 44];
// tip1 = calcTip(build[0])
// [tip1]
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log("bills, tips", bills, tips);
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log("totals", totals);
