


/*
console.log("Up and running!");
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";


console.log("User flipped " + cardOne);
console.log("User flipped " + cardThree);
console.log("User flipped " + cardTwo);


*/


var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];



var checkForMatch = function() {
	if (cardsInPlay.length === 2){
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
};

};







var flipCard = function(cardId) {

	console.log("User flipped " + cards[cardId]); 

	cardsInPlay.push(cards[cardId]);

	checkForMatch();
};


flipCard(2);
flipCard(0);













/*







	var cardOne = cards[0];
	var cardTwo = cards[2];

	cardsInPlay.push(cardOne);
	cardsInPlay.push(cardTwo);

	if (cardsInPlay.length === 2){
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");	
	} else {
		alert("Sorry try again.");
	}
}

}

*/






















