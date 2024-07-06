const mi_edad = document.getElementById("mi_edad")

const sobre_mi = () => {


    const año = new Date();

    const año_actual = año.getFullYear();
    const mes_actual = año.getMonth();
    const dia_actual = año.getDay();

    const año_nacimiento = new Date(2004);

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