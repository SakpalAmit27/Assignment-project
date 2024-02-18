let slideIndex = 0;
let slides = document.querySelectorAll('.slide');
let autoPlayInterval;

function showSlide(index) {
  if (index < 0) {
    slideIndex = slides.length - 1;
  } else if (index >= slides.length) {
    slideIndex = 0;
  }

  document.querySelector('.slider').style.transform = `translateX(-${slideIndex * 100}%)`;
}

function changeSlide(direction) {
  showSlide(slideIndex += direction);
}

function togglePlayPause() {
  let playPauseButton = document.querySelector('.play-pause-btn');
  if (playPauseButton.innerHTML === 'Pause') {
    playPauseButton.innerHTML = 'Play';
    clearInterval(autoPlayInterval);
  } else {
    playPauseButton.innerHTML = 'Pause';
    autoPlayInterval = setInterval(() => changeSlide(1), 2000); // this will change linke every 2 seconds // 
  }
}

// a function to autoplay // 
togglePlayPause();
