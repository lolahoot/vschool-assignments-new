const chai = require("chai");
const assert = chai.assert;
const matching = require("./app")

describe("A function that contains an array of every word repeated more than once in the string."), () => {
  it("should return an array of each repeated word", function(){
    assert.deepEqual(matching("hello hello i don't wanna hello say hello goodbye i say hello")(["hello","i", "say"])
  });
});
