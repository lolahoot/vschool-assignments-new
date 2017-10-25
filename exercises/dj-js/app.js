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
  box.style.backgroundColor = "orange";
})
document.addEventListener('')
