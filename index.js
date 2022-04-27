const outputEl = document.querySelector("#output");
const noBtn = document.querySelector(".no");

function displayMessage() {
    outputEl.innerText = "Thank you for your response!!"
}
noBtn.addEventListener("click", displayMessage);