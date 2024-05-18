"use strict";
class Animal {
    constructor(edad, tipo) {
        this.edad = edad;
        this.tipo = tipo;
    }
    envejecer() {
        this.edad += 1;
        console.log("La edad del " + this.tipo
            + " ahora es: " + this.edad);
    }
    comer(text) {
        console.log("El " + this.tipo +
            " está comiendo " + text);
    }
}
// Instancia de una clase
const animal = new Animal(10, "gato");
// ejecutar un métodos
animal.envejecer();
animal.comer('atún');
//crear uan instancia distinta de lamisma clase
const animal2 = new Animal(5, "perro");
console.log(animal2);
//-----------------------------------------------------
//clase padre
class Persona {
    constructor(param) {
        this.nombre = param.nombre;
        this.edad = param.edad;
    }
    //metodos
    comer(comida) {
        console.log(this.nombre + ' está comiendo ' + comida);
    }
}
//crear una persona (instancia)
const person = new Persona({
    nombre: 'Miguel',
    edad: 19
});
person.comer('frutas');
//-----------------------------------------------------
//clase hija, hereda loss atributos y métodos de persona
class Adulto extends Persona {
    constructor(nombre) {
        //no se solicita edad, pq se les está asignando después
        super({ nombre: nombre, edad: 18 });
        //se pone implícito que su edad será 18
    }
    //metodos
    votar() {
        console.log(this.nombre + " está votando");
    }
}
//crear un adulto
const adul = new Adulto('Juancho');
adul.votar();
adul.comer('pasta');
//-----------------------------------------------------
//clase hija
class Peque extends Persona {
    constructor(edad, parametro) {
        super({
            nombre: 'Pepito',
            edad: edad
        });
        this.colorFav = parametro;
    }
    //metodos
    gritar() {
        console.log(this.nombre + " está gritando");
    }
    color() {
        console.log('El color favorito de '
            + this.nombre + ' es: ' + this.colorFav);
    }
}
//crear un niño
const ninio = new Peque(10, 'verde');
ninio.comer('Dulces');
ninio.gritar();
ninio.color();
//clase que implemente la interfaz vehiulo y usa sus métodos
class Auto {
    constructor() {
        console.log('Auto creado');
    }
    //nos dice CÓMO implementar el método de la interfaz
    encender() {
        console.log('El auto ha sido encendido');
    }
}
const auto = new Auto();
auto.encender(); //se enciende el auto a ssu manera
class Moto {
    constructor(arrayParam = [1, 2, 3, 4, 5]) {
        console.log('Moto creada');
        this.array = arrayParam;
    }
    encender() {
        this.array.forEach(number => {
            console.log(number);
        });
        console.log('Moto encendida');
    }
}
const moto = new Moto();
moto.encender();
