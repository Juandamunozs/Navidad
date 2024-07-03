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

const mostrarFecha = () => {
    const fecha_actual = new Date();
    const fecha_navidad = new Date(fecha_actual.getFullYear(), 11, 25); // 25 de diciembre del año actual

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
    const diferencia_ms = fecha_navidad - fecha_actual;

    // Convirtiendo la diferencia a días, horas, minutos y segundos
    let segundos_restantes = Math.floor(diferencia_ms / 1000);
    let minutos_restantes = Math.floor(segundos_restantes / 60);
    let horas_restantes = Math.floor(minutos_restantes / 60);
    const dias_restantes = Math.floor(horas_restantes / 24);

    horas_restantes %= 24;
    minutos_restantes %= 60;
    segundos_restantes %= 60;

    // Mostrar el tiempo restante para Navidad
    anio_navidad.innerText = año_actual - año_actual; // Año de la próxima Navidad (es el mismo que el actual)
    mes_navidad.innerText = 12 - mes_actual; // Diciembre es el mes 12

    dia_navidad.innerText = dias_restantes;
    hora_navidad.innerText = horas_restantes;
    minuto_navidad.innerText = minutos_restantes;
    segundo_navidad.innerText = segundos_restantes;  
};

const intervalo = setInterval(mostrarFecha, 1000);