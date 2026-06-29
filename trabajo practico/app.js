// app.js
document.addEventListener('DOMContentLoaded', () => {
    const contenedor = document.querySelector('.contenedor');
    const btnModo = document.getElementById('btn-modo');

    if (!contenedor) return; // Si no hay contenedor, no hacemos nada

    // 1. Aplicar estado guardado
    if (localStorage.getItem('modo-lectura') === 'activo') {
        contenedor.classList.add('contenedor-oscuro');
    }

    // 2. Definir la función de cambio
    function cambioClaseContenedor() {
        contenedor.classList.toggle('contenedor-oscuro');
        const esActivo = contenedor.classList.contains('contenedor-oscuro');
        localStorage.setItem('modo-lectura', esActivo ? 'activo' : 'inactivo');
    }

    // 3. Vincular el evento si el botón existe
    if (btnModo) {
        btnModo.addEventListener('click', cambioClaseContenedor);
    }
});