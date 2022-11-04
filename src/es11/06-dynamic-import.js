const button = document.getElementById('btn');

button.addEventListener("click", async function () {
    const module = await import('./module.js');
    console.log(module);
    module.hello();
});

// La expresión import() permite manejar módulos dinámicamente, ya que la sintaxis de ECMAScript import ... from ... no lo permite.

// Cómo utilizar importación dinámica
// La importación dinámica consiste en cargar los módulos cuando el usuario los vaya a utilizar, y no al iniciar la aplicación. Esto permite que la página web sea más rápida, porque descarga menos recursos.

// La expresión import() recibe un argumento de tipo string con la ruta del módulo a importar y devuelve una promesa.