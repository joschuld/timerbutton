function startTimer() {
  var startButton = document.getElementById('startButton');
  startButton.disabled = true; // Disable the button once clicked

  var bellSound = document.getElementById('bellSound');
  var minutes = 5; // Change this to the desired meditation duration in minutes

  var seconds = minutes * 60;
  var countdown = setInterval(function() {
    var minutesRemaining = Math.floor(seconds / 60);
    var secondsRemaining = seconds % 60;

    var minutesDisplay = String(minutesRemaining).padStart(2, '0');
    var secondsDisplay = String(secondsRemaining).padStart(2, '0');

    document.getElementById('minutes').textContent = minutesDisplay;
    document.getElementById('seconds').textContent = secondsDisplay;

    if (seconds <= 0) {
      clearInterval(countdown);
      startButton.textContent = 'Start';
      startButton.disabled = false; // Enable the button again
      bellSound.play(); // Play the bell sound
    } else {
      seconds--;
    }
  }, 1000);
}
