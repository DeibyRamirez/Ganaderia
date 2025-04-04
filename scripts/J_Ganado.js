// Datos de ejemplo
const ganado = [
    { id: "GAN-1001", nombre: "Vaca 1", raza: "Holstein", sexo: "Hembra", fechaNacimiento: "12/05/2020", peso: 410, estado: "Activo" },
    { id: "GAN-1002", nombre: "Vaca 2", raza: "Holstein", sexo: "Macho", fechaNacimiento: "13/05/2020", peso: 420, estado: "Activo" },
    { id: "GAN-1003", nombre: "Vaca 3", raza: "Holstein", sexo: "Hembra", fechaNacimiento: "14/05/2020", peso: 430, estado: "Activo" },
    { id: "GAN-1004", nombre: "Vaca 4", raza: "Holstein", sexo: "Macho", fechaNacimiento: "15/05/2020", peso: 440, estado: "Activo" },
    { id: "GAN-1005", nombre: "Vaca 5", raza: "Holstein", sexo: "Hembra", fechaNacimiento: "16/05/2020", peso: 450, estado: "Activo" },
];

function renderizarTabla() {
    const tablaGanado = document.getElementById("tablaGanado");
    if (!tablaGanado) {
        console.error("Elemento #tablaGanado no encontrado.");
        return;
    }
    tablaGanado.innerHTML = ""; // Limpiar tabla

    ganado.forEach((animal) => {
        tablaGanado.innerHTML += `
            <tr>
                <td>${animal.id}</td>
                <td>${animal.nombre}</td>
                <td>${animal.raza}</td>
                <td>${animal.sexo}</td>
                <td>${animal.fechaNacimiento}</td>
                <td>${animal.peso}</td>
                <td><span class="status activo">${animal.estado}</span></td>
                <td>
                    <button onclick="verDetalle('${animal.id}')">Ver</button>
                    <button onclick="editarAnimal('${animal.id}')">Editar</button>
                </td>
            </tr>
        `;
    });
}

// Llamar manualmente después de cargar la página
function initGanado() {
    renderizarTabla();
}

function nuevoAnimal() {
    alert("Formulario para agregar un nuevo animal.");
}

function verDetalle(id) {
    alert("Ver detalles de " + id);
}

function editarAnimal(id) {
    alert("Editar animal " + id);
}

function paginaSiguiente() {
    alert("Función de paginación.");
}
