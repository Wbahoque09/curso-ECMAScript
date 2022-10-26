// enahced object literals

function newUser(user, age, country, uId) {
    return {
        user,
        age,
        country,
        id: uId
    }
}

console.log(newUser("gndx", 34, "MX", 1));

// Los objetos literales consiste en crear objetos a partir de variables sin repetir el nombre. Antes de ES6, para crear un objeto a partir de variables consistía en la siguiente manera:
// const nombre = "Andres"
// const edad = 23

// const objeto = {nombre, edad}

// objeto // { nombre: 'Andres', edad: 23 }

// El resultado es el mismo, pero sin la necesidad de repetir palabras. Puedes combinarlo con variables que su propiedad tiene un nombre diferente.

// const nombre = "Andres"
// const edad = 23
// const esteEsUnID = 1

// const objeto = {
//     nombre, 
//     edad,
//     id: esteEsUnID
// }

// objeto // { nombre: 'Andres', edad: 23, id: 1 }