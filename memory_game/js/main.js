console.log("Up and running!");

//var cardOne = "queen";
//var cardTwo = "queen";
//var cardThree = "king";
//var cardFour = "king";

// console.log("User flipped" + cardOne);
// console.log("User flipped" + cardThree);

let cards = ["queen", "queen", "king", "king"]
let cardsInPlay = []

let cardOne = cards[0]
cardsInPlay.push(cardOne)
console.log("User flipped queen")

let cardTwo = cards[2]
cardsInPlay.push(cardTwo)
console.log("User flipped king")

//check to see if the length of the cardsInPlay array is 2.
if (cardsInPlay.length === 2) {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!")
  } else {
    alert("Sorry, try again.")
  }
}
