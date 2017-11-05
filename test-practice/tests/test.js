// first argument = search term -> e
//second argument = phrases -> hello, hi
//return = hello

var chai = require("chai");
var assert = chai.assert;
var findFunction = require("./app.js")

describe("takes a search term and returns the phrases that match", function() {
  it("should take a search term and return any phrases containing that term", function(){
    assert.deepEqual(findFunction("e", ["hello", "fellow", "hi"]), ["hello", "fellow"])
    assert.deepEqual(findFunction("dad", ["daddy", "mommy","dadilion"]), ["daddy", "dadilion"])
  });
  it("should not be case sensitive", function(){
    assert.deepEqual(findFunction("dAd", ["Daddy", "mommy", "dadilion"]), ["daddy", "dadilion"])
  });
  it("should be able to search through an array of objects", function(){

  });
})
