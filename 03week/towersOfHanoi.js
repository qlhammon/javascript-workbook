'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

const stackA=stacks.a;
const stackB=stacks.b;
const stackC=stacks.c;
const stacksArr=[stackA, stackB, stackC];
// Create an array that houses all stacks so a forEach function can be applied(shortens code).

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece() {

     let startStack.pop();
     let endStack.push(startStack);
  //Write a function that allows you to move the blocks(pop/push).

    }

})

});

movePiece();

}

function isLegal() {

  forEach (i = 0; i < stacksArr.length-1; i++) {
       if (stacksArr[i] > stacksArr[i + 1]){
         const oK=stacksArr.pop();
       }
  // Write a test that insures that the piece cannot be stacked on a smaller block.
  // The value for each piece needs to have a previous piece is less than current piece function.

}

function checkForWin() {

    forEach (i = 0; i < stacksArr.length-1; i++) {
      if (stacksArr[i] > stacksArr[i+1] && stacksArr.length===4) {
        return "winner";
      }else{
        return "try again"
      }
    }
  }
  checkForWinner();
  // Write a function that shows a win if all of the pieces are successfully moved to one stack.

}

function towersOfHanoi(startStack, endStack) {
  const stack1 = stacks.c.slice(0,4);
  const stack2 = stacks.a.concat(stacks.c);

  console.log(stack2);

  // Create a function to evaluate the beginning and ending of a stack.

}

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}
