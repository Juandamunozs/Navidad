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

const anio_halloween = document.getElementById("anio_halloween");
const mes_halloween = document.getElementById("mes_halloween");
const dia_halloween = document.getElementById("dia_halloween");
const hora_halloween = document.getElementById("hora_halloween");
const minuto_halloween = document.getElementById("minuto_halloween");
const segundo_halloween = document.getElementById("segundo_halloween");

const anio_love = document.getElementById("anio_love");
const mes_love = document.getElementById("mes_love");
const dia_love = document.getElementById("dia_love");
const hora_love = document.getElementById("hora_love");
const minuto_love = document.getElementById("minuto_love");
const segundo_love = document.getElementById("segundo_love");

const anio_party = document.getElementById("anio_party");
const mes_party = document.getElementById("mes_party");
const dia_party = document.getElementById("dia_party");
const hora_party = document.getElementById("hora_party");
const minuto_party = document.getElementById("minuto_party");
const segundo_party = document.getElementById("segundo_party");

const mostrarFecha = () => {
  const fecha_actual = new Date();
  const fecha_navidad = new Date(fecha_actual.getFullYear(), 11, 25); // 25 de diciembre del año actual
  const fecha_halloween = new Date(fecha_actual.getFullYear(), 9, 31); // 31 de octubre del año actual
  const fecha_anio_nuevo = new Date(fecha_actual.getFullYear() + 1, 0, 1); // 1 de enero del año 2025
  const fecha_party = new Date(fecha_actual.getFullYear() + 1, 0, 2); // 2 de enero del año 2025
  const fecha_love = new Date(fecha_actual.getFullYear(), 9, 4); // 4 de octubre del año actual

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
  const diferencia_halloween = fecha_halloween - fecha_actual;
  const diferencia_love = fecha_love - fecha_actual;
  const diferencia_party = fecha_party - fecha_actual;

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

  // Convirtiendo la diferencia a días, horas, minutos y segundos
  let segundos_restantes_halloween = Math.floor(diferencia_halloween / 1000);
  let minutos_restantes_halloween = Math.floor(segundos_restantes_halloween / 60);
  let horas_restantes_halloween = Math.floor(minutos_restantes_halloween / 60);
  const dias_restantes_halloween = Math.floor(horas_restantes_halloween / 24);

  horas_restantes_halloween %= 24;
  minutos_restantes_halloween %= 60;
  segundos_restantes_halloween %= 60;

   // Convirtiendo la diferencia a días, horas, minutos y segundos
   let segundos_restantes_love = Math.floor(diferencia_love / 1000);
   let minutos_restantes_love = Math.floor(segundos_restantes_love / 60);
   let horas_restantes_love = Math.floor(minutos_restantes_love / 60);
   const dias_restantes_love = Math.floor(horas_restantes_love / 24);
 
   horas_restantes_love %= 24;
   minutos_restantes_love %= 60;
   segundos_restantes_love %= 60;

    // Convirtiendo la diferencia a días, horas, minutos y segundos
    let segundos_restantes_party = Math.floor(diferencia_party / 1000);
    let minutos_restantes_party = Math.floor(segundos_restantes_party / 60);
    let horas_restantes_party = Math.floor(minutos_restantes_party / 60);
    const dias_restantes_party = Math.floor(horas_restantes_party / 24);
  
    horas_restantes_party %= 24;
    minutos_restantes_party %= 60;
    segundos_restantes_party %= 60;

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

  // Mostrar el tiempo restante para halloween
  anio_halloween.innerText = año_actual - año_actual; // Año de la próxima halloween (es el mismo que el actual)
  mes_halloween.innerText = 10 - mes_actual; // Diciembre es el mes 12
  dia_halloween.innerText = dias_restantes_halloween;
  hora_halloween.innerText = horas_restantes_halloween;
  minuto_halloween.innerText = minutos_restantes_halloween;
  segundo_halloween.innerText = segundos_restantes_halloween;


// Mostrar el tiempo restante para love
  anio_love.innerText = año_actual - año_actual; // Año de la próxima HB love (es el mismo que el actual)
  mes_love.innerText = 10 - mes_actual; // Diciembre es el mes 12
  dia_love.innerText = dias_restantes_love;
  hora_love.innerText = horas_restantes_love;
  minuto_love.innerText = minutos_restantes_love;
  segundo_love.innerText = segundos_restantes_love;

  // Mostrar el tiempo restante para party
  anio_party.innerText = año_actual - año_actual; // Año de la próxima party (es el mismo que el actual)
  mes_party.innerText = 13 - mes_actual; // Diciembre es el mes 12
  dia_party.innerText = dias_restantes_party;
  hora_party.innerText = horas_restantes_party;
  minuto_party.innerText = minutos_restantes_party;
  segundo_party.innerText = segundos_restantes_party;

};

const intervalo = setInterval(mostrarFecha, 1000);

console.log("Ahi vamos K");
