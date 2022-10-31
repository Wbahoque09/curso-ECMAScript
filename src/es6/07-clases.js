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
    speak() {
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

    get uAge(){
        return this.age;
    }
    set uAge(n) {
        this.age = n;
    }
}

const beb = new user('David', 15); // se instacia el objeto pasandole los argumentos de nombre y edad para que los reciba el this.nombre y this.age
console.log(beb.uAge);
console.log(beb.uAge = 20);