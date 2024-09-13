// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Select the form element
    const form = document.getElementById('resume-form') as HTMLFormElement;

    // Check if form exists
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent the default form submission behavior
            
            // Collect user input from the form
            const nameInput = (document.getElementById('name') as HTMLInputElement).value;
            const emailInput = (document.getElementById('email') as HTMLInputElement).value;
            const phoneInput = (document.getElementById('phone') as HTMLInputElement).value;
            const educationInput = (document.getElementById('education') as HTMLInputElement).value;
            const workExperienceInput = (document.getElementById('work-experience') as HTMLTextAreaElement).value;
            const skillsInput = (document.getElementById('skills') as HTMLInputElement).value;

            // Generate the resume HTML
            const resumeHTML = `
                <h3>Personal Information</h3>
                <p><strong>Name:</strong> ${nameInput}</p>
                <p><strong>Email:</strong> ${emailInput}</p>
                <p><strong>Phone:</strong> ${phoneInput}</p>
                
                <h3>Education</h3>
                <p>${educationInput}</p>
                
                <h3>Work Experience</h3>
                <p>${workExperienceInput}</p>
                
                <h3>Skills</h3>
                <p>${skillsInput}</p>
            `;

            // Inject the generated resume into the resume container
            const resumeContainer = document.getElementById('generated-resume');
            if (resumeContainer) {
                resumeContainer.innerHTML = resumeHTML;
            }

            // Make resume sections editable
            makeSectionsEditable();
        });
    }

    // Function to make resume sections editable
    function makeSectionsEditable() {
        const resumeContainer = document.getElementById('generated-resume');
        if (resumeContainer) {
            // Add contenteditable attribute to all paragraphs inside the resume
            const paragraphs = resumeContainer.querySelectorAll('p');
            paragraphs.forEach(paragraph => {
                paragraph.setAttribute('contenteditable', 'true');
                paragraph.addEventListener('input', () => {
                    // Handle input changes here if needed
                    console.log('Content edited:', paragraph.textContent);
                });
            });
        }
    }
});
