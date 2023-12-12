// third type of function in javascript. it introduced in ES6.

//function expression

// const calcAge1 = function (birthYear) {
//   return 2023 - birthYear;
// };

// arrow function

// const calcAge2 = (birthYear) => 2023 - birthYear;

// const age = calcAge2(1999);
// console.log("age", age);

// how many years a person left till retirement?
// ret - 60
// 60 - current age = left year

// const calcAge = (birthYear) => {
//   const age = 2023 - birthYear;
//   const retLeft = 60 - age;
//   return age;
// };
// const age = calcAge(1999);
// console.log(age);
// const ageLeftRetirement = (retAge) => retAge - age;
// const retAge = ageLeftRetirement(60);
// console.log(retAge);

// const materials = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium'];

// console.log(materials.map((material) => material));
// output: Array [8, 6, 7, 9]

// const simple = (a) => (a > 15 ? 15 : a);
// console.log(simple(14));
// console.log(simple(16));

// calculate age and retirement age of a person

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const currentAge = (birthYear) => {
//   const age = 2023 - birthYear;
//   const retAge = 65 - age;
//   return { age, retAge };
// };
// const RichuAge = currentAge(1999, 2025);

// console.log("currentAge", RichuAge);

const yearUntilRetirement = (birthYear, firstName) => {
  const age = 2023 - birthYear;
  const ret = 65 - age;
  return `my name is ${firstName} & my retirement age left is: ${ret}`;
  //or return{firstName, ret}
};
console.log(yearUntilRetirement(1999, "SudiMudiKudi"));
console.log(yearUntilRetirement(2000, "Sunanda"));
