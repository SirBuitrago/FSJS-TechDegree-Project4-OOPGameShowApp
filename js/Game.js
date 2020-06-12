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

		createPhrases();
		{
			const randomPhrases = [
				new Phrase("Caught between my only routine"),
				new Phrase("A recluse on an old film"),
				new Phrase("I chew the scenery down to the bone"),
				new Phrase("Said the king to the river"),
				new Phrase("You would not believe the things I saw overseas"),
			];
			return randomPhrases;
		}
	}
}
