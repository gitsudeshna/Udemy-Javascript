console.clear();
console.log("===================================");
var num1 = 10;
var x = num1.toString();
console.log("typeofx", typeof x);
console.log("x", x);
console.log("x+10", x + 10);
// toString() number as input and returns a string
console.log("hii", "10" - 10);
console.log(typeof x);

// parseInt() string numeral as input and returns a number
// console.group()

var strNum1 = "10";
var strNum2 = "11.5";
var strNum3 = "ABC";

// parseInt() string numeral as input and returns a number
console.log("typeof strNum1", typeof strNum1);
console.log(typeof strNum2);
console.log(parseInt(strNum1));
console.log(parseInt(strNum2));
console.log(parseInt(strNum3));    // NaN
console.log(typeof parseInt(strNum1));
console.log(typeof parseInt(strNum2));
console.log(typeof parseInt(strNum3));     //Number

// parseFloat() string numeral as an input and returns a floating number

console.log(parseFloat(strNum2));
console.log(parseFloat(strNum3));

// toFIxed() takes floating number and rounds it off to given position

var strFloat = 87.987653;
console.log(strFloat.toFixed());
console.log(strFloat.toFixed(1));
console.log(strFloat.toFixed(2));
console.log(strFloat.toFixed(5));
console.log(strFloat.toFixed(10));
