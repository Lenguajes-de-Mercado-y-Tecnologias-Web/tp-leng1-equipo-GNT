function enviarWhatsApp() {
    // Capturamos los datos del formulario
    const fecha = document.getElementById('fecha').value;
    const personas = document.getElementById('pasajeros').value;
    const valijas = document.getElementById('valijas').value;
    const mascotas = document.getElementById('mascotas').value;

    // Tu número de teléfono (cambiá las X)
    const telefono = "549XXXXXXXXXX"; 

    // Armamos el mensaje
    const mensaje = `Hola Chango Traslados! Quiero un presupuesto:%0A` +
                    `- Fecha: ${fecha}%0A` +
                    `- Personas: ${personas}%0A` +
                    `- Valijas: ${valijas}%0A` +
                    `- Mascotas: ${mascotas}`;

    // Abrimos la ventana de WhatsApp
    window.open(`https://wa.me{telefono}?text=${mensaje}`, '_blank');
}