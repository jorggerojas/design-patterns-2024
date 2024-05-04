"use strict";
console.log("Hello");
function print(param) {
    console.log(param);
}
print("hola");
const car = {
    make: "Honda",
    model: "Accord",
    year: 2020,
    color: "Red",
    inUsed: true,
    owner: {
        name: "John",
        age: 30
    },
    makeNoise: () => {
        console.log("Vroom");
    },
    capacity: 5,
    doors: 4,
    isCovertible: false
};
function accessField(key) {
    console.log(car[key]);
}
accessField("make"); // Honda
accessField("model"); // Accord
accessField("year"); // 2020
class Animal {
    constructor(edad) {
        this.edad = edad;
    }
    envejecer() {
        this.edad += 1;
    }
    comer(text) {
        console.log("Comiendo " + text);
    }
}
const animal = new Animal(10);
animal.envejecer();
console.log(animal);
animal.comer("fruta");
class Persona {
    constructor(param) {
        this.edad = param.edad;
        this.nombre = param.nombre;
    }
    comer(text) {
        console.log(this.nombre + " esta comiendo " + text);
    }
}
