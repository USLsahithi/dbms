// script.js

document.addEventListener("DOMContentLoaded", function () {
    const adminLoginForm = document.getElementById("admin-login-form");
    const customerLoginForm = document.getElementById("customer-login-form");
    const signupModal = document.getElementById("signup-modal");
    const openSignupButton = document.getElementById("open-signup-window");
    const closeModalButton = document.getElementById("close-modal");

    adminLoginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        // Simulate admin login logic here (e.g., check credentials and redirect)
        alert("Admin login submitted");
    });

    customerLoginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        // Simulate customer login logic here (e.g., check credentials and redirect)
        alert("Customer login submitted");
    });

    // Open the sign-up modal when the "Sign up here" link is clicked
    openSignupButton.addEventListener("click", function (e) {
        e.preventDefault();
        signupModal.style.display = "block";
    });

    // Close the sign-up modal when the close button (×) is clicked
    closeModalButton.addEventListener("click", function () {
        signupModal.style.display = "none";
    });

    // Close the sign-up modal if the user clicks outside of it
    window.addEventListener("click", function (e) {
        if (e.target === signupModal) {
            signupModal.style.display = "none";
        }
    });
});
