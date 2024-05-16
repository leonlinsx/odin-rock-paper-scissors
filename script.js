

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
    humanChoice = humanChoice.toLowerCase()
    if(humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors" ) {
        return humanChoice 
    } else {
        window.alert("Please enter a valid choice")
    }
}

function playRound(humanChoice, computerChoice) {
    let roundWinner = null
    let roundLoser = null
    if (humanChoice === computerChoice) {
        console.log("Draw")
        return "Draw" 
    } else if ((humanChoice === "rock" && computerChoice === "scissors") 
    || (humanChoice === "paper" && computerChoice === "rock") 
    || (humanChoice === "scissors" && computerChoice === "paper")) {
        roundWinner = humanChoice
        roundLoser = computerChoice
        console.log(`You win! ${roundWinner} beats ${roundLoser}`) 
        return "Human"        
    } else {
        roundWinner = computerChoice
        roundLoser = humanChoice
        console.log(`You lose! ${roundWinner} beats ${roundLoser}`)
        return "Com"
    }
}

function playGame() {
    let humanScore = 0
    let computerScore = 0 

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice()
        const computerSelection = getComputerChoice()

        winningPlayer = playRound(humanSelection, computerSelection)
        if (winningPlayer === "Human") {
            humanScore += 1
        } else if (winningPlayer === "Com") {
            computerScore += 1
        } else {
            console.log("Draw score")
        }

        console.log(`human score: ${humanScore}, com score: ${computerScore}`)
    }

}

playGame()



