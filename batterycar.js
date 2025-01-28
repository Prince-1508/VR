function handleSubmit() {
    alert('Button clicked!');
    // Or navigate to another page:
    window.location.href = 'https://online.maavaishnodevi.org/#/login';
}

function updatePrice() {
    const route = document.getElementById("route").value;
    const priceDisplay = document.getElementById("price");

    if (route === "ardhkuwari-to-bhawan") {
        priceDisplay.textContent = "Rs. 450";
    } else if (route === "bhawan-to-ardhkuwari") {
        priceDisplay.textContent = "Rs. 350";
    }
}

function selectSlot(slot) {
    const slots = document.querySelectorAll(".slot");
    slots.forEach(s => s.style.backgroundColor = "#1e1e1e");
    slot.style.backgroundColor = "#007bff";
}

function handleSubmit() {
    alert("Booking submitted successfully!");
    // Navigate or perform additional actions
}
