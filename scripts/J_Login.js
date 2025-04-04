document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('login-message');

    // Simulación de validación simple
    if (email === "usuario@example.com" && password === "123456") {
        message.style.color = "green";
        message.textContent = "Inicio de sesión exitoso.";
        setTimeout(() => {
            window.location.href = "dashboard.html"; // Redirigir a dashboard
        }, 1000);
    } else {
        message.style.color = "red";
        message.textContent = "Correo o contraseña incorrectos.";
    }
});
