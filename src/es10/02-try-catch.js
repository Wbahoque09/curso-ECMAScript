try {
    // Try es para manejar el codigo 
    hello()
} catch (error) {
    // Aqui se utiliza el parámetro 'err'
    console.log(error);
}

try {
    // Try es para manejar el codigo 
    anotherFn();
} catch {
    // Aqui manejamos el error sin parámetro. 
    console.log('ESte es un error');
}