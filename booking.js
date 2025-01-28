// Handle the splash screen on page load
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