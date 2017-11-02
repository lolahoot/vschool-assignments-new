var ask = require("readline-sync");

var locations = function Location(isShip, hit, display){
  this.isShip = false;
  this.hit = false;
  this.display = display;
}

var random = Math.floor(Math.random() * (5 - 1)) + 1;
var grid  = function(x, y) {
  for (var i = 0; i < x; i++)
    grid.push[]);
    for(var j = 0; j < y; i++)
    // if (random > 1) {
  //   var water = new Location(false, false, "~")
  //   grid[i].push("~")
  // } else {
  //   var ship = new Location(true, false, "~");
  //   grid[i].push("X")
  // }
}
