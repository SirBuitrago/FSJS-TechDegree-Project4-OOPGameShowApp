/******************************************
Brian Buitrago
Treehouse Techdegree:
FSJS project 4 - OOP Game App
******************************************/
//Thank you for taking a look at my code. I am going for the "Exceeds Expectations" grade. If my code is not on par with that grade, then please reject this project for resubmission.

/*
adds an event listener to the "start game" button, required for the player to intiate the game. It hides the intial page and presents the hidden phrase, along with other necessary game elements.
*/
let btnReset = document.querySelector("#btn__reset");
let game = null;

btnReset.addEventListener("click", () => {
	game = new Game();
	game.startGame();
});
