//Traigo la nota de reproduccion_recomendada
const reproduccion_recomendada = document.getElementById("reproduccion_recomendada");
const reproduccion_now = document.getElementById("reproduccion_now");
const reproduccion_colombia = document.getElementById("reproduccion_colombia");
const reproduccion_realmadrid = document.getElementById("reproduccion_realmadrid");
const reproduccion_sanvalentin = document.getElementById("reproduccion_sanvalentin");
const reproduccion_hbk = document.getElementById("reproduccion_hbk");
const reproduccion_hbm = document.getElementById("reproduccion_hbm");
const reproduccion_halloween = document.getElementById("reproduccion_halloween");
const reproduccion_pensum = document.getElementById("reproduccion_pensum");
const reproduccion_navidad = document.getElementById("reproduccion_navidad");
const reproduccion_newyear = document.getElementById("reproduccion_newyear");
const reproduccion_party = document.getElementById("reproduccion_party");
const reproduccion_graduation = document.getElementById("reproduccion_graduation");

alert("Presiona cualquiera de las cartas que aparecen despues de presionar aceptar y ve que pasa :)")


//Evento de audio de la fecha actual
document.addEventListener('DOMContentLoaded', function () {
    // Selecciona el contenedor de Año Nuevo
    var now = document.querySelector('.container-actual');

    // Crea un nuevo elemento de audio
    var audio = new Audio('/Audios/now.mp3');

    // Variable para controlar el estado de reproducción
    var isPlaying = false;

    // Agrega el EventListener para el clic
    now.addEventListener('click', function () {
        let estado_reproduccion = "";
        if (!isPlaying) {
            // Si no está reproduciendo, inicia la reproducción
            audio.play();
            isPlaying = true;
            estado_reproduccion = "⏸️";
            reproduccion_now.innerText = estado_reproduccion;
        } else {
            // Si está reproduciendo, pausa la reproducción
            audio.pause();
            isPlaying = false;
            estado_reproduccion = "▶️";
            reproduccion_now.innerText = estado_reproduccion;
        }
    });
});

//Evento de audio de el himno de seleccion colombia
document.addEventListener('DOMContentLoaded', function () {
    // Selecciona el contenedor de Año Nuevo
    var containerColombia = document.querySelector('.container-colombia');

    // Crea un nuevo elemento de audio
    var audio = new Audio('/Audios/colombia.mp3');

    // Variable para controlar el estado de reproducción
    var isPlaying = false;

    // Agrega el EventListener para el clic
    containerColombia.addEventListener('click', function () {
        let estado_reproduccion = "";
        if (!isPlaying) {
            // Si no está reproduciendo, inicia la reproducción
            audio.play();
            isPlaying = true;
            estado_reproduccion = "⏸️";
            reproduccion_colombia.innerText = estado_reproduccion;
        } else {
            // Si está reproduciendo, pausa la reproducción
            audio.pause();
            isPlaying = false;
            estado_reproduccion = "▶️";
            reproduccion_colombia.innerText = estado_reproduccion;
        }
    });
});


//Evento de audio de el himno del real madrid
document.addEventListener('DOMContentLoaded', function () {
    // Selecciona el contenedor de Año Nuevo
    var containerRealMadrid = document.querySelector('.container-real_madrid');

    // Crea un nuevo elemento de audio
    var audio = new Audio('/Audios/real_madrid.mp3');

    // Variable para controlar el estado de reproducción
    var isPlaying = false;

    // Agrega el EventListener para el clic
    containerRealMadrid.addEventListener('click', function () {
        let estado_reproduccion = "";
        if (!isPlaying) {
            // Si no está reproduciendo, inicia la reproducción
            audio.play();
            isPlaying = true;
            estado_reproduccion = "⏸️";
            reproduccion_realmadrid.innerText = estado_reproduccion;
        } else {
            // Si está reproduciendo, pausa la reproducción
            audio.pause();
            isPlaying = false;
            estado_reproduccion = "▶️";
            reproduccion_realmadrid.innerText = estado_reproduccion;
        }
    });
});


//Evento de audio de san valentin
document.addEventListener('DOMContentLoaded', function () {
    // Selecciona el contenedor de Año Nuevo
    var containerSanValentin = document.querySelector('.container-san-valentin');

    // Crea un nuevo elemento de audio
    var audio = new Audio('/Audios/san_valentin.mp3');

    // Variable para controlar el estado de reproducción
    var isPlaying = false;

    // Agrega el EventListener para el clic
    containerSanValentin.addEventListener('click', function () {
        let estado_reproduccion = "";
        if (!isPlaying) {
            // Si no está reproduciendo, inicia la reproducción
            audio.play();
            isPlaying = true;
            estado_reproduccion = "⏸️";
            reproduccion_sanvalentin.innerText = estado_reproduccion;
        } else {
            // Si está reproduciendo, pausa la reproducción
            audio.pause();
            isPlaying = false;
            estado_reproduccion = "▶️";
            reproduccion_sanvalentin.innerText = estado_reproduccion;
        }
    });
});


//Evento de audio hbk
document.addEventListener('DOMContentLoaded', function () {
    // Selecciona el contenedor de Año Nuevo
    var containerHB = document.querySelector('.container-love');

    // Crea un nuevo elemento de audio
    var audio = new Audio('/Audios/hb.mp3');

    // Variable para controlar el estado de reproducción
    var isPlaying = false;

    // Agrega el EventListener para el clic
    containerHB.addEventListener('click', function () {
        let estado_reproduccion = "";
        if (!isPlaying) {
            // Si no está reproduciendo, inicia la reproducción
            audio.play();
            isPlaying = true;
            estado_reproduccion = "⏸️";
            reproduccion_hbk.innerText = estado_reproduccion;
        } else {
            // Si está reproduciendo, pausa la reproducción
            audio.pause();
            isPlaying = false;
            estado_reproduccion = "▶️";
            reproduccion_hbk.innerText = estado_reproduccion;
        }
    });
});

//Evento del audio hallowwen
document.addEventListener('DOMContentLoaded', function () {
    // Selecciona el contenedor de Año Nuevo
    var containerHalloween = document.querySelector('.container-halloween');

    // Crea un nuevo elemento de audio
    var audio = new Audio('/Audios/halloween.mp3');

    // Variable para controlar el estado de reproducción
    var isPlaying = false;

    // Agrega el EventListener para el clic
    containerHalloween.addEventListener('click', function () {
        let estado_reproduccion = "";
        if (!isPlaying) {
            // Si no está reproduciendo, inicia la reproducción
            audio.play();
            isPlaying = true;
            estado_reproduccion = "⏸️";
            reproduccion_halloween.innerText = estado_reproduccion;
        } else {
            // Si está reproduciendo, pausa la reproducción
            audio.pause();
            isPlaying = false;
            estado_reproduccion = "▶️";
            reproduccion_halloween.innerText = estado_reproduccion;
        }
    });
});

//Evento de audio de hbm
document.addEventListener('DOMContentLoaded', function () {
    // Selecciona el contenedor de Año Nuevo
    var containerHB = document.querySelector('.container-hb');

    // Crea un nuevo elemento de audio
    var audio = new Audio('/Audios/hb.mp3');

    // Variable para controlar el estado de reproducción
    var isPlaying = false;

    // Agrega el EventListener para el clic
    containerHB.addEventListener('click', function () {
        let estado_reproduccion = "";
        if (!isPlaying) {
            // Si no está reproduciendo, inicia la reproducción
            audio.play();
            isPlaying = true;
            estado_reproduccion = "⏸️";
            reproduccion_hbm.innerText = estado_reproduccion;
        } else {
            // Si está reproduciendo, pausa la reproducción
            audio.pause();
            isPlaying = false;
            estado_reproduccion = "▶️";
            reproduccion_hbm.innerText = estado_reproduccion;
        }
    });
});

//Evento de audio de pensum
document.addEventListener('DOMContentLoaded', function () {
    // Selecciona el contenedor de Año Nuevo
    var containerGraduation = document.querySelector('.container-graduation');

    // Crea un nuevo elemento de audio
    var audio = new Audio('/Audios/graduation.mp3');

    // Variable para controlar el estado de reproducción
    var isPlaying = false;

    // Agrega el EventListener para el clic
    containerGraduation.addEventListener('click', function () {
        let estado_reproduccion = "";
        if (!isPlaying) {
            // Si no está reproduciendo, inicia la reproducción
            audio.play();
            isPlaying = true;
            estado_reproduccion = "⏸️";
            reproduccion_graduation.innerText = estado_reproduccion;
        } else {
            // Si está reproduciendo, pausa la reproducción
            audio.pause();
            isPlaying = false;
            estado_reproduccion = "▶️";
            reproduccion_graduation.innerText = estado_reproduccion;
        }
    });
});

//Evento de audio de navidad
document.addEventListener('DOMContentLoaded', function () {
    // Selecciona el contenedor de Año Nuevo
    var containerNavidad = document.querySelector('.container-navidad');

    // Crea un nuevo elemento de audio
    var audio = new Audio('/Audios/navidad.mp3');

    // Variable para controlar el estado de reproducción
    var isPlaying = false;

    // Agrega el EventListener para el clic
    containerNavidad.addEventListener('click', function () {
        let estado_reproduccion = "";
        if (!isPlaying) {
            // Si no está reproduciendo, inicia la reproducción
            audio.play();
            isPlaying = true;
            estado_reproduccion = "⏸️";
            reproduccion_navidad.innerText = estado_reproduccion;
        } else {
            // Si está reproduciendo, pausa la reproducción
            audio.pause();
            isPlaying = false;
            estado_reproduccion = "▶️";
            reproduccion_navidad.innerText = estado_reproduccion;
        }
    });
});

//Evento de audio de año nuevo
document.addEventListener('DOMContentLoaded', function () {
    // Selecciona el contenedor de Año Nuevo
    var containerAnioNuevo = document.querySelector('.container-anionuevo');

    // Crea un nuevo elemento de audio
    var audio = new Audio('/Audios/anio_nuevo.mp3');

    // Variable para controlar el estado de reproducción
    var isPlaying = false;

    // Agrega el EventListener para el clic
    containerAnioNuevo.addEventListener('click', function () {
        let estado_reproduccion = "";
        if (!isPlaying) {
            // Si no está reproduciendo, inicia la reproducción
            audio.play();
            isPlaying = true;
            estado_reproduccion = "⏸️";
            reproduccion_newyear.innerText = estado_reproduccion;
        } else {
            // Si está reproduciendo, pausa la reproducción
            audio.pause();
            isPlaying = false;
            estado_reproduccion = "▶️";
            reproduccion_newyear.innerText = estado_reproduccion;
        }
    });
});

//Evento de audio de party
document.addEventListener('DOMContentLoaded', function () {
    // Selecciona el contenedor de Año Nuevo
    var containerParty = document.querySelector('.container-party');

    // Crea un nuevo elemento de audio
    var audio = new Audio('/Audios/party.mp3');

    // Variable para controlar el estado de reproducción
    var isPlaying = false;

    // Agrega el EventListener para el clic
    containerParty.addEventListener('click', function () {
        let estado_reproduccion = "";
        if (!isPlaying) {
            // Si no está reproduciendo, inicia la reproducción
            audio.play();
            isPlaying = true;
            estado_reproduccion = "⏸️";
            reproduccion_party.innerText = estado_reproduccion;
        } else {
            // Si está reproduciendo, pausa la reproducción
            audio.pause();
            isPlaying = false;
            estado_reproduccion = "▶️";
            reproduccion_party.innerText = estado_reproduccion;
        }
    });
});

//Evento de audio de cancion recomendada
document.addEventListener('DOMContentLoaded', function () {
    // Selecciona el contenedor de Año Nuevo
    var containerRecomendada = document.querySelector('.container-cancion_recomendada');

    // Crea un nuevo elemento de audio
    var audio = new Audio('/Audios/recomendada.mp3');

    // Variable para controlar el estado de reproducción
    var isPlaying = false;
 
    // Agrega el EventListener para el clic
    containerRecomendada.addEventListener('click', function () {
        let estado_reproduccion = "";
        if (!isPlaying) {
            // Si no está reproduciendo, inicia la reproducción
            audio.play();
            isPlaying = true;
            estado_reproduccion = "⏸️";
            reproduccion_recomendada.innerText = estado_reproduccion;
        } else {
            // Si está reproduciendo, pausa la reproducción
            audio.pause();
            isPlaying = false;
            estado_reproduccion = "▶️";
            reproduccion_recomendada.innerText = estado_reproduccion;
        }
    });
});