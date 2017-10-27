var ask = require("readline-sync");

var operation = ["add", "multiply", "divide", "subtract"]

var first = ask.questionInt("Please enter your first number");

var second = ask.questionInt("Please enter your second number");

var list = ask.keyInSelect(operation, "Please select the operation you would like:");

function action(){
   if (list === 0)
  return first + second;

   if (list === 1)
   return first * second;

   if (list === 2)
   return first / second;

   if (list === 3)
   return first - second;
}

console.log("The result is " + action());


switch (list) {
  case 0:
  console.log(add(first, second));
  break;
  case 1:
  console.log(multiply(first, second));
  break;
  case 2:
  console.log(divide(first, second));
  break;
  case 3:
  console.log(subtract(first, second));
  break;
  default:
  console.log("You have canceled everything!");
}
