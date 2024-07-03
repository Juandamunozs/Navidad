
const anio = document.getElementById("anio");
const mes = document.getElementById("mes");
const dia = document.getElementById("dia");
const hora = document.getElementById("hora");
const minuto = document.getElementById("minuto");
const segundo = document.getElementById("segundo");


const mostrarFecha = () => {
    const fecha = new Date();
  
    const año_actual = fecha.getFullYear();
    const mes_actual = fecha.getMonth();
    const dia_actual = fecha.getDay();
    const hora_actual = fecha.getHours();
    const minuto_actual = fecha.getMinutes();
    const segundo_actual = fecha.getSeconds();
  
    //console.log("Año:", año, "Mes:", mes, "Dia:", dia, "Hora:", hora, "Minutos:", minuto, "Segundos:", segundo);
    
    anio.innerText = año_actual;
    mes.innerText = mes_actual;
    dia.innerText = dia_actual;
    hora.innerText = hora_actual;
    minuto.innerText = minuto_actual;
    segundo.innerText = segundo_actual;
    
  };
  
  const intervalo = setInterval(mostrarFecha, 1000);




  
  // Para detener la ejecución:
  // clearInterval(intervalo);
