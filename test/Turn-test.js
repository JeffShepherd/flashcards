const chai = require('chai');
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const expect = chai.expect;

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  }); 

  it('should store a user\'s guess to the question', function() {
    const turn = new Turn('callback function');
    expect(turn.guess).to.equal('callback function');
  });  

  it('should store the current card in play', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object literal', card);

    expect(turn.currentCard).to.be.an.instanceof(Card);
    expect(turn.currentCard.answers).to.deep.equal(['object', 'array', 'function']);
  });  

  it('should return the guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object literal', card);

    expect(turn.returnGuess()).to.equal('object literal');
  });

  it('should return the current card', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('string literal', card);

    expect(turn.returnCard()).to.be.an.instanceof(Card);
    expect(turn.returnCard()).to.equal(card);
  });

});