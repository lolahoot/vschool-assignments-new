var dictionary = {};

var newWord = function(word, definition){
  dictionary [word] = definition;
}

var lookUp = function(word){
  return dictionary[word];
  // how to access a key value pair in an object
}

module.exports = {
  newWord,
  lookUp
};
