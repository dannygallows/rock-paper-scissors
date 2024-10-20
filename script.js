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


console.log(getComputerChoice());

let input = prompt("rock paper scissors, type your choice fam");

console.log(getHumanChoice(input));

let humanScore = 0;
let computerScore = 0;

console.log(`Your score is ${humanScore}, enemy score is ${computerScore}`);