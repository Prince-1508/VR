// Slider Functionality
const slides = document.querySelectorAll('.image-slider img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);
setInterval(nextSlide, 5000); // Automatic sliding every 5 seconds

// Booking Form Logic
const poojaMode = document.getElementById('pooja-mode');
const personsSection = document.getElementById('persons-section');

poojaMode.addEventListener('change', () => {
  if (poojaMode.value === 'in-absence') {
    personsSection.style.display = 'none';
  } else {
    personsSection.style.display = 'block';
  }
});
