alert('Bienvenido al juego del número secreto');

/* 
Una solución para cambiar todo rápido es asignar una variable como valor máximos de los números secretos
y cambiar el valor de la variable en un solo lugar
ejemplo: let maximoNumeroSecreto = 100;
o
Se puede hacer un número random para el máximo de los números secretos
let maximoNumeroSecreto = Math.floor(Math.random() * 100) + 1;
*/


// let numeroSecreto = Math.floor(Math.random() * maximoNumeroSecreto) + 1;


let numeroSecreto = Math.floor(Math.random() * 10) + 1; // Si se desa cambiar el rango de los números secretos se puede cambiar el 10 por otro número en especial si se desea cambiar el rango de los números secretos 
// por ejemplo let numeroSecreto = Math.floor(Math.random() * 100) + 1; para que el número secreto sea entre 1 y 100
let numeroUsuario = 0;
let intento = 1;

// Posiblemente aumentar el numero de intentos sea una buena idea
let maximoIntentos = 3;
console.log(numeroSecreto);


while (numeroSecreto != numeroUsuario) {
    numeroUsuario =  parseInt(prompt('Elige un número entre 1 y 10')); 
   
   
    // Si se desea cambiar el rango de los números secretos se puede cambiar el 10 por otro número
    // o se puede poner la variable del número máximo
    // por ejemplo numeroUsuario =  parseInt(prompt('Elige un número entre 1 y ' + maximoNumeroSecreto));
    
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