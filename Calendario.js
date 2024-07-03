const anio = document.getElementById("anio");
const mes = document.getElementById("mes");
const dia = document.getElementById("dia");
const hora = document.getElementById("hora");
const minuto = document.getElementById("minuto");
const segundo = document.getElementById("segundo");

const anio_navidad = document.getElementById("anio_navidad");
const mes_navidad = document.getElementById("mes_navidad");
const dia_navidad = document.getElementById("dia_navidad");
const hora_navidad = document.getElementById("hora_navidad");
const minuto_navidad = document.getElementById("minuto_navidad");
const segundo_navidad = document.getElementById("segundo_navidad");

const anio_nuevo = document.getElementById("anio_nuevo");
const mes_nuevo = document.getElementById("mes_nuevo");
const dia_nuevo = document.getElementById("dia_nuevo");
const hora_nuevo = document.getElementById("hora_nuevo");
const minuto_nuevo = document.getElementById("minuto_nuevo");
const segundo_nuevo = document.getElementById("segundo_nuevo");

const mostrarFecha = () => {
    const fecha_actual = new Date();
    const fecha_navidad = new Date(fecha_actual.getFullYear(), 11, 25); // 25 de diciembre del año actual
    const fecha_anio_nuevo = new Date(fecha_actual.getFullYear() + 1, 0, 1); // 1 de enero del año 2024

    const año_actual = fecha_actual.getFullYear();
    const mes_actual = fecha_actual.getMonth() + 1; // Meses van de 0 a 11, sumamos 1 para mostrar correctamente
    const dia_actual = fecha_actual.getDate(); // Obtener el día del mes
    const hora_actual = fecha_actual.getHours();
    const minuto_actual = fecha_actual.getMinutes();
    const segundo_actual = fecha_actual.getSeconds();
  
    // Mostrar fecha actual
    anio.innerText = año_actual;
    mes.innerText = mes_actual;
    dia.innerText = dia_actual;
    hora.innerText = hora_actual;
    minuto.innerText = minuto_actual;
    segundo.innerText = segundo_actual;
    
    // Calcular tiempo restante para Navidad
    // Calculando la diferencia en milisegundos
    const diferencia_navidad = fecha_navidad - fecha_actual;
    const diferencia_newyear = fecha_anio_nuevo - fecha_actual;

    //console.log(diferencia_newyear);

    // Convirtiendo la diferencia a días, horas, minutos y segundos
    let segundos_restantes_navidad = Math.floor(diferencia_navidad / 1000);
    let minutos_restantes_navidad = Math.floor(segundos_restantes_navidad / 60);
    let horas_restantes_navidad = Math.floor(minutos_restantes_navidad / 60);
    const dias_restantes_navidad = Math.floor(horas_restantes_navidad / 24);

    horas_restantes_navidad %= 24;
    minutos_restantes_navidad %= 60;
    segundos_restantes_navidad %= 60;

// Convirtiendo la diferencia a días, horas, minutos y segundos
    let segundos_restantes_newyear = Math.floor(diferencia_newyear / 1000);
    let minutos_restantes_newyear = Math.floor(segundos_restantes_newyear / 60);
    let horas_restantes_newyear = Math.floor(minutos_restantes_newyear / 60);
    const dias_restantes_newyear = Math.floor(horas_restantes_newyear / 24);

    horas_restantes_newyear %= 24;
    minutos_restantes_newyear %= 60;
    segundos_restantes_newyear %= 60;


    // Mostrar el tiempo restante para Navidad
    anio_navidad.innerText = año_actual - año_actual; // Año de la próxima Navidad (es el mismo que el actual)
    mes_navidad.innerText = 12 - mes_actual; // Diciembre es el mes 12
    dia_navidad.innerText = dias_restantes_navidad;
    hora_navidad.innerText = horas_restantes_navidad;
    minuto_navidad.innerText = minutos_restantes_navidad;
    segundo_navidad.innerText = segundos_restantes_navidad;  

    // Mostrar el tiempo restante para año nuevo
    anio_nuevo.innerText = año_actual - año_actual; // Año de la próxima Navidad (es el mismo que el actual)
    mes_nuevo.innerText = 12 - mes_actual; // Diciembre es el mes 12
    dia_nuevo.innerText = dias_restantes_newyear;
    hora_nuevo.innerText = horas_restantes_newyear;
    minuto_nuevo.innerText = minutos_restantes_newyear;
    segundo_nuevo.innerText = segundos_restantes_newyear;  
};

const intervalo = setInterval(mostrarFecha, 1000);

console.log("Ahi vamos K")