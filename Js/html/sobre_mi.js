//Recibir datos de mi edad de html a js
const mi_edad = document.getElementById("mi_edad")

//Recibir datos de graduación de html a js
const graduation = document.getElementById("graduation");
const mes_graduation = document.getElementById("mes_graduation");
const dia_graduation = document.getElementById("dia_graduation");
const hora_graduation = document.getElementById("hora_graduation");
const minuto_graduation = document.getElementById("minuto_graduation");
const segundo_graduation = document.getElementById("segundo_graduation");

//constantes de texto para buenas practicas
const meses = "months"
const dias = "days"
const horas = "hours"
const minutos = "minutes"
const segundos = "seconds"

const sobre_mi = () => {


    const fecha_actual = new Date();

   //Fechas donde obtengo el mes, dia, hora, minuto y segundo en tiempo real
   const año_actual = fecha_actual.getFullYear(); // Obtener el año actual
   const mes_actual = fecha_actual.getMonth() + 1; // Meses van de 0 a 11, sumamos 1 para mostrar correctamente
   const dia_actual = fecha_actual.getDate(); // Obtener el día del mes
   const hora_actual = fecha_actual.getHours(); // Obtener la hora actual
   const minuto_actual = fecha_actual.getMinutes(); // Obtener el minuto actual
   const segundo_actual = fecha_actual.getSeconds(); // Obtener el segundo actual;

    const año_nacimiento = new Date(2004);

    const fecha_graduation = new Date(fecha_actual.getFullYear(), 10, 20); // 20 de noviembre del fecha_actual actual

    const diferencia_graduation = fecha_graduation - fecha_actual;

      // Convirtiendo la diferencia a días, horas, minutos y segundos de graduacion
  let segundos_restantes_graduation = Math.floor(diferencia_graduation / 1000);
  let minutos_restantes_graduation = Math.floor(segundos_restantes_graduation / 60);
  let horas_restantes_graduation = Math.floor(minutos_restantes_graduation / 60);
  const dias_restantes_graduation = Math.floor(horas_restantes_graduation / 24);

  horas_restantes_graduation %= 24;
  minutos_restantes_graduation %= 60;
  segundos_restantes_graduation %= 60;

  
  //Enviar datos de js a html de graduation
  graduation.innerText = "I graduate in:"; // Año de la próxima graduation (es el mismo que el actual)
  mes_graduation.innerText = 11 - mes_actual + " " + meses; // Diciembre es el mes 12
  dia_graduation.innerText = dias_restantes_graduation + " " + dias;
  hora_graduation.innerText = horas_restantes_graduation + " " + horas;
  minuto_graduation.innerText = minutos_restantes_graduation + " " + minutos;
  segundo_graduation.innerText = segundos_restantes_graduation + " " + segundos;

    let mi_edad_es = "";

    if((mes_actual == 11 && dia_actual >= 5) || (mes_actual > 11)){

        mi_edad_es = año_actual - año_nacimiento;

        mi_edad.innerText = "Tengo " + mi_edad_es + " años";

    }else{
        mi_edad_es = año_actual - año_nacimiento;


        mi_edad.innerText = "Tengo " + (mi_edad_es  -1) + " años";
    }

}

const intervalo = setInterval(sobre_mi,1000);