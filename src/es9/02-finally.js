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

// promiFunction()
//     .then(response => console.log(response)) // En caso que se ejecute resolve
//     .catch(err => console.log(err)) // En caso que se ejecute reject
//     .finally(() => console.log('Finally'));

//     Las siguientes características de ES9 o ES2018 que aprenderás son: método finally para promesas y generadores asíncronos.

//     Método finally en promesas
//     El método finally para promesas consiste en ejecutar código después que una promesa haya sido ejecutada como resuelta o rechazada.
    
//     promesa()
//         .then(response => console.log(response) // Promesa resuelta
//         .catch(error => console.log(response) // Promesa rechazada
//         .finally( () => console.log("Finalizado") ) // Código final  