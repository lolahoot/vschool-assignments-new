var characters = "1234567890@#$_qwertyuiopasdfghklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM()-=+[]{}|?><,.~`!/"
var randomChar = ""
function pass(length) {
  for (var i = 0; i < length; i++) {
    randomChar += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return randomChar;
}
console.log(pass(7));
