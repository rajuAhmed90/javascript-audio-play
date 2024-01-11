
var button = document.getElementById("button");
var stop = document.getElementById("stop");

var audio = new Audio('audio/game.mp3')

button.addEventListener("click", function(){
  
    // audio.currentTime = 60; this line of code start the audio after 60s
    audio.play();
    this.textContent = "audio now playing";
})

stop.addEventListener("click", function(){
    
    audio.pause();
    // audio.currentTime = 0; // this line of code restart the audio
    
})

