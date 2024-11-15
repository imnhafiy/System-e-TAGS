document.addEventListener("DOMContentLoaded", () => {
    const stateSelect = document.getElementById("state");
    const caseNumberInput = document.getElementById("caseNumber");

    const statePrefixes = {
        "Johor": "J",
        "Kedah": "K",
        "Kelantan": "D",
        "Kuala Lumpur": "V",
        "Labuan": "L",
        "Melaka": "M",
        "Negeri Sembilan": "N",
        "Pahang": "C",
        "Perak": "A",
        "Perlis": "R",
        "Pulau Pinang": "P",
        "Putrajaya": "F",
        "Sabah": "S",
        "Sarawak": "Q",
        "Selangor": "B",
        "Terengganu": "T"
    };

    function generateCaseNumber(state) {
        const prefix = statePrefixes[state] || "X";
        const randomNumber = Math.floor(1000 + Math.random() * 9000); // Generates a 4-digit random number
        return `${prefix}${randomNumber}`;
    }

    stateSelect.addEventListener("change", () => {
        const selectedState = stateSelect.value;
        caseNumberInput.value = generateCaseNumber(selectedState);
    });

    // Function to show confirmation popup
    window.showConfirmationPopup = () => {
        document.getElementById("confirmationPopup").style.display = "flex";
    };

    // Function to close the popup
    window.closePopup = () => {
        document.getElementById("confirmationPopup").style.display = "none";
    };

    // Function to submit the form
    window.submitForm = () => {
        const confirmCheckbox = document.getElementById("confirmCheckbox");

        // Check if the user has confirmed the details
        if (confirmCheckbox.checked) {
            alert("Aduan berjaya dihantar");
            document.getElementById("complaintForm").submit();
        } else {
            alert("Sila sahkan maklumat sebelum menghantar.");
        }
    };
});
