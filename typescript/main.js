"use strict";
console.log("hello");
function print(param) {
    console.log(param);
}
print("hola");
const car = {
    make: "Honda",
    model: "Accord",
    year: 2020,
    color: "red",
    isUsed: true,
    owner: {
        name: "John",
        age: 30,
    },
    makeNoise: () => {
        console.log("Vroom");
    }
};
function accessField(key) {
    console.log(car[key]);
}
accessField("make");
accessField("model");
accessField("year");
class Animal {
    constructor(edad) {
        this.edad = edad;
    }
    envejecer() {
        this.edad += 1;
    }
}
const animal = new Animal(10);
animal.envejecer();
console.log(animal);
/**
 * string
 * number
 * boolean
 * object
 * null
 * undefined
 * any
 * unknown
 */ 
