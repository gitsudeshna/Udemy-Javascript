// Boths output is same but template literal is the  more flexible way to create strings, especially when you need to interpolate variables or include multi-line text


const firstName = "Sudeshna";
const job = "Software Developer";
const year = 2023;
const birthYear = 1999;

//STRING
const myString = "I'm " + firstName + ' my age: ' + (year-birthYear) + ' my job: ' + job + '.';
console.log(myString);

//TEMPLATE LITERALS
const myTemplateLiterals = `I'm ${firstName} my age: ${year-birthYear} my job: ${job}.`;
console.log(myTemplateLiterals);

//MULTILINE STRING
const multilineString = "I am a SoftWare Developer \nWorking in Girmiti Software \nMy hobbies are Coding and Reading Books";
console.log(multilineString);

//MULTILINE TEMPLATE LITERALS
const multilineTemplateLiteral = 
`I am a SoftWare Developer 
Working in Girmiti Software
My hobbies are Coding and Reading Books` ;
console.log(multilineTemplateLiteral);