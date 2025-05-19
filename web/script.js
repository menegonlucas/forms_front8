const form = document.getElementById('loginForm');
const messageDiv = document.getElementById('message');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    if (email === 'nogenem@gmail.com' && password === 'nogenem780_') {
        window.location.href = "bemvindo.html";
    } else {
        alert('dados invalidos. Tente novamente.');
    }
});