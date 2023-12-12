// =>strict mode is a special mode which i can activate in javascript.
// =>which make us easier to write secure code.
// =>to active strict mode only we have to write strict in the 
// beginning of the script. 
//if we have any code before this then scrict mode will not work
//"use strict"; //this line makes our js file more secured and better for debugging purpose

'use strict';
 
let hasDriversLicense = false; 
const passTest = true;

if(passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log('I can drive: D');

// without scrictMode its not giving any error.
// with scrictMode it gives an error as "ReferenceError: hasDriverLicense is not defined".

//const interface = "Audio";  //SyntaxError: Unexpected strict mode reserved word

//const private = 534;  //SyntaxError: Unexpected strict mode reserved word

//const if = "sudi"  //SyntaxError: Unexpected strict mode reserved word