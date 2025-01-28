// Additional interactivity for the carousel
document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    let isHovered = false;
  
    carousel.addEventListener('mouseenter', () => {
      carousel.style.animationPlayState = 'paused';
    });
  
    carousel.addEventListener('mouseleave', () => {
      carousel.style.animationPlayState = 'running';
    });
  });
  
  function redirectTo(page) {
    window.location.href = page;
  }
  
  // Infinite Scroll Logic
  const carousel = document.querySelector('.carousel');
  const cloneItems = () => {
    const items = document.querySelectorAll('.carousel-item');
    items.forEach((item) => {
      const clone = item.cloneNode(true);
      carousel.appendChild(clone);
    });
  };
  
  // Clone items to create endless scrolling
  cloneItems();


 
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



const toggle = document.getElementById("theme-toggle");

    // Listen for toggle changes
    toggle.addEventListener("change", () => {
      if (toggle.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
      } else {
        document.documentElement.setAttribute("data-theme", "light");
      }
    });

    // Set default theme to light
    document.documentElement.setAttribute("data-theme", "light");




    document.querySelectorAll('.rotating-button').forEach(button => {
      button.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default behavior
        const dropdown = button.nextElementSibling; // Target dropdown
        const isVisible = dropdown.style.display === 'block';
        document.querySelectorAll('.dropdown-content').forEach(content => {
          content.style.display = 'none'; // Hide all dropdowns
        });
        dropdown.style.display = isVisible ? 'none' : 'block'; // Toggle current dropdown
      });
    });
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', (event) => {
      if (!event.target.closest('li')) {
        document.querySelectorAll('.dropdown-content').forEach(content => {
          content.style.display = 'none';
        });
      }
    });
    

 // Select the menu item and submenu
const menuItem = document.querySelector('.menu-item');
const submenu = document.querySelector('.submenu');

// Toggle submenu visibility on click
menuItem.addEventListener('click', function (event) {
  event.preventDefault(); // Prevent default link behavior
  submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
});

// Close the submenu when clicking outside
document.addEventListener('click', function (event) {
  if (!menuItem.contains(event.target)) {
    submenu.style.display = 'none';
  }
});



module.exports = {
  theme: {
    extend: {
      animation: {
        fadeInDown: "fadeInDown 1s ease-out",
        fadeInLeft: "fadeInLeft 1s ease-out",
      },
      keyframes: {
        fadeInDown: {
          "0%": { opacity: 0, transform: "translateY(-50px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeInLeft: {
          "0%": { opacity: 0, transform: "translateX(-50px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
      },
    },
  },
};


 // Word-by-word animation function
 function startWordAnimation() {
  const textElement = document.querySelector(".word-animation");
  const textContent = textElement.getAttribute("data-text").split(" ");
  let index = 0;
  textElement.textContent = ""; // Clear text before animation starts

  const interval = setInterval(() => {
    if (index < textContent.length) {
      textElement.textContent += textContent[index] + " ";
      index++;
    } else {
      clearInterval(interval);
    }
  }, 300);
}

// Intersection Observer to trigger animation on scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        startWordAnimation();
        observer.unobserve(entry.target); // Stop observing after animation starts
      }
    });
  },
  { threshold: 0.5 } // Trigger when 50% of the element is visible
);

// Observe the word-animation element
const animatedSection = document.querySelector(".word-animation");
observer.observe(animatedSection);
