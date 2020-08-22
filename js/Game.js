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
		if (gameWon) {
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
		// This block of code resets the game upon winning or losing.
		this.missed = 0;
		this.activePhrase = null;
		const phraseUl = document.querySelector("ul");
		phraseUl.innerHTML = "";
		const keyboard = document.querySelectorAll(".key");
		keyboard.forEach((key) => {
			key.className = "key";
			key.removeAttribute("disabled");
		});
		const heartContainers = document.querySelectorAll(".tries img");
		heartContainers.forEach((heartHealth) => {
			heartHealth.src = "images/liveHeart.png";
		});
	}

	/**
	 * Handles onscreen keyboard button clicks and mouse clicks.
	 * @param (HTMLButtonElement) button - The clicked button element
	 */
	handleInteraction(event) {
		// Variable containing the event targets className.
		const keyClicks = event.target.className;
		// These If Statements dictate what the game does as the user plays, whether it shows the gameWon Screen or gameOver screen, upon failing guesses or succesfully guessing the letters in the randomPhrase(). It also handles the removal of lifes upon failing guesses. Both work for either keystroke or mouseclick event listeners.
		if (keyClicks === "key") {
			const pressedKey = event.target;
			pressedKey.setAttribute("disabled", true);

			if (game.activePhrase.checkLetter(pressedKey.textContent) === false) {
				pressedKey.className += " wrong";
				return game.removeLife();
			} else {
				pressedKey.className += " chosen";
				game.activePhrase.showMatchedLetter(pressedKey.textContent);
				if (game.checkForWin() === true) {
					return game.gameOver(true);
				}
			}
		} else {
			const letterBoard = document.querySelectorAll("#qwerty button");
			const keyPress = event.key;
			letterBoard.forEach((key) => {
				if (key.innerHTML === keyPress) {
					key.setAttribute("disabled", true);
					if (game.activePhrase.checkLetter(keyPress) === false) {
						key.className += " wrong";
						return game.removeLife();
					} else {
						key.className += " chosen";
						game.activePhrase.showMatchedLetter(keyPress);
						if (game.checkForWin() === true) {
							return game.gameOver(true);
						}
					}
				}
			});
		}
	}
}
