document.getElementById('register-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const message = document.getElementById('register-message');

    // Validación simple
    if (password !== confirmPassword) {
        message.style.color = "red";
        message.textContent = "Las contraseñas no coinciden.";
        return;
    }

    // Simulación de registro
    message.style.color = "green";
    message.textContent = "Registro exitoso. Redirigiendo...";
    
    // Aquí podrías llamar a un backend o guardar el usuario
    setTimeout(() => {
        window.location.href = "login.html"; // Redirigir al login
    }, 1500);
});
