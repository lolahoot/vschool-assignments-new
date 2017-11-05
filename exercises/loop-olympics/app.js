// for (i = 0; i < 10; i++) {
//   console.log(i);
// }
//
// for (i = 9; i >= 0; i--) {
//   console.log(i);
// }
//
// var fruit = ["banana", "orange", "apple", "kiwi"]
// for (i = 0; i < fruit.length; i++) {
//   console.log(fruit[i]);
// }
//Bronze Medal
// var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// var array = [];
// for (i = 0; i < num.length; i++) {
//   array.push(num[i]);
// }
// console.log(array);

// for (i = 0; i < 102; i += 2) {
//   console.log(i)
// }
// var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"];
// var array = [];
// for (i = 1; i = fruit.length; i += 2) {
//   console.log(array.push(fruit[i]));
// }
//Silver medal
// var names = [];
// var occupations = [];
// var peopleArray = [
//   {name: "Harrison Ford", occupation: "Actor"}, {name: "Justin Beiber", occupation: "Singer"}, {name: "Vladmir Putin", occupation: "Politition"}, {name: "Oprah", occupation: "Entertainer"}
// ]
//
// for (var i  = 0; i < peopleArray.length; i++) {
//     console.log(peopleArray[i].name);
// }
// var names = []
// var occupation = []
//   for (var i = 0; i < peopleArray.length; i++) {
//   names.push(peopleArray[i].name); occupation.push(peopleArray[i].occupation);
//   }
//
// console.log(names);
// console.log(occupation);
//
// for (var i = 0; i < peopleArray.length; i++) {
//   if(i % 2 === 0) {
//     names.push(peopleArray[i].name);
//     continue;
//   }
//   if (i % 2 !== 0) {
//     occupations.push(peopleArray[i].occupation);
//   }
// }
// console.log(names);
// console.log(occupations);

// Gold medal 1 -
var array = [];
var grid = [];
for (var i = 0; i <3; i++) {
  array[i] = 0;
  grid[i] = array;
}
console.log(grid);

var matrix = [];
for (var i = 0; i < 3; i++) {
  matrix[i] = [];
  for (var j = 0; j < 3; j++) {
    matrix[i][j] = 0;
  }
}
// console.log(matrix);

var zero = [];
for (i = 0; i < 3; i++) {
  zero.push([0, 0, 0]);
}
// console.log(zero);
