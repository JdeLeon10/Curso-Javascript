/*
 * Escribe un programa que imprima los 50 primeros números de la sucesión
 * de Fibonacci empezando en 0.
 * - La serie Fibonacci se compone por una sucesión de números en
 *   la que el siguiente siempre es la suma de los dos anteriores.
 *   0, 1, 1, 2, 3, 5, 8, 13...
 */

let primerValor = 0; // Primer valor de la serie Fibonacci
let segundoValor = 1; // Segundo valor de la serie Fibonacci
let siguienteValor; // Siguiente valor de la serie Fibonacci

let cantidadValores = 50; // Cantidad de valores a imprimir

for (let i = 0; i < cantidadValores; i++) {
    console.log(primerValor); // Imprimir el valor actual
    siguienteValor = primerValor + segundoValor; // Calcular el siguiente valor
    primerValor = segundoValor; // Actualizar el primer valor
    segundoValor = siguienteValor; // Actualizar el segundo valor
}