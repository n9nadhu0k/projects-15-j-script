 
  const video = document.getElementById("myVideo");
  const button = document.getElementById("playPauseButton");
  
  function togglePlayPause() {
    if (video.paused) {
      video.play();
      button.innerHTML = "&#10074;&#10074;"; // pause icon
    } else {
      video.pause();
      button.innerHTML = "&#9658;"; // play icon
    }
  }
  
  button.addEventListener("click", togglePlayPause);
