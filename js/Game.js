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
		let overlay = document.getElementById("overlay");
		let title = document.querySelector("#overlay .title");
		let startButton = document.querySelector("#btn__reset");

		if (gameWon) {
			overlay.className = "win";
			title.textContent = "You Are Victorious!";
			startButton.textContent = "Think you can go again?";
			overlay.style.display = "flex";
		} else {
			overlay.className = "lose";
			title.textContent = "Seems you didn't make the cut...";
			startButton.textContent = "Wanna give it another shot? Click Here";
			overlay.style.display = "flex";
		}
	}

	/**
	 * This logic controls various aspects of ingame play.
	 */

	handleInteraction() {}
}
