const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
    });

    // Redirect to home page
    function goHome() {
      window.location.href = 'index.html';
    }

    