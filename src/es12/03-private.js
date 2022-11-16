// declarando una clase
class User{};
// generando instacia de una clase
// const newUser = new User();

class user {
    // metodos
    greeting(){
        return 'Hello';
    }
};

const gndx = new user();
console.log(gndx.greeting());

// constructor

class user{
    // Constructor
    constructor(){
        console.log('nuevo usuario');
    }
    greeting(){
        return 'Hello';
    }
}

const david = new user();

// this 

class user {
    constructor(name){
        this.name = name;
    }
    // metodos 
    #speak() {
        return 'Hello';
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }
}

const ana = new user('Anubis');
console.log(ana.greeting());

// setters getters

class user {
    // constructor
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    // metodos
    speak(){
        return 'Hello';
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }

    get #uAge(){
        return this.age;
    }
    set #uAge(n) {
        this.age = n;
    }
}

const beb = new user('David', 15); // se instacia el objeto pasandole los argumentos de nombre y edad para que los reciba el this.nombre y this.age
console.log(beb.uAge);
console.log(beb.uAge = 20);

// Las siguientes características de ES12 o ES2021 que aprenderás son: métodos privados en clases y Promise.any.

// Métodos privados de clases
// Los métodos privados consiste en limitar el acceso a propiedades y métodos agregando el caracter numeral ( #). Por defecto, las propiedades y métodos de una clase en JavaScript son públicas, es decir, se puede acceder a ellos fuera de la clase.

// class Clase {
//   #private(valor){
//     console.log(valor)
//   }
  
//   public(valor){
//     console.log(valor)
//   }
// }

// const clase = new Clase()
// clase.public("Hola")  // 'Hola'
// clase.private("Hola") // TypeError: clase.private is not a function