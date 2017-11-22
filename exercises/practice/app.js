// var monkeyTrouble = function(aSmile, bSmile) {
//  if (aSmile === true && bSmile === true) {
//    console.log("true");
//  } else if (aSmile === false && bSmile === false) {
//    console.log("true");
//  } else { console.log("false");
//  }
// }
// monkeyTrouble

str = []
let withoutEnd2 = function(str){
  // str.split("")
  // str.pop();
  // str.shift();
  return str.slice(1,-1);

}
console.log(withoutEnd2("Hello World"));
