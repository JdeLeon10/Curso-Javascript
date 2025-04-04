// 1. Crea una variable para cada operación aritmética
console.log("Ejercicio 1: Operaciones aritméticas");
let num1 = 10;
let num2 = 5;
let suma = num1 + num2; // Suma
let resta = num1 - num2; // Resta
let multiplicacion = num1 * num2; // Multiplicación
let division = num1 / num2; // División
let modulo = num1 % num2; // Módulo
let potencia = num1 ** num2; // Potencia
let incremento = num1++; // Incremento
let decremento = num2--; // Decremento

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
console.log("Ejercicio 2: Operaciones de asignación");
let asignacion = num1; // Asignación
let asignacionSuma = num1 += 2; // Asignación con suma
let asignacionResta = num1 -= 2; // Asignación con resta
let asignacionMultiplicacion = num1 *= 2; // Asignación con multiplicación
let asignacionDivision = num1 /= 2; // Asignación con división
let asignacionModulo = num1 %= 2; // Asignación con módulo
let asignacionPotencia = num1 **= 2; // Asignación con potencia
let asignacionIncremento = num1++; // Asignación con incremento
let asignacionDecremento = num1--; // Asignación con decremento

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
let num3 = 15;
let num4 = 20;
console.log("Ejercicio 3: Comparaciones verdaderas");
console.log(num3 == 15); // Igualdad
console.log(num3 === 15); // Igualdad estricta
console.log(num3 != 20); // Desigualdad
console.log(num3 !== 20); // Desigualdad estricta
console.log(num3 > 10); // Mayor que

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log("Ejercicio 4: Comparaciones falsas");
console.log(num3 == 20); // Igualdad
console.log(num3 === 20); // Igualdad estricta
console.log(num3 != 15); // Desigualdad
console.log(num3 !== 15); // Desigualdad estricta
console.log(num3 > 20); // Mayor que

// 5. Utiliza el operador lógico and
console.log("Ejercicio 5: Operador lógico AND");
console.log(num3 > 10 && num4 > 15); // AND, true
console.log(num3 > 20 && num4 < 15); // AND, false

// 6. Utiliza el operador lógico or
console.log("Ejercicio 6: Operador lógico OR");
console.log(num3 > 10 || num4 < 15); // OR, true
console.log(num3 < 10 || num4 > 25); // OR, false

// 7. Combina ambos operadores lógicos
console.log("Ejercicio 7: Combinación de operadores lógicos");
console.log((num3 > 10 && num4 > 15) || (num3 < 10 && num4 < 15)); // true
console.log((num3 < 10 || num4 > 25) && (num3 > 20 || num4 < 15)); // false

// 8. Añade alguna negación
console.log("Ejercicio 8: Negación");
console.log(!false); // true
console.log(!true); // false
console.log(!(num3 > 10)); // false
console.log(!(num3 < 10)); // true

// 9. Utiliza el operador ternario
console.log("Ejercicio 9: Operador ternario");
const myAge = 18;
const mayorDeEdad = myAge >= 18 ? console.log("Soy mayor de edad") : console.log("No soy mayor de edad");

// 10. Combina operadores aritméticos, de comparáción y lógicas
console.log("Ejercicio 10: Combinación de operadores");
let num5 = 25;
let num6 = 30;
let resultado = (num5 + num6 > 50) && (num5 < num6) ? console.log("La suma es mayor que 50 y num5 es menor que num6") : console.log("No se cumple la condición");