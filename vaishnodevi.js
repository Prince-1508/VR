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
