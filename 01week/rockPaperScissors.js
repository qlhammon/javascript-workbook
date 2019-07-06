'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function rockPaperScissors(hand1, hand2) {
  if(hand1===hand2){
    return 'tie'
  };
  if(hand1==='rock'){
    if(hand2==='scissors'){
      return 'hand1 wins'
    }
    else(return 'hand2 wins')
  };
  if(hand1==='scissors'){
    if(hand2==='paper'){
      return 'hand1 wins'
    }
    else(return 'hand2 wins')
  };
  if(hand1==='paper'){
    if(hand2==='rock'){
      return 'hand1 wins'
    }
    else(return 'hand2 wins')
  };// If the two hands are equal to one another the result is a tie.
    // If hand1 is rock and hand2 is scissors, hand1 wins. If hand2 is paper, it wins.
    // If hand1 is scissors and hand2 is paper, hand1 wins. If hand2 is rock, hand2 wins.
    // If hand1 is paper and hand2 is rock, hand1 wins. If hand2 is scissors, hand2 wins.
}

function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log( rockPaperScissors(answer1, answer2) );
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
    });
  });
} else {

  getPrompt();

}
