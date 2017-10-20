var lyrics = ["This", "hit", "that", "ice", "cold",
              "Michelle", "Pfeiffer", "that", "white",
              "gold", "This", "one", "for", "them",
              "hood", "girls", "Them", "good", "girls",
              "straight", "masterpieces", "Stylin'",
              "whilen'", "livin'", "it", "up", "in",
              "the", "city", "Got", "Chucks", "on",
              "with", "Saint", "Laurent", "Gotta", "kiss",
              "myself", "I'm", "so", "pretty"];
// function print() {
//   console.log(lyrics.join(" "));
// }
// print();

// function backwards() {
//   console.log(lyrics.reverse().join(" "));
// }
// backwards();

// function third() {
//   for (var i = 0; i <= lyrics.length; i += 2) {
//     console.log(lyrics[i]);
//   }
// }
// third();

// Andrew's Code
function reverseTwo() {
  var reversed = [];
  for (var i = 1; i < lyrics.length; i += 2) {
    reversed.push(lyrics[i] + " " + lyrics[i - 1]);
  }
  console.log(reversed.join(" "));
}
reverseTwo();
