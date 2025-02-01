let listaDeNumeros = [];
let numeroSecreto = 0;  
let intentos = 0;
let numeroMaximo = 10;

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', 'Elige un número entre 1 y ' + numeroMaximo);
    intentos = 1;
    numeroSecreto = generarUnNumeroSecreto();
    limpiarCaja();
}

function asignarTextoElemento(elemento, texto) {
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}

function verficarUsuario() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroUsuario === numeroSecreto) {
        asignarTextoElemento('p', `¡Felicidades! ¡Has acertado en ${intentos} ${(intentos == 1) ? 'intento': 'intentos'}! `);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroUsuario > numeroSecreto) 
            asignarTextoElemento('p', '¡El número secreto es menor!');
        else 
            asignarTextoElemento('p', '¡El número secreto es mayor!');
        intentos++;
        limpiarCaja();
    }
    return;
}

// Función para limpiar valores que esten en la caja de texto 
function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
    // o también
    // let caja = document.querySelector('#valorUsuario');
    // caja.value = '';
}

function generarUnNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    console.log(numeroGenerado)
    console.log(listaDeNumeros);
    if (listaDeNumeros.length == numeroMaximo) {
        asignarTextoElemento('p', 'Has terminado todos los números posibles, reinicia el juego');
    } else { 
        if (listaDeNumeros.includes(numeroGenerado)) {
            return generarUnNumeroSecreto();
        } else {
            listaDeNumeros.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function reinciarJuego() {
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    return;
}

condicionesIniciales();
