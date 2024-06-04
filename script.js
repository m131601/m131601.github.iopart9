const carouselImages = document.querySelector('.carousel-item');
const images = document.querySelectorAll('.carousel-item img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

function showImage(index) {
    if (index >= images.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = images.length - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    carouselImages.style.transform = `translateX(${offset}%)`;
}

nextButton.addEventListener('click', () => {
    showImage(currentIndex + 1);
});

prevButton.addEventListener('click', () => {
    showImage(currentIndex - 1);
});

showImage(currentIndex);
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', function() {
      navLinks.classList.toggle('nav-active');
  });
});

function toggleMenu() {
  const navList = document.querySelector('.nav-list');
  navList.classList.toggle('active');
}

  
