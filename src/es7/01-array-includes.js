let numbers = [1,3,4,6,7,8];

console.log(numbers.includes(9));

let nombres = ['Oscar','Diana','Kevin'];
console.log(nombres.includes('oscar'));

// Método includes
// El método includes determina si un array o string incluye un determinado elemento. Devuelve true o false, si existe o no respectivamente.

// Este método recibe dos argumentos:

// El elemento a comparar.
// El índice inicial desde donde comparar hasta el último elemento.
// Índices positivos y negativos
// Los índices positivos comienzan desde 0 hasta la longitud total menos uno, de izquierda a derecha del array.

// [0,1,2,3, ...., lenght-1]
// Los índices negativos comienzan desde -1 hasta el negativo de la longitud total del array, de derecha a izquierda.

// [-lenght, ...,  -3, -2, -1]
// Ejemplos utilizando el método includes
// El método includes se utiliza para arrays y strings. El método es sensible a mayúsculas, minúsculas y espacios.

// //Utilizando strings
// const saludo = "Hola mundo"

// saludo.includes("Hola") // true
// saludo.includes("Mundo") // false
// saludo.includes(" ") // true
// saludo.includes("Hola", 1) // false
// saludo.includes("mundo", -5) // true
// // Utilizando arrays
// const frutas = ["manzana", "pera", "piña", "uva"]

// frutas.includes("manzana") // true
// frutas.includes("Pera") // false
// frutas.includes("sandía") // false
// frutas.includes("manzana", 1) // false
// frutas.includes("piña", -1) // false
// frutas[0].includes("man") // true