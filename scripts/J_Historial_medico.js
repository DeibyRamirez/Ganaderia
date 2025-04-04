document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ Script de historial médico cargado");

  const container = document.getElementById("historial-medico-container");
  if (!container) {
      console.error("❌ Error: No se encontró el contenedor #historial-medico-container");
      return;
  }

  // 📌 Datos simulados del historial médico
  const registrosMedicos = [
      { id: 1, fecha: "12/01/2023", animal: "GAN-1001", tipo: "Tratamiento", diagnostico: "Infección", tratamiento: "Antibióticos", responsable: "Dr. García" },
      { id: 2, fecha: "12/02/2023", animal: "GAN-1002", tipo: "Vacunación", diagnostico: "Prevención", tratamiento: "Vacuna Triple", responsable: "Dr. García" },
      { id: 3, fecha: "12/03/2023", animal: "GAN-1003", tipo: "Revisión", diagnostico: "Rutina", tratamiento: "N/A", responsable: "Dr. García" },
      { id: 4, fecha: "12/04/2023", animal: "GAN-1004", tipo: "Tratamiento", diagnostico: "Infección", tratamiento: "Antibióticos", responsable: "Dr. García" },
      { id: 5, fecha: "12/05/2023", animal: "GAN-1005", tipo: "Vacunación", diagnostico: "Prevención", tratamiento: "Vacuna Triple", responsable: "Dr. García" }
  ];

  // 📌 Función para renderizar el historial médico
  function renderHistorialMedico() {
      container.innerHTML = `
          <div class="container">
              <div class="header">
                  <h1>Historial Médico</h1>
                  <p>Consulte y gestione el historial médico de su ganado</p>
                  <button id="nuevoRegistroBtn">Nuevo Registro</button>
              </div>
              
              <div class="table-container">
                  <h2>Registros Médicos</h2>
                  <table border="1">
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
                      <tbody id="registro-body"></tbody>
                  </table>
              </div>
          </div>
      `;

      const registroBody = document.getElementById("registro-body");

      registrosMedicos.forEach((registro) => {
          const fila = document.createElement("tr");

          ["fecha", "animal", "tipo", "diagnostico", "tratamiento", "responsable"].forEach((campo) => {
              const celda = document.createElement("td");
              celda.textContent = registro[campo];
              fila.appendChild(celda);
          });

          // Botón de acción
          const celdaAccion = document.createElement("td");
          const botonVer = document.createElement("button");
          botonVer.textContent = "Ver";
          botonVer.onclick = () => verRegistro(registro.id);
          celdaAccion.appendChild(botonVer);
          fila.appendChild(celdaAccion);

          registroBody.appendChild(fila);
      });

      // Asignar evento al botón "Nuevo Registro"
      document.getElementById("nuevoRegistroBtn").addEventListener("click", nuevoRegistro);
  }

  // 📌 Función para agregar un nuevo registro (por ahora solo muestra una alerta)
  function nuevoRegistro() {
      alert("📌 Función para agregar un nuevo registro en desarrollo...");
  }

  // 📌 Función para ver detalles de un registro
  function verRegistro(id) {
      const registro = registrosMedicos.find((reg) => reg.id === id);
      if (registro) {
          alert(`📋 Registro Médico:
          📅 Fecha: ${registro.fecha}
          🐄 Animal: ${registro.animal}
          📌 Tipo: ${registro.tipo}
          🩺 Diagnóstico: ${registro.diagnostico}
          💊 Tratamiento: ${registro.tratamiento}
          👨‍⚕️ Responsable: ${registro.responsable}`);
      } else {
          alert("❌ Registro no encontrado");
      }
  }

  // 📌 Renderizar historial al cargar la página
  renderHistorialMedico();
});
