"use strict";


const fahrenheitInput = document.getElementById("fahrenheitInput");
const calculateButton = document.getElementById("calculateButton");
const celciusOutput = document.getElementById("celsiusOutput");

window.onload = init;

function init(){
    calculateButton.onclick = oncalculateButtonClicked;

}

function oncalculateButtonClicked(){
let fahrenheit = Number(fahrenheitInput.value);


let celsius = (fahrenheit - 32) * (5 / 9);

celsiusOutput.value = celsius;
}