function getComputerChoice() {
    return Math.floor((Math.random()) * 3);
}

function getHumanChoice (input) {

    if (input == "rock" ) {return "rock";}
    else if (input == "paper") {return "paper";}
    else if (input == "scissors") {return "scissors";}
    else return "Invalid choice";
}


function playRound (humanChoice) {

    let computerChoice = getComputerChoice();


    if (humanChoice == computerChoice) {
        console.log(`Draw, ${humanChoice} and ${computerChoice}.`);
        return "draw";
    }
    else if (humanChoice == "paper" && computerChoice == "rock"  || humanChoice == "rock" && computerChoice == "scissors" || humanChoice == "scissors" && computerChoice == "paper") {
        console.log(`You win, ${humanChoice} beats ${computerChoice}`);
        return "win";
    }
    else {
        console.log(`You lost, ${computerChoice} beats ${humanChoice}.`);
        return "loss";
    }   
}

function playGame() {

    var humanScore = 0;
    var computerScore = 0;
    var humanInput = 0;
    let result;

    const game = document.querySelector("#game");
    const gameText = document.createElement("p")
    
    gameText.textContent = `Game begins. Your score is ${humanScore}, enemy score is ${computerScore}.`;
    game.appendChild(gameText);

    const rockButton = document.querySelector("#rock-button");
    const paperButton = document.querySelector("#paper-button");
    const scissorsButton = document.querySelector("#scissors-button");

    rockButton.addEventListener("click", () => playRound(0));
    paperButton.addEventListener("click", () => playRound(1));
    scissorsButton.addEventListener("click", () => playRound(2));

    console.log(`Game begins. Your score is ${humanScore}, enemy score is ${computerScore}`);

    let player = humanInput;
    let computer = getComputerChoice();

    if (computer == 0) {
        computer = "rock";
        }
    else if (computer == 1) {
        computer = "paper";
    }
    else computer = "scissors"



    if (result == "win") {
        humanScore++;
    }
    else if (result == "loss") {
           computerScore++;
    }

    console.log(`Your score is ${humanScore}, enemy score is ${computerScore}`);


    console.log(`Game over. Your score is ${humanScore}, enemy score is ${computerScore}.`);
} 

playGame();



