const questions = [
  {
    question: "Who is the founder of Bitcoin?",
    answers: [
      { text: "Nakoto Satimoto", correct: false },
      { text: "Soso Marikoto", correct: false },
      { text: "Satoshi Nakamoto", correct: true },
      { text: "Sushini Hashinto", correct: false },
    ],
  },
  {
    question: "Which is largest animal in the world?",
    answers: [
      { text: "Shark", correct: false },
      { text: "Blue whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
    ],
  },
  {
    question: "Which country has the highest life expectancy?",
    answers: [
      { text: "Monaco", correct: false },
      { text: "South Africa", correct: true },
      { text: "Netherlands", correct: false },
      { text: "Hong Kong", correct: false },
    ],
  },
  {
    question: "Which country has the highest life expectancy?",
    answers: [
      { text: "Monaco", correct: true },
      { text: "South Africa", correct: false },
      { text: "Netherlands", correct: false },
      { text: "Hong Kong", correct: false },
    ],
  },
  {
    question: "What company was initially known as 'Blue Ribbon Sports?",
    answers: [
      { text: "Nike", correct: true },
      { text: "Adidas", correct: false },
      { text: "Puma", correct: false },
      { text: "Louis Vuitton", correct: false },
    ],
  },
  {
    question: "Which country has the hightest population in 2023?",
    answers: [
      { text: "China", correct: false },
      { text: "USA", correct: false },
      { text: "India", correct: true },
      { text: "Russia", correct: false },
    ],
  },
  {
    question: "What is the highest currency in the world?",
    answers: [
      { text: "US Dollar", correct: false },
      { text: "Euro", correct: false },
      { text: "Australian Dollar", correct: false },
      { text: "Kuwait Dinar", correct: true },
    ],
  },
  {
    question: "What company was initially known as 'Blue Ribbon Sports?",
    answers: [
      { text: "Nike", correct: true },
      { text: "Adidas", correct: false },
      { text: "Puma", correct: false },
      { text: "Louis Vuitton", correct: false },
    ],
  },
  {
    question: "What’s the smallest country in the world? (The Vatican)",
    answers: [
      { text: "Madagaskar", correct: false },
      { text: "The Vatican", correct: true },
      { text: "Maldives", correct: false },
      { text: "Bangladesh", correct: false },
    ],
  },
  {
    question: "What is the capital of Australia?",
    answers: [
      { text: "Melbourne", correct: false },
      { text: "Sydney", correct: false },
      { text: "Canberra", correct: true },
      { text: "Perth", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  showQuestion();
}

function showQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.innerHTML = currentQuestion.question;

  showAnswers();
}

function showAnswers() {
  const currentQuestion = questions[currentQuestionIndex];
  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.text) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
 }

 function handleNextButton() {
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length) {
    showQuestion()
    
  } else {
    showScore();
  }
 }

 nextButton.addEventListener("click", () => {
  if(currentQuestionIndex < questions.length) {
    handleNextButton()
  } else {
    startQuiz();
  }
 });
startQuiz();
