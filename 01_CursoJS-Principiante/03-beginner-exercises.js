// 1. Escribe un comentario en una línea
// Este es un comentario de una linea

// 2. Escribe un comentario en varias líneas
/*
Este
es un comentario
de varias lineas
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let string = "Hola Mundo"; // String
let num = 42; // Number
let bool = true; // Boolean
let nullVariable = null; // Null
let undefinedVariable; // Undefined
let symbolVariable = Symbol("mi simbolo"); // Symbol
let bigIntVariable = BigInt(123456789012345678901234567890); // BigInt

// 4. Imprime por consola el valor de todas las variables
console.log(string); // "Hola Mundo"
console.log(num); // 42
console.log(bool); // true
console.log(nullVariable); // null
console.log(undefinedVariable); // undefined
console.log(symbolVariable); // Symbol("mi simbolo")
console.log(bigIntVariable); // 123456789012345678901234567890n

// 5. Imprime por consola el tipo de todas las variables
console.log(typeof string); // "string"
console.log(typeof num); // "number"
console.log(typeof bool); // "boolean"
console.log(typeof nullVariable); // "object"
console.log(typeof undefinedVariable); // "undefined"
console.log(typeof symbolVariable); // "symbol"
console.log(typeof bigIntVariable); // "bigint"

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
string = "Hola Mundo Modificado"; // String
num = 100; // Number
bool = false; // Boolean
nullVariable = "Nuevo valor"; // Null (aunque no es correcto, lo hacemos para el ejercicio)
undefinedVariable = "Nuevo valor"; // Undefined (aunque no es correcto, lo hacemos para el ejercicio)
symbolVariable = Symbol("nuevo simbolo"); // Symbol (aunque no es correcto, lo hacemos para el ejercicio)
bigIntVariable = BigInt(987654321098765432109876543210); // BigInt (aunque no es correcto, lo hacemos para el ejercicio)

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
string = 123;
num = "Hola Mundo"; 
// bool = null; // No se puede asignar null a un booleano
// nullVariable = 123; // No se puede asignar un número a null
// undefinedVariable = true; // No se puede asignar un booleano a undefined

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const myName = "Jeremy"; // String
const myAge = 23; // Number
const isDeveloper = true; // Boolean
const myNull = null; // Null
const myUndefined = undefined; // Undefined
const mySymbol = Symbol("mi simbolo"); // Symbol
const myBigInt = BigInt(123456789012345678901234567890); // BigInt

// 9. A continuación, modifica los valores de las constantes
// No se puede modificar el valor de una constante por lo que no se realizo este ejercicio

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse