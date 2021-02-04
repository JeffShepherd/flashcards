const chai = require('chai');
const Card = require('../src/Card');//required?
const Deck = require('../src/Deck');//required?
const Round = require('../src/Round');
const Game = require('../src/Game');
const expect = chai.expect;

describe('Game', function() {

  it('should be a function', function() {
    const game = new Game();
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', function() {
    const game = new Game();
    expect(game).to.be.an.instanceOf(Game);
  }); 

  it('should have a property of currentRound default to undefined', function() {
    const game = new Game();
    expect(game.currentRound).to.equal(undefined);
  }); 

  describe('start()', function() {
    it('should keep track of current round', function() {
      const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
      const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
      const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
      const deck = new Deck([card1, card2, card3]);
      const round = new Round(deck);
      const game = new Game();

      game.start();
      expect(game.currentRound).to.be.an.instanceOf(Round);
    });
  });



});