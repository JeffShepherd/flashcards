const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('./Card');
const Deck = require('./Deck');
const Round = require('./Round');

class Game {
  constructor() {
    this.currentRound;

  }

  start() {
    const cards = [];

    prototypeQuestions.map(dataObject => {
      cards.push(new Card(dataObject.id, dataObject.question, dataObject.answers, dataObject.correctAnswer));
    });
    const deck = new Deck(cards);
    const round = new Round(deck);

  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;