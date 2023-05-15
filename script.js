// Establish all global variables for the game.
var startButton = document.querySelector("#start-button");
var timeEl = document.querySelector("#countdown");
var secondsLeft = 60; // This is how much time is left in the game.
var winGame = false; // Setting up the winGame variable to be false, so that certain events happen when it becomes true.
var questionBlock = document.querySelector("#question-area");
var optionOne = document.querySelector("#option-1");
var optionTwo = document.querySelector("#option-2");
var optionThree = document.querySelector("#option-3");
var optionFour = document.querySelector("#option-4");
var currentQuestion = 0;   // This is the current question counter.
var currentScore = document.querySelector("#score-display");
var answerButtons = document.querySelectorAll("#options");
var currentScore = 0;
var allButtons = document.getElementById("answers");
var userName = document.getElementById("username");
var list = document.getElementById("score-container");
var highScore = document.createElement("li");
var submitBtn = document.getElementById("submit-button");
// user ID needs to be input and stored on start game.
var empty = JSON.parse(localStorage.getItem("prevScore")) || [];
var clear = document.getElementById("clear-button");

// call two init functions to set the score and question to zero.
function init() {
  currentQuestion = 0;
}

function init() {
  currentScore = 0;
}

// This is a timer function that starts when the start game button is clicked. When the time reaches 0 seconds, the user is displayed a game over alert.
function startGame() {
  var userName = username.value;
  console.log(userName);
  setTime();
  getQuestion();
  // Prevents start button from being clicked when round is in progress
  startButton.disabled = true;
}

// This set time function tells the time to countdown by one second. The two if statements end the game if you run out of time or answer all the questions.
function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = "Time Remaining: " + secondsLeft + " seconds";
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      endQuiz();
    }
    if (secondsLeft > 0 && winGame == true) {
      clearInterval(timerInterval);
      endQuiz();
    }
  }, 1000);
}

// This end quiz function tells the game to hide certain visual elements upon completion and display the current score.
function endQuiz() {
  questionBlock.classList.add("hide");
  allButtons.classList.add("hide");
  submitBtn.classList.remove("hide");
  console.log(currentScore);
  currentScore;
}

// Declare function submitName to get the input value from the users.
function submitName() {
  var userInitials = userName.value; // declare variable userName and set equal to value of userInitials.
  if (userInitials === "") {
    alert("Invalid. Please write your initials.");
    return null;
  }
  // declare variable objUser as an object, within the object is userName and highscore.
  var objUser = {
    userInitials,
    currentScore,
  };
  empty.push(objUser);
  localStorage.setItem("prevScore", JSON.stringify(empty));
  leaderBoard(); //calling the leaderboard function.
}

// Declare leaderBoard function to display the scores upon the game's completion.
function leaderBoard() {
    empty.forEach(function (score) {
      var scoreItem = document.createElement("li");
      scoreItem.textContent = score.userInitials + ": " + score.currentScore;
      list.appendChild(scoreItem); // Append each high score to the list.
    });
  }

// First question displaying all four options. The if statement tells the game when to stop displaying questions, the else statement tells the questions to show the four options, otherwise.
function getQuestion() {
  if (currentQuestion > 4) {
    winGame = true;
    endQuiz();
  }
  else {
    allButtons.classList.remove("hide");
    questionBlock.textContent = questionsAnswers[currentQuestion].question;   // This displays the question
    optionOne.textContent = questionsAnswers[currentQuestion].choices[0];  // These four lines display the options
    optionTwo.textContent = questionsAnswers[currentQuestion].choices[1];
    optionThree.textContent = questionsAnswers[currentQuestion].choices[2];
    optionFour.textContent = questionsAnswers[currentQuestion].choices[3];
    allButtons.addEventListener("click", checkAnswer);
  }
}

// Create the question+answers portion of the quiz being displayed as the user clicks through their selections.
var questionsAnswers = [{
  question: "What is JavaScript?",
  choices: ["A. Annoying", "B. Complicated", "C. Not easy to learn", "D. All of the above"],
  correctAnswer: "D. All of the above"
},
{
  question: "What is an API?",
  choices: ["A. Adding Program Intergers", "B. Application Programming Interface", "C. Assign Possible Information", "D. Application Process Inversion"],
  correctAnswer: "B. Application Programming Interface"
},
{
  question: "What is a DOM?",
  choices: ["A. Document Object Model", "B. Dominant Observation Model", "C. Dimunitive Opportunity Mission", "D. Dismissed Occasion Moment"],
  correctAnswer: "A. Document Object Model"
},
{
  question: "Why append () in JavaScript?",
  choices: ["A. To add or remove intergers from your code", "B. To link the JavaScript file in your HTML", "C. To append or add data in a file", "D. You would never append in Java"],
  correctAnswer: "C. To append or add data in a file"
},
{
  question: "What do KeyboardEvent objects describe?",
  choices: ["A. When you spill coffee on your desk", "B. CTRL+ALT+DEL", "C. A user interaction with the keyboard", "D. None of the above"],
  correctAnswer: "C. A user interaction with the keyboard"
}]

// Created a function to move through the questions, it adds 1 to the user's score for a correct answer and decreases time by 5 seconds if an incorrect answer is given.
function checkAnswer(event) {
  var selectedAnswer = event.target;
  if (selectedAnswer.innerText == questionsAnswers[currentQuestion].correctAnswer) {
    currentScore++;
  }
  if (selectedAnswer.innerText !== questionsAnswers[currentQuestion].correctAnswer) {
    secondsLeft -= 5;
  }
  currentQuestion++;
  getQuestion();
}


// These are my event listeners for making the buttons function to start the game and move through the questions.
startButton.addEventListener('click', startGame);
submitBtn.addEventListener('click', submitName);
clear.addEventListener('click', ()=>{
  localStorage.clear();
  window.location.reload();
});
// Create event listeners for all option buttons to display next question once they are pressed.
optionOne.addEventListener('click', getQuestion);
optionTwo.addEventListener('click', getQuestion);
optionThree.addEventListener('click', getQuestion);
optionFour.addEventListener('click', getQuestion);

init();