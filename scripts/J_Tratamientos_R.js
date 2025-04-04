// Simular Tratamientos Activos
document.getElementById('tratamientos-activos').innerHTML = `
    ${[1, 2, 3].map(i => `
        <div class="reporte">
            <h3>Tratamiento #${i}</h3>
            <br>
            <p>Animal: GAN-${1000 + i} • Inicio: 05/0${i}/2023</p>
            <button onclick="verDetalles(${i})">Ver detalles</button>
        </div>
    `).join('')}
`;

// Funciones Simuladas
function nuevoTratamiento() {
    alert("Redirigiendo a la creación de un nuevo tratamiento...");
}

function descargarReporte(tipo) {
    alert("Descargando reporte de " + tipo);
}

function generarReporte() {
    const tipo = document.getElementById('tipoReporte').value;
    const fechaInicio = document.getElementById('fechaInicio').value;
    const fechaFin = document.getElementById('fechaFin').value;
    
    if (!fechaInicio || !fechaFin) {
        alert("Seleccione el rango de fechas");
        return;
    }

    alert(`Generando reporte de ${tipo} desde ${fechaInicio} hasta ${fechaFin}`);
}

function verDetalles(id) {
    alert("Mostrando detalles del tratamiento #" + id);
}
