document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
  
    // Placeholder for actual authentication logic
    if (username === "admin" && password === "password") {
      alert("Login Successful!");
      window.location.href = "index.html"; // Redirect to main app
    } else {
      alert("Invalid username or password!");
    }
  });