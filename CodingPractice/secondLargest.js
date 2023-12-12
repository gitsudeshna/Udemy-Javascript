//Find the largest number in a given array for eg let arr =[2, 32,5,65,12,52,5].

// const arr =[2,32,5,65,12,52,5];
// let temp = arr[0];

// for(i=0; i<= arr.length-1; i++){
// if(arr[i]>temp){
//     temp = arr[i];
// }
// }
// console.log(temp);

//Find the smallest number in a given array for eg let arr =[2, 32,5,65,12,52,5].

// const arr =[2,32,5,65,12,52,5,-1];
// let temp = arr[0];
// for(i=0; i<=arr.length-1; i++){
//     if(arr[i]<temp){
//         temp = arr[i];
//     }
// }
// console.log(temp);

//Make the element of array to discending order, Find the largest and second largest number in a given array.

const arr = [2, 32, 5, 65, 12, 52, 5];
let temp = "";
for (i = 0; i <= arr.length - 1; i++) {
  for (j = 0; j <= arr.length - 1; j++) {
    if (arr[i] > arr[j]) {
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}
console.log(arr); // discending order
console.log(arr); // largest
console.log(arr[1]); // second largest
