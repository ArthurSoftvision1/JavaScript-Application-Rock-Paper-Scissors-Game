const message = document.querySelector(".message");
const score = document.querySelector(".score");
const buttons = document.querySelectorAll("button")

console.log(buttons);
for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", playGame);
}

function playGame(e) {
    let playerSelection = e.target.innerText;
    let computerSelection = Math.random();
    
    if(computerSelection < 0.34) {
        computerSelection = "Rock";
    } else if (computerSelection <= 0.67) {
        computerSelection = "Paper";
    } else {
        computerSelection = "Scissors";
    }
    console.log(playerSelection, computerSelection);
    let result = checkWinner(playerSelection, computerSelection);
    console.log(result);
}

function checkWinner(pl, co) {
    if(pl === co) {
        return "Draw";
    }
    if(pl === "Rock") {
        if(co === "Paper") {
            return "Computer";
        } else {
            return "Player";
        }
    }
    if(pl === "Paper") {
        if(co === "Scissors") {
            return "Computer";
        } else {
            return "Player";
        }
    }
}
