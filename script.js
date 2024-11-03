var humanScore = 0;
var computerScore = 0;

function getComputerChoice() {
    let computer = Math.floor((Math.random()) * 3);

    if (computer == 0) {
        return "rock";
        }
    else if (computer == 1) {
        return "paper";
    }
    else return "scissors";
}

function playRound (humanChoice) {

    let computerChoice = getComputerChoice();

    if (humanChoice == computerChoice) {
        console.log(`Draw, ${humanChoice} and ${computerChoice}.`);
    }
    else if (humanChoice == "paper" && computerChoice == "rock"  || humanChoice == "rock" && computerChoice == "scissors" || humanChoice == "scissors" && computerChoice == "paper") {
        console.log(`You win, ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    }
    else {
        console.log(`You lost, ${computerChoice} beats ${humanChoice}.`);
        computerScore++;
    }   

    if (humanScore === 5) {
        const result = document.createElement("p");
        result.textContent = `You won ${humanScore} to ${computerScore}.`;
        game.append(result);
    }
    else if (computerScore === 5) {
        const result = document.createElement("p");
        result.textContent = `You lost ${humanScore} to ${computerScore}.`;
        game.append(result);
    }
}

function playGame() {

    let roundCount = 1;

    const game = document.querySelector("#game");
    const gameText = document.createElement("p");
    const gameRound = document.createElement("p")
    
    gameText.textContent = `Game of Rock, Paper and Scissors begins.`;
    gameRound.textContent = `Round ${roundCount}`
    game.appendChild(gameText);
    game.append(gameRound);

    const rockButton = document.querySelector("#rock-button");
    const paperButton = document.querySelector("#paper-button");
    const scissorsButton = document.querySelector("#scissors-button");

    rockButton.addEventListener("click", () => {
        playRound("rock"); 
        roundCount++; 
        gameRound.textContent = `Round ${roundCount}`;
    });
    
    paperButton.addEventListener("click", () => {
        playRound("paper"); 
        roundCount++; 
        gameRound.textContent = `Round ${roundCount}`
    });
    
    scissorsButton.addEventListener("click", () => {
        playRound("scissors"); 
        roundCount++;  
        gameRound.textContent = `Round ${roundCount}`
    }); 
} 

playGame();



