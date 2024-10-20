function getComputerChoice() {
    return Math.floor((Math.random()) * 3);
}

function getHumanChoice (input) {

    let userInput = input.toLowerCase();

    if (userInput == "rock" ) {return 0;}
    else if (userInput == "paper") {return 1;}
    else if (userInput == "scissors") {return 2;}
    else return "Invalid choice";
}

function playRound (humanChoice, computerChoice) {

}

let humanScore = 0;
let computerScore = 0;
console.log(`Your score is ${humanScore}, enemy score is ${computerScore}`);

let input = prompt("rock paper scissors, type your choice fam");

let player = getHumanChoice(input);
let computer = getComputerChoice();

playRound(player, computer);