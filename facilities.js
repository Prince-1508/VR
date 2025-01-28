// Sample facilities data
const facilitiesData = [
    { img: 'images/rooms.jpeg', title: 'A.C. Rooms', description: 'Comfortable air-conditioned rooms managed by the Shrine Board.' },
    { img: 'images/non-ac-room.jpg', title: 'Non A.C. Rooms', description: 'Economical non-air-conditioned rooms for pilgrims.' },
    { img: 'images/dormitory.jpg', title: 'Dormitories', description: 'Shared accommodations for budget-friendly stays.' },
    { img: 'images/free-dharamshala.jpg', title: 'Free Dharamshala', description: 'Free shelters for pilgrims provided by the Shrine Board.' },
    { img: 'images/private-hotel.jpg', title: 'Private Hotels', description: 'Private hotels with various amenities.' },
    { img: 'images/bhojanalya.jpg', title: 'Bhojanalya', description: 'Traditional food services by the Shrine Board.' },
    { img: 'images/restaurant.jpg', title: 'Private Restaurants', description: 'Private eateries offering local cuisine.' },
    { img: 'images/medical-facilities.jpg', title: 'Medical Facilities', description: '24/7 medical assistance for pilgrims.' },
    { img: 'images/blankets.jpg', title: 'Blankets', description: 'Blankets provided for comfort during the stay.' },
    { img: 'images/langar.jpg', title: 'Langar Sewa', description: 'Free community meal service for all pilgrims.' },
    { img: 'images/pithus.jpg', title: 'Pithus', description: 'Pithu services available for carrying luggage.' },
    { img: 'images/pony.jpg', title: 'Pony (Horse)', description: 'Ponies available for pilgrimage services.' },
    { img: 'images/palki.jpg', title: 'Palki', description: 'Traditional palki services for devotees.' },
    { img: 'images/helicopter.jpg', title: 'Helicopter Sewa', description: 'Helicopter services for fast travel to the temple.' },
    { img: 'images/ropeway.jpg', title: 'Ropeway', description: 'Ropeway services for an aerial view of the journey.' },
    { img: 'images/shelter-sheds.jpg', title: 'Shelter Sheds', description: 'Shelters along the route for resting.' },
    { img: 'images/cloak-room.jpg', title: 'Cloak Rooms', description: 'Secure cloakrooms to store personal belongings.' },
    { img: 'images/atm.jpg', title: 'ATM', description: 'ATMs available along the route.' },
    { img: 'images/internet.jpg', title: 'Internet/Phone', description: 'Internet and phone services available for pilgrims.' },
];

// Function to dynamically load facilities
function loadFacilities() {
    const container = document.querySelector('.facility-container');
    facilitiesData.forEach(facility => {
        const facilityCard = document.createElement('div');
        facilityCard.classList.add('facility');
        facilityCard.innerHTML = `
            <img src="${facility.img}" alt="${facility.title}">
            <h3>${facility.title}</h3>
            <p>${facility.description}</p>
        `;
        container.appendChild(facilityCard);

        // Trigger animation when the facility is loaded
        setTimeout(() => {
            facilityCard.style.transform = 'translateY(0)';
            facilityCard.style.opacity = '1';
        }, 300);
    });
}

// Wait for DOM to be fully loaded before calling the function
document.addEventListener('DOMContentLoaded', () => {
    loadFacilities();
});



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
  
  
  