const inputs = document.querySelectorAll(".input");
const isHypotenuseBtn = document.querySelector("#is-hyptenuse-btn");
const outputEl = document.querySelector("#output");


function CalculateSumOfSides(a, b) {
    const sumOfsquareSides = a * a + b * b;
    return sumOfsquareSides;
}

function CalculateHypotenuse() {
    const sumOfSides = CalculateSumOfSides(Number(inputs[0].value), Number(inputs[1].value));
    const lengthOfHypotensue = Math.sqrt(sumOfSides);

    outputEl.innerText = "The Length of the Hypotenuse is " + lengthOfHypotensue + "cm";

};

isHypotenuseBtn.addEventListener("click", CalculateHypotenuse);