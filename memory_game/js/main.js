console.log("Up and running!");

// console.log("User flipped" + cardOne);
// console.log("User flipped" + cardThree);

let cards = [
  {
  rank: "queen",
  suit:"hearts",
  cardImage: "images/queen-of-hearts.png"
  },
  {
  rank: "queen",
  suit: "diamonds",
  cardImage: "images/queen-of-diamonds.png"
  },
  {
  rank: "king",
  suit: "hearts",
  cardImage: "images/king-of-hearts.png"
  },
  {
  rank: "king",
  suit: "diamonds",
  cardImage: "images/king-of-diamonds.png"
  }
]
let cardsInPlay = []

let cardOne = cards[0]
cardsInPlay.push(cards[0])
console.log("User flipped" + " " + cards[0].rank)
console.log(cards[0].suit)
console.log(cards[0].cardImage)

let cardTwo = cards[2]
cardsInPlay.push(cards[2])
console.log("User flipped" + " " + cards[2].rank)
console.log(cards[2].suit)
console.log(cards[2].cardImage)

//check to see if the length of the cardsInPlay array is 2.
if (cardsInPlay.length === 2) {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!")
  } else {
    alert("Sorry, try again.")
  }
}
