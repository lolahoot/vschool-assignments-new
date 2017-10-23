// Given 2 strings, return their concatenation, except omit the first char
// of each. The strings will be at least length 1.

var nonStart = function(a, b) {
  return a.substr(1) + b.substr(1);
}
console.log(nonStart("Hello", "World"));
