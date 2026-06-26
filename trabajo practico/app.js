const contenedor = document.querySelector('.contenedor');
const btnModo = document.getElementById('btn-modo'); // Asegúrar de darle este ID a tu botón

// 1. Al cargar la página, revisamos si el usuario ya eligió modo oscuro
if (localStorage.getItem('modo-lectura') === 'activo') {
    contenedor.classList.add('contenedor-oscuro');
}

// 2. Función para alternar
const cambioClaseContenedor = () => {
    contenedor.classList.toggle('contenedor-oscuro');
    
    // Guardamos la preferencia
    if (contenedor.classList.contains('contenedor-oscuro')) {
        localStorage.setItem('modo-lectura', 'activo');
    } else {
        localStorage.setItem('modo-lectura', 'inactivo');
    }
}

// Escuchamos el clic
if (btnModo) {
    btnModo.addEventListener('click', cambioClaseContenedor);
}