// dashboard.js

document.addEventListener("DOMContentLoaded", function () {
    // Button elements
    const profileButton = document.getElementById("profile-button");
    const cycleDetailsButton = document.getElementById("cycle-details-button");
    const bookRideButton = document.getElementById("book-ride-button");
    const logoutButton = document.getElementById("logout-button");

    // Handle button clicks
    profileButton.addEventListener("click", function () {
        // Handle profile button click (e.g., redirect to profile page)
        alert("Profile button clicked");
    });

    cycleDetailsButton.addEventListener("click", function () {
        // Handle cycle details button click (e.g., show cycle details)
        alert("Cycle Details button clicked");
    });

    bookRideButton.addEventListener("click", function () {
        // Handle book for ride button click (e.g., open booking form)
        alert("Book for Ride button clicked");
    });

    logoutButton.addEventListener("click", function () {
        // Handle logout button click (e.g., log the user out and redirect)
        alert("Log Out button clicked");
        window.location.href = "index.html"; // Redirect to the login page
    });
});
