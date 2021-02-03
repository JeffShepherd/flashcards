const chai = require('chai');
const Deck = require('../src/Deck');
const expect = chai.expect;

describe('Deck', function() {

  it('should be a function', function() {
    const deck = new Deck();
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const deck = new Deck();
    expect(deck).to.be.an.instanceof(Deck);
  }); 

  // it('should store a user\'s guess to the question', function() {
  //   const turn = new Turn('callback function');
  //   expect(turn.guess).to.equal('callback function');
  // });  

  // it('should store the current card in play', function() {
  //   const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
  //   const turn = new Turn('object literal', card);

  //   expect(turn.currentCard).to.be.an.instanceof(Card);
  //   expect(turn.currentCard.answers).to.deep.equal(['object', 'array', 'function']);
  // });  

  // it('should return the guess', function() {
  //   const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
  //   const turn = new Turn('object literal', card);

  //   expect(turn.returnGuess()).to.equal('object literal');
  // });

  // it('should return the current card', function() {
  //   const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
  //   const turn = new Turn('string literal', card);

  //   expect(turn.returnCard()).to.be.an.instanceof(Card);
  //   expect(turn.returnCard()).to.equal(card);
  // });

  // it('should evalauate guess vs correct answer and return boolean value', function() {
  //   const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
  //   const turn1 = new Turn('object', card);
  //   const turn2 = new Turn('string literal', card);

  //   expect(turn1.evaluateCard()).to.equal(true);
  //   expect(turn2.evaluateCard()).to.equal(false);
  // });

  // it('should return incorrect or correct based on accuracy of guess', function() {
  //   const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
  //   const turn1 = new Turn('object', card);
  //   const turn2 = new Turn('string literal', card);

  //   expect(turn1.giveFeedback()).to.equal('correct!');
  //   expect(turn2.giveFeedback()).to.equal('incorrect!');
  // });

});