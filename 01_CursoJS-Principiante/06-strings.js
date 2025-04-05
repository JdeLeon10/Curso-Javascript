// strings

let myName = "Jeremy";
let greeting = "Hola, " + myName + "!";
console.log(greeting);

// Metodos de cadenas de texto
// Longitud
console.log(myName.length); // 6
// Acceso a caracteres
console.log(myName[0]); // J
console.log(myName[1]); // e
// Uppercase
console.log(myName.toUpperCase()); // JEREMY
// Lowercase
console.log(myName.toLowerCase()); // jeremy
// IndexOf
console.log(myName.indexOf("e")); // 1
// Includes
console.log(myName.includes("e")); // true
console.log(myName.includes("a")); // false
// Slice
console.log(myName.slice(0, 3)); // Jer, retorna los elementos entre el indice 0 y 3 (sin incluir el 3)
console.log(myName.slice(3)); // emy, retorna los elementos desde el indice 3 hasta el final (sin incluir el 3)
// Replace
console.log(myName.replace("Jeremy", "J")); // J, si encuentras la palabra Jeremy reemplazala por J
// Split
console.log(myName.split("")); // [ 'J', 'e', 'r', 'e', 'm', 'y' ]

// Template literals
let message = `Hola, este es un
                mensaje con template 
                literals`;
console.log(message);

// Interpolacion de variables
console.log(`Hola, ${myName}`); // Hola, Jeremy