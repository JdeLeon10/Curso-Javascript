/*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */

for (let i = 0; i<=100; i++){
    let esPrimo = true; // Inicializamos la variable como verdadero
    for (let j = 2; j < i; j++) { // Comprobamos si el número es divisible por algún número menor que él
        if (i % j === 0) { // Si es divisible, no es primo
            esPrimo = false;
            break; // Salimos del bucle si encontramos un divisor
        }
    }
    if (esPrimo && i > 1) { // Si es primo y mayor que 1, lo imprimimos
        console.log(i);
    }
}