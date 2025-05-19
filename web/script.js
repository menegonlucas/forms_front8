const form = document.getElementById('loginForm');
const messageDiv = document.getElementById('message');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    if (email === 'nogenem@gmail.com' && password === 'nogenem780_') {
        messageDiv.innerHTML = '<div class="success">Login realizado com sucesso!</div>';
        setTimeout(() => {
            window.location.href = "bemvindo.html";
        }, 1200);
    } else {
        messageDiv.innerHTML = '<div class="error">E-mail ou senha incorretos.</div>';
    }
});