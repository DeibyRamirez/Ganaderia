document.addEventListener("DOMContentLoaded", () => {
    const planesActivos = document.getElementById("planes-activos");

    // Datos simulados
    const planes = [
        { id: 1, tipo: "Lechero", estado: "Activo" },
        { id: 2, tipo: "Engorde", estado: "Activo" },
        { id: 3, tipo: "Ternero", estado: "Activo" }
    ];

    // Renderizar planes activos
    function renderizarPlanes() {
        planesActivos.innerHTML = "";
        planes.forEach(plan => {
            const planDiv = document.createElement("div");
            planDiv.classList.add("recomendacion");
            planDiv.innerHTML = `
                <h3>Plan Alimenticio #${plan.id}</h3>
                <p>Tipo: ${plan.tipo}</p>
                <p>Estado: ${plan.estado}</p>
                <button onclick="verDetalles(${plan.id})">Ver Detalles</button>
                <button onclick="editarPlan(${plan.id})">Editar</button>
            `;
            planesActivos.appendChild(planDiv);
        });
    }

    renderizarPlanes();

    window.nuevoPlan = () => alert("Función para agregar un nuevo plan");
    window.verDetalles = (id) => alert("Detalles del plan " + id);
    window.editarPlan = (id) => alert("Editar plan " + id);
});
