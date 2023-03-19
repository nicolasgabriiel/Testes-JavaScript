const carouselContainer = document.querySelector('.carousel-container');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let currentPosition = 0;
const itemWidth = carouselContainer.clientWidth / 3;

prevButton.addEventListener('click', () => {
  if (currentPosition > 0) {
    currentPosition--;
    carouselContainer.style.transform = `translateX(${-currentPosition * itemWidth}px)`;
  }
});

nextButton.addEventListener('click', () => {
  if (currentPosition < 2) {
    currentPosition++;
    carouselContainer.style.transform = `translateX(${-currentPosition * itemWidth}px)`;
  }
});