// the apply() method calls the function directly and sets this to the first argument passed to the apply method.
// if any other argument provided as an array are passed to the call method then they are passed as an argument to the function.

const a = {
  firstName: "priti",
};

const b = {
  firstName: "sruti",
  myApply: function (age, gender) {
    console.log(this.firstName, age, gender);
  },
};

b.myApply.apply(a, [10, "female"]);
b.myApply.apply(b, [20, "male"]);

const firstVar = {
  firstName: "sudeshna",
  lastName: "das",
};

const secondVar = {
  firstName: "sunanda",
  lastName: "Kumari",
  myApplyMethod: function (age, gender) {
    console.log(
      this.firstName + " " + this.lastName + " " + age + " " + gender
    );
  },
};

secondVar.myApplyMethod.apply(firstVar, [10, "female"]);
