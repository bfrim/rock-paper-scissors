const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;


function getPlayerChoice()
{
    let playerSelection = parseInt(prompt("Choose your weapon: "));
    playerSelection = selection.toString();
    playerSelection = selection.toLowerCase();
    return playerSelection;
}

function getComputerChoice()
{
    const computerSelection = choices[Math.floor(Math.random() * choices.length)];
    return computerSelection;
}

function playRound()
{
    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();
    result = "";

    if ((playerSelection == "rock" && computerSelection == "Scissors") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper"))

    playerScore += 1;
    result = "You win! " + playerSelection + " beats " + computerSelection + "."
    console.log(result);
}

function game()
{
    for (let i = 0; 1 < 5; i++)
    {
        playRound();
    }
}

game();