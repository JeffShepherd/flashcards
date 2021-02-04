const chai = require('chai');
const Card = require('../src/Card');//required?
const Deck = require('../src/Deck');//required?
const Round = require('../src/Round');
const expect = chai.expect;

describe('Round', () => {

  let deck, round, card1, card2, card3;
  
  beforeEach(() => {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  });
  
  it('should be a function', () => {
    const round = new Round();
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Turn', () => {
    const round = new Round();
    expect(round).to.be.an.instanceof(Round);
  }); 

  it('should return the current card being played', () => {
    expect(round.returnCurrentCard()).to.equal(card1);
  });

  describe('takeTurn', () => {

    it('should update turn count', () => {
      round.takeTurn('William');
      expect(round.turns).to.equal(1);
      round.takeTurn('William');
      expect(round.turns).to.equal(2);
    });

    it('should add current card id to incorrectGuesses if guess incorrect', () => {
      const card1 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
      const deck = new Deck([card1]);
      const round = new Round(deck);
  
      round.takeTurn('William');
      expect(round.incorrectGuesses.length).to.equal(1);
      expect(round.incorrectGuesses[0]).to.equal(12);
    });

    it('should give feedback revelant to the accuracy of the guess', () => {
      expect(round.takeTurn('pug')).to.equal('incorrect!');
      expect(round.takeTurn('gallbladder')).to.equal('correct!');
    });

    it('should make the next card the current card', () => {
      round.takeTurn('pug')
      expect(round.currentCard).to.equal(card1);
      round.takeTurn('gallbladder')
      expect(round.currentCard).to.equal(card2);
    });

  });

  it('should return the percentage of correct guesses', () => {
    round.takeTurn('sea otter');
    expect(round.calculatePercentCorrect()).to.equal(100);
    round.takeTurn('appendix');
    round.takeTurn('Fitzgerald');
    expect(round.calculatePercentCorrect()).to.equal(66);
  });

});