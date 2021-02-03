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

  // it('should be instantiated with an array of cards', function() {
  //   const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  //   const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
  //   const deck = new Deck([card1, card2]);

  //   expect(deck.cards).to.deep.equal([card1, card2]);
  // });  

  // it('should know how many cards are in the deck', function() {
  //   const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  //   const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
  //   const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
  //   const deck = new Deck([card1, card2, card3]);

  //   expect(deck.countCards()).to.equal(3);
  // });

});