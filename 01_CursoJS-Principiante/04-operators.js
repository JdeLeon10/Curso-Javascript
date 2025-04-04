// Operadores

// Operadores Aritmeticos
let a = 5;
let b = 10;

console.log("Operadores aritmeticos:");
console.log(a + b); // Suma
console.log(a - b); // Resta
console.log(a * b); // Multiplicacion
console.log(a / b); // Division
console.log(a % b); // Modulo
console.log(a ** b); // Potencia
a++; // Incremento
console.log(a); // Incremento
b--; // Decremento
console.log(b); // Decremento

// Operadores de Asignacion
let c = 5;

console.log("Operadores de asignacion:");
console.log(c); // Asignacion
c += 2; // Asignacion con suma
console.log(c); // Asignacion con suma
c -= 2; // Asignacion con resta
console.log(c); // Asignacion con resta

// Operadores de Comparacion
let d = 5;
let e = 10;
let f = "5";

console.log("Operadores de comparacion:");
console.log(d == f); // Igualdad
console.log(d === f); // Igualdad estricta
console.log(d != e); // Desigualdad
console.log(d !== f); // Desigualdad estricta
console.log(d > e); // Mayor que
console.log(d < e); // Menor que
console.log(d >= e); // Mayor o igual que
console.log(d <= e); // Menor o igual que

// Operadores Logicos
console.log("Operadores logicos:");
console.log(5 > 2 && 10 > 5); // AND
console.log(5 > 2 && 10 < 5); // AND
console.log(5 > 2 || 10 < 5); // OR
console.log(5 > 2 || 10 > 5); // OR
console.log(!(5 > 2)); // NOT
console.log(!(5 > 2 && 10 > 5)); // NOT AND

// Operador ternario, permiten escrir condiciones en una sola linea = si es verdadero ? haz esto : haz lo otro
const isRaining = true;
const weather = isRaining ? console.log("Esta lloviendo") : console.log("No esta lloviendo");