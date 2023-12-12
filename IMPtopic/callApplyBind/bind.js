// the bind() method creates a new function and when the new function is called it sets this to the first argument of the bind method.
// and if any other sequence of argument preceding the first argumnet are passed to the bind method, its passed as an argument 
// to the new function.when the new function called.


const a = {
  nameIs: "sudi",
};

const b = {
  nameIs: "figs",
  myCall: function (age, gender) {
    console.log(this.nameIs + " " + age + " " + gender);
  },
};

b.myCall.call(a, "edf");
b.myCall.call(b, "er");

let printBind = b.myCall.bind(a, 10, "female");
console.log(printBind);
printBind();
