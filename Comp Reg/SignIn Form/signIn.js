document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('sign In');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission

        var nameInput = document.getElementById('employeeName').value;
        var emailInput = document.getElementById('email').value;
        var positionInput = document.getElementById('password').value;

        // Displaying the captured information
        alert('employeeName: ' + employeenameInput + '\nEmail: ' + emailInput + '\nPassword: ' + passwordInput);

        ndDataToServer(nameInput, emailInput, positionInput);
    });
});
