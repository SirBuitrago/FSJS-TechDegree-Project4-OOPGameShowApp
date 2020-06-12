/******************************************
Brian Buitrago
Treehouse Techdegree:
FSJS project 4 - OOP Game App
******************************************/
//Thank you for taking a look at my code. I am going for the "Exceeds Expectations" grade. If my code is not on par with that grade, then please reject this project for resubmission.

const game = new Game();
game.phrases.forEach((phrase, index) => {
	console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
});
