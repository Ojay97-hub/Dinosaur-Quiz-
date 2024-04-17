// CODE HAS BEEN TAKEN FROM GREATSTACK SIMPLE QUIZ VIDEO

/** AN OBJECT OF MULTIPLE CHOICE QUESTIONS, A STRING AND AN ARRAY OF POSSIBLE ANSWERS (object with 2 properties text and correct) */
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
      { text: "Portuguese Man O' war jellyfish", correct: true },
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

// ADDING NEW ID ELEMENTS
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
const scoreInfo = document.getElementById("score-info"); // added
const playAgainButton = document.getElementById("play-again-btn"); // added

let currentSetIndex = 0;
let currentQuestions = setsOfQuestions[currentSetIndex]; // added for new question sets
let currentQuestionIndex;
let score = 0;
let playerName = ""; // new variable for name

// FUNCTIONS

// Function to shuffle an array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// adapting startQuiz function to cater for intro page
/**
 * Starts the quiz when the start button is clicked after ensuring a name is entered.
 * Hides the intro section and displays the quiz section.
 * Resets quiz variables like current question set index, current question index, and score.
 * Shows the first question of the selected question set.
 */
function startQuiz() {
  //ensuring name is entered before quiz starts
  playerName = nameInput.value.trim();
  if (playerName === "") {
    alert("Please enter your name before starting the quiz!!!");
    return;
  }

  // Shuffle the setsOfQuestions array before assigning the current question set
  shuffleArray(setsOfQuestions);

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

/**
 * Displays the current question along with answer options.
 * Updates the background color and title based on the current question set.
 * Creates buttons for each answer option and attaches event listeners to them.
 */
function showQuestion() {
  resetState();
  let currentQuestion = currentQuestions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  // UPDATING THE H1 WHEN DIFFERENT SET QUESTIONS ARE DISPLAYED GRABBING THE H1
  // CHANGING COLOR OF THE .APP CLASS FOR EACH Q SET
  // ADDING DINOSAUR BACKGROUNDS FOR EACH QUESTION SET USING CLASSES
  // ADDING DINOSAUR BACKGROUNDS FOR EACH QUESTION SET USING CLASSES
  if (currentSetIndex === 0) {
    document.body.className = "land-dinosaurs";
    document.querySelector(".app").style.backgroundColor = "#90aa82b4";
    document.querySelector("h1").innerText = "LAND DINOSAURS";
  } else if (currentSetIndex === 1) {
    document.body.className = "ancient-marine-creatures";
    document.querySelector(".app").style.backgroundColor = "#66a5adb4";
    document.querySelector("h1").innerText = "ANCIENT MARINE CREATURES";
  } else if (currentSetIndex === 2) {
    document.body.className = "flying-dinosaurs";
    document.querySelector(".app").style.backgroundColor = "#f0e3d3b4";
    document.querySelector("h1").innerText = "FLYING DINOSAURS";
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

/**
 * Resets the state of the quiz by removing previously displayed answers.
 * REMOVING ANSWER 1/2/3/4 FROM HTML
 */
function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

/**
 * Handles the selection of an answer option.
 * Updates score if the selected answer is correct and disables further clicks on answer buttons.
 * SELECTING ANSWER & CHANGING COLOUR IF RIGHT/WRONG & BLOCKING CLICK ON SELECTION
 */
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

/**
 * Calculates and displays the final score out of the total number of questions.
 * Hides the intro and quiz sections and displays the score section.
 * this score function now shows out of 12 rather than original 4
 */
function showScore() {
  // reset the state of the quiz
  resetState();
  // calculate the total number of questions by summing up the lengths of all question sets
  const totalQuestions = setsOfQuestions.reduce(
    (total, set) => total + set.length,
    0
  );
  // CALL THE SHOW SCORE SECTION
  showScoreSection(totalQuestions);
}

/**
 * Displays the score section with the player's name and final score.
 * TO SHOW SCORE SECTION
 */
function showScoreSection(totalQuestions) {
  // Hide intro and quiz sections
  intro.style.display = "none";
  quizSection.style.display = "none";

  // Display score section
  scoreSection.style.display = "block";

  // Display score info
  scoreInfo.innerHTML = `${playerName}, you scored ${score} out of ${totalQuestions}!`;
}

/**
 * Handles the functionality when the "Next" button is clicked.
 * Proceeds to the next question or question set based on the current state of the quiz.
 * Displays the score section if all question sets are completed.
 * new function to incorporate all question categories rather than original
 */
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

/**
 * Resets the page to its initial state by hiding quiz and score sections and showing the intro section.
 * Resets background image and color.
 * Reset function to reset the page to its initial state
 */
function resetPage() {
  // Reset background image
  document.body.className = "";
  // Reset background color of .app
  document.querySelector(".app").style.backgroundColor = "#e1b404d7"; // Reset to default color
  // Hide quiz and score sections
  quizSection.style.display = "none";
  scoreSection.style.display = "none";
  // Show intro section
  intro.style.display = "flex";
}

// EVENT LISTENERS

/**
 * Initializes event listeners for various buttons and elements when the DOM content is loaded.
 */
function initialization() {
  // Event listener for start quiz button
  startButton.addEventListener("click", startQuiz);

  // Event listener for the "Next" button
  nextButton.addEventListener("click", () => {
    if (nextButton.innerHTML === "Next") {
      handleNextButton();
    } else {
      // Show the score section
      showScoreSection();
    }
  });

  // Event listener for play again button
  playAgainButton.addEventListener("click", () => {
    // Reset the page
    resetPage();
  });
}

/** INITIALIZATION IS CALLED AFTER DOMCONTENTLOADED */
document.addEventListener("DOMContentLoaded", function () {
  initialization();
});
