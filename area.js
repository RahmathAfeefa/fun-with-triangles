const inputs = document.querySelectorAll(".input");
const areaBtn = document.querySelector("#area-btn");
const outputEl = document.querySelector("#output");


function BaseHeightProduct(base, height) {
    const product = base * height;
    return product;
}

function CalculateArea() {
    const product = BaseHeightProduct(Number(inputs[0].value), Number(inputs[1].value));
    const area = 0.5 * product;
    outputEl.innerText = "Area of Triangle is " + area + "cm²";
}

areaBtn.addEventListener("click", CalculateArea);