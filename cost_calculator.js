const locationsData = {
    katra: [
        { label: "Hotel Stay", cost: 500 },
        { label: "Meals", cost: 300 },
        { label: "Pony Ride to Ardhkuwari", cost: 1000 },
    ],
    ardhkuwari: [
        { label: "Pony Ride", cost: 1200 },
        { label: "Helicopter to Sanjhichath", cost: 2500 },
        { label: "Stay at Resthouse", cost: 400 },
    ],
    sanjhichath: [
        { label: "Helicopter to Bhawan", cost: 3000 },
        { label: "Stay at Bhawan", cost: 600 },
        { label: "Meals", cost: 300 },
    ],
    bhawan: [
        { label: "Darshan Ticket", cost: 500 },
        { label: "Special Pooja", cost: 1100 },
    ],
    "bhairav-mandir": [
        { label: "Pony Ride", cost: 1200 },
        { label: "Donation for Temple", cost: 1000 },
    ],
};

const locationList = document.getElementById("location-list");
const servicesContainer = document.getElementById("services-container");
const totalCostElement = document.getElementById("total-cost");
const calculateButton = document.getElementById("calculate-button");
const finalMessage = document.getElementById("final-message");
const finalCostDisplay = document.getElementById("final-cost");

let totalCost = 0;

// Dynamically updates services based on selected location
function updateServices(location) {
    servicesContainer.innerHTML = "";
    const services = locationsData[location];
    services.forEach((service) => {
        const serviceItem = document.createElement("div");
        serviceItem.innerHTML = `
            <label>
                <input type="checkbox" data-cost="${service.cost}" />
                ${service.label} - ₹${service.cost}
            </label>
        `;
        servicesContainer.appendChild(serviceItem);
    });
}

// Calculates total cost based on selected services
function calculateCost() {
    totalCost = 0;
    const selectedServices = servicesContainer.querySelectorAll('input[type="checkbox"]:checked');
    selectedServices.forEach((service) => {
        totalCost += parseInt(service.dataset.cost);
    });
    totalCostElement.textContent = totalCost;
}

// Event listeners
locationList.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        document.querySelectorAll("#location-list li").forEach((li) => li.classList.remove("active"));
        e.target.classList.add("active");
        updateServices(e.target.dataset.location);
    }
});

calculateButton.addEventListener("click", () => {
    calculateCost();
    finalCostDisplay.textContent = totalCost;
    finalMessage.style.display = "block";
});

// Initial setup
updateServices("katra");
