// Question 1: Write a function that takes two parameters and returns their sum.

// function sum(a,b){
//     return a+b;
// }
// const resultOfSum = sum(2,5);
// console.log(resultOfSum); 


// Question 2: Write a function that takes a number as a parameter and checks if it's even or odd. Return "even" for even numbers and "odd" for odd numbers.

//1)
// function evenOdd(val){
//     if(val%2==0){
//         return "even";
//     }
//     return "odd";
// }
// const myNum = evenOdd(7);
// console.log(myNum);

// 2) 
// function evenOdd(val){
//     return val % 2 == 0 ? "even" : "odd";
// }
// const myNum = evenOdd(46);
// console.log(myNum);



// Question 3: Write a function that takes a string as a parameter and returns the reversed string.

// 1)
// function reversedString(val){
//     return val.split('').reverse().join('');
// }
// const myString = reversedString("Sudeshna");
// console.log(myString);

//2)
// function reversedString(val){
//     let res = "";
// for(i=val.length-1; i>=0;i--){
//      res = res + val[i];
// }
// return res;
// }

// const myString = reversedString("weekend");
// console.log(myString);



// Question 4: Write a function that takes an array of numbers as a parameter and returns the sum of all the numbers in the array.

function sum(arr){
    let res = 0;
    for(i=0; i<arr.length;i++){
        res = res + arr[i];
    }
return res;
}
const myArr = sum([2,4,6]);
console.log(myArr);
