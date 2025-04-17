/* 
    Map / Diccionario: Estructura de datos que permite almacenar pares clave-valor.
        - Clave: Identificador único para cada elemento en el mapa.
        - Valor: El dato asociado a la clave.
            - Permite acceder a los valores utilizando las claves.
            - Las claves pueden ser de cualquier tipo de dato, incluyendo objetos.
                - Las claves no pueden ser repetidas, pero los valores sí pueden serlo.
*/

// Declaracion
let myMap = new Map(); // Crear un mapa vacio

// Inicializacion
myMap = new Map([
    ["nombre", "Jeremy"],
    ["edad", 23],
    ["pais", "Guatemala"]
]); // Crear un mapa con valores iniciales
console.log(myMap); // Map(3) { 'nombre' => 'Jeremy', 'edad' => 23, 'pais' => 'Guatemala' } // Mostrar el mapa

// Metodos y propiedades

// set = actualizar o agregar un elemento al mapa
myMap.set("nombre", "Joshua") // Actualizar el valor de la clave "nombre" a "Joshua"
myMap.set("ciudad", "Guatemala") // Agregar un nuevo elemento al mapa con clave "ciudad" y valor "Guatemala"
console.log(myMap); // Map(4) { 'nombre' => 'Joshua', 'edad' => 23, 'pais' => 'Guatemala', 'ciudad' => 'Guatemala' } // Mostrar el mapa actualizado

// get = obtener el valor de una clave
console.log(myMap.get("nombre")); // Joshua // Obtener el valor de la clave "nombre"
console.log(myMap.get("apellido")); 

// has = comprobar si una clave existe en el mapa
console.log(myMap.has("nombre")); // true // Comprobar si la clave "nombre" existe en el mapa
console.log(myMap.has("apellido")); // false // Comprobar si la clave "apellido" existe en el mapa

// delete = eliminar un elemento del mapa
myMap.delete("nombre");
console.log(myMap); // Map(3) { 'edad' => 23, 'pais' => 'Guatemala', 'ciudad' => 'Guatemala' } // Mostrar el mapa actualizado

// keys = obtener todas las claves del mapa
console.log(myMap.keys()); // [Map Iterator] { 'edad', 'pais', 'ciudad' } // Obtener todas las claves del mapa

// values = obtener todos los valores del mapa
console.log(myMap.values()); 

// Entries = obtener todas las entradas del mapa (clave-valor)
console.log(myMap.entries()); // [Map Entries] { [ 'edad', 23 ], [ 'pais', 'Guatemala' ], [ 'ciudad', 'Guatemala' ] } // Obtener todas las entradas del mapa

// clear = eliminar todos los elementos del mapa
myMap.clear(); // Eliminar todos los elementos del mapa
console.log(myMap); // Map(0) {} // Mostrar el mapa vacio