// Add interactivity to Export and Share buttons
const exportBtns = document.querySelectorAll('.export-btn');
const shareBtns = document.querySelectorAll('.share-btn');

exportBtns.forEach(button => {
    button.addEventListener('click', function() {
        alert('Export functionality is under development.');
        // Here, you can integrate real export functionalities like generating PDF or Excel files
    });
});

shareBtns.forEach(button => {
    button.addEventListener('click', function() {
        alert('Share functionality is under development.');
        // Here, you can integrate real sharing functionalities like sending email or copying a link
    });
});
