document.addEventListener("DOMContentLoaded", function() {
    const caseNumberField = document.getElementById("caseNumber");

    function generateCaseNumber() {
        const statePrefix = "V"; // Placeholder prefix for Kuala Lumpur
        const randomNum = Math.floor(Math.random() * 90000) + 10000; // Generate 5-digit number
        caseNumberField.value = `${statePrefix}${randomNum}`;
    }

    generateCaseNumber(); // Call function on load

    // Form submission (mockup, does not send data to backend)
    const form = document.getElementById("borang4Form");
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent actual form submission
        alert("Form submitted successfully!");
    });
});
