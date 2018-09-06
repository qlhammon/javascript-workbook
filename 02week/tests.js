if (typeof describe === 'function') {
  describe('#rockPaperScissors()', () => {
//The first test should insure that the entry is valid.
    it('should detect a valid entry', ()=> {
      assert.equal(rockPaperScissors('rock','paddle'), "Hand two, please use valid entry!");
      assert.equal(rockPaperScissors('car','paper'), "Hand one, please use valid entry!");
      assert.equal(rockPaperScissors('scissors','chicken'), "Hand two, please use valid entry!");
    });
//The tie test is already complete with all 3 possible tests of tie.
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");

    });
//There should be be 3 win tests for each of the Hands.
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('scissors', 'rock'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
      assert.equal(rockPaperScissors('paper', 'rock'), "Hand one wins!");
      assert.equal(rockPaperScissors('scissors', 'paper'), "Hand one wins!")
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
