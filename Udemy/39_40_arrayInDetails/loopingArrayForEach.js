console.clear();
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log("===FOROF===");

for (const movement of movements) {
  if (movement > 0) {
    console.log(`you deposited ${movement}`);
  } else {
    console.log(`you withdrew ${Math.abs(movement)}`);
  }
} 

console.log("===FOREACH===");
//higher order function, which requires a callback function in order to tell it what it do.
// forEach() method will call the callback function.no need to call it from ourself.

movements.forEach(function (movement) {
  if (movement > 0) {
    console.log("deposit", movement);
  } else {
    console.log("withdrew", Math.abs(movement));
  }
});



