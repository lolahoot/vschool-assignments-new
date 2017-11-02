// UNIT TESTING
// MOCHA - npm install mocha - g
// Chai-Assertian library npm install chai - assert is a property of chai
//
var chai = require('chai');
var assert = chai.assert;
// var add = require('./app.js');
//
// describe("A function to check if two arguments add up to 4", function(){
//     it("should return true if the arguments add up to 4", function(){
//         add(2, 2);
//         assert.equal(add(2,2), true);
//     });
//
//     it("should return false if the arguements don't add up to 4", function(){
//       add(4, 1);
//       assert.equal(add(4,1), false);
//     });
// });

var palindrome = require('./app.js');

describe("A function to check if an arguement is a palindrome", function(){
    it("should return true if the arguement is a palindrome", function(){
      assert.equal(palindrome("star rats"), true);
    });
    it("should return false if the arguement is not a palindrome", function(){
      assert.equal(palindrome("palindrome"),false);
    });
    it("should return true if the contains punction and is a palindrome", function(){
      assert.equal(palindrome("taco! CAt!"),false);
    })
})
