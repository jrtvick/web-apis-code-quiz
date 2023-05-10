// Establish global variables
var startButton = document.querySelectorAll(".start-button");
var timeEl = document.querySelector(".countdown");
var secondsLeft = 60;
var winGame = false;


// Create a function for the game starting
// function startGame() {
//   setTime();
// }

let start = document.querySelector('#start-button');

start.addEventListener('click', function () {
  // prompt("Please input your initials. \n\nClick OK to continue.");
  setTime();
  let i = 0;

  setInterval(function () {
    console.log(++i);
  }, 1000);
});

// Took a lot of this from a confusing tutoring session, not sure exactly how to make it work for me
function startGame() {
  let name = document.querySelector("#username").value;
  names.push(name);
  localStorage.setItem("names", JSON.stringify(names))
  document.querySelector("#questionSection").appendChild(header)
  let choices = document.createElement("div");
  choices.id = "choices"
  for (i = 0; i < questionsAnswers[currentQuestion].choices.length; i++) {
    let button = document.createElement("button");
    button.innerText = questionsAnswers[currentQuestion].choices[i];
    choices.appendChild(button)
  }
  document.querySelector("#questionSection").appendChild(choices)
  document.querySelector("#choices").addEventListener("click", questionCheck)
}

// Create a current score tracker


// Create a function in which the clock decreases by a set amount of seconds if a wrong answer is selected
// Create local saves for highscore value and the player's initials



// Create the question+answers portion of the quiz being displayed as the user clicks through

let names = JSON.parse(localStorage.getItem("names")) || []
let questionsAnswers = [{
  text: "What is JavaScript?",
  choices: ["A. Annoying", "B. Complicated", "C. Not easy to learn", "D. All of the above"],
  answer: "D. All of the above"
},
{
  text: "What is an API?",
  choices: ["A. Adding Program Intergers", "B. Application Programming Interface", "C. Assign Possible Information", "D. Application Process Inversion"],
  answer: "B. Application Programming Interface"
},
{
  text: "What is a DOM?",
  choices: ["A. Document Object Model", "B. Dominant Observation Model", "C. Dimunitive Opportunity Mission", "D. Dismissed Occasion Moment"],
  answer: "A. Document Object Model"
},
{
  text: "Why append () in Java?",
  choices: ["A. To add or remove intergers from your code", "B. To link the JavaScript file in your HTML", "C. To append or add data in a file", "D. You would never append in Java"],
  answer: "C. To append or add data in a file"
},
{
  text: "What do KeyboardEvent objects describe?",
  choices: ["A. When you spill coffee on your desk", "B. CTRL+ALT+DEL", "C. A user interaction with the keyboard", "D. None of the above"],
  answer: "C. A user interaction with the keyboard"
}]

let currentQuestion = 0;

// Trying to create a function to move through the questions, and decrease time if an incorrect answer is given
function questionCheck(event) {
  if (event.target.innerText === questionsAnswers[currentQuestion].answer) {

  }
  else {
      time-10
  }
  currentQuestion++;

  document.querySelector("#choices").innerHTML = ""
  //make function here that rewrites the question Div here - hint, use the for loop on line 32
}

// This is a timer function that launches upon start button being clicked. When the time reaches 0 seconds, the user is prompted to input their initials.
function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = "Time Remaining: " + secondsLeft + " seconds";
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      alert("Game Over.");
    }
  }, 1000);
}

// Trying to create a win game function
function winGame() {
  if (secondsLeft > 0 && winGame === true) {
    clearInterval(timerInterval);
    alert("You win!");
  }
}






// Create an alert for end of game + final score

// if (timer === 0) {
//     alert("Game over. Final score:" + currentScore(""));
// } 








// Create a global variable + function + event listener for the reset button being pressed
var resetButton = document.querySelector(".reset-button");

function resetGame() {
  // Resets win and loss counts
  winCounter = 0;
  loseCounter = 0;
  // Renders win and loss counts and sets them into client storage
  setWins()
  setLosses()
}

resetButton.addEventListener("click", resetGame);

