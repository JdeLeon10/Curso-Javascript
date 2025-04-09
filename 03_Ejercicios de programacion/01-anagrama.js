/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

function anagrama(palabra1, palabra2) {
    // Convertir ambas palabras a minúsculas y ordenarlas alfabéticamente
    const palabra1Ordenada = palabra1.toLowerCase().split('').sort().join('');
    const palabra2Ordenada = palabra2.toLowerCase().split('').sort().join('');

    // Comparar las palabras ordenadas
    return palabra1Ordenada === palabra2Ordenada && palabra1 !== palabra2;
}

// Ejemplos de uso
console.log(anagrama('amor', 'roma')); // true
console.log(anagrama('hola', 'halo')); // true
console.log(anagrama('roma', 'roma')); // false porque son iguales
console.log(anagrama('casa', 'perro')); // false

/* EXPLICACION DE CÓDIGO:
    * 1. Convertimos ambas palabras a minúsculas para evitar problemas de mayúsculas/minúsculas.
    * 2. Usamos `split('')` para convertir la cadena en un array de caracteres. // "roma" → ['r', 'o', 'm', 'a']
    * 3. Usamos `sort()` para ordenar los caracteres alfabéticamente. // ['r', 'o', 'm', 'a'] → ['a', 'm', 'o', 'r']
    * 4. Usamos `join('')` para volver a unir los caracteres en una cadena.
    * 5. Comparamos las dos cadenas ordenadas y verificamos que no sean iguales.
*/