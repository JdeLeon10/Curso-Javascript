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
console.log(anagrama('amor', 'Roma')); // true
console.log(anagrama('amor', 'amores')); // false
console.log(anagrama('amor', 'amor')); // false
console.log(anagrama('amor', '')); // false
console.log(anagrama('', '')); // false
console.log(anagrama('a', 'a')); // false
console.log(anagrama('a', 'b')); // false