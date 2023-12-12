// const a = [2, 9, 4, 3, 6];
// const b = [4, 7, 3, 8];

// const aa = a.sort();
// const bb = b.sort();

// console.log(aa, bb);

// const c = [...aa, ...b];
// console.log(c.sort());

// const a = [2, 9, 4, 3, 6];
// const b = [4, 7, 3, 8];

// console.log('slice',a.slice());
// console.log('split', a.split(''));
// const aa = a.slice().sort(); // Make a copy of 'a' and sort it
// const bb = b.slice().sort(); // Make a copy of 'b' and sort it

// console.log('hiiii', aa.join(' '), bb.join(' ')); // Output 'aa' and 'bb' as strings in one row

// const c = [...aa, ...bb];
// console.log('hello',c.sort().join(' ')); // Output sorted 'c' as a string in one row

//program1,:-

// A string s is good if all the characters that appear in s have the same number of occurrences (i.e., the same frequency).

// Input: s = "abacbc"
// Output: true
// Explanation: The characters that appear in s are 'a', 'b', and 'c'. All characters occur 2 times in s.
// Example 2:

// Input: s = "aaabb"
// Output: false
// Explanation: The characters that appear in s are 'a' and 'b'.
// 'a' occurs 3 times while 'b' occurs 2 times, which is not the same number of times.

// 777777777777777777777777777777777777777777777777777777777777777777777777777777777777
// const s = "abcyhna";
// const ss = s.split("");

// let store = [];
// console.log('store', store);
// for (let i = 0; i < ss.length; i++) {
//   if (store != ss[i]) {
//     console.log("notMatching");
//     store += ss[i];
//     console.log('store1', store);
//   }else {
//     console.log("else");
//   }
// }
// 7777777777777777777777777777777777777777777777777777777777777777777777777777777
// let repeat = false;
// let inputString = "abccab";

// for (let i = 0; i < inputString.length; i++) {
//     let currentChar = inputString[i];

//     for (let j = i + 1; j < inputString.length; j++) {
//         if (currentChar === inputString[j]) {
//             repeat = true;
//             break;
//         }
//     }

//     if (repeat) {
//         // break;
//         console.log(currentChar);
//     }
//     else{
//         console.log('hiii');
//     }
// }

// Now, check the value of 'repeat' to see if any character repeated.

// const s = "abcyhna";
// const ss = s.split("");

// let store = [];
// console.log('store', store);
// for (let i = 0; i < ss.length; i++) {
//   if (store != ss[i]) {
//     console.log("notMatching");
//     store += ss[i];
//     console.log('store1', store);
//   }else {
//     console.log("else");
//   }
// }

const s = "abacbc";
const ss = s.split("");

let store = [];
let store2 = [];

for (let i = 0; i < ss.length; i++) {
  if (!store.includes(ss[i])) {
    store.push(ss[i]);
  } else {
    store2.push(ss[i]);
  }
}

let lengthStore = store.length;
let lengthStore2 = store2.length;

if (lengthStore === lengthStore2) {
  if (store.sort().join("") === store2.sort().join("")) {
    console.log(true);
  } else {
    console.log(false);
  }
} else {
  console.log('not matching');
}
