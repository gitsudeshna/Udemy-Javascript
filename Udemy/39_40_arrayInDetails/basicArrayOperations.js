const friends = ["michael", "steaven", "peter"];

//Add Elemets

//push - used to add element at the end of the array.
// const pushed = friends.push("sudeshna");
// console.log(pushed)    //4
// console.log(friends)   //[ 'michael', 'steaven', 'peter', 'sudeshna' ]

//unshift - used to add element at the beggining of the array.
// const unshifted = friends.unshift("Das");
// console.log(unshifted);  //4
// console.log(friends);  //[ 'Das', 'michael', 'steaven', 'peter' ]

//Remove Elements
// pop - used to take out or remove the last element in the array.
// const popped = friends.pop();
// console.log(popped);     //peter
// console.log(friends);    // [ 'michael', 'steaven' ]

// shift - used to remove first element from the array.
// const shifted = friends.shift();
// console.log(shifted); //michael
// console.log(friends); //[ 'steaven', 'peter' ]

//indexOf() - if the element present in side the array then then it will print the index of that element else it will send -1 if the element is not present.

// console.log(friends.indexOf("michael"));  //0
// console.log(friends.indexOf("steaven"));  //1
// console.log(friends.indexOf("peter"));   //2
// console.log(friends.indexOf("sudeshnaDas")); //-1

// includes - if the element is present in the array then it will print or else it will print false.

// console.log(friends.includes("michael"));
// console.log(friends.includes("bob"));