// Arrow Function
const yearUntilRetirement = (birthYear, firstName) => {
  const age = 2023 - birthYear;
  const retirement = 65 - age;
  return `${firstName}, your age left for retirement is:${retirement}`;
};
console.log(yearUntilRetirement(1999, "John"));

//Function Expression (remove arrow function and add function before the parameters)
const yearUntilRetirement2 = function (birthYear, firstName) {
  const age = 2023 - birthYear;
  const retirement = 65 - age;
  return `${firstName}, your age left for retirement is:${retirement}`;
};
console.log(yearUntilRetirement2(1999, "John"));

//FUnction Declaration (remove variable declaration and add function name before the parameters)
function yearUntilRetirement3(birthYear, firstName) {
  const age = 2023 - birthYear;
  const retirement = 65 - age;
  return `${firstName}, your age left for retirement is:${retirement}`;
}
console.log(yearUntilRetirement3(1999, "John"));

//One Function Calling Other Function Using Function Declaration
function calcAge(birthYear) {
  return 2023 - birthYear;
}

function yearUntilRetirement4(birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  return `${firstName}, your age left for retirement is:${retirement}`;
}
console.log(yearUntilRetirement4(1999, "John"));

//One Function Calling Other Function Using Function Expression
const calcAge2 = function (birthYear) {
  return 2023 - birthYear;
};

const yearUntilRetirement5 = function (birthYear, firstName) {
  const age = calcAge2(birthYear);
  const retirement = 65 - age;
  if (retirement > 0) {
    return `Hey ${firstName}, your age left for retirement is:${retirement}`;
  } else {
    return -1;
  }
};
console.log(yearUntilRetirement5(1919, "John"));



//****************************************************************** */
//****************************************************************** */
//**********************3 different function type********************//
//****************************************************************** */
//****************************************************************** */
// Function Decalaration (Function that can be used before its declared)
function calcAge(birthYear){
    return 2023-birthYear;
}
// Function expression (Essentially a function value stored in a variable, can't use it before its declared)
const calcAge = function(birthYear){
    return 2023-birthYear;
}
// Arrow Function(Great for quick one-line functions. Has no this keyword)
const calcAge = birthYear=>2023-birthYear;

// A function is consist of (Function name, parameters, Function body, return statement, Function calling(),arguments )

