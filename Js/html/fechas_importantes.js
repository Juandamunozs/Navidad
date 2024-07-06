//Recibir los elementos del html a javascript

//constantes de texto para buenas practicas
const meses = "months"
const dias = "days"
const horas = "hours"
const minutos = "minutes"
const segundos = "seconds"

//constanes de cuaando juega  real madrid 
const equipo_local_club = "Real Madrid";
const equipo_visitante_club = "Milan";

//constanes de cuando juega  colombia 
const equipo_local_seleccion = "Colombia";
const equipo_visitante_seleccion = "Panama";

//Recibir datos de fecha actual de html a js
const anio = document.getElementById("anio");
const mes = document.getElementById("mes");
const dia = document.getElementById("dia");
const hora = document.getElementById("hora");
const minuto = document.getElementById("minuto");
const segundo = document.getElementById("segundo");

//Recibir datos de navidad de html a js
const navidad = document.getElementById("navidad");
const mes_navidad = document.getElementById("mes_navidad");
const dia_navidad = document.getElementById("dia_navidad");
const hora_navidad = document.getElementById("hora_navidad");
const minuto_navidad = document.getElementById("minuto_navidad");
const segundo_navidad = document.getElementById("segundo_navidad");

//Recibir datos de año nuevo de html a js
const nuevo = document.getElementById("nuevo");
const mes_nuevo = document.getElementById("mes_nuevo");
const dia_nuevo = document.getElementById("dia_nuevo");
const hora_nuevo = document.getElementById("hora_nuevo");
const minuto_nuevo = document.getElementById("minuto_nuevo");
const segundo_nuevo = document.getElementById("segundo_nuevo");

//Recibir datos de halloween de html a js
const halloween = document.getElementById("halloween");
const mes_halloween = document.getElementById("mes_halloween");
const dia_halloween = document.getElementById("dia_halloween");
const hora_halloween = document.getElementById("hora_halloween");
const minuto_halloween = document.getElementById("minuto_halloween");
const segundo_halloween = document.getElementById("segundo_halloween");

//Recibir datos de hbk de html a js
const love = document.getElementById("love");
const mes_love = document.getElementById("mes_love");
const dia_love = document.getElementById("dia_love");
const hora_love = document.getElementById("hora_love");
const minuto_love = document.getElementById("minuto_love");
const segundo_love = document.getElementById("segundo_love");

//Recibir datos de party de html a js
const party = document.getElementById("party");
const mes_party = document.getElementById("mes_party");
const dia_party = document.getElementById("dia_party");
const hora_party = document.getElementById("hora_party");
const minuto_party = document.getElementById("minuto_party");
const segundo_party = document.getElementById("segundo_party");

//Recibir datos de san valentin de html a js
const san_valentin = document.getElementById("san_valentin");
const mes_san_valentin = document.getElementById("mes_san_valentin");
const dia_san_valentin = document.getElementById("dia_san_valentin");
const hora_san_valentin = document.getElementById("hora_san_valentin");
const minuto_san_valentin = document.getElementById("minuto_san_valentin");
const segundo_san_valentin = document.getElementById("segundo_san_valentin");

//Recibir datos de mi cumpleaños de html a js
const bd = document.getElementById("bd");
const mes_bd = document.getElementById("mes_bd");
const dia_bd = document.getElementById("dia_bd");
const hora_bd = document.getElementById("hora_bd");
const minuto_bd = document.getElementById("minuto_bd");
const segundo_bd = document.getElementById("segundo_bd");

//Recibir datos de la seleccion colombia de html a js
const colombia = document.getElementById("colombia");
const mes_colombia = document.getElementById("mes_colombia");
const dia_colombia = document.getElementById("dia_colombia");
const hora_colombia = document.getElementById("hora_colombia");
const minuto_colombia = document.getElementById("minuto_colombia");
const segundo_colombia = document.getElementById("segundo_colombia");

//Recibir datos de la seleccion real madrid de html a js
const real_madrid = document.getElementById("real_madrid");
const mes_real_madrid = document.getElementById("mes_real_madrid");
const dia_real_madrid = document.getElementById("dia_real_madrid");
const hora_real_madrid = document.getElementById("hora_real_madrid");
const minuto_real_madrid = document.getElementById("minuto_real_madrid");
const segundo_real_madrid = document.getElementById("segundo_real_madrid");

//Funcion donde trasformo el mes en numero a mes en texto

function meses_texto(mes_actual) {
  const meses = [
    { indice: 1, mes: "January" },
    { indice: 2, mes: "February" },
    { indice: 3, mes: "March" },
    { indice: 4, mes: "April" },
    { indice: 5, mes: "May" },
    { indice: 6, mes: "June" },
    { indice: 7, mes: "July" },
    { indice: 8, mes: "August" },
    { indice: 9, mes: "September" },
    { indice: 10, mes: "October" },
    { indice: 11, mes: "November" },
    { indice: 12, mes: "December" }
  ];

  let mes_text = "";

  meses.forEach((month_now) => {
    if (mes_actual === month_now.indice) {
      mes_text = month_now.mes;
    }
  });

  return mes_text;
}

//Funcion donde trasformo el horario de formato de 24 horas a 12 horas

function hora_formato_noche(hora_actual) {
  const hora = [
    { indice: 12, hour: "12" },
    { indice: 13, hour: "1" },
    { indice: 14, hour: "2" },
    { indice: 15, hour: "3" },
    { indice: 16, hour: "4" },
    { indice: 17, hour: "5" },
    { indice: 18, hour: "6" },
    { indice: 19, hour: "7" },
    { indice: 10, hour: "8" },
    { indice: 21, hour: "9" },
    { indice: 22, hour: "10" },
    { indice: 23, hour: "11" }
  ];

  let hour_text = "";

  hora.forEach((hour_now) => {
    if (hora_actual === hour_now.indice) {
      hour_text = hour_now.hour;
    }
  });
  return hour_text;
}

function hora_formato_dia(hora_actual) {
  const hora = [
    { indice: 0, hour: "12" },
    { indice: 1, hour: "1" },
    { indice: 2, hour: "2" },
    { indice: 3, hour: "3" },
    { indice: 4, hour: "4" },
    { indice: 5, hour: "5" },
    { indice: 6, hour: "6" },
    { indice: 7, hour: "7" },
    { indice: 8, hour: "8" },
    { indice: 9, hour: "9" },
    { indice: 10, hour: "10" },
    { indice: 11, hour: "11" },
  ];

  let hour_text = "";

  hora.forEach((hour_now) => {
    if (hora_actual === hour_now.indice) {
      hour_text = hour_now.hour;
    }
  });
  return hour_text;
}

//Funcion encargada de mostrar fecha de todas las cartas
const mostrarFecha = () => {

  //Fechas de destino o donde ocurre el evento
  const fecha_actual = new Date();
  const fecha_navidad = new Date(fecha_actual.getFullYear(), 11, 25); // 25 de diciembre del año actual
  const fecha_valentin = new Date(fecha_actual.getFullYear(), 8, 21); // 21 de septiembre del año actual
  const fecha_halloween = new Date(fecha_actual.getFullYear(), 9, 31); // 31 de octubre del año actual
  const fecha_anio_nuevo = new Date(fecha_actual.getFullYear() + 1, 0, 1); // 1 de enero del año 2025
  const fecha_party = new Date(fecha_actual.getFullYear() + 1, 0, 2); // 2 de enero del año 2025
  const fecha_love = new Date(fecha_actual.getFullYear(), 9, 4); // 4 de octubre del año actual
  const born = new Date(2024, 6, 3, 16, 23); // 3 de julio del año 2024 a las 16:23
  const fecha_bd = new Date(fecha_actual.getFullYear(), 10, 5); // 5 de noviembre del año actual
  const fecha_colombia = new Date(2024, 6, 6, 17, 0); // 6 de julio a las 5 pm del año actual
  const fecha_real_madrid = new Date(2024, 6, 31, 19, 30); // 6 de julio a las 5 pm del año actual

  //Fechas donde obtengo el mes, dia, hora, minuto y segundo en tiempo real
  const año_actual = fecha_actual.getFullYear(); // Obtener el año actual
  const mes_actual = fecha_actual.getMonth() + 1; // Meses van de 0 a 11, sumamos 1 para mostrar correctamente
  const dia_actual = fecha_actual.getDate(); // Obtener el día del mes
  const hora_actual = fecha_actual.getHours(); // Obtener la hora actual
  const minuto_actual = fecha_actual.getMinutes(); // Obtener el minuto actual
  const segundo_actual = fecha_actual.getSeconds(); // Obtener el segundo actual

  //Enviar datos de js a html de la fecha actual
  anio.innerText = año_actual;
  mes.innerText = meses_texto(mes_actual);
  dia.innerText = dia_actual;
  if (hora_actual < 12) {
    hora.innerText = hora_formato_dia(hora_actual) + " AM";
  } else {
    hora.innerText = hora_formato_noche(hora_actual) + " PM";
  }
  minuto.innerText = minuto_actual;
  segundo.innerText = segundo_actual;

  // Calcular tiempo restante para cada evento en milisegundos
  const diferencia_navidad = fecha_navidad - fecha_actual;
  const diferencia_newyear = fecha_anio_nuevo - fecha_actual;
  const diferencia_halloween = fecha_halloween - fecha_actual;
  const diferencia_love = fecha_love - fecha_actual;
  const diferencia_party = fecha_party - fecha_actual;
  const diferencia_ms = fecha_actual - born;
  const diferencia_san_valentin = fecha_valentin - fecha_actual;
  const diferencia_bd = fecha_bd - fecha_actual;
  const diferencia_colombia = fecha_colombia - fecha_actual;
  const diferencia_real_madrid = fecha_real_madrid - fecha_actual;



  // Convirtiendo la diferencia a días, horas, minutos y segundos de navidad
  let segundos_restantes_navidad = Math.floor(diferencia_navidad / 1000);
  let minutos_restantes_navidad = Math.floor(segundos_restantes_navidad / 60);
  let horas_restantes_navidad = Math.floor(minutos_restantes_navidad / 60);
  const dias_restantes_navidad = Math.floor(horas_restantes_navidad / 24);

  horas_restantes_navidad %= 24;
  minutos_restantes_navidad %= 60;
  segundos_restantes_navidad %= 60;

  // Convirtiendo la diferencia a días, horas, minutos y segundos de nuevo año
  let segundos_restantes_newyear = Math.floor(diferencia_newyear / 1000);
  let minutos_restantes_newyear = Math.floor(segundos_restantes_newyear / 60);
  let horas_restantes_newyear = Math.floor(minutos_restantes_newyear / 60);
  const dias_restantes_newyear = Math.floor(horas_restantes_newyear / 24);

  horas_restantes_newyear %= 24;
  minutos_restantes_newyear %= 60;
  segundos_restantes_newyear %= 60;

  // Convirtiendo la diferencia a días, horas, minutos y segundos de halloween
  let segundos_restantes_halloween = Math.floor(diferencia_halloween / 1000);
  let minutos_restantes_halloween = Math.floor(segundos_restantes_halloween / 60);
  let horas_restantes_halloween = Math.floor(minutos_restantes_halloween / 60);
  const dias_restantes_halloween = Math.floor(horas_restantes_halloween / 24);

  horas_restantes_halloween %= 24;
  minutos_restantes_halloween %= 60;
  segundos_restantes_halloween %= 60;

  // Convirtiendo la diferencia a días, horas, minutos y segundos de hbk
  let segundos_restantes_love = Math.floor(diferencia_love / 1000);
  let minutos_restantes_love = Math.floor(segundos_restantes_love / 60);
  let horas_restantes_love = Math.floor(minutos_restantes_love / 60);
  const dias_restantes_love = Math.floor(horas_restantes_love / 24);

  horas_restantes_love %= 24;
  minutos_restantes_love %= 60;
  segundos_restantes_love %= 60;

  // Convirtiendo la diferencia a días, horas, minutos y segundos de party 2 de enero
  let segundos_restantes_party = Math.floor(diferencia_party / 1000);
  let minutos_restantes_party = Math.floor(segundos_restantes_party / 60);
  let horas_restantes_party = Math.floor(minutos_restantes_party / 60);
  const dias_restantes_party = Math.floor(horas_restantes_party / 24);

  horas_restantes_party %= 24;
  minutos_restantes_party %= 60;
  segundos_restantes_party %= 60;

  // Convirtiendo la diferencia a días, horas, minutos y segundos de party 2 de enero
  let segundos_restantes_san_valentin = Math.floor(diferencia_san_valentin / 1000);
  let minutos_restantes_san_valentin = Math.floor(segundos_restantes_san_valentin / 60);
  let horas_restantes_san_valentin = Math.floor(minutos_restantes_san_valentin / 60);
  const dias_restantes_san_valentin = Math.floor(horas_restantes_san_valentin / 24);

  horas_restantes_san_valentin %= 24;
  minutos_restantes_san_valentin %= 60;
  segundos_restantes_san_valentin %= 60;

  // Convirtiendo la diferencia a días, horas, minutos y segundos de party 2 de enero
  let segundos_restantes_bd = Math.floor(diferencia_bd / 1000);
  let minutos_restantes_bd = Math.floor(segundos_restantes_bd / 60);
  let horas_restantes_bd = Math.floor(minutos_restantes_bd / 60);
  const dias_restantes_bd = Math.floor(horas_restantes_bd / 24);

  horas_restantes_bd %= 24;
  minutos_restantes_bd %= 60;
  segundos_restantes_bd %= 60;

  // Convirtiendo la diferencia a días, horas, minutos y segundos de la seleccion colombia
  let segundos_restantes_colombia = Math.floor(diferencia_colombia / 1000);
  let minutos_restantes_colombia = Math.floor(segundos_restantes_colombia / 60);
  let horas_restantes_colombia = Math.floor(minutos_restantes_colombia / 60);
  const dias_restantes_colombia = Math.floor(horas_restantes_colombia / 24);

  horas_restantes_colombia %= 24;
  minutos_restantes_colombia %= 60;
  segundos_restantes_colombia %= 60;

  // Convirtiendo la diferencia a días, horas, minutos y segundos de la seleccion real madrid
  let segundos_restantes_real_madrid = Math.floor(diferencia_real_madrid / 1000);
  let minutos_restantes_real_madrid = Math.floor(segundos_restantes_real_madrid / 60);
  let horas_restantes_real_madrid = Math.floor(minutos_restantes_real_madrid / 60);
  const dias_restantes_real_madrid = Math.floor(horas_restantes_real_madrid / 24);

  horas_restantes_real_madrid %= 24;
  minutos_restantes_real_madrid %= 60;
  segundos_restantes_real_madrid %= 60;

  //Enviar datos de js a html de navidad
  navidad.innerText = "Christmas in:"; // Año de la próxima Navidad (es el mismo que el actual)
  mes_navidad.innerText = 12 - mes_actual + " " + meses; // Diciembre es el mes 12
  dia_navidad.innerText = dias_restantes_navidad + " " + dias;
  hora_navidad.innerText = horas_restantes_navidad + " " + horas;
  minuto_navidad.innerText = minutos_restantes_navidad + " " + minutos;
  segundo_navidad.innerText = segundos_restantes_navidad + " " + segundos;

  //Enviar datos de js a html del nuevo año
  nuevo.innerText = "New Year in:"; // Año de la próxima Navidad (es el mismo que el actual)
  mes_nuevo.innerText = 12 - mes_actual + " " + meses; // Diciembre es el mes 12
  dia_nuevo.innerText = dias_restantes_newyear + " " + dias;
  hora_nuevo.innerText = horas_restantes_newyear + " " + horas;
  minuto_nuevo.innerText = minutos_restantes_newyear + " " + minutos;
  segundo_nuevo.innerText = segundos_restantes_newyear + " " + segundos;

  //Enviar datos de js a html de halloween
  halloween.innerText = "Halloween in:"; // Año de la próxima halloween (es el mismo que el actual)
  mes_halloween.innerText = 10 - mes_actual + " " + meses; // Diciembre es el mes 12
  dia_halloween.innerText = dias_restantes_halloween + " " + dias;
  hora_halloween.innerText = horas_restantes_halloween + " " + horas;
  minuto_halloween.innerText = minutos_restantes_halloween + " " + minutos;
  segundo_halloween.innerText = segundos_restantes_halloween + " " + segundos;


  //Enviar datos de js a html de hbk
  love.innerText = "HB in:"; // Año de la próxima HB love (es el mismo que el actual)
  mes_love.innerText = 10 - mes_actual + " " + meses; // Diciembre es el mes 12
  dia_love.innerText = dias_restantes_love + " " + dias;
  hora_love.innerText = horas_restantes_love + " " + horas;
  minuto_love.innerText = minutos_restantes_love + " " + minutos;
  segundo_love.innerText = segundos_restantes_love + " " + segundos;

  //Enviar datos de js a html de party
  party.innerText = "Village in:"; // Año de la próxima party (es el mismo que el actual)
  mes_party.innerText = 12 - mes_actual + " " + meses; // Diciembre es el mes 12
  dia_party.innerText = dias_restantes_party + " " + dias;
  hora_party.innerText = horas_restantes_party + " " + horas;
  minuto_party.innerText = minutos_restantes_party + " " + minutos;
  segundo_party.innerText = segundos_restantes_party + " " + segundos;

  //Enviar datos de js a html de san valentin
  san_valentin.innerText = "Friendship Day in:"; // Año de la próxima graduation (es el mismo que el actual)
  mes_san_valentin.innerText = 9 - mes_actual + " " + meses; // Diciembre es el mes 12
  dia_san_valentin.innerText = dias_restantes_san_valentin + " " + dias;
  hora_san_valentin.innerText = horas_restantes_san_valentin + " " + horas;
  minuto_san_valentin.innerText = minutos_restantes_san_valentin + " " + minutos;
  segundo_san_valentin.innerText = segundos_restantes_san_valentin + " " + segundos;

  //Enviar datos de js a html de mi cumpleaños
  bd.innerText = "HB in:"; // Año de la próxima graduation (es el mismo que el actual)
  mes_bd.innerText = 11 - mes_actual + " " + meses; // Diciembre es el mes 12
  dia_bd.innerText = dias_restantes_bd + " " + dias;
  hora_bd.innerText = horas_restantes_bd + " " + horas;
  minuto_bd.innerText = minutos_restantes_bd + " " + minutos;
  segundo_bd.innerText = segundos_restantes_bd + " " + segundos;

  //Enviar datos de js a html de la seleccion colombia
  colombia.innerText = equipo_local_seleccion + " Vs. " + equipo_visitante_seleccion + " in:"; // Año de la próxima graduation (es el mismo que el actual)
  mes_colombia.innerText = 7 - mes_actual + " " + meses; // Diciembre es el mes 12
  dia_colombia.innerText = dias_restantes_colombia + " " + dias;
  hora_colombia.innerText = horas_restantes_colombia + " " + horas;
  minuto_colombia.innerText = minutos_restantes_colombia + " " + minutos;
  segundo_colombia.innerText = segundos_restantes_colombia + " " + segundos;

  //Enviar datos de js a html del real madrid
  real_madrid.innerText = equipo_local_club + " Vs. " + equipo_visitante_club + " in:"; // Año de la próxima graduation (es el mismo que el actual)
  mes_real_madrid.innerText = 7 - mes_actual + " " + meses; // Diciembre es el mes 12
  dia_real_madrid.innerText = dias_restantes_real_madrid + " " + dias;
  hora_real_madrid.innerText = horas_restantes_real_madrid + " " + horas;
  minuto_real_madrid.innerText = minutos_restantes_real_madrid + " " + minutos;
  segundo_real_madrid.innerText = segundos_restantes_real_madrid + " " + segundos;


  // Calcular años, meses, días, horas, minutos y segundos por consola
  let segundos_totales_born = Math.floor(diferencia_ms / 1000);

  let anios_born = Math.floor(segundos_totales_born / 31536000);
  segundos_totales_born %= 31536000;

  let meses_born = Math.floor(segundos_totales_born / 2592000);
  segundos_totales_born %= 2592000;

  let dias_born = Math.floor(segundos_totales_born / 86400);
  segundos_totales_born %= 86400;

  let horas_born = Math.floor(segundos_totales_born / 3600);
  segundos_totales_born %= 3600;

  let minutos_born = Math.floor(segundos_totales_born / 60);
  segundos_totales_born %= 60;

  let segundos_born = segundos_totales_born;

  //console.log(`Creado hace ${anios_born} años, ${meses_born} meses, ${dias_born} dias, ${horas_born} horas, ${minutos_born} minutos, ${segundos_born} segundos`);
};

//Funcion encargada de hacer que se actualice los datos cada segundo

const intervalo = setInterval(mostrarFecha, 1000);

//Alertas inteligentes
/*
document.addEventListener('DOMContentLoaded', function () {
  // Selecciona el contenedor de Navidad
  var containeractual = document.querySelector('.container-actual');

  // Agrega el EventListener para el clic
  containeractual.addEventListener('click', function () {
    // Alerta cuando se hace clic en el contenedor de Navidad
    alert('El arte de la vida radica en vivir cada día con propósito y pasión, encontrando belleza en los pequeños momentos 🕒');
  });
});

document.addEventListener('DOMContentLoaded', function () {
  // Selecciona el contenedor de Navidad
  var containerHB = document.querySelector('.container-love');

  // Agrega el EventListener para el clic
  containerHB.addEventListener('click', function () {
    // Alerta cuando se hace clic en el contenedor de Navidad
    alert('Un cumpleaños es un recordatorio especial de cuánto brilla una vida cuando se celebra con amor y gratitud 🎂');
  });
});

document.addEventListener('DOMContentLoaded', function () {
  // Selecciona el contenedor de Navidad
  var containerHalloween = document.querySelector('.container-halloween');

  // Agrega el EventListener para el clic
  containerHalloween.addEventListener('click', function () {
    // Alerta cuando se hace clic en el contenedor de Navidad
    alert('En Halloween, las sombras cobran vida y los corazones se llenan de misterio y diversión 🎃');
  });
});

document.addEventListener('DOMContentLoaded', function () {
  // Selecciona el contenedor de Navidad
  var containerGraduation = document.querySelector('.container-graduation');

  // Agrega el EventListener para el clic
  containerGraduation.addEventListener('click', function () {
    // Alerta cuando se hace clic en el contenedor de Navidad
    alert('El diploma en mano marca el fin de un capítulo, pero el comienzo de un camino lleno de promesas y metas por cumplir 🎓');
  });
});

document.addEventListener('DOMContentLoaded', function () {
  // Selecciona el contenedor de Navidad
  var containerNavidad = document.querySelector('.container-navidad');

  // Agrega el EventListener para el clic
  containerNavidad.addEventListener('click', function () {
    // Alerta cuando se hace clic en el contenedor de Navidad
    alert('¡La Navidad trae consigo la magia de la paz y el amor, envolviendo corazones con esperanza y alegría! 🎄');
  });
});

document.addEventListener('DOMContentLoaded', function () {
  // Selecciona el contenedor de Navidad
  var containerAnioNuevo = document.querySelector('.container-anionuevo');

  // Agrega el EventListener para el clic
  containerAnioNuevo.addEventListener('click', function () {
    // Alerta cuando se hace clic en el contenedor de Navidad
    alert('Que cada nuevo año traiga consigo renovadas esperanzas, oportunidades ilimitadas y momentos inolvidables 🎇');
  });
});

document.addEventListener('DOMContentLoaded', function () {
  // Selecciona el contenedor de Navidad
  var containerParty = document.querySelector('.container-party');

  // Agrega el EventListener para el clic
  containerParty.addEventListener('click', function () {
    // Alerta cuando se hace clic en el contenedor de Navidad
    alert('El reencuentro trae consigo la felicidad de volver a sentir cercanos a quienes tanto se extrañó 💫');
  });
});

document.addEventListener('DOMContentLoaded', function () {
  // Selecciona el contenedor de Navidad
  var containerHB = document.querySelector('.container-hb');

  // Agrega el EventListener para el clic
  containerHB.addEventListener('click', function () {
    // Alerta cuando se hace clic en el contenedor de Navidad
    alert('Un cumpleaños es un recordatorio especial de cuánto brilla una vida cuando se celebra con amor y gratitud 🎂');
  });
});

document.addEventListener('DOMContentLoaded', function () {
  // Selecciona el contenedor de Navidad
  var containerHB = document.querySelector('.container-san-valentin');

  // Agrega el EventListener para el clic
  containerHB.addEventListener('click', function () {
    // Alerta cuando se hace clic en el contenedor de Navidad
    alert('Feliz día del amor y la amistad ❤️️');
  });
});

*/



