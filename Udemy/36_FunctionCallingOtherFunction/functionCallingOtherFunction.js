// in fruitJuice function am passing argument or number of fruits, and then in cutFruitsInPieces i am making pieces of those fruites.

function cutFruitsInPieces(fruit) {
  return fruit * 4;
}

function fruitJuice(apples, oranges) {
  let applePieces = cutFruitsInPieces(apples);
  let orangePieces = cutFruitsInPieces(oranges);
  return `${apples} apples pieces into ${applePieces} & ${oranges} oranges pieces into ${orangePieces}`;
}
console.log(fruitJuice(2, 3));
console.log("=======");
// Function that calculates the square of a number using multiple function.

function calCulateSquare(num) {
  return num * num;
}
function square(val) {
  const calc = calCulateSquare(val);
  return calc;
}
console.log(square(7));

