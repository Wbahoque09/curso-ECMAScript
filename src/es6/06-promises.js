const promiFunction = () => {
    // mandamos la promesa como una funcion para que ejecute lo que esperamos o no.
    // se le manda los parametros de "resolve" y "reject"
    return new Promise ((resolve, reject) => {
        if (false) {
            resolve('Resuelto !!!!');
        } else {
            reject('Opssss 🙁 ');
        }
    } );
}

promiFunction()
    .then(response => console.log(response)) // En caso que se ejecute resolve
    .catch(err => console.log(err)); // En caso que se ejecute reject

// Una promesa es una forma de manejar el asincronismo en JavaScript y se representa como un objeto que puede generar un valor único a futuro, que tiene dos estados, o está resuelta o incluye una razón por la cual no ha sido resuelta la solicitud.

// Cómo utilizar las promesas
// Solamente ten presente que la clase Promise y sus métodos then y catch fueron añadidos en ES6. Esto resuelve un problema del manejo del asincronismo con callbacks, llamado Callback Hell.

// El argumento de la clase Promise es una función que recibe dos parámetros:

// resolve: cuando la promesa es resuelta.
// reject: cuando la promesa es rechazada.
// Puedes utilizar cualquier nombre, siempre y cuando sepas su funcionamiento.