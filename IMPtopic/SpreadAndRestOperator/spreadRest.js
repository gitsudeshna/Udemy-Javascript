// it will use in both array and object.

//REST(...)

// example-1 for rest

function myAddition(a, b, c,...other) {
    console.log(other);  //ES6
    console.log(arguments);  //ES5
  return a + b + c;
}

const myValue = myAddition(1, 2, 3, 4, 5, 6, 7);
console.log(myValue);

//SPREAD (...)

const names = ["Ajay", "anuj", "Vivek"];

function getNames(name1, name2, name3){
console.log(name1, name2, name3);
}

getNames(names[0], names[1], names[2]);
getNames(...names);