var  box = document.getElementById('square')

function hover() {
    this.style.backgroundColor = "blue";
}
function down() {
  this.style.backgroundColor = "red";
}
function letGo () {
  this.style.backgroundColor = "yellow";
}
function double() {
  this.style.backgroundColor = "green";
}

box.addEventListener('mouseover', hover)
box.addEventListener('mousedown', down)
box.addEventListener('mouseup', letGo)
box.addEventListener('dblclick', double)
document.addEventListener('mousewheel', function() {
  box.style.backgroundColor = "orange"
});
switch (body.addEventListener('keydown'), function(key) {
  case b:
  if (key.keyCode == '66') {
    square.style.backgroundColor = 'blue'}
  case r:
  if (key.keyCode == '82') {
    square.style.backgroundColor = 'red'}
  case y:
  if (key.keycode == '')
  }
})
