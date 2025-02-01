// Agrega un console.log para verificar el valor de "intento" después de la entrada del usuario
let nombre = prompt("Cual es tu nombre?");
alert(`Hola ${nombre} bienvendido al programa`);
let semana = prompt('Menciona un día de la semana');
let numero = prompt ('Dame un número al azar');
let puntuacion = prompt('Dame una puntuación del 1 al 100');
let saldo = prompt("Quieres conocer el estado actual de tu saldo? (Si/No)")


//Condicional de semana
if (semana == "Sábado" || semana == "Domingo") {
    alert(`Bonito fin de semana ${nombre}`);
} else {
    alert(`Bonita semana ${nombre}`);
} 

//Condicional de número
if (numero >0) {
    alert(`Tu número es positivo`);
} else if (numero<0) {
    alert(`Tu número es negativo`);
}
else {
    alert(`Tu número es 0`);
}

//Condicional de puntuación
if (puntuacion >= 100) {
    alert(`Felicidades haz ganado con una puntuación de: ${puntuacion}`);
} else {
    alert(`Tu puntuación fue de: ${puntuacion}, sigue intentando`);
}

//Condicional de saldo
if (saldo == "Si") {
    alert(`Tu saldo actual es de $500.00`);
}