const quizForm = document.querySelector(".quiz-form");
const submitBtn = document.querySelector("#submit");
const outputEl = document.querySelector("#output");

const answers = ["45°", "right-angled", "obtuse", "isosceles", "equilateral"];

function CheckAnswers() {
    let score = 0;
    let index = 0;
    const formResult = new FormData(quizForm);
    for (let value of formResult.values()) {
        // console.log(value);
        if (value === answers[index]) {
            score = score + 1;
            console.log(index)
        }
        index = index + 1;
    }
    outputEl.innerText = "Your score is " + score;
}


submitBtn.addEventListener("click", CheckAnswers);