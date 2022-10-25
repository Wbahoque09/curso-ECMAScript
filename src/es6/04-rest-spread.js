// arrays destructuring 

let fruits = ['Apple', 'Banana'];
let [a,b] = fruits;
// console.log(a,b); Imprimiendo desestructuracion
console.log(a, fruits[1]); //Imprimiendo  de forma natural

// Object destructuring
let user = {username: 'Oscar', age: 34};
let { username, age } = user;
console.log(username, age);