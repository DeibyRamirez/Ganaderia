function navigate(page) {
    const content = document.getElementById('page-content');
    switch(page) {
        case 'home':
            content.innerHTML = "<h2>Inicio</h2><p>Bienvenido al panel de control</p>";
            break;
        case 'ventas':
            content.innerHTML = "<h2>Ventas</h2><p>Gestiona tus ventas aquí</p>";
            break;
        case 'compras':
            content.innerHTML = "<h2>Compras</h2><p>Gestiona tus compras aquí</p>";
            break;
        case 'reportes':
            content.innerHTML = "<h2>Reportes</h2><p>Visualiza tus reportes aquí</p>";
            break;
        default:
            content.innerHTML = "<h2>Error</h2><p>Página no encontrada</p>";
    }
}
