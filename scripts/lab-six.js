var amelie = new Audio("../assets/audio/Amelie.mp3");
var fly = new Audio("../assets/audio/Fly.mp3");
var chopin = new Audio("../assets/audio/Chopin.mp3");
var colors = new Audio("../assets/audio/Colors.mp3");
var you = new Audio("../assets/audio/You.mp3");

var slider = document.getElementById("volume");
var output = document.getElementById("volumeValue");



slider.oninput = function() {
  output.innerHTML = this.value;
}

function playSound(x)
{
  var volume = document.getElementById('volume').value;

  console.log(x + " sound is playing...");
  console.log("The volume is: " + volume*0.01);

  x.volume = volume*0.01;
  x.currentTime=0;
  x.play();
}

const amelieButton = document.getElementById('amelieButton');
amelieButton.onclick = function() {
  playSound(amelie);
}

const flyButton = document.getElementById('flyButton');
flyButton.onclick = function() {
  playSound(fly);
}

const chopinButton = document.getElementById('chopinButton');
chopinButton.onclick = function() {
  playSound(chopin);
}

const colorsButton = document.getElementById('colorsButton');
colorsButton.onclick = function() {
  playSound(colors);
}

const youButton = document.getElementById('youButton');
youButton.onclick = function() {
  playSound(you);
}