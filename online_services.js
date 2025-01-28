// Select all cards
const cards = document.querySelectorAll('.card');

// Add click event listeners to each card
cards.forEach((card) => {
    card.addEventListener('click', () => {
        const serviceName = card.querySelector('h2').innerText;
        alert(`You selected the ${serviceName} service!`);
        
        // Example navigation (uncomment below if specific pages are available)
        // if (card.id === 'ropeway') {
        //     window.location.href = 'ropeway.html';
        // } else if (card.id === 'helicopter') {
        //     window.location.href = 'helicopter.html';
        // }
    });
});


let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function showNextSlide() {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add('active');
}

// Automatically change slides every 3 seconds
setInterval(showNextSlide, 3000);




window.addEventListener('load', () => {
    const splashScreen = document.getElementById('splash-screen');
    setTimeout(() => {
      splashScreen.style.display = 'none'; // Hide the splash screen after 5 seconds
    }, 2000); // Match the duration of the holdScreen animation
  });
  
  // Handle navigation links to show splash animation before redirection
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault(); // Prevent immediate navigation
      const targetUrl = e.target.href; // Get the target URL
      const splashScreen = document.getElementById('splash-screen');
  
      // Show splash animation again
      splashScreen.style.display = 'flex';
      splashScreen.style.opacity = '1';
  
      setTimeout(() => {
        window.location.href = targetUrl; // Redirect after animation
      }, 2000); // Wait for splash duration (5 seconds)
    });
  });
  
  
  