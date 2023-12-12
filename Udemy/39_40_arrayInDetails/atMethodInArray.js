const arr = [23, 11, 64];
console.clear();
console.log(arr); //[23, 11, 64]
console.log(arr[0]); //23
console.log(arr.at(0)); //23
console.log(arr.length); //3
console.log(arr.length - 1); //2

//getting last array element
console.log(arr[arr.length - 1]); //64
console.log([arr[arr.length - 1]]); //[ 64 ]
// using slice
console.log(arr.slice(-1)); //[ 64 ]
console.log(arr.slice(-1)[0]); //64
//using at
console.log(arr.at(-1)); //64

console.log("jonas".at(0));
console.log("jonas".at(-1));
