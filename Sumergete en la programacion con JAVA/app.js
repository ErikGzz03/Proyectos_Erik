alert('Bienvenido al juego del número secreto');

// Agrega un console.log para verificar el valor de "numeroUsuario" después de la entrada del usuario
let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let numeroUsuario = 0;
let intento = 1;
//let palabraVeces = "vez";
let maximoIntentos = 3;
console.log(numeroSecreto);


while (numeroSecreto != numeroUsuario) {
    numeroUsuario =  parseInt(prompt('Elige un número entre 1 y 10'));
    console.log(typeof numeroUsuario);
    console.log('Valor de numeroUsuario:', numeroUsuario);
    // Agrega un console.log para verificar la comparación entre "numeroUsuario" y "numeroSecreto"
    console.log('Resultado de la comparación:', numeroUsuario == numeroSecreto);
    // intento = 1; esto es en caso que el intento lo quieras declares como 0 y como 1
    if (numeroUsuario == numeroSecreto) {
        alert('Adivinaste el numero secreto era: ' + numeroSecreto + ' y lo lograste en ' + intento + ' ' + (intento == 1 ? 'inento' : 'intentos'));
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El número secreto es menor que ' + numeroUsuario);
        } else{
            alert('El número secreto es mayor que ' + numeroUsuario);
        }
        intento = intento + 1;
        //palabraVeces = "veces";
        if (intento > maximoIntentos) {
            alert("Lo siento haz agotado tus intentos que fueron: " + maximoIntentos);
            break;
        }
    }
}