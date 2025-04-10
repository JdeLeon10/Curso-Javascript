// if, else if, else

// if (condicion){}
let age = 10;

if (age >= 18) {
    console.log("Eres mayor de edad");
}
else if (age >= 13) {
    console.log("Eres un adolescente");
} else {
    console.log("Eres un niño");
}

// Operador ternario
// (condicion) ? valorSiTrue : valorSiFalse
const message = age >= 18 ? "Eres mayor de edad" : "Eres menor de edad";
console.log(message);

// switch
let day = 1;
switch (day) {
    case 0:
        console.log("Domingo");
        break;
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miércoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sábado");
        break;
    default:
        console.log("Día inválido");
        // break; No es necesario, ya que es el último caso
}