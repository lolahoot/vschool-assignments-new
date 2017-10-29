// var countDown = 3;

var begin = 60
var start = 60
var hours = Math.floor((begin % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((start % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((start % (1000 * 60)) / 1000);
document.getElementById("end").innerHTML = hours + "h " + minutes + "m " + seconds + "s ";

var tick = hours + minutes + seconds;

var endOfWorld = setInterval(function(){
  console.log(tick);
  document.getElementById("end").innerHTML = tick-- ;
  if (tick === 0) {
    clearInterval(endOfWorld);
    document.getElementById("end").innerHTML = "Too late! It's the end!!"
  }
}, 1000);
