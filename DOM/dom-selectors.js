//DOM Selectors
// getElementByTagName
//run code in console for pratice and target element
console.log(document.getElementsByTagName("h1")[0]);

//getElementByClassName
console.log(document.getElementsByClassName("second")[0]); // access the value inside of it use index[0]

//getElementById
console.log(document.getElementById("first")); // already gave us value no need to use index for this one because id is unique and doesn't have index number whereas class and tag are more in HTML so we used index[] to access their value

//querySelector
console.log(document.querySelector("li")); //only select first item in list
//querySelectorAll
console.log(document.querySelectorAll("li"));

//getAttribute
//note :first select attribute by using queryselector then use getAttribute

console.log(document.querySelector("li").getAttribute("random"));
//setAttribute
console.log(document.querySelector("li").setAttribute("random", "100")); //undefined then type query selector command and see the value of li
console.log(document.querySelector("li"));

// ## Changing Style(css)
//Style.{property} ok

document.querySelector("h1").style; //get all css info of h1 and change it
document.querySelector("h1").style.backgroundColor = ""; // one issue sepration of concern

//className  --best
var h1 = document.querySelector("h1");
h1.className = "coolTitle";
//classList  --best
document.querySelector("li").classList;

//classList.add
document.querySelector("li").classList.add("coolTitle");
//classList.remove
document.querySelector("li").classList.remove("coolTitle");
//classList.toggle
document.querySelector("li").classList.toggle("coolTitle"); // gives true /false if class add then it remove(false) if remove then it will add(true)
//## Bonus
// innerHTML  ---- Dangerous
document.querySelector("h1").innerHTML = "<strong>!!!</strong>";

//parentElement

document.querySelectorAll("li")[1].parentElement; // ul
document.querySelectorAll("li")[1].parentElement.parentElement; // body
//children
document.querySelectorAll("li")[1].parentElement.parentElement.children; // all the children of body

//## its very important to CACHE selectors in variables
//note:everytime selecting new things this takes memory browser remember selected things , all variable of selected thing uses memory until referesh the page
