//Scope
// var b = "can i use this ";

// function bb() {
//     b = "hello";
// Root scrope(window)
var fun = 9;

function funFunction() {
    var fun = "hello";
    console.log(1, fun);

}

function funerFunction() {
    var fun = "Byeee";
    console.log(2, fun);

}

function funestFunction() {
    fun = "AHHHH";
    console.log(3, fun);

}
console.log('window', fun);
funFunction();
funerFunction();
funestFunction();
console.log(fun);