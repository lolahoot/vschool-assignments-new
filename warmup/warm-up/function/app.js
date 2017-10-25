
  //prints number 1-100 each on a new line
  // for each multiple of 3, print "Fizz" instead of the number
  // for each multiple of 5, pring "Buzz" instead of the number
  // for numbers which are multiples of both 3 and 5 print "FizzBuzz"
  // instead of the number

//  function num() {
//   for (var i = 1; i <= 100; i++) {
//   console.log(i);
//   }
// }
// num();

function fizzBuzz() {
  for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log ("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i)
    }
  }
}
fizzBuzz();
