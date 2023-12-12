// Example 1:

// Input: s = "is2 sentence4 This1 a3"
// Output: "This is a sentence"
// Explanation: Sort the words in s to their original positions "This1 is2 a3 sentence4", then remove the numbers.
// Example 2:

// Input: s = "Myself2 Me1 I4 and3"
// Output: "Me Myself and I"
// Explanation: Sort the words in s to their original positions "Me1 Myself2 and3 I4", then remove the numbers.


const s = "is2 sentence4 This1 a3";
const splitValue = s.split(" ");
console.log(splitValue);
for(i=0; i< splitValue.length; i++){
for(j=0; j< splitValue.length; j++){
    console.log(splitValue[j]);
    // if(splitValue[i].includes())
}
}









