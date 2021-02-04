const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    this.currentCard = this.deck.cards[this.turns];
    return this.currentCard;
  }

  takeTurn(guess) {
    let turn = new Turn(guess, this.returnCurrentCard())
    this.turns++;
    if (!turn.evaluateCard()) {
      this.incorrectGuesses.push(this.currentCard.id);
    }
    return turn.giveFeedback()
  }

  calculatePercentCorrect() {
    const percent = ((this.turns - this.incorrectGuesses.length) / this.turns) * 100;
    return Math.floor(percent);
  }

  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
  }

};

module.exports = Round;