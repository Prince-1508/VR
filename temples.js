// Data for Temples
const temples = [
  {
    name: "Vaishno Devi",
    description:
      "Located in Jammu & Kashmir, Vaishno Devi is one of the most sacred pilgrimage sites in India.",
    image: "images/vaishno-devi.jpeg",
    link: "vaishnodevi.html",
  },
  {
    name: "Kedarnath Mandir",
    description:
      "A sacred temple nestled in the Garhwal Himalayas of Uttarakhand. Jai Shree Kedar",
    image: "images/kedarnath_image.jpeg",
    link: "https://badrinath-kedarnath.gov.in/AboutUs/shri-kedarnath.aspx",
  },
  {
    name: "Golden Temple",
    description:
      "A symbol of spiritual and historical importance, located in Amritsar, Punjab. ..Golden Temple..",
    image: "images/golden_temple.jpeg",
    link: "https://www.goldentempleamritsar.org/",
  },
  {
    name: "Somnath Temple",
    description:
      "One of the 12 Jyotirlingas, located in Gujarat, Somnath is a symbol of resilience and devotion.",
    image: "images/somnath.jpeg",
    link: "https://en.wikipedia.org/wiki/Somnath_temple",
  },
  {
    name: "Meenakshi Temple",
    description:
      "A stunning architectural marvel located in Madurai, Tamil Nadu.",
    image: "images/meenakshi.jpeg",
    link: "https://en.wikipedia.org/wiki/Meenakshi_Temple",
  },
  {
    name: "Brihadeeswarar Temple",
    description:
      "One of India's largest temples located in Tamil Nadu, showcasing Chola architecture.",
    image: "images/brihadeeswarar.jpeg",
    link: "https://en.wikipedia.org/wiki/Brihadeeswarar_Temple",
  },
  {
    name: "Vaishno Devi",
    description:
      "Located in Jammu & Kashmir, Vaishno Devi is one of the most sacred pilgrimage sites in India.",
    image: "images/vaishno-devi.jpeg",
    link: "vaishnodevi.html",
  },
  {
    name: "Vaishno Devi",
    description:
      "Located in Jammu & Kashmir, Vaishno Devi is one of the most sacred pilgrimage sites in India.",
    image: "images/vaishno-devi.jpeg",
    link: "vaishnodevi.html",
  },
  {
    name: "Vaishno Devi",
    description:
      "Located in Jammu & Kashmir, Vaishno Devi is one of the most sacred pilgrimage sites in India.",
    image: "images/vaishno-devi.jpeg",
    link: "vaishnodevi.html",
  },
];

// DOM Element
const templeBox = document.getElementById("temple-box");

// Load Temples Dynamically
temples.forEach((temple) => {
  const templeItem = document.createElement("div");
  templeItem.classList.add("temple-item");

  templeItem.innerHTML = `
    <img src="${temple.image}" alt="${temple.name}">
    <h3>${temple.name}</h3>
    <p>${temple.description}</p>
    <a href="${temple.link}" class="know-more" target="_blank">Know More</a>
  `;

  templeBox.appendChild(templeItem);
});

// Carousel Logic
let currentIndex = 0;

// Function to update the position of the temple-box
const updateCarousel = () => {
  const itemWidth = document.querySelector(".temple-item").offsetWidth + 20; // Item width + gap
  templeBox.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
};

// Auto-scroll functionality
const autoScroll = () => {
  if (currentIndex < temples.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0; // Loop back to the first item
  }
  updateCarousel();
};

// Start auto-scroll every 3 seconds
let scrollInterval = setInterval(autoScroll, 3000);

// Left and Right Button Handlers
document.getElementById("left-btn").addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
    resetAutoScroll();
  }
});

document.getElementById("right-btn").addEventListener("click", () => {
  if (currentIndex < temples.length - 1) {
    currentIndex++;
    updateCarousel();
    resetAutoScroll();
  }
});

// Reset the auto-scroll timer when the user manually scrolls
const resetAutoScroll = () => {
  clearInterval(scrollInterval);
  scrollInterval = setInterval(autoScroll, 3000);
};

// Splash Screen Logic
window.addEventListener("load", () => {
  const splashScreen = document.getElementById("splash-screen");
  setTimeout(() => {
    splashScreen.style.display = "none"; // Hide the splash screen after 2 seconds
  }, 2000);
});
