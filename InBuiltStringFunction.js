console.clear();
var myFirstString =
  "This is a string for javascript string functions, javascript";

// Return the length of the string

console.log(myFirstString.length);

// Find index of a string inside another string

console.log(myFirstString.indexOf("javascript"));
console.log(myFirstString.indexOf("This"));

//Find Last index of a string inside another string

console.log(myFirstString.lastIndexOf("javascript"));
console.log(myFirstString.lastIndexOf("This"));

// Get a part of our string slice(start, end)

console.log(myFirstString.slice(0, 2)); //for end it will show n-1
console.log(myFirstString.slice(20, 35));
console.log(myFirstString.slice(-10));
console.log(myFirstString.slice(-20));
console.log(myFirstString.slice(-30));
console.log("============/////////////=============");
console.log(myFirstString.slice(3));

// Get sub string function  - substr(startPos, length)
console.log(myFirstString.substring(0, 4));
console.log(myFirstString.substring(21, 10));
console.log(myFirstString.substring(21));
