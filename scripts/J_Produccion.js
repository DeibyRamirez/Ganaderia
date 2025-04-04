document.addEventListener("DOMContentLoaded", () => {
    const records = [
        { fecha: "12/01/2023", tipo: "Carne", animal: "Grupo 1", cantidad: "130 kg", calidad: "Alta", responsable: "Juan Pérez" },
        { fecha: "12/02/2023", tipo: "Leche", animal: "GAN-1002", cantidad: "17 L", calidad: "Alta", responsable: "Juan Pérez" },
        { fecha: "12/03/2023", tipo: "Carne", animal: "Grupo 3", cantidad: "150 kg", calidad: "Alta", responsable: "Juan Pérez" },
        { fecha: "12/04/2023", tipo: "Leche", animal: "GAN-1004", cantidad: "19 L", calidad: "Alta", responsable: "Juan Pérez" },
        { fecha: "12/05/2023", tipo: "Carne", animal: "Grupo 5", cantidad: "160 kg", calidad: "Alta", responsable: "Juan Pérez" },
    ];

    const recordsContainer = document.getElementById("records");

    records.forEach((record, index) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${record.fecha}</td>
            <td>${record.tipo}</td>
            <td>${record.animal}</td>
            <td>${record.cantidad}</td>
            <td><span class="quality">${record.calidad}</span></td>
            <td>${record.responsable}</td>
            <td class="actions">
                <a href="produccion/${index + 1}.html">Ver</a>
            </td>
        `;
        recordsContainer.appendChild(tr);
    });
});
