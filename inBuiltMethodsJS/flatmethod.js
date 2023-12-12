const arr = [[23, 46], 4, 5, [5, 6, 7, [87, 123, 6, [2, 7, 8]]]];
let newArr = arr.flat(Infinity); //for 1 nested array we can use () by default this empty is 1 . for 2 nested array (2),(3)
console.log(newArr);
let highestNum = newArr[0];
for (i = 0; i < newArr.length; i++) {
  if (highestNum > newArr[i]) {
    highestNum = newArr[i];
  }
}
console.log(highestNum);
