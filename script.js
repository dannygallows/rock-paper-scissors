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
    console.log(`Game begins. Your score is ${humanScore}, enemy score is ${computerScore}`);
    
    // for (let i = 0; i < 5; i++) {

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
    
        let result = playRound(player, computer);

        if (result == "win") {
            humanScore++;
        }
        else if (result == "loss") {
            computerScore++;
        }

        console.log(`Your score is ${humanScore}, enemy score is ${computerScore}`);
    // }

    console.log(`Game over. Your score is ${humanScore}, enemy score is ${computerScore}.`);
} 

playGame();



