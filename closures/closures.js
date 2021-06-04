function a() {
  let grandpa = "grandpa";
  return function b() {
    let father = "father";
    return function c() {
      let son = "son";
      return `${grandpa} > ${father} > ${son}`;
    };
  };
}
// copy and run in console
// a(); function b()
// a()(); function c()
a()()(); //grandpa >father >son

// all thing saved in closures those referenced by other function
// those are not reference go to garbage collection

const boo = (string) => (name) => (name2) =>
  console.log(`${string} ${name} ${name2}`);
boo("hi")("jogindra")("kumar");

// const booString = boo("hi");
// //5 years
// const booStringName = booString();
