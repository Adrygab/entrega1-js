
let nombre =  prompt("Inserta tu nombre");
let edad = prompt("Inserta tu edad");
let objetivo = prompt("¿Cúal es tu objetvo de ahorro?, eje: Ir a la playa");
let ingresoMensual = parseInt(prompt("Inserta tu ingreso mensual (sin coma)"));
let porcentajeMensual = parseInt(prompt("Elije el porcentaje de tu ahorro mensual: 10%, 20%, 30%, 40% o 50%"));
let ahorroTiempo = parseInt(prompt("Ingresa los meses que deseas ahorrar, te recomendamos: 12, 36 o 60 meses"));


//Validación de tiempo

function validacionTiempo(){
while((ahorroTiempo != 12) && (ahorroTiempo != 36) && (ahorroTiempo != 60)){
    alert("Opción inválida "+ ahorroTiempo);
    ahorroTiempo = prompt("Ingresa de nuevo los meses que deseas ahorrar, te recomendamos: 12, 36 o 60 meses");
}
}
validacionTiempo();

let ahorroPorcentual = (ingresoMensual * porcentajeMensual) / 100;
let ahorroTotal = (ahorroPorcentual * ahorroTiempo);
let edadFutura = (ahorroTiempo / 12) + parseInt(edad);

let resumen = "Hola " + nombre  +", " +" tu objetivo de ahorro es " + objetivo +", "+ " tu ahorro mensual será de  "+" $"+ ahorroPorcentual + " pesos" +", " + " por lo tanto tu lograrás ahorrar " + " $"+ahorroTotal + " pesos " + " en " + ahorroTiempo + " meses " + " y tu edad será de " 
+ edadFutura + " años ";

function datosResumen(){
    alert(resumen);
}

datosResumen();


function plazos(){
    let cortoPlazo = "una alcancia";
let medianoPlazo = "una cuenta bancaria de ahorro";
let largoPlazo = "un fondo de inversión";

if (ahorroTiempo <= 12){
    alert( " Te recomendamos ahorrar en: " + cortoPlazo);
}
else if(ahorroTiempo <= 36){
    alert(" Te recomendamos ahorrar en: " + medianoPlazo); 
}
else{

    alert( " Te recomendamos ahorrar en: " + largoPlazo); 

}
}

plazos();

//Frase
function frase(){
    alert("Recuerda, ¡Si lo puedes soñar, lo puedes lograr!")
}

frase();


