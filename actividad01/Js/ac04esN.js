/*
Descripcion: Analizador de frases
Desarrolador: Leonardo Suarez Maraz
Fecha: 04/21/2024
Cambios:Ninguno
*/

/*Escribe un programa que pida una frase y escriba:
• Cuantas veces aparece la letra “o”. Ejemplo Hola → 1
• Las vocales que aparecen. Ejemplo Hola → 2
• Cuántas veces aparecen cada una de las vocales.Ejemplo Hola → o:1 , a:1*/



//Esta funcion cuenta la cantidad de las letras o que aparecen en la frase ingresada.
function contarLetraO(frase) {
    let contador = 0;
    for (let i = 0; i < frase.length; i++) {
        if (frase[i].toLowerCase() === 'o') {
            contador++;
        }
    }
    return contador;
}


//Esta funcion obtiene las vocales de la frase introducida, es decir que busca con un ciclo for cuales son las vocales que hay en la frase y la valida con el metodo "include", para validar la existencia de alguna de las vocales solicitadas.

function obtenerVocales(frase) {
    let vocales = [];
    for (let i = 0; i < frase.length; i++) {
        let letra = frase[i].toLowerCase();
        if ('aeiou'.includes(letra) && !vocales.includes(letra)) {
            vocales.push(letra);
        }
    }
    return vocales;
}


//La funcion realiza el recuento de las vocales de la frase ingresada y las convierte a minuscula con el metodo "toLowerCase".
function contarVocales(frase) {
    let contadorVocales = {};
    for (let i = 0; i < frase.length; i++) {
        let letra = frase[i].toLowerCase();
        if ('aeiou'.includes(letra)) {
            if (contadorVocales[letra]) {
                contadorVocales[letra]++;
            } else {
                contadorVocales[letra] = 1;
            }
        }function main() {
            let frase = prompt("Introduce una frase:");
            
            let cantidadO = contarLetraO(frase);
            console.log("La letra 'o' aparece " + cantidadO + " veces.");
            
            let vocales = obtenerVocales(frase);
            console.log("Las vocales que aparecen son: " + vocales.join(", "));
            
            let contadorVocales = contarVocales(frase);
            console.log("Cantidad de veces que aparece cada vocal:");
            for (let vocal in contadorVocales) {
                console.log(vocal + ": " + contadorVocales[vocal]);
            }
        }
    }
    return contadorVocales;
}

//La funcion main o principal realiza la peticion de la frase y tambien la que imprime el resultado en la consola de la cantidad y cuales son las vocales que mas se repiten

function main() {
    let frase = prompt("Introduce una frase:");
    
    let cantidadO = contarLetraO(frase);
    console.log("La letra 'o' aparece " + cantidadO + " veces.");
    
    let vocales = obtenerVocales(frase);
    console.log("Las vocales que aparecen son: " + vocales);
    
    let contadorVocales = contarVocales(frase);
    console.log("Cantidad de veces que aparece cada vocal:");
    for (let vocal in contadorVocales) {
        console.log(vocal + ": " + contadorVocales[vocal]);
    }
}
main();



