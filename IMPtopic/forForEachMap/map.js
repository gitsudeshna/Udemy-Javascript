//MULTIPLICATION

const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map(function(myNumber){
    return myNumber * myNumber;
});

console.log(squaredNumbers);

//DIVISION

const numberIs = [10, 21, 54, 67, 43];

const divisionedNumber = numberIs.map(function(myValue){
    return myValue / 2;
})
console.log(divisionedNumber);

//ADDITION

const myArray = [10, 20, 30, 40, 50];

const additionTwo = myArray.map(function(myValue){
return myValue + 2;
});
console.log(additionTwo);