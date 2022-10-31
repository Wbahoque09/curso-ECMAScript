
function* iterate(array){
    for (let value of array){
        yield value;
    }
}

const it = iterate(['Oscar','Ana','David','Ulises','Jennifer']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);

// Los generadores son funciones especiales que pueden pausar su ejecución, luego volver al punto donde se quedaron, recordando su scope y seguir retornando valores.

// Estos se utilizan para guardar la totalidad de datos infinitos, a través de una función matemática a valores futuros. De esta manera ocupan poca memoria, con respecto a si creamos un array u objeto.

// Cómo utilizar generadores
// La sintaxis de los generadores comprende lo siguiente:

// La palabra reservada function* (con el asterisco al final).
// La palabra reservada yield que hace referencia al valor retornado cada vez que se invoque, recordando el valor anterior.
// Crear una variable a partir de la función generadora.
// El método next devuelve un objeto que contiene una propiedad value con cada valor de yield; y otra propiedad done con el valor true o false si el generador ha terminado.
// Si el generador se lo invoca y ha retornado todos sus valores de yield, entonces devolverá el objeto con las propiedades value con undefined y un done con true.

// Declaración
// function* nombre(parámetros){
//     yield (primer valor retornado)
//     yield (segundo valor retornado)
//     ...
//     yield (último valor retornado)

// }

// //Crear el generador
// const generador = nombre(argumentos)

// // Invocacioens
// generador.next().value //primer valor retornado
// generador.next().value //segundo valor retornado
// ...
// generador.next().value //último valor retornado

// Ejemplo de un generador
// Por ejemplo, creemos un generador para retornar tres valores.

// function* generator(){
//     yield 1
//     yield 2
//     yield 3
// }

// const generador = generator()

// generador.next().value //1
// generador.next().value //2
// generador.next().value //3
// generador.next() // {value: undefined, done: true}