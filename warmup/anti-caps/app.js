//
//   var toChange = "ThisIsTheStringToSplit";
//   console.log(toChange);
// function antiCaps(a) {
//     for (var i = 0; i < toChange.length; i++) {
//       if (a.charAt.[i]===(^)) {
//         a.charAt.[i].toLowerCase
//       } else {
//         a.charAt.[i].toUpperCase
//       }
//     return;
// }
// console.log(antiCaps(toChange));

// function antiCaps(str){
//   var newString = [];
//   var splitWord = str.split('');
//   for (var i = 0; i < str.length; i++){
//     if (splitWord[i] === splitWord[i].toUpperCase()){
//       newString.push(splitWord[i].toLowerCase());
//     } else if (splitWord[i] === splitWord[i].toLowerCase()){
//       newString.push(splitWord[i].toUpperCase());
//     }
//   }return newString.join('')
// }
// antiCaps('kILL mE');

function isCaps(letter) {
  return letter === letter.toUpperCase();
}

// function antiCaps(str) {
//   var newString = "";
//   for(var i = 0; i < str.length; i++) {
//     isCaps(str[i]) ? newString += str[i].toLowerCase() :newString += str[i].toUpperCase(); //Ternary
//
//     // if(isCaps(str[i])) {
//     //   newString += str[i].toLowerCase();
//     // } else {
//     //   newString += str[i].toUpperCase();
//     // }
//   }
//   console.log(newString);
// }
//
// antiCaps("Hello");

// map method only works on arrays
// map takes a function as an argument - (x) gives you the item at each index
// map is like a for loop
// (x) is like [i]
function antiCaps(str) {
  var splitStr = str.split('');
  // str.split - turns it into an array so the returns can run through the array
  // TERENARY possible here
// this return is the whole array
  return splitStr.map(function(x){
    if(x === x.toUpperCase()) {
      return x.toLowerCase();
      // inside the function are only a return for each individual item of the array
    } else if (x === x.toLowerCase()) {
      return x.toUpperCase();
    }
  });
}
antiCaps('aPPles');

// TERENARY - can only check one condition

return splitStr.map(function(x)) {
  return isCaps(x) ? x.toLowerCase() : x.toUpperCase();
})
}
antiCaps('aPPles')

// If return then you can add any method to the type of return. If returning and array can use array method see example below (.join) if a return is a string a string method will work...
function isCaps(letter) {
  return letter === letter.toUpperCase();
}

function antiCaps(str) {
  var splitStr = str.split('');
  return splitStr.map(function(x) {return isCaps(x) ? x.toLowerCase(): x.toUpperCase();}).join('');
}

antiCaps('aPPleS');
