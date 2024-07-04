const mensaje = document.getElementById("mensaje");

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

const anio_graduation = document.getElementById("anio_graduation");
const mes_graduation = document.getElementById("mes_graduation");
const dia_graduation = document.getElementById("dia_graduation");
const hora_graduation = document.getElementById("hora_graduation");
const minuto_graduation = document.getElementById("minuto_graduation");
const segundo_graduation = document.getElementById("segundo_graduation");

function meses(mes_actual) {
  const meses = [
    { indice: 1, mes: "Enero" },
    { indice: 2, mes: "Mebrero" },
    { indice: 3, mes: "Marzo" },
    { indice: 4, mes: "Abril" },
    { indice: 5, mes: "Mayo" },
    { indice: 6, mes: "Junio" },
    { indice: 7, mes: "Julio" },
    { indice: 8, mes: "Agosto" },
    { indice: 9, mes: "Septiembre" },
    { indice: 10, mes: "Octubre" },
    { indice: 11, mes: "Noviembre" },
    { indice: 12, mes: "Diciembre" }
  ];

  let mes_text = "";

  meses.forEach((month_now) => {
    if (mes_actual === month_now.indice) {
      mes_text = month_now.mes;
    }
  });

  return mes_text;
}

function hora_formato(hora_actual) {
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

const mostrarFecha = () => {
  const fecha_actual = new Date();
  const fecha_navidad = new Date(fecha_actual.getFullYear(), 11, 25); // 25 de diciembre del año actual
  const fecha_halloween = new Date(fecha_actual.getFullYear(), 9, 31); // 31 de octubre del año actual
  const fecha_anio_nuevo = new Date(fecha_actual.getFullYear() + 1, 0, 1); // 1 de enero del año 2025
  const fecha_party = new Date(fecha_actual.getFullYear() + 1, 0, 2); // 2 de enero del año 2025
  const fecha_love = new Date(fecha_actual.getFullYear(), 9, 4); // 4 de octubre del año actual
  const born = new Date(2024, 6, 3, 16, 0); // 3 de julio del año 2024 a las 16:00
  const fecha_graduation = new Date(fecha_actual.getFullYear(), 10, 20); // 20 de noviembre del año actual

  const año_actual = fecha_actual.getFullYear();
  const mes_actual = fecha_actual.getMonth() + 1; // Meses van de 0 a 11, sumamos 1 para mostrar correctamente
  const dia_actual = fecha_actual.getDate(); // Obtener el día del mes
  const hora_actual = fecha_actual.getHours();
  const minuto_actual = fecha_actual.getMinutes();
  const segundo_actual = fecha_actual.getSeconds();




  // Mostrar fecha actual
  anio.innerText = año_actual;
  mes.innerText = meses(mes_actual);
  dia.innerText = dia_actual;
  if(hora_actual<12){
    hora.innerText = hora_actual + " AM";
  }else{
    hora.innerText = hora_formato(hora_actual) + " PM";
  }
  minuto.innerText = minuto_actual;
  segundo.innerText = segundo_actual;

  // Calcular tiempo restante para Navidad
  // Calculando la diferencia en milisegundos
  const diferencia_navidad = fecha_navidad - fecha_actual;
  const diferencia_newyear = fecha_anio_nuevo - fecha_actual;
  const diferencia_halloween = fecha_halloween - fecha_actual;
  const diferencia_love = fecha_love - fecha_actual;
  const diferencia_party = fecha_party - fecha_actual;
  const diferencia_ms = fecha_actual - born;
  const diferencia_graduation = fecha_graduation - fecha_actual;

  // Convirtiendo la diferencia a días, horas, minutos y segundos
  let segundos_restantes_navidad = Math.floor(diferencia_navidad / 1000);
  let minutos_restantes_navidad = Math.floor(segundos_restantes_navidad / 60);
  let horas_restantes_navidad = Math.floor(minutos_restantes_navidad / 60);
  const dias_restantes_navidad = Math.floor(horas_restantes_navidad / 24);

  horas_restantes_navidad %= 24;
  minutos_restantes_navidad %= 60;
  segundos_restantes_navidad %= 60;

  // Convirtiendo la diferencia a días, horas, minutos y segundos
  let segundos_restantes_graduation = Math.floor(diferencia_graduation / 1000);
  let minutos_restantes_graduation = Math.floor(segundos_restantes_graduation / 60);
  let horas_restantes_graduation = Math.floor(minutos_restantes_graduation / 60);
  const dias_restantes_graduation = Math.floor(horas_restantes_graduation / 24);

  horas_restantes_graduation %= 24;
  minutos_restantes_graduation %= 60;
  segundos_restantes_graduation %= 60;

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
  anio_navidad.innerText = "Christmas en:"; // Año de la próxima Navidad (es el mismo que el actual)
  mes_navidad.innerText = 12 - mes_actual+ " meses"; // Diciembre es el mes 12
  dia_navidad.innerText = dias_restantes_navidad+ " dias";
  hora_navidad.innerText = horas_restantes_navidad+ " horas";
  minuto_navidad.innerText = minutos_restantes_navidad+ " minutos";
  segundo_navidad.innerText = segundos_restantes_navidad+ " segundos";

  // Mostrar el tiempo restante para año nuevo
  anio_nuevo.innerText = "New Year en:"; // Año de la próxima Navidad (es el mismo que el actual)
  mes_nuevo.innerText = 12 - mes_actual+ " meses"; // Diciembre es el mes 12
  dia_nuevo.innerText = dias_restantes_newyear+ " dias";
  hora_nuevo.innerText = horas_restantes_newyear+ " horas";
  minuto_nuevo.innerText = minutos_restantes_newyear+ " minutos";
  segundo_nuevo.innerText = segundos_restantes_newyear+ " segundos";

  // Mostrar el tiempo restante para halloween
  anio_halloween.innerText = "Halloween en:"; // Año de la próxima halloween (es el mismo que el actual)
  mes_halloween.innerText = 10 - mes_actual+ " meses"; // Diciembre es el mes 12
  dia_halloween.innerText = dias_restantes_halloween+ " dias";
  hora_halloween.innerText = horas_restantes_halloween+ " horas";
  minuto_halloween.innerText = minutos_restantes_halloween+ " minutos";
  segundo_halloween.innerText = segundos_restantes_halloween+ " segundos";


  // Mostrar el tiempo restante para love
  anio_love.innerText = "HB en:"; // Año de la próxima HB love (es el mismo que el actual)
  mes_love.innerText = 10 - mes_actual + " meses"; // Diciembre es el mes 12
  dia_love.innerText = dias_restantes_love  + " dias";
  hora_love.innerText = horas_restantes_love + " horas";
  minuto_love.innerText = minutos_restantes_love + " minutos";
  segundo_love.innerText = segundos_restantes_love + " segundos";

  // Mostrar el tiempo restante para party
  anio_party.innerText = "Village en:"; // Año de la próxima party (es el mismo que el actual)
  mes_party.innerText = 13 - mes_actual+ " meses"; // Diciembre es el mes 12
  dia_party.innerText = dias_restantes_party+ " dias";
  hora_party.innerText = horas_restantes_party+ " horas";
  minuto_party.innerText = minutos_restantes_party+ " minutos";
  segundo_party.innerText = segundos_restantes_party+ " segundos";

  // Mostrar el tiempo restante para graduation
  anio_graduation.innerText = "Pensum en:"; // Año de la próxima graduation (es el mismo que el actual)
  mes_graduation.innerText = 11 - mes_actual+ " meses"; // Diciembre es el mes 12
  dia_graduation.innerText = dias_restantes_graduation+ " dias";
  hora_graduation.innerText = horas_restantes_graduation+ " horas";
  minuto_graduation.innerText = minutos_restantes_graduation+ " minutos";
  segundo_graduation.innerText = segundos_restantes_graduation+ " segundos";

  if (mes_actual == 10 && dia_actual == 3) {
    mensaje.innerText = "¡Feliz cumpleaños 👩‍❤️‍💋‍👨 !"
  } else if (mes_actual == 10 && dia_actual == 31) {
    mensaje.innerText = "¡Halloween 👻🎃!"
  } else if (mes_actual == 12 && dia_actual == 25) {
    mensaje.innerText = "¡Feliz navidad 🎅🎄!"
  } else if (mes_actual == 1 && dia_actual == 1) {
    mensaje.innerText = "¡Feliz año nuevo " + año_actual + " 🎇!"
  } else if (mes_actual == 1 && dia_actual == 2) {
    mensaje.innerText = "Llego el dia"
  } else if (mes_actual == 11 && dia_actual == 20 && hora_actual >= 21) {
    mensaje.innerText = "Acabe pensum 🎓"
  } else {
    mensaje.innerText = ""
  }

  // Calcular años, meses, días, horas, minutos y segundos
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

  console.log(`Creado hace ${anios_born} años, ${meses_born} meses, ${dias_born} dias, ${horas_born} horas, ${minutos_born} minutos, ${segundos_born} segundos`);
};

const intervalo = setInterval(mostrarFecha, 1000);


document.addEventListener('DOMContentLoaded', function() {
  // Selecciona el contenedor de Navidad
  var containeractual = document.querySelector('.container-actual');
  
  // Agrega el EventListener para el clic
  containeractual.addEventListener('click', function() {
      // Alerta cuando se hace clic en el contenedor de Navidad
      alert('El arte de la vida radica en vivir cada día con propósito y pasión, encontrando belleza en los pequeños momentos ');
  });
});

document.addEventListener('DOMContentLoaded', function() {
  // Selecciona el contenedor de Navidad
  var containerHB = document.querySelector('.container-love');
  
  // Agrega el EventListener para el clic
  containerHB.addEventListener('click', function() {
      // Alerta cuando se hace clic en el contenedor de Navidad
      alert('Un cumpleaños es un recordatorio especial de cuánto brilla una vida cuando se celebra con amor y gratitud ');
  });
});

document.addEventListener('DOMContentLoaded', function() {
  // Selecciona el contenedor de Navidad
  var containerHalloween = document.querySelector('.container-halloween');
  
  // Agrega el EventListener para el clic
  containerHalloween.addEventListener('click', function() {
      // Alerta cuando se hace clic en el contenedor de Navidad
      alert('En Halloween, las sombras cobran vida y los corazones se llenan de misterio y diversión 🎃');
  });
});

document.addEventListener('DOMContentLoaded', function() {
  // Selecciona el contenedor de Navidad
  var containerGraduation = document.querySelector('.container-graduation');
  
  // Agrega el EventListener para el clic
  containerGraduation.addEventListener('click', function() {
      // Alerta cuando se hace clic en el contenedor de Navidad
      alert('El diploma en mano marca el fin de un capítulo, pero el comienzo de un camino lleno de promesas y metas por cumplir 🎓');
  });
});

document.addEventListener('DOMContentLoaded', function() {
  // Selecciona el contenedor de Navidad
  var containerNavidad = document.querySelector('.container-navidad');
  
  // Agrega el EventListener para el clic
  containerNavidad.addEventListener('click', function() {
      // Alerta cuando se hace clic en el contenedor de Navidad
      alert('¡La Navidad trae consigo la magia de la paz y el amor, envolviendo corazones con esperanza y alegría! 🎄');
  });
});

document.addEventListener('DOMContentLoaded', function() {
  // Selecciona el contenedor de Navidad
  var containerAnioNuevo= document.querySelector('.container-anionuevo');
  
  // Agrega el EventListener para el clic
  containerAnioNuevo.addEventListener('click', function() {
      // Alerta cuando se hace clic en el contenedor de Navidad
      alert('Que cada nuevo año traiga consigo renovadas esperanzas, oportunidades ilimitadas y momentos inolvidables 🎇');
  });
});

document.addEventListener('DOMContentLoaded', function() {
  // Selecciona el contenedor de Navidad
  var containerParty= document.querySelector('.container-party');
  
  // Agrega el EventListener para el clic
  containerParty.addEventListener('click', function() {
      // Alerta cuando se hace clic en el contenedor de Navidad
      alert('El reencuentro trae consigo la felicidad de volver a sentir cercanos a quienes tanto se extrañó 💫');
  });
});



