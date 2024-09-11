var form = document.getElementById('resume-form');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // Capture user input
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var phone = document.getElementById('phone').value.trim();
    var education = document.getElementById('education').value.trim();
    var workExperience = document.getElementById('work-experience').value.trim();
    var skills = document.getElementById('skills').value.trim();
    // Validate form fields
    if (!name || !email || !phone || !education || !workExperience || !skills) {
        alert("Please fill out all fields.");
        return;
    }
    // Generate the resume
    generateResume(name, email, phone, education, workExperience, skills);
});
function generateResume(name, email, phone, education, workExperience, skills) {
    var resumeContainer = document.getElementById('generated-resume');
    resumeContainer.innerHTML = "\n        <h3>Personal Information</h3>\n        <p><strong>Name:</strong> ".concat(name, "</p>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone:</strong> ").concat(phone, "</p>\n\n        <h3>Education</h3>\n        <p>").concat(education, "</p>\n\n        <h3>Work Experience</h3>\n        <p>").concat(workExperience, "</p>\n\n        <h3>Skills</h3>\n        <p>").concat(skills.split(',').map(function (skill) { return skill.trim(); }).join(', '), "</p>\n    ");
}
