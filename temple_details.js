document.querySelectorAll(".time-slot").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".time-slot").forEach((btn) => btn.classList.remove("ring-4"));
      button.classList.add("ring-4", "ring-purple-400");
      button.setAttribute("data-selected", "true");
    });
  });
  
  document.getElementById("payButton").addEventListener("click", () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const date = document.getElementById("date").value;
    const selectedSlot = document.querySelector(".time-slot.ring-4")?.getAttribute("data-time");
  
    if (!name || !email || !date || !selectedSlot) {
      alert("Please fill all details and select a time slot!");
      return;
    }
  
    const options = {
      key: "YOUR_RAZORPAY_KEY", // Replace with your Razorpay API Key
      amount: 20000, // Rs. 200 in paise
      currency: "INR",
      name: "Virtual Darshan",
      description: `Vaishno Devi Darshan - ${selectedSlot}`,
      handler: function (response) {
        alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
      },
      prefill: { name, email },
    };
  
    const razorpay = new Razorpay(options);
    razorpay.open();
  });
  

