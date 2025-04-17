/*
    array
    - Un array es una lista de elementos que pueden ser de cualquier tipo (números, cadenas, objetos, etc.).
    - Los elementos de un array pueden ser accedidos mediante su índice (posición en la lista).
    - Un array puede contener elementos duplicados.
*/

// Declaracion de un array
let myArray = [1, 2, 3]
let myArray2 = new Array("a", "b", "c") // Otra forma de declarar un array

console.log(myArray)
console.log(myArray2) // ['a', 'b', 'c']

// Indices de un array
console.log(myArray[0]) 

// Agregar un elemento al final del array
myArray.push(4) 
console.log(myArray) // [1, 2, 3, 4]

// Longitud del array
console.log(myArray.length) //4

// Borrar el ultimo elemento del array y devolverlo
let elementoEliminado = myArray.pop() // [4]
console.log(myArray) // [1, 2, 3]
console.log(elementoEliminado) // 4

// Darle la vuelta a un array
myArray.reverse() // [3, 2, 1]
myArray2.reverse() // ['c', 'b', 'a']
console.log(myArray) // [3, 2, 1]
console.log(myArray2) // ['c', 'b', 'a']

// Ordenar un array
console.log(myArray.sort()) // [1, 2, 3]
console.log(myArray2.sort()) // [1, 2, 3]
console.log(myArray)
console.log(myArray2)

// shift y unshift
console.log(myArray.shift()) // 1 // Elimina el primer elemento del array y lo devuelve
console.log(myArray) // [2, 3]
console.log(myArray2.unshift("d")) // 4 // Agrega uno o mas elementos al principio del array y devuelve la nueva longitud del array
console.log(myArray2) // ['d', 'c', 'b', 'a']

// Borrar contenido del array
myArray = [] // Borrar el contenido del array
console.log(myArray) // []
myArray2 = 0
console.log(myArray2) // 0

// Slice 
let myArray3 = ["Jeremy", "Jonathan", "Joshua", 23, 45, 67, 89]
nuevoMyArray3 = myArray3.slice(0, 3) // [ 'Jeremy', 'Jonathan', 'Joshua' ] // Devuelve una copia de una porcion del array // indice 0 hasta el 3 sin incluir el 3
console.log(myArray3)
console.log(nuevoMyArray3)

// Splice
let myArray4 = ["Agua", "Tierra", "Fuego", "Aire", 10 , 20, 30]
console.log(myArray4) 
nuevoMyArray4 = myArray4.splice(1, 2) // (Desde que indice quiero comenzar , cuantos elementos quiero eliminar) // Devuelve los elementos eliminados
console.log(myArray4) // [ 'Agua', 'Aire', 10, 20, 30 ] // Elimina Tierra y Fuego
console.log(nuevoMyArray4)