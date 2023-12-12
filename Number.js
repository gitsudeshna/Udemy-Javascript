console.clear();

var num1 = 10; //integer
var num2 = 10.9; //decimal Number

console.log(typeof num1);
console.log(typeof num2);

//Addition

var num3 = 15;
var sum = num3 + num1 + num2;
console.log("sum", sum);

//Substraction

var diff = num3 - num1;
console.log("diff", diff);

//Multiplication

var mul = num3 * num1;
console.log("mul", mul);

//Division
var div = num3 / num1;
console.log("div", div);

var divByZero = num3 / 0;
console.log("divByZero", divByZero);
console.log(typeof divByZero);

var mulByString = num3 * "A";
console.log("mulByString", mulByString);
console.log("typeofmulbystring", typeof mulByString);
console.log("SA" * 10);
console.log(typeof "10");
var a = "10";
var b = 10;
console.log(a + b);
