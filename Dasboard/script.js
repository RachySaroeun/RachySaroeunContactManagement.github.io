<script>
  function validateLogin(event) {
    event.preventDefault(); // Prevent form submission
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    // Set expected credentials
    const correctUsername = "group10";
    const correctPassword = "12345678910";

    if (username === correctUsername && password === correctPassword) {
      alert("Login successful!");
      window.location.href = "dashboard.html"; // Redirect to the dashboard
    } else {
      alert("Invalid username or password. Please try again.");
    }
  }
</script>