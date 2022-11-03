const users = {
    gndx: {
        country: 'MX'
    },
    ana: {
        country: 'CO'
    }
}
console.log(users.gndx.country);
console.log(users?.bebeloper?.country); // El signo de interrogacion funciona para preguntar si el usuario existe en este caso, y que no devuelva un error.