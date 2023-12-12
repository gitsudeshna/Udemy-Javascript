// 1)Function `printNumbers()` prints numbers from 1 to 10 using for loop.
// function printNumbers(){
//     for(i=1; i<=10; i++){
//         console.log(i);
//     }
// }
// printNumbers();

// 2)Function `printArray()` prints all the elements of a 2D array using nested for loops.

// var arr = [[1, 2],
//            [3, 4],
//            [5, 6]];
//   for (var i=0;i<arr.length;i++){
//     for(var j=0;j<arr[0].length;j++){
//       console.log(arr[i][j]);
//     }   
//   }

// 3)Function `printEven()` prints all the even numbers of a 2D array using for loops and ‘%’ operator.

// var arr = [13,23,12,45,22,48,66,100]

// function printEven(arr){
//     for(var i=0; i<arr.length; i++){
//         if(arr[i] % 2 === 1){
//             console.log(arr[i]);
//         }
//     }
// }
// printEven(arr);

// 4)Function `printEven()` prints all the odd numbers of a 2D array using for loops and ‘%’ operator.

// var arr = [13,23,12,45,22,48,66,100]

// function printEven(arr){
//     for(var i=0; i<arr.length; i++){
//         if(arr[i] % 2 === 1){
//             console.log(arr[i]);
//         }
//     }
// }
// printEven(arr);

// 5)Function `deleteElement()` deletes all the occurrence of element from the given array.

// const arr = [23,56,4,78,5,63,45,210,56,4];
// let temp = [];
// for(i=0; i<=arr.length-1; i++){
//     if(!temp.includes(arr[i])){
//         // temp.push(arr[i]);
//         temp = [...temp, arr[i]]
//     }
// }
// console.log(temp);
function deleteElement(arr, elementToDelete) {
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] === elementToDelete) {
        arr.splice(i, 1);
      }
    }
  }
  
  var arr = [23, 56, 4, 78, 5, 63, 45, 210, 56, 4, 210];
  deleteElement(arr, 4);
  
  console.log(arr); // The array will no longer contain the element 4
  
   