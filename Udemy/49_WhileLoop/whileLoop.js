// Loops can execute a block of code as long as a specified condition is true.
let i = 1;
while (i < 10) {
    let text = "The number is " + i;
    i++;
    // console.log(text)
  }
 
  //If you forget to increase the variable used in the condition, the loop will never end. This will crash your browser.

  let dice = Math.trunc(Math.random()*6) +1;
//  console.log(dice);

  while(dice !== 6){
    // console.log(`you rolled a ${dice}`);
    dice = Math.trunc(Math.random()*6) +1;
    if(dice === 6){
        // console.log(`dice is about to end...`);
    }
  }

  //for loop:
// The for loop is commonly used when you know in advance how many times you want to execute a block of code. It consists of three parts: initialization, condition, and iteration.
// while loop:
// The while loop is used when you don't know in advance how many times the loop needs to run. It continues to execute a block of code as long as a specified condition is true.

let k = 0;
while (k < 5) {
    console.log(k); // Output: 0, 1, 2, 3, 4
    k++;
}