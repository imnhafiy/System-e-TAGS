document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Example credentials for validation
    const validUsername = "admin";
    const validPassword = "123";

    if (username === validUsername && password === validPassword) {
        // Redirect to dashboard page
        window.location.href = "admin-dashboard.html";
    } else {
        // Display error message
        document.getElementById("errorMessage").textContent = "Invalid username or password";
    }
});
