const chai = require('chai');
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

    it('should keep track of current round', function() {
      game.start();
      expect(game.currentRound).to.be.an.instanceOf(Round);
    });

  });
});