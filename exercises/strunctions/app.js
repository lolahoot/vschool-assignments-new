var str = 'hello';
var str2 = 'there we go again';
var fruitStr = "Bananas, Apples, Kiwi, Pineapple"

var returned = str.concat(" ", str2, " ", fruitStr);
console.log(returned);

var index = str.indexOf("h");
console.log(index);

var last = str.lastIndexOf("l");
console.log(last);

var match = str2.match(/e/gi);
console.log(match);

var replace = str.replace("e", "u");
console.log(replace);

var slice = str2.slice(0,6);
console.log(slice);

var split = str2.split();
console.log(split);

var lowerCase = str2.toLowerCase();
console.log(lowerCase);

var upperCase = str2.toUpperCase();
console.log(upperCase);

var substr = str2.substr(6, 5);
console.log(substr);

var fruit = function() {
  var newFruitStr = fruitStr.replace("Bananas", "Peaches")
  return newFruitStr.toUpperCase();
}
console.log(fruit());

// var fruitSlice = function() {
//     var newFruitStr1 = fruitStr.match(/Kiwi/gi);
//     console.log(newFruitStr1);
//     var betterFruit = newFruitStr1.substr(0, 3);
//     console.log(betterFruit);
//
//     // var together = betterFruit.concat(newFruitStr1);
//     // var together2 = concat(fruitStr);
//     // var newFruitStr  = concat2.split(0,7);
// }
// console.log(fruitSlice());
