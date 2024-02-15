function validateForm() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;

    var usernameError = document.getElementById("usernameError");
    var emailError = document.getElementById("emailError");
    var passwordError = document.getElementById("passwordError");
    var confirmPasswordError = document.getElementById("confirmPasswordError");

    var isValid = true;

    // Simple validation for demonstration purposes
    if (username.trim() === "") {
        usernameError.textContent = "Username is required";
        isValid = false;
    } else {
        usernameError.textContent = "";
    }

    if (email.trim() === "") {
        emailError.textContent = "Email is required";
        isValid = false
