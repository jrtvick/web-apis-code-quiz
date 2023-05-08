// Establish global variables
var startButton = document.querySelector(".start-button");

// Create a function for the game starting
function startGame() {

}

// Create a current score tracker

// Create a timer function that launches upon start button being clicked
// Create a function in which the clock decreases by a set amount of seconds if a wrong answer is selected
// Create local saves for highscore value and the player's initials

// function setTime() {
//     // Sets interval in variable
//     var timerInterval = setInterval(function() {
//       secondsLeft--;
//       timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";
  
//       if(secondsLeft === 0) {
//         // Stops execution of action at set interval
//         clearInterval(timerInterval);
//         // Calls function to create and append image
//         sendMessage();
//       }
  
//     }, 1000);
//   }




//   var counter = document.querySelector("#counter");
//   var addButton = document.querySelector("#add");
//   var subtractButton = document.querySelector("#subtract");
  
//   var count = localStorage.getItem("count");
  
//   counter.textContent = count;
  
//   addButton.addEventListener("click", function() {
//     if (count < 24) {
//       count++;
//       counter.textContent = count;
//       localStorage.setItem("count", count);
//     }
//   });
  
//   subtractButton.addEventListener("click", function() {
//     if (count > 0) {
//       count--;
//       counter.textContent = count;
//       localStorage.setItem("count", count);
//     }
//   });



//   saveButton.addEventListener("click", function(event) {
//     event.preventDefault();

//   var studentGrade = {
//     student: student.value,
//     grade: grade.value,
//     comment: comment.value.trim()
//   };
  
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

if (timer === 0) {
    alert("Game over. Final score:" + currentScore(""));
} 

// Create an event listener for the start game button being pressed
startButton.addEventListener("click", startGame);



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