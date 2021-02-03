const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    this.currentCard = this.deck.cards[0];
    return this.currentCard;
  }

  takeTurn(guess) {
    this.turns++
    
    let turn = new Turn(guess, this.returnCurrentCard())

    if (!turn.evaluateCard()) {
      this.incorrectGuesses.push(this.currentCard.id)
    }

    // return turn.giveFeedback()
  }
}

module.exports = Round;