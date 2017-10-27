// CONSTRUCTOR FUNCTIONS
var ask = require("readline-sync");

var firstName = ask.question("What is your first name?");

function Person(fname, lname, age, isMale, hobbies){
  this.firstName = fname;
  this.lastName = lname;
  this.age = age;
  this.isMale = isMale;
  this.hobbies = hobbies;
  this.speak = function(){
    console.log("Hi my name is " + this.firstName + " " + this.lastName);
  }
}
var ericArray = []

// for (var i = 0; i <50; i++) {
  var newUser = new Person(firstName, "Jones", 28, true, ["kayaking", "kite flying", "knitting"]);
    ericArray.push(newUser);
// }
console.log(newUser);
newUser.speak();


// in an object -
// var person = {
//   firstName: fname;
//   lastName: lname;
//   age: age;
//   isMale: isMale;
//   hobbies: hobbies;
// }
