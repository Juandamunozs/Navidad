const reproduccion_favorita = document.getElementById("reproduccion_favorita");
const reproduccion_recomendada = document.getElementById("reproduccion_recomendada");
const reproduccion_animo = document.getElementById("reproduccion_animo");

//Evento de audio de cancion recomendada
document.addEventListener('DOMContentLoaded', function () {
    // Selecciona el contenedor de la canción recomendada
    var containerRecomendada = document.querySelector('.container-cancion_recomendada');

    // Crea un nuevo elemento de audio
    var audio = new Audio('/Audios/recomendada.mp3');

    // Variable para controlar el estado de reproducción
    var isPlaying = false;

    // Obtén referencia al elemento donde se mostrará el estado de reproducción
    var reproduccion_recomendada = document.getElementById('reproduccion_recomendada');

    // Agrega el EventListener para el clic
    containerRecomendada.addEventListener('click', function () {
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

        // Actualiza el texto del elemento reproduccion_recomendada
        reproduccion_recomendada.innerText = estado_reproduccion;
    });

    // Agrega el evento 'ended' al audio para detectar cuando termine la reproducción
    audio.addEventListener('ended', function () {
        isPlaying = false; // Marca como no reproduciendo
        estado_reproduccion = "▶️"; // Cambia el estado a "▶️"
        reproduccion_recomendada.innerText = estado_reproduccion; // Actualiza el texto del botón

        // Reinicia la reproducción al finalizar
        audio.currentTime = 0; // Reinicia al inicio
    });
});

//Evento de audio de cancion recomendada
document.addEventListener('DOMContentLoaded', function () {
    // Selecciona el contenedor de la canción recomendada
    var containerFavorita= document.querySelector('.container-cancion_favorita');

    // Crea un nuevo elemento de audio
    var audio = new Audio('/Audios/cancion_favorita.mp3');

    // Variable para controlar el estado de reproducción
    var isPlaying = false;

    // Obtén referencia al elemento donde se mostrará el estado de reproducción
    var reproduccion_favorita = document.getElementById('reproduccion_favorita');

    // Agrega el EventListener para el clic
    containerFavorita.addEventListener('click', function () {
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

        // Actualiza el texto del elemento reproduccion_recomendada
        reproduccion_favorita.innerText = estado_reproduccion;
    });

    // Agrega el evento 'ended' al audio para detectar cuando termine la reproducción
    audio.addEventListener('ended', function () {
        isPlaying = false; // Marca como no reproduciendo
        estado_reproduccion = "▶️"; // Cambia el estado a "▶️"
        reproduccion_favorita.innerText = estado_reproduccion; // Actualiza el texto del botón

        // Reinicia la reproducción al finalizar
        audio.currentTime = 0; // Reinicia al inicio
    });
});

//Evento de audio de cancion animo
document.addEventListener('DOMContentLoaded', function () {
    // Selecciona el contenedor de la canción recomendada
    var containerAnimo= document.querySelector('.container-cancion_animo');

    // Crea un nuevo elemento de audio
    var audio = new Audio('/Audios/cancion_animo.mp3');

    // Variable para controlar el estado de reproducción
    var isPlaying = false;

    // Obtén referencia al elemento donde se mostrará el estado de reproducción
    var reproduccion_animo = document.getElementById('reproduccion_animo');

    // Agrega el EventListener para el clic
    containerAnimo.addEventListener('click', function () {
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

        // Actualiza el texto del elemento reproduccion_recomendada
        reproduccion_animo.innerText = estado_reproduccion;
    });

    // Agrega el evento 'ended' al audio para detectar cuando termine la reproducción
    audio.addEventListener('ended', function () {
        isPlaying = false; // Marca como no reproduciendo
        estado_reproduccion = "▶️"; // Cambia el estado a "▶️"
        reproduccion_animo.innerText = estado_reproduccion; // Actualiza el texto del botón

        // Reinicia la reproducción al finalizar
        audio.currentTime = 0; // Reinicia al inicio
    });
});