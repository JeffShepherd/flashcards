const chai = require('chai');
const Card = require('../src/Card');
const Round = require('../src/Round');
const Game = require('../src/Game');
const expect = chai.expect;

describe('Game', function() {
  
  let game;

  beforeEach(function() {
    game = new Game();
  })

  it('should be a function', function() {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', function() {
    expect(game).to.be.an.instanceOf(Game);
  }); 

  it('should have a property of currentRound default to undefined', function() {
    expect(game.currentRound).to.equal(undefined);
  }); 

  describe('start()', function() {

    it('should reassign currentRound to an instance of Round', function() {
      game.start();
      expect(game.currentRound).to.be.an.instanceOf(Round);
    });

    it('should create a new Round with a card array as an arguement', function() {
      const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
      const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
      const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
      const cards = [card1, card2, card3];
 
      game.createCurrentRound(cards);
      expect(game.currentRound.deck.cards.length).to.equal(3);
      expect(game.currentRound.deck.cards[1]).to.equal(card2)
    });

  });
});