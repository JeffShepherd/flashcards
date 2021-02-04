const chai = require('chai');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const expect = chai.expect;

describe('Deck', () => {

  let card1, card2, card3, deck;

  beforeEach(() => {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    deck = new Deck([card1, card2, card3]);
  });

  it('should be a function', () => {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Turn', () => {
    expect(deck).to.be.an.instanceof(Deck);
  }); 

  it('should be instantiated with an array of cards', () => {
    expect(deck.cards).to.deep.equal([card1, card2, card3]);
  });  

  it('should know how many cards are in the deck', () => {
    expect(deck.countCards()).to.equal(3);
  });
});