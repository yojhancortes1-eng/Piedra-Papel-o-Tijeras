
let playerScore = 0;
let computerScore = 0;
let drawScore = 0;

function play(playerChoice) {
    const options = ["piedra", "papel", "tijeras"];

    const computerChoice =
        options[Math.floor(Math.random() * options.length)];

    let message = "";

    if (playerChoice === computerChoice) {
        message = "¡Es un empate!";
        drawScore++;
    } else if (
        (playerChoice === "piedra" && computerChoice === "tijeras") ||
        (playerChoice === "papel" && computerChoice === "piedra") ||
        (playerChoice === "tijeras" && computerChoice === "papel")
    ) {
        message = "¡Ganaste esta ronda!";
        playerScore++;
    } else {
        message = "¡La computadora ganó!";
        computerScore++;
    }

    document.getElementById("message").textContent = message;

    document.getElementById("details").textContent =
        `Elegiste ${playerChoice} y la computadora eligió ${computerChoice}.`;

    updateScore();
}

function updateScore() {
    document.getElementById("playerScore").textContent = playerScore;
    document.getElementById("computerScore").textContent = computerScore;
    document.getElementById("drawScore").textContent = drawScore;
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    drawScore = 0;

    document.getElementById("message").textContent =
        "¡Elige tu jugada!";

    document.getElementById("details").textContent =
        "Esperando tu elección...";

    updateScore();
}
