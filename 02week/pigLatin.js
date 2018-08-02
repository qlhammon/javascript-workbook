'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(str){
  isValidInput(str)=>isNaN
  const vowel = ['a','e','i','o','u'];
  const words = str.split(" ");
  const pig = "";
  for(i = 0; i < words.length; i++){
    words[i] += words[i][0];
    words[i] = words[i].slice(1);
    words[i] += "ay";
    pig += " " + words[i];
}
}

pigLatin("consonant");

  // (=>isValidInput())Check if it's a valid input(no numbers).
  //For every word, take the first consonant(s) and add to the end with an 'ay'suffix. Find a way to specify vowels from consonants.
  // Create vowel variable(possibly create array of vowels to distinguish).
  //Create ?/: for vowel/consonant operation.
  //(=>isVowel() can hold vowel array)Split word and go through each letter up to first vowel(test if its a vowel). If not a vowel split to new array.
  //Check if first letter is a vowel or consonant, if it's a vowel add suffix'yay'.
  //Trim letter caps.
  //Target first letter(s) and move to the end(find syntax).
  //(=>addToEnd)Join first letter plus suffix to rest of string(if it's a consonant).
}


function getPrompt() {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}
