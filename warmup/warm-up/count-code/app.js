var letters = "aaacodebbbcodexxcodecozexxcope"

function codeCount(str) {
  var string = str.match(/co.e/g).length;
  console.log(string);

}
codeCount(letters);
