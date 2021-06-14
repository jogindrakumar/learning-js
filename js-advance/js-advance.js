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
console.log(fun); //Advance Control flow

//javascripts conditionals
//ternary operator
//condition ?expre1 : expre2

function isUserValid(bool) {
    return bool;
}
var answer = isUserValid(true) ? "you may enter" : "Access Denied"; //you may enter if false Access denied
var automatedAnswer = "your account is " + (isUserValid(false) ? "123" : "not available ");

//Switch statement 

function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            whatHappens = "you encounter a monster";
            break;
        case "back":
            whatHappens = "you arrived home";
            break;
        case "right":
            whatHappens = "you found a tree";
            break;
        case "left":
            whatHappens = "you get fired";
            break;
        default:
            whatHappens = "please enter a valid direction";

    }
    return whatHappens;
}

//ES5(EcmaScript 5) and ES6(EcmaScript 6) // BABEL test

//let + const
const player = 'joginder';
let experience = '100';
let wizardLevel = false;
if (experience > 90) {
    let wizardLevel = true;
    console.log('inside ', wizardLevel);
}
console.log('outside', wizardLevel);