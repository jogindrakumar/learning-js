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
const player = 'joginder'; // if you don't want to change value 
let experience = '100';
let wizardLevel = false;
if (experience > 90) {
    let wizardLevel = true;
    console.log('inside ', wizardLevel);
}
console.log('outside', wizardLevel);

const obj = {
        player: 'bobby',
        experience: 100,
        wizardLevel: false
    } // can't re-assign the variable but can change the value inside of it like 
obj.wizardLevel = true;

//Destructuring
const obj = {
        player: 'bobby',
        experience: 100,
        wizardLevel: false
    }
    //access property
const player = obj.player;
const experience = obj.experience; // access the value of this is lot of mess but it will change in destructuring
const { player, experience } = obj; //now all value easy avail
let { wizardLevel } = obj;
console.log(player);

//new way to declaring object property
const name = "john doe";
const obj = {
    [name]: 'hello',
    ['ray' + 'smith']: 'hi'
}
const a = 'john';
const b = true;
const c = {};
const obj = { // if property of value are same then we can use like that 
    a, // a:a , b:b , c:c
    b,
    b
}

//template String 
const name = ' jogindra ';
const age = 25;
const pet = 'cat';
const greeting = 'hello' + name + 'are you okay' + "how about your " + pet;
// different way
const greetingBest = `hello ${name} are you okay and how about your ${pet}`;
//default argument

function greet(name = '', age = 6, pet = 'cat') {

    return `hello ${name} are you okay and how about your ${pet} and whats your ${pet} ${age}`;
}
//symbol (new in ES6) 
// symbol are use completly unique type 

let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');

sym2 === sym3 //false


// Arrrow Function 

// function add(a, b) {
//     return a + b;
// }
const add = (a, b) => a + b; // same thing as above but new way arrow fn