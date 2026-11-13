// JavaScript for Aurelia Resort

console.log("Aurelia Resort Website Loaded Successfully!");

// CONTACT FORM VALIDATION

const enquiryForm = document.getElementById("enquiryForm");

enquiryForm.addEventListener("submit", function(event) {

    // Stop the page from refreshing
    event.preventDefault();

    // Get values from input fields
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const date = document.getElementById("date").value;
    const message = document.getElementById("message").value.trim();

    // Check whether all fields are filled
    if (name === "" || email === "" || phone === "" ||
        date === "" || message === "") {

        alert("Please fill in all the fields.");
        return;
    }

    // Show success message
    document.getElementById("formMessage").textContent =
        "Thank you, " + name + "! Your enquiry has been received.";

    // Clear the form
    enquiryForm.reset();

});
