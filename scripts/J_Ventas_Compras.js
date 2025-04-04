document.addEventListener("DOMContentLoaded", () => {
    cargarTransacciones();
});

function nuevaVenta() {
    alert("Redirigiendo a nueva venta...");
}

function nuevaCompra() {
    alert("Redirigiendo a nueva compra...");
}

function verVentas() {
    alert("Mostrando todas las ventas...");
}

function verCompras() {
    alert("Mostrando todas las compras...");
}

function cargarTransacciones() {
    const transacciones = [
        { fecha: "12/01/2023", tipo: "Venta", descripcion: "Venta de ganado", cliente: "Cliente ABC", monto: 1500, estado: "Completado" },
        { fecha: "12/02/2023", tipo: "Compra", descripcion: "Compra de insumos", cliente: "Proveedor XYZ", monto: 2000, estado: "Pendiente" },
        { fecha: "12/03/2023", tipo: "Venta", descripcion: "Venta de leche", cliente: "Cliente DEF", monto: 1800, estado: "En proceso" },
    ];

    const tbody = document.getElementById("transacciones-body");
    tbody.innerHTML = "";

    transacciones.forEach(transaccion => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${transaccion.fecha}</td>
            <td>${transaccion.tipo}</td>
            <td>${transaccion.descripcion}</td>
            <td>${transaccion.cliente}</td>
            <td>$${transaccion.monto}</td>
            <td><span class="estado ${getEstadoClase(transaccion.estado)}">${transaccion.estado}</span></td>
            <td><button onclick="verDetalles('${transaccion.descripcion}')">Ver</button></td>
        `;
        tbody.appendChild(tr);
    });
}

function getEstadoClase(estado) {
    switch (estado) {
        case "Completado": return "completado";
        case "Pendiente": return "pendiente";
        case "En proceso": return "en-proceso";
        default: return "";
    }
}

function verDetalles(descripcion) {
    alert("Detalles de: " + descripcion);
}
