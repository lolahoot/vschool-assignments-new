var readline = require("readline-sync");
function shipHere(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function isShip() {
    var random = shipHere(1, 5);
    return random === 5;
}
function Location() {
    this.isShip = isShip();
    this.hit = false;
    this.display = "~";
}
function makeGrid(x, y) {
    var grid = [];
    for (var i = 0; i < x; i++) { // runs 3 times
        var row = [];
        for (var j = 0; j < y; j++) { // runs 3 times every time i runs
            var newLocation = new Location();
            row.push(newLocation);
        }
        grid.push(row);
    }
    return grid;
}
var grid = makeGrid(10, 10)
var numShipsSunk = 0;
function userGuess() {
    var y = parseInt(readline.questionInt("Give me an X coordinate 1-10: ")) -1;
    var x = parseInt(readline.questionInt("Give me an Y coordinate 1-10: ")) -1;
    var guessedLocation = grid[x][y];

    guessedLocation.hit = true;

    if (guessedLocation.isShip) {
        guessedLocation.display = "X"
        numShipsSunk++
        console.log("HIT")
        console.log("You've hit " + numShipsSunk + " ships so far.")
    } else {
        guessedLocation.display = "O"
        console.log("MISS")
    }


    return guessedLocation.isShip;
}
function displayGrid(grid) {
    var display = ""
    for (var i = 0; i < grid.length; i++) {
        var row = ""
        for (var j = 0; grid[i].length; i++) {
            row += grid[i][j].display + " ";
        }
        display += row + "\n"
    }
    console.log(display);
}
while (numShipsSunk < 5) {
    userGuess();
}
console.log("You win!")

//
// var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];
// var alphabet = "abcdefghijklmnopqrstuvwxyz";
//
// for (var i = 0; i < people.length; i++)
