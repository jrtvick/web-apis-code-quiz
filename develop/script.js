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

// from Albi
var previousScoresArray = JSON.parse(localStorage.getItem("prevScore")) || [];

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
      endQuiz();
    }
    if (secondsLeft > 0 && winGame == true) {
      clearInterval(timerInterval);
      endQuiz();
    }
  }, 1000);
}

function endQuiz() {
  questionBlock.classList.add("hide");
  allButtons.classList.add("hide");
  console.log(currentScore);
}


// Declare function submitName
function submitName() {
  var userName = textBox.value; // declare variable userName and set equal to value of textBox
  if (userName === "") { //if username is === empty string
    alert("Please enter a name") //alert the user
    return null; // return nothing
  }
  // declare variable objUser as an object, within the object is userName and highscore
  var objUser = {
    userName,
    highScore,
  };
  previousScoresArray.push(objUser); //push previousScores array into objUser
  localStorage.setItem("prevScore", JSON.stringify(previousScoresArray));
  leaderBoard(); //calling the leaderboard function
}

// Declare leaderBoard function
function leaderBoard() {
  submitBtn.classList.add("hide");
  textBox.classList.add("hide");
  clearBtn.classList.remove("hide");
  previousScoresArray.map((score, index) => {
    var mySpan = document.createElement('span');
    mySpan.textContent = `${score.userName}; ${score.highScore}`;
    answersAll.appendChild(mySpan);
  })
}


// First question displaying all four options. 
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

// Create local saves for highscore value and the player's initials

// Create a current score tracker

// Create the question+answers portion of the quiz being displayed as the user clicks through

// let names = JSON.parse(localStorage.getItem("names")) || []

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

// Create a function in which the clock decreases by a set amount of seconds if a wrong answer is selected
// Trying to create a function to move through the questions, and decrease time if an incorrect answer is given

function checkAnswer(event) {
  var selectedAnswer = event.target;
  // console.log(selectedAnswer);
  // console.log(questionsAnswers[currentQuestion].correctAnswer);
  if (selectedAnswer.innerText == questionsAnswers[currentQuestion].correctAnswer) {
    currentScore++;
  }
  if (selectedAnswer.innerText !== questionsAnswers[currentQuestion].correctAnswer) {
    secondsLeft -= 5;
  }
  currentQuestion++;
  getQuestion();
  // if (currentQuestion < questionsAnswers.length) {
  //   getQuestion();
  // }
  // else {
  //   endQuiz();
  // }
}

// Trying to create a win game function. Include initials + scored saved to localstorage
// function winGame() {
//   if (secondsLeft > 0 && winGame === true) {
//     clearInterval(timerInterval);
//     alert("You win!");
//   }
// }

// Add event listener to answer buttons
// answerButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     if (button.dataset.correct) {
//       score++; // Increment score for correct answer
//     }
//     else {
//       secondsLeft -= 10;
//     }
//     // Display current score
//     currentScore.textContent = score;
//   });
// });

// These are my event listeners for making the buttons function to start the game and move through the questions.
startButton.addEventListener('click', startGame);

// Create event listeners for all option buttons to display next question once they are pressed
optionOne.addEventListener('click', getQuestion);
optionTwo.addEventListener('click', getQuestion);
optionThree.addEventListener('click', getQuestion);
optionFour.addEventListener('click', getQuestion);

init();












// useful
//document.body.appendChild(secondTag);




// document.querySelector("#choices").innerHTML = ""
// //make function here that rewrites the question Div here - hint, use the for loop on line 32
// for (i = 0; i < questionsAnswers[currentQuestion].choices.length; i++) {
//   let button = document.createElement("button");
//   button.innerText = questionsAnswers[currentQuestion].choices[i];
//   choices.appendChild(button)
// }
// }




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



// function checkAnswer() {
//   var selectedAnswer = document.querySelector('click[name="correctAnswer"]:checked').value;
//   var currentQuestion = questionBlock[currentQuestion];
//   if (selectedAnswer === currentQuestion.correctAnswer) {
//     currentScore++;
//   }
//   else {
//     secondsLeft -= 10;
//   }
//   // currentQuestion++;
// }


// function checkAnswer(answer) {
//   if (answer === correctAnswer) {
//     score + 10; // Increment score
//     updateScoreDisplay(); // Update score display
//   }
// }

// // Function to update the score display
// function updateScoreDisplay() {
//   var scoreDisplay = document.getElementById('#score-display');
//   scoreDisplay.textContent = `Score: ${score}`;
// }


