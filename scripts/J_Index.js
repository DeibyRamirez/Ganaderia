// Alternar entre modo claro y oscuro
const toggleTheme = () => {
    document.body.classList.toggle("dark-mode");
};

// Crear un botón para cambiar el tema
const button = document.createElement("button");
button.innerText = "Cambiar Tema";
button.addEventListener("click", toggleTheme);
document.body.appendChild(button);
