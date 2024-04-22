/*
Descripcion: Generar numeos primos random
Desarrolador: Leonardo Suarez Maraz
Fecha: 04/21/2024
Cambios:Ninguno
*/

/*Escribir un programa para imprimir N numeros primos generados de forma aleatorio y
cargado en un array que sean menores al 110*/

//La funcion esPrimo comienza verificando su el numero es menor o igual a 1, si no la funcion termina luego verifica si es divisible entre 2 o 3 ya que estos son primos y la funcion tambien termina, luego se inicia un bucle que empuezq de 5 y continua hasta que sea mayor al numero dado y comprueba si el numero es divisible por el valor de i, si el numero es divisible entonces termina porque no es primo, si no encuentra divisor entonces es primo 

function esPrimo(numero) {
    if (numero <= 1) return;
    if (numero <= 3) return;
    
    if (numero % 2 === 0 || numero % 3 === 0) return;

    let i = 5;
    while (i * i <= numero) {
        if (numero % i === 0 || numero % (i + 2) === 0) return;
        i += 6;
    }
    return true;
}
//Esta funcion genera un numero primo aleatorio que es menor que 110.
function generarPrimoMenorQue110() {
    let primo;
    do {
        primo = Math.floor(Math.random() * 110);
    } while (!esPrimo(primo));
    return primo;
}
//Esta funcion crea un array de longitud N que contiene numeros primos menores que 110.
function generarNPrimos(N) {
    let primos = [];
    while (primos.length < N) {
        let primo = generarPrimoMenorQue110();
        primos.push(primo);
    }
    return primos;
}
//Este codigo genera y muestra los numeros solicitados por el usuario, siempre y cuando la cantidad ingresada desa mayor que 0, si se ingresa un numero menor o igual que 0, se imprime un mensaje de advertencia que dice "Ingrese un numero mayot que 0".
let cantidadNumerosPrimos = parseInt(prompt("Ingrese la cantidad de números primos que desea generar:"));

if (cantidadNumerosPrimos > 0) {
    let numerosPrimos = generarNPrimos(cantidadNumerosPrimos);
    console.log("Números primos generados:", numerosPrimos);
} else {
    console.log("Ingrese un número mayor que 0.");
}




