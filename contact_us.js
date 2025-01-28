document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Clear previous error messages
  document.getElementById("nameError").style.display = "none";
  document.getElementById("emailError").style.display = "none";
  document.getElementById("subjectError").style.display = "none";
  document.getElementById("messageError").style.display = "none";
  document.getElementById("formFeedback").innerHTML = "";

  // Get form values
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let subject = document.getElementById("subject").value;
  let message = document.getElementById("message").value;

  // Validate the form fields
  let valid = true;
  
  // Name validation
  if (name === "") {
    document.getElementById("nameError").style.display = "block";
    document.getElementById("nameError").innerText = "Please enter your name.";
    valid = false;
  }
  
  // Email validation
  if (email === "") {
    document.getElementById("emailError").style.display = "block";
    document.getElementById("emailError").innerText = "Please enter your email.";
    valid = false;
  }

  // Subject validation
  if (subject === "") {
    document.getElementById("subjectError").style.display = "block";
    document.getElementById("subjectError").innerText = "Please enter a subject.";
    valid = false;
  }

  // Message validation
  if (message === "") {
    document.getElementById("messageError").style.display = "block";
    document.getElementById("messageError").innerText = "Please enter your message.";
    valid = false;
  }

  // If the form is valid, submit it
  if (valid) {
    // Show feedback
    document.getElementById("formFeedback").innerHTML = "<p>Sending your message...</p>";

    // Now send the form data to the server (AJAX or a backend PHP script)
    fetch("send_mail.php", {
      method: "POST",
      body: new FormData(document.getElementById("contactForm")),
    })
    .then(response => response.json())
    .then(data => {
      document.getElementById("formFeedback").innerHTML = "<p>Thank you for contacting us! We'll get back to you soon.</p>";
    })
    .catch(error => {
      document.getElementById("formFeedback").innerHTML = "<p>Oops! Something went wrong. Please try again.</p>";
    });
  }
});
