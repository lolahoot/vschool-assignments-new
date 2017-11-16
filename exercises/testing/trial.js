var frontBack = function(str) {
		let newString = str.split("");
		let char = newString.shift();
		let lastChar = newString.pop();
		let final = lastChar.toString() + newString.toString() + char.toString()
  	return final;
}

console.log(frontBack("sit"));
