var ask = require("readline-sync");
var name = ask.question("What is your name?")
console.log("Hello " + name);
var choices =["Put hand in hole.", "Find the key.", "Open the door."]
var keyHeld = false;


while (choice != 0){
  var choice = ask.keyInSelect(choices, "What would you like to do?");

    if (choice === 1) {
      keyHeld = true;
      console.log("You found the key! What would you like to do next?")
    } else if (choice === 2) {
        if(keyHeld === true){
        console.log("Congratulations! You're Free!")
        break;
      } else if (choice === 2 && keyHeld === false){
      console.log("You can't open a locked door. Try something else.")
    } else {
      console.log("You die. A hole, really? Maybe you should think that through next time.")
    }
  }
}

// Luke Oliver [10:11 AM]
// ```var readline = require('readline-sync');
// var options = ["Put hand in the hole.", "Find the key.", "Open the door."];
// var keyHeld = false;
//
// while (playerInput != 0){
//   var playerInput = readline.keyInSelect(options, 'What would you like to do?');
//     if(playerInput === 1){
//       keyHeld = true;
//       console.log("You pick up the key.");
//     }else if(playerInput === 2){
//       if (keyHeld === true){
//         console.log("You opened the door and escaped!");
//         break;
//       } else{
//         console.log('The door is locked, idiot.')
//       }
// }else{
//   console.log('You died.');
// }
// }```
