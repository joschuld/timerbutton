function startTimer() {
    var startButton = document.getElementById('startButton');
    startButton.disabled = true; // Disable the button once clicked
  
    var bellSound = document.getElementById('bellSound');
    var minutes = 5; // Change this to the desired meditation duration in minutes
  
    var seconds = minutes * 60;
    var countdown = setInterval(function() {
      var minutesRemaining = Math.floor(seconds / 60);
      var secondsRemaining = seconds % 60;
  
      startButton.innerHTML = minutesRemaining + 'm ' + secondsRemaining + 's';
  
      if (seconds <= 0) {
        clearInterval(countdown);
        startButton.innerHTML = 'Start Meditation';
        startButton.disabled = false; // Enable the button again
        bellSound.play(); // Play the bell sound
      } else {
        seconds--;
      }
    }, 1000);
  }
  