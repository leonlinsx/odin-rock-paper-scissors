let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    let randChoice = Math.floor(Math.random() * 3)
 
    if (randChoice === 0) {
        return "rock"
    } else if (randChoice === 1) {
        return "paper"
    } else if (randChoice === 2) {
        return "scissors"
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Choose rock, paper, or scissors")
    if(humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors" ) {
        return humanChoice 
    } else {
        window.alert("Please enter a valid choice")
    }
}

