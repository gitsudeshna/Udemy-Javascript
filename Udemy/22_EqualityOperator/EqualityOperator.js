// const favourite = prompt("Fav Num?");
// console.log(favourite);
// console.log(typeof favourite);

// (==) loose equality operator check both the side value , if the value is same then it will return
// true.
// (===) strict equalituy operator check both the values data type is same or not,
// if the data type is same then it will check for the values are same or not.
// if both are same it will return true or else it will return false.

// eg:-1 console.log("1" == 1); // true, because here "1" is string
// but == assignmet operator will convert 1 to number as per the coersion concept in js.
// so it will be console.log(1 == 1) , so the output will be true.
// eg:-2 console.log('1' === 1); //false, because here in strict equality operator
// the JS coercion concept does not works. and strict equality operator will first check
// for data type of the values, and for the first value the datatype is
// string and for the second value the datatype is number. So it will
// return false.

const age = 18;
if (age === 18) console.log(`You are ${age} years old Strict`); // true
if (age == 18) console.log(`You are ${age} years old Loose`); //loose

const age2 = "18";
if (age2 === 18) console.log(`You are ${age2} years old Strict`); // true
if (age2 == 18) console.log(`You are ${age2} years old Loose`); //loose

const favourite = Number(prompt("What's your fovourite number buddy?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  console.log("Cool! 23 is an amazing number!");
} else if (favourite === 7) {
  console.log("Wow!! 7 is a great number");
} else if (favourite === 9) {
  console.log("Wow!! 9 is a great number");
} else {
  console.log("Number is not 23 or 7 or 9");
}

if(favourite !== 23) console.log(`why not 23`); 