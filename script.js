// PLAN YOUR LADAKH JOURNEY FORM
document.getElementById("tripForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get the user's name
    let name = document.getElementById("name").value;

    // Show thank-you message
    document.getElementById("formMessage").innerHTML =
        "Thank you, " + name + "! Your Ladakh adventure is one step closer.";

    // Clear the form
    document.getElementById("tripForm").reset();
});