//Exercise

// function callMeMaybe() {
//   const callMe = "Hi , I am now here!";
//   setTimeout(function () {
//     console.log(callMe);
//   }, 4000);
// }
function callMeMaybe() {
    //const callMe = "Hi , I am now here!";
    setTimeout(function () {
      console.log(callMe);
    }, 4000);
    const callMe = "Hi , I am now here!";
  }//same output we doesn't care about hoisting here
//   // event loop put it back in stack

callMeMaybe();

// closure with loops

// for (var i = 1; i <= 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, i * 1000);
// } // output 6 why ? confused ?
