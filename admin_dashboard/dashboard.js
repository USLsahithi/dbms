
// dashboard.js
document.addEventListener("DOMContentLoaded", function () {
    // Get the buttons
    const customerDetailsButton = document.getElementById("customer-details-button");
    const storeButton = document.getElementById("store-button");
    const logoutButton = document.getElementById("logout-button");

    // Add event listeners for button actions
    customerDetailsButton.addEventListener("click", function () {
        // Handle the action when "Customer Details" button is clicked
        // You can redirect to the customer details page or perform any other action.
        alert("Customer Details button clicked.");
    });

    storeButton.addEventListener("click", function () {
        // Handle the action when "Store" button is clicked
        // You can redirect to the store page or perform any other action.
        alert("Store button clicked.");
    });

    logoutButton.addEventListener("click", function () {
        // Handle the action when "Log Out" button is clicked
        // You can log the user out and redirect them to the login page.
        // Example: window.location.href = "login.html";
        alert("Log Out button clicked.");
    });
});
