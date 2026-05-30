document.addEventListener("DOMContentLoaded", function () {
    // --- 1. MOTOR DE MOVIMIENTO AUTOMÁTICO PARA LAS FOTOS (Cada 3 segundos) ---
    const contenedorCarrusel = document.getElementById("carrusel-autonomo");

    if (contenedorCarrusel) {
        const fotos = contenedorCarrusel.getElementsByClassName("carousel-item");
        let fotoActual = 0;

        // Función que cambia a la siguiente foto
        function pasarSiguienteFoto() {
            // Quita la clase activa a la foto actual
            fotos[fotoActual].classList.remove("active");

            // Calcula la siguiente posición en la lista (vuelve a 0 al llegar a la última)
            fotoActual = (fotoActual + 1) % fotos.length;

            // Añade la clase activa a la nueva foto para mostrarla
            fotos[fotoActual].classList.add("active");
        }

        // Configura el reloj para que se ejecute solo cada 3000 milisegundos (3 segundos)
        setInterval(pasarSiguienteFoto, 3000);
    }

    // --- 2. VALIDACIÓN DEL FORMULARIO DE CONTACTO ---
    const formulario = document.getElementById("contact-form");
    if (formulario) {
        formulario.addEventListener("submit", function () {
            alert("✨ ¡Muchas gracias! Su mensaje está siendo procesada de forma segura y enviado a la casilla de correo maruzer32@gmail.com.");
        });
    }
});
