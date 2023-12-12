// falsy values are the values which are not exactly false , but will become 
// false when we try to convert them into a Boolean.

// falsy values in JS are: 
// ' ', 0, NaN, undefined, null, -0, 0n, false, document.all

console.log(Boolean(0));          //false
console.log(Boolean(undefined));  //false
console.log(Boolean('sudeshna')); //true
console.log(Boolean(''));         //false
console.log(Boolean({}));         //true
console.log(Boolean([]));         //true
////
console.log(0);              //0
console.log(undefined);      //undefined
console.log('sudeshna');     //sudeshna
console.log('');             //
console.log({});             //{}
console.log([]);             //[]


// Conversion to boolean is always implicit not explicit.
//Typed coercion in JS does automatically behind the scenes,
// When exactly does JS do type coercion to Booleans?
//Ans- It happens in 2 scenerios,
// 1) when using logical operators
// 2) in a logical context (for eg:-in the condition of an if else statement.)

// example using // 2) in a logical context--

const money = 0;
if(money){
    console.log(`Don't spend it all!`);
}else{
    console.log(`you should get a job!`);
}

// in this above example money = 0, here zero is a number.
// if-condition always take boolean value in the arument, so if will converts that 0 number value to boolean value 
// and in js boolean o is (eg:console.log(boolean(0)) ) falsy . so if value got falsy thats why else part got executed.

///
null and undefined are falsy as well as nullish.

nullish--(??)
nullish coelescing operator(??) is used to provide a default value to a 
variable if the current value is null or undefined.

