1) WAP to print 1-10.              //1,2,3,4,5,6,7,8,9,10
for(let i= 1; i<= 10; i++){
    console.log(i)
}
==========================================================================
2) nested for loop.               //154321 254321 354321 454321 554321
for (let i = 1; i <= 5; i++) {
  console.log("i", i);
  for (let j = 5; j >= 1; j--) {
    console.log("j", j);
  }
}
==========================================================================
3)Calculate the Sum of Numbers from 1 to N. //55
const n = 10;
let myVal = 0;
for(i=1; i<=n; i++){
myVal = myVal + i;
}
console.log('myVal', myVal);
==========================================================================
4)Print Even Numbers from 1 to 20.  //2,4,6,8,10,12,14,16,18,20

for(i=2; i<= 20; i += 2){
  console.log(i);
}
==========================================================================
5)Reverse a String:
const str = "Hello";
for(i = str.length-1; i>= 0; i--){
console.log(i);        // 43210
console.log(str[i]);   // olleH
}
///////////////&&///////////////
const str = "Hello, World!";
let myStore = "";
for(i= str.length-1; i >= 0; i--){
myStore += str[i];
}
console.log(myStore);
==========================================================================
6) Factorial of a number

using for loop=
===============
const value = 5;

let fact = 1;

for(i = 1; i <= value; i++){
fact = fact * i;
}
console.log('fact', fact);

using nested for loop=
======================
const val = 5;

for(i=1; i<= val; i++){
    let fact = 1;
    for(j=1; j<=i; j++){
        fact *= j;
    }
    console.log(j);
}
==========================================================================
7) Generate a Multiplication Table:

let tableOfFive = 5;
for(i = 1; i <= 10; i++){
let myNumbers = tableOfFive * i;
console.log(myNumbers);
}
==========================================================================
8)Count the Number of Vowels in a String:   //4
const str = "its my sentence";
let vowel =  "aeiouAEIOU";
let count = 0;
for(i=0; i<= str.length; i++){
if(vowel.includes(str[i])){
count++;
}
}
console.log(count);
==========================================================================
9)Print a Pyramid Pattern:


==========================================================================
10)Loop through an array:

const array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
==========================================================================
11)Loop with a custom step size:

 for (let i = 0; i < 10; i += 2) {
    console.log(i);
}
==========================================================================
12)Loop through numbers in reverse order:

for (let i = 10; i > 0; i--) {
    console.log(i);
}
==========================================================================
13)Nested for loop (loop within a loop)

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}
==========================================================================
14) Using the break statement to exit a loop early:

for (let i = 0; i < 5; i++) {
    if (i === 3) {
        break;
    }
    console.log(i);
}
==========================================================================
15) Using the continue statement to skip an iteration:

for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue;
    }
    console.log(i);
}
==========================================================================
16) i want to print 10 for 10 time 9 for 9 times ......2 for 2 times and 1 for 1 times.

for(i = 10; i>= 1; i--){
for(j = 1; j <= i; j++){
console.log(i);
}
}

o/p= 10,10,10,10,10,10,10,10,10,10,9,9,9,9,9,9,9,9,9,8,8,8,8,8,8,8,8,7,7,7,7,7,7,7,6,6,6,6,6,6,5,5,5,5,5,4,4,4,4,3,3,3,2,2,1
===========================================================================
17) i want to print 1-10, 1-9, 1-8, 1-7, 1-6, 1-5, 1-4, 1-3, 1-2, 1-1.

for(i = 10; i >= 1; i--){
for(j = 1; j<=i; j++){
console.log(j);
}
}

o/p= 1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,1,2,3,4,5,6,1,2,3,4,5,1,2,3,4,1,2,3,1,2,1
===========================================================================

18) pyramid structure
for (i = 1; i <= 5; i++) {
  let temp = "";
  for (j = 1; j <= i; j++) {
    temp += "*";
  }
  console.log(temp);
}

o/p=  *
      **
      ***
      ****
      *****
=================================================================================
15) Rectangle box 

for(i = 1; i<=5; i++){
    let temp = "";
    for(j=1; j<=5; j++){
        temp += "*";
    }
    console.log(temp);
}
o/p= 
*****
*****
*****
*****
*****
=================================================================================
16)Searching: Find the index of a specific element in an array using a loop. */

const myVal = 90;
const arr = [12, 45, 76, 34, 96, 90];

for(i=1; i<=arr.length-1; i++){
if(myVal === arr[i]){
console.log(i);
}
}

o/p= 5
===============================================================================
17)Sorting: Implement a bubble sort algorithm using loops.

const arr = [64, 34, 25, 12, 22, 11, 90];

for (let i = 0; i < arr.length - 1; i++) {
  for (let j = 0; j < arr.length - 1 - i; j++) {
    if (arr[j] > arr[j + 1]) {
      // Swap arr[j] and arr[j + 1]
      const temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}

console.log(arr);

o/p:= [11, 12, 22, 25, 34, 64, 90]

=========&&============

const arr = [12, 45, 76, 32, 41, 78, 1];

let temp = '';

for(i=0; i<= arr.length-1; i++){
for(j=0; j<= arr.length-1; j++){
if(arr[j] < arr[i]){
temp = arr[i];
arr[i] = arr[j];
arr[j] = temp;
}
}
}
console.log(arr);
