document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registrationForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); 

        const companyName = document.getElementById('companyName').value;
        const companyDescription = document.getElementById('companyDescription').value;
        const employeeName = document.getElementById('employeeName').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const departments = Array.from(document.querySelectorAll('input[name="departments"]:checked')).map(checkbox => checkbox.value);

        console.log('Company Name:', companyName);
        console.log('Company Description:', companyDescription);
        console.log('Employee Username:', employeeName);
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Selected Departments:', departments);
    });
});
