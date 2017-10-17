var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

var newVegetables = vegetables.pop();
// console.log(newVegetables);

var newFruit = fruit.shift();
// console.log(newFruit);

var index = fruit.indexOf("orange");
// console.log(index);

var addFruit = fruit.push(1);
// console.log(addFruit);

var vegLength = vegetables.length;
// console.log(vegLength);

var addVeg = vegetables.push(3);
// console.log(addVeg);

var food = fruit.concat(vegetables);
// console.log(food);

var remove = food.splice(4,2);
// console.log(remove);

var reversed = food.reverse();
// console.log(reversed);

var finished = food.join(", ");
console.log(finished);
