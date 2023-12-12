// The map() method is used for creating a new array from an existing one,
// applying a function to each one of the elements of the first array.

const arr = [5, 1, 3, 2, 6];

function double(x) {
  return x * 2;
}
function triple(x) {
  return x * 3;
}
function binary(x) {
  return x.toString(2);
}

const outputDouble = arr.map(double);
console.log("Doubled Array:", outputDouble);

const outputDouble2 = arr.map(function double(x) {
  return x * 2;
});
console.log("Doubled Array2:", outputDouble2);

const outputDouble3 = arr.map((x) => {
  return x * 2;
});
console.log("Doubled Array2:", outputDouble2);

const outputTriple = arr.map(triple);
console.log("outputTriple", outputTriple);

const outputBinary = arr.map(binary);
console.log("outputBinary", outputBinary);

//double = [10, 2, 6, 4, 12];

//triple = [15, 3, 9, 6, 18];

//binary = ["101", "1", "11", "10", "110"];

const myArr = [10, 20, 30, 40];

function double(x) {
  return x * 2;
}

const result = myArr.map(double);
console.log("result", result);

const existingArray = [2, 4, 6, 8, 10];

function double(x) {
  return x * 2;
}

const currentArray = existingArray.map(double);
console.log("currentArray", currentArray);
