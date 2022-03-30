
function initiateGame() {
    var compChoice
    let decision = window.confirm("Would you like to play a game?")

    function computerDecision() {
        let compDecision = Math.floor(Math.random() * 3);
        if (compDecision = 1) {
            compChoice = "rock";
        }
        else if (compDecision = 2) {
            compChoice = "paper";
        }
        else {
            compChoice = "scissors";
        }
        return compChoice;
    }

    if (decision === true) {
        let userAnswer = prompt("Choose rock, paper, or scissors");
        let computersTurn = computerDecision();

        if (userAnswer === "rock" && computersTurn === "rock") {
            window.alert("It's a tie!");
        }
        else if (userAnswer === "rock" && computersTurn === "paper") {
            window.alert("Oh no! You lost!");
        }
        else if (userAnswer === "rock" && computersTurn === "scissors") {
            window.alert("Congratulations! You've won!");
        }
        else if (userAnswer === "paper" && computersTurn === "paper") {
            window.alert("It's a tie!");
        }
        else if (userAnswer === "paper" && computersTurn === "scissors") {
            window.alert("Oh no! You lost!");
        }
        else if (userAnswer === "paper" && computersTurn === "rock") {
            window.alert("Congratulations! You've won!");
        }
        else if (userAnswer === "scissors" && computersTurn === "scissors") {
            window.alert("It's a tie!");
        }
        else if (userAnswer === "scissors" && computersTurn === "rock") {
            window.alert("Oh no! You lost!");
        }
        else if (userAnswer === "scissors" && computersTurn === "paper") {
            window.alert("Congratulations! You've won!");
        }
        else {
            window.alert("Please select only rock, paper, or scissors.");
        }
    }
}
initiateGame();