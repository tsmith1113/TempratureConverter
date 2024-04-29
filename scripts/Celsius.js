"use strict";


const fahrenheitInput = document.getElementById("fahrenheitOutput");
const calculateButton = document.getElementById("calculateButton");
const celciusOutput = document.getElementById("celsiusInput");

window.onload = init;

function init(){
    calculateButton.onclick = oncalculateButtonClicked;

}

function oncalculateButtonClicked(){
let celsius = Number(celsiusInput.value);


let fahrenheit = (celsius * (9/5) + 32);

fahrenheitOutput.value = fahrenheit;
}
