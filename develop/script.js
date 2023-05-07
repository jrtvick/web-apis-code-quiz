// Establish global variables
var startButton = document.querySelector(".start-button");

// Create a function for the game starting
function startGame() {
    
}

// Create a current score tracker

// Create a timer function that launches upon start button being clicked

// Create the question+answers portion of the quiz being displayed as the user clicks through

// Create a function in which the clock decreases by a set amount of seconds if a wrong answer is selected

// Create an alert for end of game + final score

// Create local saves for highscore value and the player's initials

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