


let nombre =  prompt("Inserta tu nombre completo");
let edad = prompt("Inserta tu edad");
let objetivo = prompt("¿Cúal es tu objetvo de ahorro?, eje: Ir a la playa");
let ingresoMensual = parseInt(prompt("Inserta tu ingreso mensual (sin coma)"));
let porcentajeMensual = parseInt(prompt("Elije el porcentaje de tu ahorro mensual: 10%, 20%, 30%, 40% o 50%"));
let ahorroTiempo = parseInt(prompt("Ingresa los meses que deseas ahorrar, te recomendamos: 12, 36 o 60 meses"));
let ahorroPorcentual = (ingresoMensual * porcentajeMensual) / 100;

//Validación de tiempo
function validacionTiempo(){
    while((ahorroTiempo != 12) && (ahorroTiempo != 36) && (ahorroTiempo != 60)){
        alert("Opción inválida "+ ahorroTiempo);
        ahorroTiempo = prompt("Ingresa de nuevo los meses que deseas ahorrar, te recomendamos: 12, 36 o 60 meses");
    }
    }
validacionTiempo();
let ahorroTotal = (ahorroPorcentual * ahorroTiempo);
let edadFutura = (ahorroTiempo / 12) + parseInt(edad);


arreglo = ["Nombre: ", nombre, "Tu objetivo de ahorro es: ", objetivo, "Mensualmente tu ahorrarás: ", "$" + ahorroPorcentual + " pesos", "Tu ahorro total será de:",  "$" + ahorroTotal + " pesos",  "Tu edad será:", edadFutura + " años"];
alert ("Estos son los datos de tu ahorro" + "\n" + (arreglo.join("\n")));

//////////////////////Plazos de ahorro/////////////////////////////////////////////////////
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

////////////////////////Opciones de ahorro/////////////////////////////////////////////////////////

const instrumentoAhorro = [
    {
    id: "1",
    nombre: "meta",
    titulo: "Ahorro meta:",
    descripcion: "Lo primero que debes hacer es planificar, por ejemplo, cuánto cuesta lo que quieres comprar y de acuerdo a ese monto total, establecer una cantidad  mensual para cumplir con el objetivo. "
},
{
id: "2",
nombre: "familiar",
titulo: "Ahorro familiar:",
descripcion: "Este tipo de ahorro puedes iniciarlo desde que empieces una vida de unión con tu pareja, pueden abrir una cuenta mancomunada para lograr sus metas",
},
{
    id: "3",
    nombre: "emergencia",
    titulo: "Ahorro de Emergencia:",
    descripcion: "Ayuda a resolver gastos que se presenten de emergencia. Lo recomendable es que puedas cubrir gastos y obligaciones durante 12 meses.  ",
    },
    {
   id: "4",
     nombre: "hipotecario",
     titulo: "Ahorro hipotecario:",
      descripcion: "Si quieres comprar una casa y no tienes el dinero para cubrir el monto total, cualquier institución bancaria puede prestarte un porcentaje de su costo mediante un crédito hipotecario",
      }

]

const ahorroInfo =() =>{
    let nombreDelAhorro = prompt ("¿Quieres conocer más formas de ahorro?, elige otras formas de ahorro: meta, familiar, emergencia, hipotecario");
    let ahorroElegido = instrumentoAhorro.find((ahorro) => ahorro.nombre === nombreDelAhorro);
    while(!ahorroElegido){
        alert("Este resultado no se encontró");
        nombreDelAhorro = prompt ("Elige la forma de ahorro que deseas revisar: meta, familiar, emergencia, hipotecario");
        ahorroElegido = instrumentoAhorro.find((ahorro) => ahorro.nombre === nombreDelAhorro);

    }

    return ahorroElegido;
};

const ahorro = ahorroInfo();
arregloAhorro = [ahorro.titulo, ahorro.descripcion];
alert(arregloAhorro.join("\n"));


//Frase
function frase(){
    alert("Recuerda, ¡Si lo puedes soñar, lo puedes lograr!")
}
frase();


