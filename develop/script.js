// Establish all global variables for the game.
var startButton = document.querySelector("#start-button");
var timeEl = document.querySelector("#countdown");
var secondsLeft = 60; // This is how much time is left in the game.
var winGame = false; // Setting up the winGame variable to be false, so that certain events happen when it becomes true.
var resetGame = document.querySelector("#reset-button");
var question = document.querySelector("#question");
var optionOne = document.querySelector("#option-1");
var optionTwo = document.querySelector("#option-2");
var optionThree = document.querySelector("#option-3");
var optionFour = document.querySelector("#option-4");
var currentQuestion = 0;   // This is the current question counter.
// var currentScore = document.querySelector("#score-display");


function init() {
  currentQuestion = 0;
}

function init() {
  currentScore = 0;
}
// This is a timer function that starts when the start game button is clicked. When the time reaches 0 seconds, the user is displayed a game over alert.
function startGame() {
  setTime();
  getQuestion();
  // Prevents start button from being clicked when round is in progress
  startButton.disabled = true;
}
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


// First question displaying all four options. 
function getQuestion() {
  question.textContent = questionsAnswers[currentQuestion].text;   // This displays the question
  optionOne.textContent = questionsAnswers[currentQuestion].choices[0];  // These four lines display the options
  optionTwo.textContent = questionsAnswers[currentQuestion].choices[1];
  optionThree.textContent = questionsAnswers[currentQuestion].choices[2];
  optionFour.textContent = questionsAnswers[currentQuestion].choices[3];
  currentQuestion = currentQuestion + 1;
}



// Create local saves for highscore value and the player's initials
// Took a lot of this from a confusing tutoring session, not sure exactly how to make it work for me

// function startGame() {
//   let name = document.querySelector("#username").value;
//   names.push(name);
//   localStorage.setItem("names", JSON.stringify(names))
//   document.querySelector("#questionSection").appendChild(header)
//   let choices = document.createElement("div");
//   choices.id = "choices"
//   for (i = 0; i < questionsAnswers[currentQuestion].choices.length; i++) {
//     let button = document.createElement("button");
//     button.innerText = questionsAnswers[currentQuestion].choices[i];
//     choices.appendChild(button)
//   }
//   document.querySelector("#questionSection").appendChild(choices)
//   document.querySelector("#choices").addEventListener("click", questionCheck)
// }



// Create a current score tracker







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
  text: "Why append () in JavaScript?",
  choices: ["A. To add or remove intergers from your code", "B. To link the JavaScript file in your HTML", "C. To append or add data in a file", "D. You would never append in Java"],
  answer: "C. To append or add data in a file"
},
{
  text: "What do KeyboardEvent objects describe?",
  choices: ["A. When you spill coffee on your desk", "B. CTRL+ALT+DEL", "C. A user interaction with the keyboard", "D. None of the above"],
  answer: "C. A user interaction with the keyboard"
}]




function checkAnswer(answer) {
  if (answer === correctAnswer) {
    score + 10; // Increment score
    updateScoreDisplay(); // Update score display
  }
}

// Function to update the score display
function updateScoreDisplay() {
  var scoreDisplay = document.getElementById('#score-display');
  scoreDisplay.textContent = `Score: ${score}`;
}



// Create a function in which the clock decreases by a set amount of seconds if a wrong answer is selected
// Trying to create a function to move through the questions, and decrease time if an incorrect answer is given
// function questionCheck(event) {
//   if (event.target.innerText === questionsAnswers[currentQuestion].answer) {
//     currentScore + 10
//   }
//   else {
//     time - 10
//   }
//   currentQuestion++;

// document.querySelector("#choices").innerHTML = ""
// //make function here that rewrites the question Div here - hint, use the for loop on line 32
// for (i = 0; i < questionsAnswers[currentQuestion].choices.length; i++) {
//   let button = document.createElement("button");
//   button.innerText = questionsAnswers[currentQuestion].choices[i];
//   choices.appendChild(button)
// }
// }



// Trying to create a win game function. Include initials + scored saved to localstorage
function winGame() {
  if (secondsLeft > 0 && winGame === true) {
    clearInterval(timerInterval);
    alert("You win!");
  }
}





// These are my event listeners for making the buttons function to start the game and move through the questions.
startButton.addEventListener('click', startGame);

// Create event listeners for all option buttons to display next question once they are pressed
optionOne.addEventListener('click', getQuestion);
optionTwo.addEventListener('click', getQuestion);
optionThree.addEventListener('click', getQuestion);
optionFour.addEventListener('click', getQuestion);




init();




// function resetGame() {
//   var resetButton = document.getElementById("#reset-button");
//   resetButton.addEventListener("click", function () {
//     location.reload();
//   });


//   resetButton.addEventListener("click", resetGame);
// };


// useful
//document.body.appendChild(secondTag);