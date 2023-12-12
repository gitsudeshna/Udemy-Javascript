// null and undefined are falsy as well as nullish.

// nullish--(??)
// nullish coelescing operator(??) is used to provide a default value to a
// variable if the current value is null or undefined.

const a = "sun";
const b = "mon";
const c = "tues";
const d = "wed";
const e = "thu";
const f = null;
const fri = 'friday';
const g = "sat";
const h = a + b + c + d + e + (f ?? 'friday')  + g;
console.log(h);


let myName;   //undefined
const myJob = "teacher";
const address = null;
const address2 = 'bbsr';
const res = myName ?? myJob;
const resAddress = address ?? address2;
console.log(res);
console.log(resAddress);
