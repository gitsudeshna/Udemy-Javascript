const a = [10, 20, 30, 40];

let largestNumber = a[0];

for (let i = 0; i < a.length; i++) {
  if (a[i] > largestNumber) {
    largestNumber = a[i];
  }
}
console.log(largestNumber);

const myVal = [12, 43, 56, 76, 98, 56, 1100, 3776, 54, 1];

let store = myVal[0];

for (let i = 0; i < myVal.length; i++) {
  if (myVal[i] > store) {
    store = myVal[i];
  }
}

console.log(store);
