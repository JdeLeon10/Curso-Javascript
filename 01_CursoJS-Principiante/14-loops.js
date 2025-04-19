// For

for (let i = 0; i < 3; i++) {
    console.log(i);
}

// Recorrer un arreglo con un bucle for
const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

for (let i = 0; i < numbers.length; i++) {
    console.log(`Elemento: ${numbers[i]}`)
}

// While

let i = 0
while (i < 5) {
    console.log(`Hola ${i}`)
    i++
}

// do while

i = 6
do {
    console.log(`Hola ${i}`) // Se imprime "Hola 6" una vez por defecto aunque no cumpla con la condición del while
    i++
} while (i < 5)

// for of
/*
    For of recorre los valores de un iterable (array, set, map, string).
    For each recorre los valores de un array.
*/

const myArray = [1, 2, 3, 4]
mySet = new Set(["Jeremy", "Guatemala", 23])
const myMap = new Map([
    ["nombre", "Jeremy"],
    ["edad", 23],
    ["pais", "Guatemala"]
]);
const myString = "¡Hola, JavaScript!"

for (let value of myArray) {
    console.log(value)
}

for (let value of mySet) {
    console.log(value)
}

for (let value of myMap) {
    console.log(value)
}

for (let value of myString) {
    console.log(value)
}

// break y continue // Buenas practicas

for (let i = 0; i < 10; i++) {
    if (i == 5) {
        continue
    } else if (i == 7) {
        break
    }
    console.log(`Hola ${i}`)
}