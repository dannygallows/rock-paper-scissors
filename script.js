function getComputerChoice() {
    return Math.floor((Math.random()) * 3);
}

function getHumanChoice (input) {

    let userInput = input.toLowerCase();

    if (userInput == "rock" ) {return "rock";}
    else if (userInput == "paper") {return "paper";}
    else if (userInput == "scissors") {return "scissors";}
    else return "Invalid choice";
}


function playRound (humanChoice, computerChoice) {


    if (humanChoice == computerChoice) {
        console.log(`Draw, ${humanChoice} and ${computerChoice}.`);
        return;
    }
    else if (humanChoice == "rock" && computerChoice == "paper" || humanChoice == "scissors" && computerChoice == "rock" || humanChoice == "paper" && computerChoice == "scissors") {
        console.log(`You win, ${humanChoice} beats ${computerChoice}`);
        humanScore++;
        return;
    }
    console.log(`You lost, ${computerChoice} beats ${humanChoice}.`)
    computerScore++;
}

var humanScore = 0;
var computerScore = 0;
console.log(`Your score is ${humanScore}, enemy score is ${computerScore}`);

let input = prompt("rock paper scissors, type your choice fam");

let player = getHumanChoice(input);
let computer = getComputerChoice();

if (computer == 0) {
    computer = "rock";
}
else if (computer == 1) {
    computer = "paper";
}
else computer = "scissors"

playRound(player, computer);

console.log(`Your score is ${humanScore}, enemy score is ${computerScore}`);