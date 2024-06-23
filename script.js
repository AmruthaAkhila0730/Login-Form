function toggleForm() {
    var loginForm = document.getElementById("login-form");
    var registerForm = document.getElementById("register-form");

    if (loginForm.style.display === "none") {
        loginForm.style.display = "block";
        registerForm.style.display = "none";
    } else {
        loginForm.style.display = "none";
        registerForm.style.display = "block";
    }
}

document.getElementById("login").addEventListener("submit", function (event) {
    event.preventDefault();
    // login logic
    console.log("Logging in...");
});

document.getElementById("register").addEventListener("submit", function (event) {
    event.preventDefault();
    // registration logic
    console.log("Registering...");
});