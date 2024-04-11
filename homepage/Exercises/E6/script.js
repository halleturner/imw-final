// Printing Message to console

console.log("Testing to see if JS file is linked");

//Variables selecting colour circles
const greenCircle = document.getElementById("green");
const pinkCircle = document.getElementById("plum");
const blueCircle = document.getElementById("blue");
let interactionContainer = document.getElementById("interactionContainer");

greenCircle.addEventListener("click", function () {
    console.log("interactionContainer")
    interactionContainer.style.backgroundColor = "lightgreen"
})

pinkCircle.addEventListener("click", function () {
    interactionContainer.style.backgroundColor = "plum";
})

blueCircle.addEventListener("click", function () {
    interactionContainer.style.backgroundColor = "lightblue";
})

/* Loop Task 
1.Select Container
2.Declare message variable */

const loopContainer = document.getElementById("loopContainer");
const message = "brave";


for (let i = 0; i < 10; i++) {
    console.log("brave");
    const textDiv = document.createElement("div");
    textDiv.innerHTML = message;
    loopContainer.appendChild(textDiv);
}

// Condition
const conditionContatainer = document.getElementById("conditionContainer");
const square = document.getElementById("square");

conditionContatainer.addEventListener("mouseover", function () {
    console.log("hovering over condition container");
    square.style.backgroundColor = "green";
})

conditionContatainer.addEventListener("mouseout", function () {
    // console.log("hovering over condition container");
    square.style.backgroundColor = "lightsalmon";
})


//Time
const textElement = document.getElementById("increaseText");

let fontSize = 20;
const interval = 1000;
const timer = setInterval(() => {
    fontSize += 1;
    textElement.style.fontSize = fontSize + 'px';
    if (fontSize >= 24) {
        clearInterval(timer);
    }
}, interval);

//Input
const inputField = document.getElementById("inputText");
const characterCount = document.getElementById("text-length");

inputField.addEventListener("input", function () {
    const count = inputField.value.length;
    characterCount.textContent = `${count} characters`;
});

console.log("Hi, welcome to my console");



