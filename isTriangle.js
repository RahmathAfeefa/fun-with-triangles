const inputs = document.querySelectorAll(".input");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const outputEl = document.querySelector("#output");


function CalculateSumOfAngles(angle1, angle2, angle3) {
    const sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles;
}

function IsTriangle() {

    const sumOfAngles = CalculateSumOfAngles(Number(inputs[0].value),
        Number(inputs[1].value), Number(inputs[2].value));
    if (sumOfAngles === 180) {
        outputEl.innerText = "Huurraayy!! Its a Triangle 😎";
    } else {
        outputEl.innerText = "Oopss 😣!! Its not a Triangle Try Again!!!!"
    }

}


isTriangleBtn.addEventListener("click", IsTriangle);