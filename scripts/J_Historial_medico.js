document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("historial-medico-container");

  // Datos simulados
  const registrosMedicos = [
    {
      id: 1,
      fecha: "12/01/2023",
      animal: "GAN-1001",
      tipo: "Tratamiento",
      diagnostico: "Infección",
      tratamiento: "Antibióticos",
      responsable: "Dr. García",
    },
    {
      id: 2,
      fecha: "12/02/2023",
      animal: "GAN-1002",
      tipo: "Vacunación",
      diagnostico: "Prevención",
      tratamiento: "Vacuna Triple",
      responsable: "Dr. García",
    },
    {
      id: 3,
      fecha: "12/03/2023",
      animal: "GAN-1003",
      tipo: "Revisión",
      diagnostico: "Rutina",
      tratamiento: "N/A",
      responsable: "Dr. García",
    },
    {
      id: 4,
      fecha: "12/04/2023",
      animal: "GAN-1004",
      tipo: "Tratamiento",
      diagnostico: "Infección",
      tratamiento: "Antibióticos",
      responsable: "Dr. García",
    },
    {
      id: 5,
      fecha: "12/05/2023",
      animal: "GAN-1005",
      tipo: "Vacunación",
      diagnostico: "Prevención",
      tratamiento: "Vacuna Triple",
      responsable: "Dr. García",
    },
  ];

  function renderHistorialMedico() {
    container.innerHTML = `
            <div class="container">
                <div class="header">
                    <h1>Historial Médico</h1>
                    <p>Consulte y gestione el historial médico de su ganado</p>
                    <button onclick="nuevoRegistro()">Nuevo Registro</button>
                </div>
                
                <div class="table-container">
                    <h2>Registros Médicos</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Fecha</th>
                                <th>Animal</th>
                                <th>Tipo</th>
                                <th>Diagnóstico</th>
                                <th>Tratamiento</th>
                                <th>Responsable</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody id="registro-body">
                        </tbody>
                    </table>
                </div>
            </div>
        `;

    const registroBody = document.getElementById("registro-body");
    registrosMedicos.forEach((registro) => {
      registroBody.innerHTML += `
                <tr>
                    <td>${registro.fecha}</td>
                    <td>${registro.animal}</td>
                    <td>${registro.tipo}</td>
                    <td>${registro.diagnostico}</td>
                    <td>${registro.tratamiento}</td>
                    <td>${registro.responsable}</td>
                    <td class="actions">
                        <button onclick="verRegistro(${registro.id})">Ver</button>
                    </td>
                </tr>
            `;
    });
  }

  window.nuevoRegistro = () => {
    alert("Función para agregar un nuevo registro");
  };

  window.verRegistro = (id) => {
    const registro = registrosMedicos.find((reg) => reg.id === id);
    if (registro) {
      alert(`Registro Médico:
      Fecha: ${registro.fecha}
      Animal: ${registro.animal}
      Tipo: ${registro.tipo}
      Diagnóstico: ${registro.diagnostico}
      Tratamiento: ${registro.tratamiento}
      Responsable: ${registro.responsable}`);
    } else {
      alert("Registro no encontrado");
    }
  };

  renderHistorialMedico();
});
