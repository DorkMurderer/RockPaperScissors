const buttons = document.querySelectorAll("button")
const resultEl = document.getElementById("result")
let playerScoreEl = document.getElementById("user-score")
let computerScoreEl = document.getElementById("computer-score")
const gameOverEl = document.querySelector(".game-over")

let playerScore = 0
let computerScore = 0

gameOverEl.addEventListener("click", function() {
    location.reload()
})

buttons.forEach(button => {
    button.addEventListener('click', () => {
   const result = playRound(button.id, computerPlay())
   resultEl.textContent = result
    })
})

function computerPlay()  {
    const choices = ["rock", "paper", "scissors"]
    const randomChoice = Math.floor(Math.random() * choices.length)
    return choices[randomChoice]
}


function playRound(playerSelection, 
    computerSelection) {
        if(playerSelection === computerSelection) {
        return "It's a tie!";

} else if (
    (playerSelection === "rock" && computerSelection === "scissors") || 
    (playerSelection === "paper" && computerSelection === "rock") || 
    (playerSelection === "scissors" && computerSelection === "paper") 
) {
    playerScore ++
    playerScoreEl.textContent = playerScore
    if (playerScore > 4) {
      const containerEl = document.querySelector(".container")
      const gameOverEl = document.querySelector('.game-over')
      containerEl.classList.add("hide")
      gameOverEl.classList.remove("hide")
      gameOverEl.textContent = `You Win! Score: ${playerScore}-${computerScore}.
      Click to play again!`

    }

    return "You Win! " + playerSelection + " beats " + computerSelection
   
} else {
    computerScore ++
    computerScoreEl.textContent = computerScore
    if (computerScore > 4) {
        const containerEl = document.querySelector(".container")
        const gameOverEl = document.querySelector('.game-over')
        containerEl.classList.add("hide")
        gameOverEl.classList.remove("hide")
        gameOverEl.textContent = `You Lose! Score: ${playerScore}-${computerScore}. 
        Click to play again!`
    }
    
    return "You lose! " + computerSelection + " beats " + playerSelection
} 

}


