/*
Descripcion: Combiar Nombres y Apellidos
Desarrolador: Leonardo Suarez Maraz
Fecha: 04/21/2024
Cambios:Ninguno
*/

/*En base a 2 array de nombres y apellidos, genere un nuevo array combinando de forma
aleatoria ambos, formatee los nombres convirtiendo el primer elemento del nombre y apellido en
mayúscula y el resto en minúscula .*/


function combinarNombresApellidos(nombres, apellidos) {
    let nombresCombinados = [];

    for (let i = 0; i < nombres.length; i++) {
        let nombre = nombres[i][0].toUpperCase() + nombres[i].slice(1).toLowerCase();
        let apellido = apellidos[Math.floor(Math.random() * apellidos.length)][0].toUpperCase() + apellidos[i].slice(1).toLowerCase();
        nombresCombinados.push(`${nombre} ${apellido}`);
    }

    return nombresCombinados;
}

// Arrays de ejemplo de nombres y apellidos
let nombres = ["juan", "maria", "carlos"];
let apellidos = ["perez", "gonzalez", "lopez"];

// Combinar nombres y apellidos
let nombresCombinados = combinarNombresApellidos(nombres, apellidos);
console.log(nombresCombinados);
