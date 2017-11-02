// var add = function add (a, b) {
//     return a + b === 4;
// }
//
// module.exports = add;

var palindrome = function(str) {
      // var first = str.replace(/[^\w]/g, "");
      var first = str.replace(/\W/g, "");
      first = first.split("").reverse().join("").toLowerCase();
      var check = str.replace(/\W/g, "").toLowerCase();
      console.log(first)
      console.log(check)
      if (first === check) {
        return true;
      } else {
        return false;
      }

}
module.exports = palindrome;
//
palindrome("t@ac0 ( cA*t");
