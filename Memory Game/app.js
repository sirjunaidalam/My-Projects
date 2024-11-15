// script.js

document.addEventListener("DOMContentLoaded", () => {
    const gameBoard = document.getElementById("game-board");
    const resetButton = document.getElementById("reset-button");
    const icons = ["🍎", "🍌", "🍇", "🍒", "🍉", "🍓", "🍑", "🍍"];
    let cardValues = icons.concat(icons); // Duplicate icons to make pairs
    let flippedCards = [];
    let matchedCards = [];

    // Shuffle function
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // Set up a new game
    function setupGame() {
        gameBoard.innerHTML = ""; // Clear previous game
        shuffle(cardValues);
        flippedCards = [];
        matchedCards = [];

        // Create cards
        cardValues.forEach(value => {
            const card = document.createElement("div");
            card.classList.add("card");
            card.dataset.value = value;
            card.addEventListener("click", flipCard);
            gameBoard.appendChild(card);
        });
    }

    // Flip card function
    function flipCard() {
        if (flippedCards.length < 2 && !this.classList.contains("flipped")) {
            this.classList.add("flipped");
            this.textContent = this.dataset.value;
            flippedCards.push(this);

            if (flippedCards.length === 2) {
                checkForMatch();
            }
        }
    }

    // Check if two flipped cards match
    function checkForMatch() {
        const [card1, card2] = flippedCards;
        if (card1.dataset.value === card2.dataset.value) {
            card1.classList.add("matched");
            card2.classList.add("matched");
            matchedCards.push(card1, card2);

            if (matchedCards.length === cardValues.length) {
                setTimeout(() => alert("Congratulations! You've matched all pairs!"), 500);
            }
        } else {
            setTimeout(() => {
                card1.classList.remove("flipped");
                card2.classList.remove("flipped");
                card1.textContent = "";
                card2.textContent = "";
            }, 1000);
        }

        flippedCards = [];
    }

    // Reset button
    resetButton.addEventListener("click", setupGame);

    setupGame();
});
