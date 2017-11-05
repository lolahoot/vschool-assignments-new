//ES6

// const let

var name = 'Marcus Peterson'

//const is used to declare variables that Never change
//let is used to declare variables that may change, are expected to change

const name = 'Marcus Peterson';
let address = '123 Fake Street';

const vowels = ['a', 'e', 'i', 'o', 'u'];

function always = const

we no longer write with function - see below

const add = (a,b) => {
    return a + b
}

// (if it is an implicit return you don't need return)

const add = (a,b) => a + b;

const add = (a,b) => a + b * 6;

const double = num => num * 2; //no parenthesis needed if there is only one parameter

const hello = () => console.log //if no parameter use blank parenthesis

const numbers = [1,2,3,4];

// numbers.map(function(number, index){
//   return 2 * number;
// }) - same as below

numbers.map((number,index) => 2 * number);

// rest and spread operator ...

function printNumbers(...numbers) {
  numbers.map(num => {
    console.log(num);
  });
}

printNumbers(1,2,3,4,5)

function printNumbers(animal,...numbers) {
  numbers.map(num => {
    console.log(num);
  });
}

printNumbers("cat",1,2,3,4,5)

// takes everything after... and puts in an array (the rest...)

// ...inventory
//
// ...monsterDroppedItems

.concat puts two arrays together
const defaultColors ['red', 'green'];
const fallColors ['orange', 'brown'];
const usersFavoriteColors['yellow','green','turquise']

const allColors =["blue",...defalutColors,...fallColors...usersFavoriteColors,"purple"]

// spreads out items from layered array into one dimensional array

function makeShoppingListArray(...food){
  if(food.indexOf("milk") === -1) {
      return["milk",...food];
  }
      return  food;
}

const shoppingItems = ['oranges','bread','eggs','lettuce']

console.log(makeShoppingListArray(...shoppingItems));

// for function declaration, constructor use the word function
//
// expression or anonymose functions use fat arrow =>

// what is the difference between var and let
// both let us redfine  - difference is the scope.
//
// var name = "John";
//
// function changeName() {
//   var name = "Lucy";
//   console.log(name); (would console.log "Lucy")It references to the function scope. Its been defined in the function
// }
//
// console.log(name); Would console.log ("John") because defined globally.
//
// things are scoped to the function with var
// things are scoped to the curly brace with let

// for (var i = 0; i < 5; i++) {
//   console.log(i)
//   for(var j = 0; j < 5; j++) {
//     console.log('j',j)
//   }
// }
//
// for (let i = 0; i < 5; i++) {
//   console.log("i", i)
//   for(let i = 0; i < 5; i++) {
//     console.log('i',i)
//   }
// }

//
//
// const name = [{name } ]= people

const isEngineer({title, department}) => {
    return title === 'Engineer' && department === 'Engineering';
};
