// Exercise 1)
// Get the sum of two arrays…actually the sum of all their elements.
// P.S. Each array includes only integer numbers. Output is a number too.

// let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; // --> 276
// let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26]; // --> 351

// let sumArr1= 0;
// let sumArr2= 0;

// for(i=0; i<=arr_1.length-1; i++){
//     sumArr1+= arr_1[i];
// }
// for(j=0; j<=arr_1.length-1; j++){
//     sumArr2+= arr_2[j];
// }
// const totalSum = sumArr1 + sumArr2;

// console.log(totalSum);

//**********************************************************************

// Exercise 2)
// Using a for loop print all even numbers up to and including n. Don’t include 0.

// const N = 1;
// if(N<2){
//     console.log(`there is no even number up to ${N}`);
// }
// for(i=2; i<= N; i+=2){
//     console.log(i);
// }

//**********************************************************************

// Exercise 3)
// Using a for loop output the elements in reverse order.

// let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];
// let temp = '';
// for(i= arr.length-1; i>=0; i--){
//     temp += arr[i]+' ';
// }
// console.log(temp);

//**********************************************************************

// Exercise 4)
// Given two arrays of integers. Add up each element in the same position and
// create a new array containing the sum of each pair. Assume both arrays are of the same length.

//MINE

// const arr_3   = [4, 6, 7];
// const arr_4   = [8, 1, 9];

// let sum = '';

// for(let i=0; i<=arr_3.length-1; i++){
//     for(j=i; j<=i;j++){
//         sum = arr_3[i] + arr_4[j];
//         console.log(sum);
//     }
// }

// =====
// CHAT GPT
// const arr_3   = [4, 6, 7];
// const arr_4   = [8, 1, 9];

// const sumTotal = [];
// if(arr_3.length === arr_4.length){
// for(let i=0; i<=arr_3.length-1; i++){
//     for(j=i; j<=i;j++){
//         const sum = arr_3[i] + arr_4[j];
//         sumTotal.push(sum);
//     }
// }
// console.log(sumTotal);
// }else{
//     console.log('the lengths do not match');
// }

//**********************************************************************

// Exercise 5)
// Given a string change the every second letter to an uppercase ‘Z’. Assume
// there are no space.   
//string.toUpperCase()

// MINE CHANGED javascript TO jAvAsCrIpT
// const str1 = "javascript";
// let temp1= '';
// let temp2= '';
// let store = '';
// for(i=0; i<=str1.length-1; i+=2){
//     temp1 = temp1 + str1[i];
// }
// for(i=1; i<=str1.length-1; i+=2){
//     temp2 = temp2 + str1[i].toUpperCase();
// }
// for(k=0; k<=temp1.length-1; k++){
//     for(l=k; l<=k; l++){
//         const sum = temp1[k] + temp2[l]
//         store += sum;
//     }
// }
// console.log(store);

//REAL QUESTION IS CONVERT javascript TO jZvZsZrZpZ.
// const str1 = "javascript";
// let modifiedString = "";

// for (let i = 0; i < str1.length; i++) {
//   if (i % 2 === 1) {
//     modifiedString += 'Z';
//   } else {
//     modifiedString += str1[i];
//   }
// }

// console.log(modifiedString);
//**********************************************************************

// Exercise 6)
// Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not.

// const str2 = "don’ty know why";
// for(i=0; i<=str2.length-1; i++){
//     if(str2[i].includes('y')){
//         console.log(`${str2[i]}, ${[i]}, yes`)
//     }
// }

//============
// WITHOUT FOR
// const str2 = "don’ty know why";
// if(str2.includes('y')){
// console.log('yes');
// }else{
//   console.log("No");
// }
//**********************************************************************

// Exercise 7)
// Given a number n Calculate the factorial of the number
// o/p=1,2,6,24,120
// const numb = 5;
// fact=1;
// for(i=1; i<=numb; i++){
// fact = fact * i;
// console.log(fact);
// }

//**********************************************************************

// Exercise 8)
// Write a program that will allow someone to guess a four digit pin exactly 4
// times. If the user guesses the number correctly. It prints “That was
// correct!” Otherwise it will print “Sorry that was wrong.” Program stops after the 4th attempt of if they got it right.


// const pin = 0704;
// let count = 0;
// if(myInput === pin){
//     console.log('yes');
// }else{
//     console.log('no');
// }

// const correctPin = "1234"; // Replace with your desired PIN
// const maxAttempts = 4;
// let attempts = 0;

// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// function getUserGuess() {
//   rl.question("Enter a four-digit PIN: ", function(guess) {
//     if (guess === correctPin) {
//       console.log("That was correct!");
//       rl.close();
//     } else {
//       attempts++;
//       if (attempts >= maxAttempts) {
//         console.log("Sorry, you've reached the maximum number of attempts.");
//         rl.close();
//       } else {
//         console.log("Sorry, that was wrong. You have " + (maxAttempts - attempts) + " attempts remaining.");
//         getUserGuess();
//       }
//     }
//   });
// }

// getUserGuess();


//**********************************************************************

// Exercise 9)
// Write a program that will check if two strings are palindromes. A palindrome is a word that spells the same forward and backward.
// Palindrome: a word, phrase, or sequence that reads the same backward as
// forward, e.g., madam or nurses run.

// let str3 = "racecar";
// let str4 = "Java";
// let tempStr3 = "";
// let tempStr4 = "";

// for(i=str3.length-1; i>=0; i--){
//     tempStr3 = tempStr3 + str3[i];
//     if(str3 === tempStr3){
//        console.log('string1 palindrome', str3, tempStr3); 
//     }
// }
// for(j=str4.length-1; j>=0; j--){
//     tempStr4 = tempStr4 + str4[j];
//     if(str4 === tempStr4){
//        console.log('string2 palindrome', str4, tempStr4); 
//     }
// }

// +++++++++++++++++++++++++++++++++++
// let str3 = "racecar";
// let tempStr3 = "";

// for (let i = str3.length - 1; i >= 0; i--) {
//     tempStr3 = tempStr3 + str3[i];
// }

// if (str3 === tempStr3) {
//     console.log('"' + str3 + '" is a palindrome.');
// } else {
//     console.log('"' + str3 + '" is not a palindrome.');
// }
// +++++++++++++++++++++++++++++++++++++

//**********************************************************************

// Exercise 10)
// This is a code wars kata. click here to train on “Grasshopper – Summation” on
// code wars. Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// const num1 = 2; 
// const num2 = 8;
// let temp = 0;
// let sum = 0;
// for(i=1; i<= num2; i++){
// temp = i;
// sum= sum + temp;
// console.log(`${temp} + `);
// }
// console.log(`${sum}`);


// 1-1
// 2-1
// 3-1
// 4-1
// 5-0
// 6-0.5
// 7-1
// 8-0
// 9-
// 10-


