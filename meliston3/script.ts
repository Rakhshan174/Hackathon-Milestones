const form = document.getElementById('resume-form') as HTMLFormElement;

form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Capture user input
    const name = (document.getElementById('name') as HTMLInputElement).value.trim();
    const email = (document.getElementById('email') as HTMLInputElement).value.trim();
    const phone = (document.getElementById('phone') as HTMLInputElement).value.trim();
    const education = (document.getElementById('education') as HTMLInputElement).value.trim();
    const workExperience = (document.getElementById('work-experience') as HTMLTextAreaElement).value.trim();
    const skills = (document.getElementById('skills') as HTMLInputElement).value.trim();

    // Validate form fields
    if (!name || !email || !phone || !education || !workExperience || !skills) {
        alert("Please fill out all fields.");
        return;
    }

    // Generate the resume
    generateResume(name, email, phone, education, workExperience, skills);
});

function generateResume(
    name: string,
    email: string,
    phone: string,
    education: string,
    workExperience: string,
    skills: string
) {
    const resumeContainer = document.getElementById('generated-resume') as HTMLElement;

    resumeContainer.innerHTML = `
        <h3>Personal Information</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>

        <h3>Education</h3>
        <p>${education}</p>

        <h3>Work Experience</h3>
        <p>${workExperience}</p>

        <h3>Skills</h3>
        <p>${skills.split(',').map(skill => skill.trim()).join(', ')}</p>
    `;
}
