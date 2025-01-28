const accommodations = {
  Bhawan: [
    { name: "Durga Bhawan", type: "Room", price: "₹3400", image: "durga_bhawan1.png", url: "durga_bhawan.html" },
    { name: "New Kalika Bhawan", type: "Room", price: "₹3400", image: "new_kalika_bhawan.jpg",url: "new_kalika_bhawan.html" },
    { name: "Vaishnavi Bhawan", type: "Room", price: "₹1100", image: "vaishnavi_bhawan.png" },
    { name: "Vaishnavi Bhawan Hut 2 Bedded", type: "Room", price: "₹1100", image: "room_hut.png" },
    { name: "Vaishnavi Bhawan Hut 4 Bedded", type: "Room", price: "₹1600", image: "vaishnavi_bhawan_4_bedded.png" },
    { name: "Gouri Bhawan Hut 4 Bed", type: "Room", price: "₹1600", image: "gouri_bhawan.avif" },
    { name: "Manokamana Bhawan Dormitory", type: "Dormitory", price: "₹150", image: "MANOKAMANA.png" },
    { name: "Durga Bhawan Dormitory", type: "Dormitory", price: "₹150", image: "DURGA_BHAWAN_DORMITORY.png" },
  ],
  Ardhkuwari: [
    { name: "Shailputri Bhawan Dormitory", type: "Dormitory", price: "₹150", image: "dormitory2.jpg" },
    { name: "Sharda Bhawan", type: "Room", price: "₹800", image: "dormitory2.jpg" },
  ],
  Sanjhichhat: [
    { name: "Mangla Bhawan", type: "Room", price: "₹1800", image: "sanjhichhat_room.jpg" },
  ],
  Katra: [
    { name: "Shakti Bhawan Dormitory", type: "Dormitory", price: "₹150", image: "katra_dormitory.jpg" },
    { name: "Aashirvad Complex Dormitory", type: "Dormitory", price: "₹150", image: "ashirvad_bhawa.jpeg" },
    { name: "Trikuta Bhawan Dormitory", type: "Dormitory", price: "₹150", image: "katra_dormitory.jpg" },
    { name: "SCG Dormitory", type: "Dormitory", price: "₹200", image: "katra_dormitory.jpg" },
    { name: "Niharika Complex Double Bedded AC", type: "Room", price: "₹2200", image: "niharika_2_bedded.jpg" },
    { name: "Niharika Complex Four Bedded AC", type: "Room", price: "₹2800", image: "niharika_4_bedded.jpg" },
    { name: "Niharika Complex Double Bedded AC Delux", type: "Room", price: "₹2200", image: "niharika_2_bedded_delux.webp" },
    { name: "Niharika Complex Four Bedded AC Delux", type: "Room", price: "₹2800", image: "niharika_4_bedded_delux.webp" },

  ],
  Jammu: [
    { name: "Vaishnavi Dham, Sarsawati Dham Non AC Dormitory ", type: "Dormitory", price: "₹150", image: "dormitory2.jpg" },
    { name: "Kalika Dham, Sarsawati Dham AC Dormitory  ", type: "Dormitory", price: "₹200", image: "dormitory2.jpg" },
    
    { name: "Vaishnavi Dham Double Bedded AC Room", type: "Room", price: "₹1500", image: "vaishnavi_dham_2_bedded.jpg" },
    { name: "Vaishnavi Dham Double Bedded AC Suites", type: "Room", price: "₹2000", image: "VAISHNAVI_DHAM.jpg" },
    { name: "Kalika Dham Double Bedded AC Room", type: "Room", price: "₹1500", image: "KALIKA_DHAM.avif" },
  ],
};

const availabilityList = document.getElementById("availability-list");
const locationSelect = document.getElementById("location-select");
const roomBtn = document.getElementById("room-btn");
const dormitoryBtn = document.getElementById("dormitory-btn");

let selectedType = "Room"; // Default type is Room

// Filter accommodations based on location and type
function updateAvailability() {
  const location = locationSelect.value;
  const filtered = accommodations[location]?.filter((item) => item.type === selectedType) || [];

  // Clear existing cards
  availabilityList.innerHTML = "";

  if (filtered.length > 0) {
    // Render new cards
    filtered.forEach((item) => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <h4>${item.name}</h4>
        <button class="price-box">Price: ${item.price}</button>
        <button class="book-now-btn" data-url="${item.url}">BOOK NOW</button>
      `;

      availabilityList.appendChild(card);
    });


   

  } else {
    // Handle locations with no availability
    const noAvailabilityMessage = document.createElement("div");
    noAvailabilityMessage.className = "no-availability-message";

    if (location === "Sanjhichhat" && selectedType === "Dormitory") {
      noAvailabilityMessage.textContent = "No dormitory is available for the selected location.";
    } else if (location === "bhairavmandir") {
      noAvailabilityMessage.textContent = "No rooms and dormitories are available for the selected location.";
    } else {
      noAvailabilityMessage.textContent = "No availability for the selected type.";
    }

    availabilityList.appendChild(noAvailabilityMessage);
  }
}







// Event listeners for buttons
roomBtn.addEventListener("click", () => {
  selectedType = "Room";
  updateAvailability();
});

dormitoryBtn.addEventListener("click", () => {
  selectedType = "Dormitory";
  updateAvailability();
});

// Event listener for location select
locationSelect.addEventListener("change", updateAvailability);

// Initialize availability list
updateAvailability();

document.addEventListener("DOMContentLoaded", () => {
  const audioElement = document.getElementById("background-audio");
  const audioToggleBtn = document.getElementById("audio-toggle");

  // Ensure audio playback starts after user interaction
  const enableAudioPlayback = () => {
    audioElement.play().catch(() => {
      // Show message if autoplay fails
      audioToggleBtn.textContent = "🔇 Unmute Audio";
      audioElement.muted = true;
    });
  };

  // Add event listener for user interaction
  document.body.addEventListener("click", enableAudioPlayback, { once: true });

  // Toggle audio mute/unmute
  audioToggleBtn.addEventListener("click", () => {
    audioElement.muted = !audioElement.muted;
    audioToggleBtn.textContent = audioElement.muted ? "🔇 Unmute Audio" : "🔊 Mute Audio";
  });
});

window.addEventListener('load', () => {
  const splashScreen = document.getElementById('splash-screen');
  setTimeout(() => {
    splashScreen.style.display = 'none'; // Hide the splash screen after 5 seconds
  }, 2000); // Match the duration of the holdScreen animation
});


// Attach event listeners to "Book Now" buttons
const bookNowButtons = document.querySelectorAll(".book-now-btn");
bookNowButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const url = button.getAttribute("data-url"); // Retrieve the URL from the data attribute
    if (url) {
      console.log(`Redirecting to: ${url}`); // Debugging step to confirm URL is correct
      window.location.href = url; // Navigate to the URL
    } else {
      console.error("URL not found for this button"); // Error if no URL is set
    }
  });
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


