/* 
    set 
    - Un set es una colección de valores únicos, no se repiten
    - Se pueden agregar, eliminar y comprobar elementos
    - Diferencia principal entre array y set:
        - Un array puede contener elementos duplicados y se accede a ellos por su índice
        - Un set no puede contener elementos duplicados y no tiene un índice
        - Un set es más eficiente para comprobar si un elemento existe en la colección
*/

// Declaracion
let mySet = new Set() // Crear un set vacio

// Iniciazacion ya con datos
mySet = new Set(["Jeremy", "Guatemala", 23]) // Crear un set con valores iniciales
console.log(mySet);

// Metodos comunes

// add y delete
console.log(mySet.add("Joshua")) // Agregar un elemento al set // Joshua
console.log(mySet); // Set(4) { 'Jeremy', 'Guatemala', 23, 'Joshua' } // Joshua agregado
console.log(mySet.add("Joshua")) // Joshua // Joshua no se agrega porque ya existe en el set
console.log(mySet); // Set(4) { 'Jeremy', 'Guatemala', 23, 'Joshua' } // Joshua no se agrega porque ya existe en el set
mySet.delete("Joshua") // Eliminar un elemento del set, debe indicarse el valor del elemento que debo borrar // Joshua
console.log(mySet); // Set(3) { 'Jeremy', 'Guatemala', 23 } // Joshua eliminado
console.log(mySet.delete("Joshua")) // false // Joshua no se elimina porque no existe en el set

// has 
console.log(mySet.has("Jeremy")) // true // Comprobar si un elemento existe en el set // Jeremy
console.log(mySet.has("Joshua")) // false // Comprobar si un elemento existe en el set // Joshua no existe

// size = length
console.log(mySet.size) // 3 // Longitud del set // Jeremy, Guatemala, 23

// Convertir un set a array
let myArray = Array.from(mySet) // Convertir un set a array // [ 'Jeremy', 'Guatemala', 23 ]
console.log(myArray); // [ 'Jeremy', 'Guatemala', 23 ] // Convertir un set a array

// Convertir un array a set
let mySet2 = new Set(myArray) // Convertir un array a set // Set([ 'Jeremy', 'Guatemala', 23 ])
console.log(mySet);
console.log(mySet2); 