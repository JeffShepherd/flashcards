class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard;
  }

  returnCurrentCard() {
    this.currentCard = this.deck.cards[0];
    return this.currentCard;
  }
}

module.exports = Round;