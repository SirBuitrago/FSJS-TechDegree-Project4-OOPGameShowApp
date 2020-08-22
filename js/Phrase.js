/******************************************
Brian Buitrago
Treehouse Techdegree:  
FSJS project 4 - OOP Game App
******************************************/
//Thank you for taking a look at my code. I am going for the "Exceeds Expectations" grade. If my code is not on par with that grade, then please reject this project for resubmission.

class Phrase {
	constructor(phrase) {
		this.phrase = phrase.toLowerCase();
	}

	/**
	 * Display phrase on game board
	 */
	addPhraseToDisplay() {
		let noDisplay = document.querySelector("#phrase ul");
		noDisplay.innerHTML = "";
		// This let variable grabs the given phrase and splits() the the phrase into an array of letters.
		let phraseLetters = this.phrase.split("");
		// Iterates through the letters within the given phrase.
		phraseLetters.forEach((letter) => {
			// This let variable creates the li's for the letters in the phrase and stores them.
			let li = document.createElement("LI");
			li.innerHTML = letter;
			// Appends the li to the DOM.
			noDisplay.appendChild(li);

			if (letter === " ") {
				li.className = "space";
			} else {
				li.className = "hide letter";
			}
		});
	}
	/**
	 * Checks if passed letter is in phrase
	 * @param (string) letter - Letter to check
	 */
	checkLetter(letter) {
		// This variable takes the letters from a random phrase and stores it inside an array. The split() method, splits the phrase into substrings and stores them into an array.
		let gameboardLetters = this.phrase.split("");
		// The includes() method here checks to see if the selected letter is inside the 'phrase array'.
		return gameboardLetters.includes(letter);
	}

	/**
	 * Displays passed letter on screen after a match is found
	 * @param (string) letter - Letter to display
	 */
	showMatchedLetter(letter) {
		// This variable selects all of the appended li elements.
		let domLetters = document.querySelectorAll(" li");

		// Here I iterate through the Dom elements with the forEach() method and set the appropriate attribute, if the appropriate letter is selected. This only shows the selected li.
		domLetters.forEach((li) => {
			if (li.innerHTML === letter) {
				li.setAttribute("class", "show");
			}
		});
	}
}
