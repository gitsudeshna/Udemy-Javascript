// 1. Printing Numbers from 1 to N:

// const N = 20;
// for(i=1; i<= 20; i++){
//     console.log(i);
// }

// 2. Counting Backwards from N to 1:
// const N = 20;
// for(i=N; i>=1;i--){
//     console.log(i);
// }

//3)Sum of Numbers from 1 to N:
// const N= 5;
// let temp = 0;
// for(i=1; i<=N; i++){
// temp += i;
// }
// console.log(temp);

// 4. Printing Even Numbers from 1 to N:
// const N = 20;
// for(i=2; i<= N; i+=2){
// console.log(i);
// }

// 5) Iterating Over an Array:
// const fruits = ["apple", "banana", "cherry", "date"];
// for(i=0; i<= fruits.length-1; i++){
//     console.log(fruits[i]);
// }

// 6)Nested For Loop (Multiplication Table):

// for(i=1; i<=10; i++){
//     console.log(`multiplication table of ${i}`)
//     for(j=1; j<=10; j++){
//         const temp = i*j
//         console.log(`${i}*${j}=${temp}`)
//     }
// }

// 7) Finding the Largest Number in an Array:
// const numbers = [5, 12, 9, 20, 3];
// let temp = numbers[0];
// for (i = 0; i <= numbers.length; i++) {
//   if (numbers[i] > temp) {
//     temp = numbers[i];
//   }
// }
// console.log(temp);

// 8) Finding the smallest Number in an Array:
// const numbers = [5, 12, 9, 20, 3];
// let temp = numbers[0];
// for (i = 0; i <= numbers.length; i++) {
//   if (numbers[i] < temp) {
//     temp = numbers[i];
//   }
// }
// console.log(temp);

// 8) Reversing a String:
// const inputString = "Hello, World!";
// let reversedString = "";
// for(i=inputString.length-1; i>=0; i--){
//     reversedString += inputString[i];
// }
// console.log('reversedString', reversedString);

// 9) Counting Vowels and Consonants and numbers:

// const inputString = "Hello, World!123";
// const vowels = "aeiouAEIOU";
// let vowelCount = 0;
// let consonantCount = 0;
// let numberCount = 0;
// for (i = 0; i <= inputString.length - 1; i++) {
//   if (vowels.includes(inputString[i])) {
//     vowelCount++;
//   } else if (inputString[i].match(/[a-zA-Z]/)) {
//     consonantCount++;
//   } else if(inputString[i].match(/[1-9]/)){
//     numberCount++;
//   }
// }
// console.log(`no of vowels: ${vowelCount}, no of consonant: ${consonantCount}, no of Numbers: ${numberCount}`);

// 10) Palindrome Check:

// const inputString = "racecar";
// const palindrome = inputString.split("").reverse().join("");
// if (inputString === palindrome) {
//   console.log(`${inputString} is a palindrome number`);
// } else {
//   console.log(`${inputString} no it is not`);
// }

// 11) Fibonacci Sequence:

// const fibonacciSeries = [0, 1];
// let a = 0;
// let b = 1;
// let sum = 0;
// for (let i = 0; i < 5; i++) {
//     console.log("sum", sum);
//   sum = a + b;
//   a = b;
//   b = sum;

// }

//  0,1,1,2,3,5


const val = 2;
let temp = '';
for(i=1; i<=10; i++){
temp = val * i;
console.log(`${val}*${i}= ${temp}`);
}

