const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('./Card');
const Deck = require('./Deck');
const Round = require('./Round');

class Game {
  constructor() {
    this.currentRound;
  };

  start() {
    this.createCurrentRound(this.createCards());
    this.printMessage(this.currentRound.deck);
    this.printQuestion(this.currentRound);
  }
  
  createCurrentRound(cards) {
    const deck = new Deck(cards);
    this.currentRound = new Round(deck);
  }

  createCards() {
    const cards = [];
    prototypeQuestions.forEach(dataObject => {
      cards.push(new Card(dataObject.id, dataObject.question, dataObject.answers, dataObject.correctAnswer));
    });
    return cards;
  }

  printMessage(deck) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
};

module.exports = Game;