document.addEventListener('DOMContentLoaded', function () {
    const taskList = document.getElementById('task-list');

    // Generar actividades pendientes
    const tasks = [
        { title: "Tarea pendiente 1", date: "12/04/2023" },
        { title: "Tarea pendiente 2", date: "13/04/2023" },
        { title: "Tarea pendiente 3", date: "14/04/2023" },
        { title: "Tarea pendiente 4", date: "15/04/2023" },
    ];

    tasks.forEach(task => {
        const taskItem = document.createElement('div');
        taskItem.classList.add('task-item');
        taskItem.innerHTML = `
            <div class="status"></div>
            <div>
                <p><strong>${task.title}</strong></p>
                <p>Fecha: ${task.date}</p>
            </div>
        `;
        taskList.appendChild(taskItem);
    });
});
