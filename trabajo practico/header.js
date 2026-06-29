document.addEventListener('DOMContentLoaded', () => {
    const headerPlaceholder = document.getElementById('header-placeholder');
    
    if (!headerPlaceholder) {
        console.log("No se encontró el header-placeholder en esta página.");
        return; 
    }

    console.log("Intentando cargar header.html...");
    
    fetch('header.html')
        .then(response => {
            if (!response.ok) throw new Error('No se pudo cargar header.html');
            return response.text();
        })
        .then(data => {
            headerPlaceholder.innerHTML = data;
            console.log("Header inyectado con éxito.");
            desactivarLinkActual();
        })
        .catch(error => {
            console.error("Error al inyectar el header:", error);
        });
});