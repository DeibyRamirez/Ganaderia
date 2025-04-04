function loadPage(page) {
    fetch(page)
        .then(response => response.text())
        .then(html => {
            document.getElementById("content").innerHTML = html;

            // Buscar scripts dentro del HTML cargado y ejecutarlos
            let scripts = document.getElementById("content").getElementsByTagName("script");
            for (let script of scripts) {
                let newScript = document.createElement("script");
                newScript.src = script.src;
                document.body.appendChild(newScript);
            }

            // Resaltar la opción activa en el sidebar
            document.querySelectorAll(".sidebar-menu ul li a").forEach(link => {
                link.classList.remove("active"); // Quitar clase activa de todos
                if (link.getAttribute("onclick").includes(page)) {
                    link.classList.add("active"); // Agregar clase activa al seleccionado
                }
            });

            // Ejecutar funciones específicas si existen
            setTimeout(() => {
                if (typeof initGanado === "function") {
                    initGanado();
                }
                if (typeof initHistorialMedico === "function") {
                    initHistorialMedico();
                }
            }, 500);
        })
        .catch(error => console.log("Error al cargar la página:", error));
}

// Funcionalidad de colapsar el sidebar
document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('toggleSidebar');
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');

    if (!toggleBtn || !sidebar) {
        console.error("No se encontró el botón de alternar o la barra lateral.");
        return;
    }

    toggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
        
        // Ajustar el margen izquierdo del contenido cuando el sidebar se colapse
        if (sidebar.classList.contains('collapsed')) {
            content.style.marginLeft = '40px'; // Sidebar comprimido
        } else {
            content.style.marginLeft = '200px'; // Sidebar expandido
        }

        // Guardar estado en LocalStorage para que persista después de recargar la página
        localStorage.setItem('sidebarCollapsed', sidebar.classList.contains('collapsed'));
    });

    // Restaurar el estado del sidebar al cargar la página
    if (localStorage.getItem('sidebarCollapsed') === 'true') {
        sidebar.classList.add('collapsed');
        content.style.marginLeft = '40px';
    }
});
