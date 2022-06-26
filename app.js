//variables for the game state
let player1Score = 0
let player2Score = 0
let player1Turn = true
let winner = ""
let gameState = true //True = still playing || false = game is done

// Control DOM nodes
const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const message = document.getElementById("message")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")


// Dice Game Logic


// Roll Dice

 rollBtn.addEventListener("click", function() {
    if(gameState === true){
        const randomNumber = Math.floor(Math.random() * 6) + 1
        updateGameState(player1Turn, randomNumber)
        if(player1Turn === false && checkWinner()){
            message.textContent = `${winner} Wins!`
            rollBtn.classList.add('hide')
            resetBtn.classList.remove('hide')
            player1Dice.classList.remove('active')
            player2Dice.classList.remove('active')
        }
        player1Turn = !player1Turn
    }
 })

// Add Reset Function

resetBtn.addEventListener('click', function() {
    player1Score = 0;
    player2Score = 0;
    player1Turn = true;
    winner = "";
    gameState = true;
    rollBtn.classList.remove('hide')
    resetBtn.classList.add('hide')
    message.textContent = "Player 1 Turn"
    player1Dice.classList.add('active')
    player1Dice.textContent = "-";
    player2Dice.textContent = "-";
    updateScoreboard()
})

//  update score and player tracker

function updateGameState(turn, roll) {
    if(turn) {
        // Make it player 2s turn and update player 1s score
        player2Dice.classList.add('active')
        player1Dice.textContent = roll
        player1Dice.classList.remove('active')
        player1Score += roll
        message.textContent = "Player 2 Turn"
    }else{
        // Make it player 1s turn and update plyer 2s score
        player1Dice.classList.add('active')
        player2Dice.textContent = roll
        player2Dice.classList.remove('active')
        player2Score += roll
         message.textContent = "Player 1 Turn"   
    }
    updateScoreboard()
    
}

function updateScoreboard() {
    player1Scoreboard.textContent = player1Score;
    player2Scoreboard.textContent = player2Score;
}

// Check for winner

function checkWinner() {
  if(player1Score >= 20 && player1Score > player2Score) {
    winner = "Player 1"
    gameState = false
    return true
  }else if(player2Score >= 20 && player2Score > player1Score){
    winner = "Player 2"
    gameState = false
    return true
  }else{
    return false
  }
}

