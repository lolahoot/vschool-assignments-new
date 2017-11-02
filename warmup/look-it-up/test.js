var chai = require('chai');
var assert = chai.assert;

var newWord = require('./app.js').newWord
var lookUp = require('./app.js').lookUp

describe("A dictionary to add and lookup words",
  function(){
  it("should store the word and it's definition in the dictionary when added",
    function(){
      newWord('apple', 'crispy and delicious fruit');
      assert.equal(lookUp('apple'), "crispy and delicious fruit")
    })
    it("should return undefined when we lookup a word not present",
    function(word){
      assert.isUndefined(lookUp("watermelon"));
    });
})
