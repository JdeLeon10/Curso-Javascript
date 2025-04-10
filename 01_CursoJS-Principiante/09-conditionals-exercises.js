// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
let nombre = "Jeremy";
if (nombre === "Jeremy") {
    console.log("Hola Jeremy");
} else{
    console.log("Nombre invalido");
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let usuario = "admin";
let contraseña = "1234";

if (usuario === "admin" && contraseña === "1234") {
    console.log("Bienvenido al sistema");
} else if (usuario !== "admin" || contraseña !== "1234") {
    console.log("Usuario o contraseña incorrectos");
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let numero = 0;
if (numero < 0) {
    console.log("El número es negativo");
} else if (numero == 0){
    console.log("El número es cero");
} else {
    console.log("El número es positivo");
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let edad = 16;
if (edad >= 18) {
    console.log("Puedes votar");
}
else { 
    console.log(`No puedes votar, te faltan ${18 - edad} años`);
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 
const mensaje = edad >= 18 ? "adulto" : "menor";
console.log(mensaje);

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes = "enero";
if (mes == "diciembre" || mes == "enero" || mes == "febrero") {
    console.log("Invierno");
}
else if (mes == "marzo" || mes == "abril" || mes == "mayo") {
    console.log("Primavera");
}
else if (mes == "junio" || mes == "julio" || mes == "agosto") {
    console.log("Verano");
}
else if (mes == "septiembre" || mes == "octubre" || mes == "noviembre") {
    console.log("Otoño");
}
else {
    console.log("Mes inválido");
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
if (mes == "enero" || mes == "marzo" || mes == "mayo" || mes == "julio" || mes == "agosto" || mes == "octubre" || mes == "diciembre") {
    console.log("El mes tiene 31 días");
}
else if (mes == "abril" || mes == "junio" || mes == "septiembre" || mes == "noviembre") {
    console.log("El mes tiene 30 días");
}
else if (mes == "febrero") {
    console.log("El mes tiene 28 días, o 29 en año bisiesto");
}

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let idioma = "frances";
switch(idioma){
    case "español":
        console.log("Hola");
        break;
    case "ingles":
        console.log("Hello");
        break;
    case "frances":
        console.log("Bonjour");
        break;
    default:
        console.log("Idioma no reconocido");
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6
switch(mes){
    case "diciembre":
    case "enero":
    case "febrero":
        console.log("Invierno");
        break;
    case "marzo":
    case "abril":
    case "mayo":
        console.log("Primavera");
        break;
    case "junio":
    case "julio":
    case "agosto":
        console.log("Verano");
        break;
    case "septiembre":
    case "octubre":
    case "noviembre":
        console.log("Otoño");
        break;
    default:
        console.log("Mes inválido");
        break;
}

// 10. Usa un switch para hacer de nuevo el ejercicio 7
switch(mes){
    case "enero":
    case "marzo":
    case "mayo":
    case "julio":
    case "agosto":
    case "octubre":
    case "diciembre":
        console.log("El mes tiene 31 días");
        break;
    case "abril":
    case "junio":
    case "septiembre":
    case "noviembre":
        console.log("El mes tiene 30 días");
        break;
    case "febrero":
        console.log("El mes tiene 28 días, o 29 en año bisiesto");
        break;
    default:
        console.log("Mes inválido");
        break;
}