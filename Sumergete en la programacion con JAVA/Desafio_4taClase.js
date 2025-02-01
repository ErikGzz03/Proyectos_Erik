console.log('Holaas Bienvenido');
let nombre = prompt('Cual es tu nombre?');
console.log('¡Hola ' + nombre + '!')


let lenguaje = prompt('¿Cual es tu lenguaje de programación favorito?');
console.log(lenguaje)


let valor1 = 1;
let valor2 = 2;
let resultadoSuma = valor1 + valor2;
let resultadoResta = valor1 - valor2;
console.log('El resultado de la suma de ' + valor1 + ' y '+ valor2 + ' es: ' + resultadoSuma);
console.log('El resultado de la resta de ' + valor1 + ' y '+ valor2 + ' es: ' + resultadoResta);

let edad = parseInt(prompt('¿Cual es tu edad?'));
if (edad >= 18) {
    console.log('Eres mayor de edad');
} else {   
    console.log('Eres menor de edad');
}

let numero = parseInt(prompt('Ingresa un número')); 
if (numero > 0) {
    console.log('El número es positivo');
} else if (numero = 0) {
    console.log('El número es cero');
} else {   
    console.log('El número es negativo');
}

numeroContador = 1;
while (numeroContador <= 10) {
    console.log(numeroContador);
    numeroContador++;   
}

let nota = parseFloat(prompt('Ingresa tu nota'));
if (nota >= 7) {
    console.log('Aprobaste');
} else {   
    console.log('Reprobaste');
}

numeroAleatorio = Math.floor(Math.random()) + 1;
console.log(numeroAleatorio);

numeroAleatorioUnoYDiez = Math.floor(Math.random() * 10) + 1;   
console.log(numeroAleatorioUnoYDiez);

numeroAleatorioUnoYMil = Math.floor(Math.random() * 1000) + 1;   
console.log(numeroAleatorioUnoYMil);

