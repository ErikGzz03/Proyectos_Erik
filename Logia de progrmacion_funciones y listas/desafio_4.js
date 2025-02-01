// Lista vacia
/*
let listavacia = [];
*/


let lenguajesDeprogramacion = ['JavaScrip', 'C','C++','Python','Java']
let numeros = [1,2,3,4,5,6,7,8,9,10]

function mostrarlenguajes(){
    console.log(lenguajesDeprogramacion);
}

function mostrarlenguajesinverso(){
    console.log(lenguajesDeprogramacion.reverse());
}

function promedioLista() {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    console.log(suma / numeros.length);
}

console.log(mostrarlenguajes());
console.log(mostrarlenguajesinverso());
console.log(promedioLista());