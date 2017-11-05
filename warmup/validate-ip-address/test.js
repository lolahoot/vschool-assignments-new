var chai = require('chai');
var assert = chai.assert;

var ipFinder = require('./app.js');

describe("A function to determine if a given string is a valid IP address", function(){
  it("should have 4 decimal numbers and have a number between 0 and 255 at each decimal point", function(){
      assert.equal(ipFinder("172.240.39.1"), true);
  });
  it("should return true if each decimal set are between 0-255", function(){
      assert.isTrue(ipFinder("124.23.54.90"));
  });

  it("should return false if it is an invalid ip address", function(){
      assert.isFalse(ipFinder("300.45.1.3"))
  });

  it("should return false if there is a blank space", function() {
      assert.isFalse(ipFinder("30..4.1"))
  });
})
