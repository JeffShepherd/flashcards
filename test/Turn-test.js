const chai = require('chai');
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const expect = chai.expect;

describe('Turn', () => {

  let card;

  beforeEach(() => {
    card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
  })

  it('should be a function', () => {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  }); 

  it('should store a user\'s guess to the question', () => {
    const turn = new Turn('callback function');
    expect(turn.guess).to.equal('callback function');
  });  

  it('should store the current card in play', () => {
    const turn = new Turn('object literal', card);

    expect(turn.currentCard).to.be.an.instanceof(Card);
    expect(turn.currentCard.answers).to.deep.equal(['object', 'array', 'function']);
  });  

  it('should return the guess', () => {
    const turn = new Turn('object literal', card);

    expect(turn.returnGuess()).to.equal('object literal');
  });

  it('should return the current card', () => {
    const turn = new Turn('string literal', card);

    expect(turn.returnCard()).to.be.an.instanceof(Card);
    expect(turn.returnCard()).to.equal(card);
  });

  it('should evalauate guess vs correct answer and return boolean value', () => {
    const turn1 = new Turn('object', card);
    const turn2 = new Turn('string literal', card);

    expect(turn1.evaluateCard()).to.equal(true);
    expect(turn2.evaluateCard()).to.equal(false);
  });

  it('should return incorrect or correct based on accuracy of guess', () => {
    const turn1 = new Turn('object', card);
    const turn2 = new Turn('string literal', card);

    expect(turn1.giveFeedback()).to.equal('correct!');
    expect(turn2.giveFeedback()).to.equal('incorrect!');
  });

});