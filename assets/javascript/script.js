// THIS IS CODE FROM GREATSTACK SIMPLE QUIZ VIDEO

// AN OBJECT OF MULTIPLE CHOICE QUESTIONS, A STRING AND AN ARRAY OF POSSIBLE ANSWERS (object with 2 properties text and correct)

// LAND BASED QUESTIONS
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
    answers: [
      { text: "Mosasaurus", correct: true },
      { text: "Kronosaurus", correct: false },
      { text: "Dunkleosteus", correct: false },
      { text: "Pliosaurus", correct: false },
    ],
  },
  {
    question: "Which ancient aquatic reptile resembled the loch ness monster?",
    answers: [
      { text: "Plesiosaurus", correct: true },
      { text: "Hydrorion", correct: false },
      { text: "Halisaurus", correct: false },
      { text: "Cryptoclidus", correct: false },
    ],
  },
  {
    question: "Which one of the following is not an ancient marine reptile?",
    answers: [
      { text: "Ichthyosaurs", correct: false },
      { text: "Nothosaurs", correct: false },
      { text: "Thalattosaurs", correct: false },
      { text: "Albertosaurus", correct: true },
    ],
  },
  {
    question: "Which sea creature is the longest that ever existed?",
    answers: [
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
    answers: [
      { text: "Pterosaurs", correct: true },
      { text: "Glideosaurs", correct: false },
      { text: "Aeronautosaurs", correct: false },
      { text: "Skydragons", correct: false },
    ],
  },
  {
    question: "What is the most well known Pterosaur?",
    answers: [
      { text: "Pterodactyl", correct: true },
      { text: "Pterodaustro", correct: false },
      { text: "Dimorphodon", correct: false },
      { text: "Rhamphorhynchus", correct: false },
    ],
  },
  {
    question: "Which is the largest known species of Pterosaur?",
    answers: [
      { text: "Quetzalcoatlus", correct: false },
      { text: "Hatzegopteryx", correct: true },
      { text: "Cryodrakon boreas", correct: false },
      { text: "Nemicolopterus", correct: false },
    ],
  },
  {
    question:
      "How long could the biggest Pterosaurs be in the sky and at what altitude?",
    answers: [
      { text: "8 - 10 days at 15,000ft", correct: true },
      { text: "5 - 7 at 20,000ft ", correct: false },
      { text: "3 - 5 at 30,000ft", correct: false },
      { text: "2 - 3 at 10,000ft", correct: false },
    ],
  },
];

// ADDING NEW ID ELEMENTS FOR INTRO
// INTRO
const intro = document.getElementById("intro"); // added
const nameInput = document.getElementById("name"); // added
const startButton = document.getElementById("start-btn"); // added
// QUIZ
const quizSection = document.getElementById("quiz-section"); // added
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const setsOfQuestions = [questions, marineQuestions, airQuestions]; // added
// SCORE
const scoreSection = document.getElementById("score-section"); // added
const scoreInfo = document.getElementById("score-info");
const playAgainButton = document.getElementById("play-again-btn");

let currentSetIndex = 0;
let currentQuestions = setsOfQuestions[currentSetIndex]; // added for new question sets
let currentQuestionIndex;
let score = 0;
let playerName = ""; // new variable for name

// adapting startQuiz function to cater for intro page
function startQuiz() {
  //ensuring name is entered before quiz starts
  playerName = nameInput.value.trim();
  if (playerName === "") {
    alert("Please enter your name before starting the quiz!!!");
    return;
  }
  // Hiding intro and showing quiz with display none and block
  intro.style.display = "none";
  quizSection.style.display = "block";
  currentSetIndex = 0;
  currentQuestions = setsOfQuestions[currentSetIndex];
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = currentQuestions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  // UPDATING THE H1 WHEN DIFFERENT SET QUESTIONS ARE DISPLAYED GRABBING THE H1
  if (currentSetIndex === 0) {
    document.querySelector("h1").innerText = "LAND DINOSAURS";
  } else if (currentSetIndex === 1) {
    document.querySelector("h1").innerText = "ANCIENT MARINE CREATURES";
  } else if (currentSetIndex === 2) {
    document.querySelector("h1").innerText = "FLYING DINOSAURS";
  }

  // ADDING DINOSAUR BACKGROUNDS FOR EACH QUESTION SET USING CLASSES
  if (currentSetIndex === 0) {
    document.body.className = "land-dinosaurs";
  } else if (currentSetIndex === 1) {
    document.body.className = "ancient-marine-creatures";
  } else if (currentSetIndex === 2) {
    document.body.className = "flying-dinosaurs";
  }

  // CREATING BUTTONS FOR ANSWERS
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

// REMOVING ANSWER 1/2/3/4 FROM HTML
function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

// SELECTING ANSWER & CHANGING COLOUR IF RIGHT/WRONG & BLOCKING CLICK ON SELECTION
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

// this score function now shows out of 12 rather than original
function showScore() {
  // reset the state of the quiz
  resetState();
  // calculate the total number of questions by summing up the lengths of all question sets
  const totalQuestions = setsOfQuestions.reduce(
    (total, set) => total + set.length,
    0
  );

  // CALL THE SHOW SCORE SECTION
  showScoreSection();

  // display the correct score message & adding player name
  // questionElement.innerHTML = `Well done, ${playerName}! You scored ${score} out of ${totalQuestions}!`;
  // nextButton.innerHTML = "Play Again";
  // nextButton.style.display = "block";
}

// TO SHOW SCORE SECTION
function showScoreSection() {
  // Hide intro and quiz sections
  intro.style.display = "none";
  quizSection.style.display = "none";

  // Display score section
  scoreSection.style.display = "block";

  // Display score info
  scoreInfo.innerHTML = `Well done, ${playerName}! You scored ${score} out of ${totalQuestions}!`;
}

// new function to incorporate all questions
function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < currentQuestions.length) {
    showQuestion();
  } else {
    if (currentSetIndex < setsOfQuestions.length - 1) {
      // Move to the next set of questions
      currentSetIndex++;
      currentQuestions = setsOfQuestions[currentSetIndex];
      currentQuestionIndex = 0;
      showQuestion();
    } else {
      // Show score if all sets are completed
      showScore();
    }
  }
}

// event listener for start quiz button
startButton.addEventListener("click", startQuiz);

// Event listener for the "Next" button
nextButton.addEventListener("click", () => {
  if (nextButton.innerHTML === "Next") {
    handleNextButton();
  } else {
    // Show the score section if "Play Again" button is clicked
    showScoreSection();
    // Taking user back to the intro page on play again
    // intro.style.display = "block";
    //quizSection.style.display = "none";
    // nameInput.value = ""; // clearing name input
    // startButton.style.display = "block"; // display start button again
    // Restart the quiz when the "Play Again" button is clicked
  }
}); // now only one event listener is targeting the next button meaning both next and play again act correctly

startQuiz();
