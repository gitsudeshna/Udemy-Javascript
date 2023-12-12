const arr = [5, 1, 3, 2, 6];

function isOdd(x) {
  return x % 2;
}

function isEven(x) {
  return x % 2 === 0;
}

function isGreater(x) {
  return x > 2;
}

const outputOdd = arr.filter(isOdd);

console.log(outputOdd);

const outputEven = arr.filter(isEven);

console.log(outputEven);

const outputGreater = arr.filter(isGreater);

console.log(outputGreater);

const outputGreater1 = arr.filter(function isGreater(x) {
  return x > 2;
});

console.log(outputGreater1);

const outputGreater2 = arr.filter((x) => {
  return x > 2;
});

console.log(outputGreater2);

const myArr = [2, 3, 6, 1, 4, 8, 7];

function evenNumber(n) {
  return n % 2 === 0;
}

function oddNumber(n) {
  return n % 2;
}

const resultForEven = myArr.filter(evenNumber);
console.log("resultForEven", resultForEven);

const resultForOdd = myArr.filter(oddNumber);
console.log("resultForOdd", resultForOdd);
