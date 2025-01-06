let score = 0;
const questionElement = document.getElementById("question");
const resultElement = document.getElementById("result");
const scoreElement = document.getElementById("score");

const trueBtn = document.getElementById("true-btn");
const falseBtn = document.getElementById("false-btn");

const questions = [
    { question: "Is the Earth flat?", correctAnswer: false },
    { question: "Is the Sun a star?", correctAnswer: true },
    { question: "Is water dry?", correctAnswer: false },
    { question: "Do humans need oxygen to live?", correctAnswer: true },
];

let currentQuestionIndex = 0;

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    resultElement.textContent = "";
}

function updateScore(isCorrect) {
    if (isCorrect) {
        score++;
        resultElement.textContent = "Correct!";
        resultElement.style.color = "green";
    } else {
        resultElement.textContent = "Wrong!";
        resultElement.style.color = "red";
    }

    scoreElement.textContent = `Score: ${score}`;
}

trueBtn.addEventListener("click", function () {
    const currentQuestion = questions[currentQuestionIndex];
    updateScore(currentQuestion.correctAnswer === true);

    // Move to next question
    currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
    loadQuestion();
});

falseBtn.addEventListener("click", function () {
    const currentQuestion = questions[currentQuestionIndex];
    updateScore(currentQuestion.correctAnswer === false);

    // Move to next question
    currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
    loadQuestion();
});

// Initial question load
loadQuestion();
