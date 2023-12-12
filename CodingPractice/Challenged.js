NaN === NaN;                //false
Number.NaN === NaN;         //false
isNaN(NaN);                 //true
isNaN(Number.NaN);          //true
Number.isNaN(NaN);          //true

console.log(Number.isNaN(NaN));