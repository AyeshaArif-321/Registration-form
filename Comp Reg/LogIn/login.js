document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('loginForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); 

        const username = document.getElementById('username or email').value;
        const password = document.getElementById('password').value;

        console.log('Username or email:', username, email);
        console.log('Password:', password);
    });
});











