// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Select the form element
    var form = document.getElementById('resume-form');
    // Check if form exists
    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent the default form submission behavior
            // Collect user input from the form
            var nameInput = document.getElementById('name').value;
            var emailInput = document.getElementById('email').value;
            var phoneInput = document.getElementById('phone').value;
            var educationInput = document.getElementById('education').value;
            var workExperienceInput = document.getElementById('work-experience').value;
            var skillsInput = document.getElementById('skills').value;
            // Generate the resume HTML
            var resumeHTML = "\n                <h3>Personal Information</h3>\n                <p><strong>Name:</strong> ".concat(nameInput, "</p>\n                <p><strong>Email:</strong> ").concat(emailInput, "</p>\n                <p><strong>Phone:</strong> ").concat(phoneInput, "</p>\n                \n                <h3>Education</h3>\n                <p>").concat(educationInput, "</p>\n                \n                <h3>Work Experience</h3>\n                <p>").concat(workExperienceInput, "</p>\n                \n                <h3>Skills</h3>\n                <p>").concat(skillsInput, "</p>\n            ");
            // Inject the generated resume into the resume container
            var resumeContainer = document.getElementById('generated-resume');
            if (resumeContainer) {
                resumeContainer.innerHTML = resumeHTML;
            }
            // Make resume sections editable
            makeSectionsEditable();
        });
    }
    // Function to make resume sections editable
    function makeSectionsEditable() {
        var resumeContainer = document.getElementById('generated-resume');
        if (resumeContainer) {
            // Add contenteditable attribute to all paragraphs inside the resume
            var paragraphs = resumeContainer.querySelectorAll('p');
            paragraphs.forEach(function (paragraph) {
                paragraph.setAttribute('contenteditable', 'true');
                paragraph.addEventListener('input', function () {
                    // Handle input changes here if needed
                    console.log('Content edited:', paragraph.textContent);
                });
            });
        }
    }
});
