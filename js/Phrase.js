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

		let phraseLetters = this.phrase.split("");
		phraseLetters.forEach((letter) => {
			let li = document.createElement("LI");
			li.innerHTML = letter;
			noDisplay.appendChild(li);

			if (letter === " ") {
				li.className = "space";
			} else {
				li.className = "hide letter";
			}
		});
	}
}
