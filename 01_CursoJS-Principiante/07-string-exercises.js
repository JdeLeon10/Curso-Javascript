// 1. Concatena dos cadenas de texto
let myName = "Jeremy";
let lastName = "de Leon"
console.log("Mi nombre es " + myName + " y mi apellido es " + lastName);

// 2. Muestra la longitud de una cadena de texto
console.log(myName.length);

// 3. Muestra el primer y último carácter de un string
console.log(myName[0]);
console.log(myName[5]);

// 4. Convierte a mayúsculas y minúsculas un string
console.log(myName.toUpperCase());
console.log(myName.toLowerCase());

// 5. Crea una cadena de texto en varias líneas
let cadenaVariasLineas = `Esta es una
                            cadena de texto en
                            varias lineas`

// 6. Interpola el valor de una variable en un string
console.log(`Mi nombre es ${myName}`);

// 7. Reemplaza todos los espacios en blanco de un string por guiones
let string1 = "Cadena de texto con espacios en blanco";
let string1Replace = string1.replace(/ /g, "-");
console.log(string1Replace); // Cadena-de-texto-con-espacios-en-blanco

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(string1.includes("Cadena")); // True

// 9. Comprueba si dos strings son iguales
console.log(myName == lastName); // False

// 10. Comprueba si dos strings tienen la misma longitud
let myNameLenght = myName.length;
let lastNameLenght = lastName.length;
console.log(myNameLenght == lastNameLenght); // False