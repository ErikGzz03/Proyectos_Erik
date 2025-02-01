let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del Desafio';


function clickeado() {
    alert('Has hecho click en el botón');
}

function ciudadBrasil() {
    let ciudad = prompt('Dame el nombre de una ciudad de Brasil');
    alert('Estuve en la ciudad de ' + ciudad + ' y me acrode de ti');
}

function amoJS() {
    alert('Amo JS');
}

function suma() {
    let num1 = parseInt(prompt('Dame un número'));
    let num2 = parseInt(prompt('Dame otro número(puede ser el mismo)'));
    let resultado = num1 + num2;
    alert('El resultado de tu suma fue: ' + resultado);
}