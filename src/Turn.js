
class Turn {
  constructor(guess, currentCard) {
    this.guess = guess;
    this.currentCard = currentCard;
  }
  
  returnGuess() {
    return this.guess;
  }

  returnCard() {
    return this.currentCard;
  }

  evaluateCard() {
    return this.guess === this.currentCard.correctAnswer; 
  }

  giveFeedback() {
    if (this.evaluateCard()) {
      return 'correct!';
    } else {
      return 'incorrect!'
    }
  }

};

module.exports = Turn;