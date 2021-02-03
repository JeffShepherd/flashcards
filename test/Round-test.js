const chai = require('chai');
const Card = require('../src/Card');//required?
const Deck = require('../src/Deck');//required?
const Round = require('../src/Round');
const expect = chai.expect;

describe('Round', function() {

  it('should be a function', function() {
    const round = new Round();
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const round = new Round();
    expect(round).to.be.an.instanceof(Round);
  }); 

  it('should return the current card being played', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    expect(round.returnCurrentCard()).to.equal(card1);
  });

  describe('takeTurn', function() {

    it('should update turn count', function() {
      const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
      const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
      const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
      const deck = new Deck([card1, card2, card3]);
      const round = new Round(deck);
  
      round.takeTurn('William');
      expect(round.turns).to.equal(1);
      round.takeTurn('William');
      expect(round.turns).to.equal(2);
    });

    it('should add current card id to incorrectGuesses if guess incorrect', function() {
      const card1 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
      const deck = new Deck([card1]);
      const round = new Round(deck);
  
      round.takeTurn('William');
      expect(round.incorrectGuesses.length).to.equal(1);
      expect(round.incorrectGuesses[0]).to.equal(12);
    });

    it('should give feedback revelant to the accuracy of the guess', function() {
      const card1 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
      const deck = new Deck([card1]);
      const round = new Round(deck);
  
      expect(round.takeTurn('William')).to.equal('incorrect!');
      expect(round.takeTurn('Fitzgerald')).to.equal('correct!');
    });

    // how to make next card become current card? (use current turn value as index value in returnCurrentCard??)
    // it('should ')


  });






});