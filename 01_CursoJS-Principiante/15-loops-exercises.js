// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
let x = 1;
while (x <= 20) {
    console.log(x);
    x++;
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let suma = 0;
for (let i = 1; i <= 100; i++) {
    suma += i;
}
console.log("La suma de los números del 1 al 100 es: " + suma);

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
let numero = 1;
while (numero <= 50) {
    if (numero % 2 === 0) {
        console.log(numero);
    }
    numero++;
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
let nombres = ["Ana", "Luis", "Pedro", "María"];
for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
let cadena = "Hola, ¿cómo estás?";
let contadorVocales = 0;
let vocales = "aeiouáéíóúAEIOUÁÉÍÓÚ";
for (let i = 0; i < cadena.length; i++) {
    if (vocales.includes(cadena[i])) {
        contadorVocales++;
    }
}
console.log("Número de vocales en la cadena: " + contadorVocales);

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
let numeros = [2, 3, 4, 5];
let producto = 1;
for (let i = 0; i < numeros.length; i++) {
    producto *= numeros[i];
}
console.log("El producto de los números es: " + producto);

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
let numeroTabla = 5;
for (let i = 1; i <= 10; i++) {
    console.log(`${numeroTabla} x ${i} = ${numeroTabla * i}`);
}

// 8. Usa un bucle para invertir una cadena de texto
let cadena2 = "JavaScript";
let cadenaInvertida = "";
for (let i = cadena2.length - 1; i >= 0; i--) {
    cadenaInvertida += cadena2[i];
}
console.log("Cadena invertida: " + cadenaInvertida);

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
let secuenciaFibonacci = [0, 1];
for (let i = 2; i < 10; i++) {
    secuenciaFibonacci[i] = secuenciaFibonacci[i - 1] + secuenciaFibonacci[i - 2];
}
console.log(secuenciaFibonacci);

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
let numerosArray = [5, 12, 8, 20, 3, 15];
let mayoresA10 = [];
for (let i = 0; i < numerosArray.length; i++) {
    if (numerosArray[i] > 10) {
        mayoresA10.push(numerosArray[i]);
    }
}
console.log("Números mayores a 10: " + mayoresA10);