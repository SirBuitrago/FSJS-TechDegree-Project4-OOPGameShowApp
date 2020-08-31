/******************************************
Brian Buitrago
Treehouse Techdegree:
FSJS project 4 - OOP Game App
******************************************/
//Thank you for taking a look at my code. I am going for the "Exceeds Expectations" grade. If my code is not on par with that grade, then please reject this project for resubmission.

/*
adds an event listener to the "start game" button, required for the player to intiate the game. It hides the intial page and presents the hidden phrase, along with other necessary game elements.
*/
let game;
// All on screen keyboard and buttons, as well as scoreboard stored within variables.

const scores = document.querySelector("#scoreboard ol");
const overlay = document.querySelector("#overlay");
const btnReset = document.querySelector("#btn__reset");
const keyboardKeys = document.querySelectorAll(".key");

// Function to start a new game. Decided it was more practical and cleaner to store the methods in one function to call on later.
const newGame = () => {
	game = new Game();
	game.gameboardReset();
	game.startGame();
};

// Event listener for the start screen's "new game" button. It initializes the newGame() function to begin the game.
btnReset.addEventListener("click", () => {
	newGame();
});

// Event listener that checks for mouse clicks form the user, the handleInteraction() method gives it, it's functionality.
keyboardKeys.forEach((button) => {
	button.addEventListener("click", (e) => {
		game.handleInteraction(e.target);
	});
});

//Event listener that checks for individual keystrokes form the user, the handleInteraction() method gives it it's functionality.(Also for the exceeds expectations grade)
document.addEventListener("keydown", (e) => {
	// Conditional that checks a new game has started, before it allows the handleInteraction() method for keypresses. This helps prevent the method from firing even when the gameOver or gameWon screen is active.
	if (overlay.style.display === "none") {
		// Iterates over all the keys and applies the condition that the handleInteraction() method only fires when the key pressed matches the event target.
		keyboardKeys.forEach((button) => {
			if (button.textContent === e.key && !button.disabled) {
				game.handleInteraction(button);
			}
		});
	}
});
