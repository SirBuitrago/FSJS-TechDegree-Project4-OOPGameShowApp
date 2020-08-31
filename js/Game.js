/******************************************
Brian Buitrago
Treehouse Techdegree:
FSJS project 4 - OOP Game App
******************************************/
//Thank you for taking a look at my code. I am going for the "Exceeds Expectations" grade. If my code is not on par with that grade, then please reject this project for resubmission.

class Game {
	constructor() {
		this.missed = 0;
		this.phrases = this.createPhrases();
		this.activePhrase = "null";

		/**
		 * Creates phrases for use in game
		 * @return {array} An array of phrases that could be used in the game
		 */
	}
	createPhrases() {
		// I store the randomPhrases in an array and return them at the end of the code block for later use.
		const randomPhrases = [
			new Phrase("Caught between my only routine"),
			new Phrase("A recluse on an old film"),
			new Phrase("I chew the scenery down to the bone"),
			new Phrase("Said the king to the river"),
			new Phrase("You would not believe the things I saw overseas"),
		];
		return randomPhrases;
	}
	/**
	 * Selects random phrase from phrases property
	 * @return {Object} Phrase object chosen to be used
	 */

	getRandomPhrase() {
		return this.phrases[Math.floor(Math.random() * this.phrases.length)];
	}

	/**
	 * Begins game by selecting a random phrase and displaying it to user
	 */
	startGame() {
		let overLay = (document.querySelector("#overlay").style.display = "none");
		overLay;

		const getPhraseObject = game.getRandomPhrase();
		const displayPhrase = new Phrase(getPhraseObject.phrase);

		displayPhrase.addPhraseToDisplay();
		this.activePhrase = displayPhrase;
	}
	/**
	* Checks for winning move
	* @return {boolean} True if game has been won, false if game wasn't
	won
	*/
	checkForWin() {
		let hiddenLiElements = document.querySelectorAll('li[class~="hide"]');
		if (hiddenLiElements.length === 0) {
			return true;
		} else {
			return false;
		}
	}

	/**
	 * Increases the value of the missed property
	 * Removes a life from the scoreboard
	 * Checks if player has remaining lives and ends game if player is out
	 */
	removeLife() {
		// Adds a counter of 1, to the missed object.
		this.missed += 1;
		// Variable containing image of the live heart image.
		const heartContainer = document.querySelector(
			'img[src="images/liveHeart.png"]'
		);
		heartContainer.src = "images/lostHeart.png";
		// If statement to dictate the booleon value of 'gameOver()'.
		if (this.missed === 5) {
			this.gameOver(false);
		}
	}

	/**
	 * Displays game over message
	 * @param {boolean} gameWon - Whether or not the user won the game
	 */
	gameOver(gameWon) {
		// Variables containing distinct elements in the DOM, regarding the gameover() screen and gameWon screen.

		let startButton = document.querySelector("#btn__reset");
		let overlay = document.getElementById("overlay");
		let title = document.querySelector("#overlay .title");

		// I build in an if statement that dictates the text content and screen that is shown when you win or lose the game.
		if (gameWon === true) {
			overlay.className = "win";
			title.textContent = "You Are Victorious!";
			startButton.textContent = "Play Again";
			overlay.style.display = "flex";
		} else {
			overlay.className = "lose";
			title.textContent = "What a bummer...you lost";
			startButton.textContent = "Start Over?";
			overlay.style.display = "flex";
		}
	}

	/**
	 * Decided to make the gameboard reset its own method within the Game Object.
	 * The gameboard reset does exactly as decribed. It handles resetting all aspects of the game, for a new game. Including the removal of appended LIs, "chosen" buttons, "wrong" or "right" buttons and the onscreen phrase.
	 */
	gameboardReset() {
		document.querySelector("#phrase ul").innerHTML = "";

		// Iterates over the keyboard buttons and applies the following properties.
		keyboardKeys.forEach((button) => {
			button.disabled = false;
			button.classList.add("key");
			button.classList.remove("wrong");
			button.classList.remove("chosen");
		});
		// Handles resetting the heart containers on screen, for a new game.
		const heartContainers = document.querySelectorAll(".tries img");
		heartContainers.forEach((heartHealth) => {
			heartHealth.src = "images/liveHeart.png";
		});
	}

	/**
	 * Handles onscreen keyboard button clicks and mouse clicks.
	 * @param (HTMLButtonElement) button - The clicked button element
	 */
	handleInteraction(button) {
		button.disabled = true;
		// These If Statements dictate what the game does as the user plays, whether it shows the gameWon Screen or gameOver screen, upon failing guesses or succesfully guessing the letters in the randomPhrase(). It also handles the removal of lifes upon failing guesses. Both work for either keystroke or mouseclick event listeners.

		if (!this.activePhrase.checkLetter(button.textContent)) {
			button.classList.add("wrong");
			this.removeLife();
		} else {
			button.classList.add("chosen");
			this.activePhrase.showMatchedLetter(button.textContent);

			if (this.checkForWin()) {
				this.gameOver(true);
			}
		}
	}
}
