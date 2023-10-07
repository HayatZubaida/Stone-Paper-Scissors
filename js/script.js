const choices = [
    { name: "Rock", image: "images/rock.png" },
    { name: "Paper", image: "images/paper.png" },
    { name: "Scissors", image: "images/scissors.png" }
];

const container = document.querySelector(".player-choice");

choices.forEach(choice => {
    const button = document.createElement("button");
    button.classList.add("choice-button");
    button.textContent = choice.name;

    button.addEventListener("click", () => {
        showPlayerChoiceImage(choice.image);
        const computerChoice = getComputerChoice(choices); // Pass the choices array to the function
        computerChoiceText.textContent = `Computer chose: ${computerChoice.name}`;
        const result = decideWinner(choice.name, computerChoice.name);
        resultText.textContent = result;
    });

    container.appendChild(button);
});

function showPlayerChoiceImage(imageSrc) {
    const playerChoiceImage = document.createElement("img");
    playerChoiceImage.src = imageSrc;
    playerChoiceImage.alt = "Player's Choice";
    playerChoiceImage.style.width = "100px"; // Adjust the width as desired
    playerChoiceImage.style.height = "100px"; // Adjust the height as desired

    // Clear any previous choice image
    const playerChoiceContainer = document.querySelector(".player-choice");
    const existingImage = playerChoiceContainer.querySelector("img");
    if (existingImage) {
        playerChoiceContainer.removeChild(existingImage);
    }

    playerChoiceContainer.appendChild(playerChoiceImage);
}

function showChoicesImages(playerImageSrc, computerImageSrc) {
    // Player's choice image
    const playerChoiceImage = document.createElement("img");
    playerChoiceImage.src = playerImageSrc;
    playerChoiceImage.alt = "Player's Choice";
    playerChoiceImage.style.width = "100px"; // Adjust the width as desired
    playerChoiceImage.style.height = "100px"; // Adjust the height as desired

    // Computer's choice image
    const computerChoiceImage = document.createElement("img");
    computerChoiceImage.src = computerImageSrc;
    computerChoiceImage.alt = "Computer's Choice";
    computerChoiceImage.style.width = "100px"; // Adjust the width as desired
    computerChoiceImage.style.height = "100px"; // Adjust the height as desired

    // Clear any previous choice images
    const playerChoiceContainer = document.querySelector(".player-choice");
    const computerChoiceContainer = document.querySelector(".computer-choice-image");
    const existingPlayerImage = playerChoiceContainer.querySelector("img");
    const existingComputerImage = computerChoiceContainer.querySelector("img");
    
    if (existingPlayerImage) {
        playerChoiceContainer.removeChild(existingPlayerImage);
    }

    if (existingComputerImage) {
        computerChoiceContainer.removeChild(existingComputerImage);
    }

    // Append the images to their respective containers
    playerChoiceContainer.appendChild(playerChoiceImage);
    computerChoiceContainer.appendChild(computerChoiceImage);
}

function getComputerChoice(choices) {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function decideWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) return "It's a tie!";
    if (
        (playerChoice === "Rock" && computerChoice === "Scissors") ||
        (playerChoice === "Paper" && computerChoice === "Rock") ||
        (playerChoice === "Scissors" && computerChoice === "Paper")
    ) {
        return "You win :) ";
    } else {
        return "Computer wins :( ";
    }
}

const choiceButtons = document.querySelectorAll(".choice-button");
const computerChoiceText = document.getElementById("computer-choice-text");
const resultText = document.getElementById("result-text");
const playAgainButton = document.getElementById("play-again");

choiceButtons.forEach(button => {
    button.addEventListener("click", () => {
        const playerChoice = button.textContent;
        const computerChoice = getComputerChoice(choices);
        showChoicesImages(`images/${playerChoice.toLowerCase()}.png`, `images/${computerChoice.name.toLowerCase()}.png`);
        computerChoiceText.textContent = `Computer chose: ${computerChoice.name}`;
        const result = decideWinner(playerChoice, computerChoice.name);
        resultText.textContent = result;
    });
});

playAgainButton.addEventListener("click", () => {
    clearChoiceImages(); // Clear both player and computer choice images
    computerChoiceText.textContent = "Waiting for player...";
    resultText.textContent = "Make your choice!";
});

function clearChoiceImages() {
    const playerChoiceContainer = document.querySelector(".player-choice");
    const computerChoiceContainer = document.querySelector(".computer-choice-image");

    // Remove player's choice image
    const existingPlayerImage = playerChoiceContainer.querySelector("img");
    if (existingPlayerImage) {
        playerChoiceContainer.removeChild(existingPlayerImage);
    }

    // Remove computer's choice image
    const existingComputerImage = computerChoiceContainer.querySelector("img");
    if (existingComputerImage) {
        computerChoiceContainer.removeChild(existingComputerImage);
    }
}

