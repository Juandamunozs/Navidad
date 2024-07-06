const reproduccion_pensum = document.getElementById("reproduccion_pensum");

//Evento de audio de pensum
document.addEventListener('DOMContentLoaded', function () {
    // Selecciona el contenedor de graduación
    var containerGraduation = document.querySelector('.container-graduation');

    // Crea un nuevo elemento de audio
    var audio = new Audio('/Audios/graduation.mp3');

    // Variable para controlar el estado de reproducción
    var isPlaying = false;

    // Obtén referencia al elemento donde se mostrará el estado de reproducción
    var reproduccion_graduation = document.getElementById('reproduccion_graduation');

    // Agrega el EventListener para el clic
    containerGraduation.addEventListener('click', function () {
        let estado_reproduccion = "";
        if (!isPlaying) {
            // Si no está reproduciendo, inicia la reproducción
            audio.play();
            isPlaying = true;
            estado_reproduccion = "⏸️";
        } else {
            // Si está reproduciendo, pausa la reproducción
            audio.pause();
            isPlaying = false;
            estado_reproduccion = "▶️";
        }

        // Actualiza el texto del elemento reproduccion_graduation
        reproduccion_graduation.innerText = estado_reproduccion;
    });

    // Agrega el evento 'ended' al audio para detectar cuando termine la reproducción
    audio.addEventListener('ended', function () {
        isPlaying = false; // Marca como no reproduciendo
        estado_reproduccion = "▶️"; // Cambia el estado a "▶️"
        reproduccion_graduation.innerText = estado_reproduccion; // Actualiza el texto del botón

        // Reinicia la reproducción al finalizar
        audio.currentTime = 0; // Reinicia al inicio
    });
});