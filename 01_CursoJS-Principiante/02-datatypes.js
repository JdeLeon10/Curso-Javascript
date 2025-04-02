// Tipos de datos primitivos

// 1. String: Cadena de texto
let myName = "Jeremy";
let lastName = "de Leon";

// 2. Number: Numero entero o decimal
let age = 23;
let height = 1.69;

// 3. Boolean: Verdadero o falso
let isDeveloper = true;
let isTeacher = false;

// 4. Undefined: Variable sin valor asignado
let undefinedValue;

// 5. Null: Variable sin valor asignado
let nullValue = null;

// 6. Symbol: Valor unico e inmutable
let mySymbol = Symbol("mysymbol")

// 7. BigInt: Entero muy grande
let myBigInt = BigInt(817239871289371986589716389471628379612983761289376129)
let myBigInt2 = 817239871289371986589716389471628379612983761289376129n

// Mostrando los valores en variables y sus tipos de datos
console.log(`Mi nombre es ${myName} y el tipo de dato es: ${typeof myName}`);
console.log(`Mi edad es ${age} y el tipo de dato es: ${typeof age}`);
console.log(`Mi altura es ${height} y el tipo de dato es: ${typeof height}`);
console.log(`Soy desarrollador y el tipo de dato es: ${typeof isDeveloper}`);
console.log(`No soy profesor y el tipo de dato es: ${typeof isTeacher}`);
console.log(`El valor de undefined es ${undefinedValue} y el tipo de dato es: ${typeof undefinedValue}`);
console.log(`El valor de null es ${nullValue} y el tipo de dato es: ${typeof nullValue}`);

// console.log(`El valor de symbol es ${mySymbol} y el tipo de dato es: ${typeof mySymbol}`);
// console.log(`El valor de BigInt es ${myBigInt} y el tipo de dato es: ${typeof myBigInt}`);
// console.log(`El valor de BigInt2 es ${myBigInt2} y el tipo de dato es: ${typeof myBigInt2}`);