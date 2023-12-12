//Synchronous Function:-
//======================
// const func2 = () => {
//   console.log("Function2 is starting");
// };

// const func1 = () => {
//   console.log("Function1 is starting");
//   func2();
//   console.log("Function1 is ending");
// };

// func1();

//Asynchronous Function:-
// ======================

const func2 = () => {
  setTimeout(() => {
    console.log("function2 started");
  }, 3000);
  console.log("function2 ended");
};

const func1 = () => {
  console.log("Function 1 started");
  func2();
  console.log("function1 ended");
};

func1();
