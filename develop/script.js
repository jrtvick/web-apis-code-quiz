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
  setTime();
  let i = 0;

  setInterval(function () {
    console.log(++i);
  }, 1000);
});


// Create a current score tracker


// Create a function in which the clock decreases by a set amount of seconds if a wrong answer is selected
// Create local saves for highscore value and the player's initials


// This is a timer function that launches upon start button being clicked. When the time reaches 0 seconds, the user is prompted to input their initials.
function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = "Time Remaining: " + secondsLeft + " seconds";
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      alert("Game Over.");
      prompt("Please input your initials. \n\nClick OK to continue.");
    }
  }, 1000);
}

// Trying to create a win game function
function winGame() {
  if (secondsLeft > 0 && winGame === true) {
    clearInterval(timerInterval);
    alert("You win!");
    prompt("Please input your initials. \n\nClick OK to continue.");
  }
}


let names = JSON.parse(localStorage.getItem("names")) || []
let questionsAnswers = [{
  text: "What is javascript?",
  choices: ["A. annoying", "B. complicated", "C. not easy to learn", "D. all of the above"],
  answer: "D. all of the above"
},
{
  text: "What is javascript?",
  choices: ["A. annoying", "B. complicated", "C. not easy to learn", "D. all of the above"],
  answer: "D. all of the above"
}]

let currentQuestion = 0;








//   localStorage.setItem("studentGrade", JSON.stringify(studentGrade));
//   renderMessage();

//   });

//   function renderMessage() {
//     var lastGrade = JSON.parse(localStorage.getItem("studentGrade"));
//     if (lastGrade !== null) {
//       document.querySelector(".message").textContent = lastGrade.student + 
//       " received a/an " + lastGrade.grade
//     }
//   }


// Create the question+answers portion of the quiz being displayed as the user clicks through



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

