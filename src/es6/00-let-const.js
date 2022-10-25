var lastname = 'David'; // Declaracion de variables y asignacion de la misma
lastname = 'Oscar'; // Reasignacion de variable 
console.log(lastname);

let fruit = 'Apple';
fruit = 'Kiwi';
console.log(fruit);

const animal = 'Dog';
animal = 'Cat';
console.log(animal);

const fruits = () => {
    if (true) {
        var fruit1 = 'Apple';
        let fruit2 = 'Kiwi';
        const fruit3 = 'Banana';        
    }
    console.log(fruit1); // function scope
    console.log(fruit2); // block scope
    console.log(fruit3); // block scope
}

fruits();