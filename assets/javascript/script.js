// THIS IS CODE FROM GREATSTACK SIMPLE QUIZ VIDEO

const questions = [
  {
    question: "How many teeth did the tyrannosaurus rex have?",
    answers: [
      { text: "34", correct: false },
      { text: "60", correct: true },
      { text: "42", correct: false },
      { text: "86", correct: false },
    ],
  },
  {
    question: "Which land predator was larger than the trex?",
    answers: [
      { text: "Spinosaurus", correct: true },
      { text: "Giganotosaurus", correct: false },
      { text: "Carnotaurus", correct: false },
      { text: "Allosaurus ", correct: false },
    ],
  },
  {
    question: "What period did the velociraptors live in?",
    answers: [
      { text: "Jurassic ", correct: false },
      { text: "Triassic", correct: false },
      { text: "Fantastic ", correct: false },
      { text: "Cretaceous", correct: true },
    ],
  },
  {
    question: "Which dinosaur had the longest neck?",
    answers: [
      { text: "Diplodocus", correct: false },
      { text: "Mamenchisaurus", correct: true },
      { text: "Brachiosaurus", correct: false },
      { text: "Brontosaurus", correct: false },
    ],
  },
];

// ADDING TWO MORE CATEGORIES OF QUESTIONS FOR SEA AND AIR DINO'S:

// MARINE BASED QUESTIONS
const marineQuestions = [
  {
    question: "What was the largest ancient marine predator?",
    answer: [
      { text: "Mosasaurus", correct: true },
      { text: "Kronosaurus", correct: false },
      { text: "Dunkleosteus", correct: false },
      { text: "Pliosaurus", correct: false },
    ],
  },
  {
    question: "Which ancient aquatic reptile resembled the loch ness monster?",
    answer: [
      { text: "Plesiosaurus", correct: true },
      { text: "Hydrorion", correct: false },
      { text: "Halisaurus", correct: false },
      { text: "Cryptoclidus", correct: false },
    ],
  },
  {
    question: "Which one of the following is not an ancient marine reptile?",
    answer: [
      { text: "Ichthyosaurs", correct: false },
      { text: "Nothosaurs", correct: false },
      { text: "Thalattosaurs", correct: false },
      { text: "Albertosaurus", correct: true },
    ],
  },
  {
    question: "Which sea creature is the longest that ever existed?",
    answer: [
      { text: "Man O war jellyfish", correct: true },
      { text: "Shonisaurus sikanniensis", correct: false },
      { text: "Blue Whale", correct: false },
      { text: "Giant squid", correct: false },
    ],
  },
];

// AIR BASED QUESTIONS
const airQuestions = [
  {
    question: "What is the correct term for flying dinosaurs?",
    answer: [
      { text: "Pterosaurs", correct: true },
      { text: "Glideosaurs", correct: false },
      { text: "Aeronautosaurs", correct: false },
      { text: "Skydragons", correct: false },
    ],
  },
  {
    question: "What is the most well known Pterosaur?",
    answer: [
      { text: "Pterodactyl", correct: true },
      { text: "Pterodaustro", correct: false },
      { text: "Dimorphodon", correct: false },
      { text: "Rhamphorhynchus", correct: false },
    ],
  },
  {
    question: "Which is the largest known species of Pterosaur?",
    answer: [
      { text: "Quetzalcoatlus", correct: false },
      { text: "Hatzegopteryx", correct: true },
      { text: "Cryodrakon boreas", correct: false },
      { text: "Nemicolopterus", correct: false },
    ],
  },
  {
    question:
      "How long could the biggest Pterosaurs be in the sky and at what altitude?",
    answer: [
      { text: "8 - 10 days at 15,000ft", correct: true },
      { text: "5 - 7 at 20,000ft ", correct: false },
      { text: "3 - 5 at 30,000ft", correct: false },
      { text: "2 - 3 at 10,000ft", correct: false },
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
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
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
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
