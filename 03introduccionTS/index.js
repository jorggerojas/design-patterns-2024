"use strict";
const name1 = "jorge"; //tipado implicito
const name2 = "jorge"; //asiganado tipado
/*
strign number bool object null undefined
unknown any
*/
console.log("Hola");
function print(param) {
    console.log(param === true);
}
print("hola");
const car = {
    make: "honda",
    model: "Accord",
    year: 2020
};
function accesskey(key) {
    console.log(car[key]);
}
//recibe de atributo uno de los tres posibles
accesskey('make');
//---------------------------------------------------------------
//las llaves (atributos) deben ser string, y el valor cualquiera
const car2 = {
    make: "honda",
    model: "Accord",
    year: 2020,
    color: "red",
    isUsed: true,
    owner: {
        name: "John",
        age: 30,
    },
    capacity: 5,
    doors: 4,
    isConvertible: false,
    makeNoise: () => {
        console.log("Vroom");
    }
};
function accesskey2(key) {
    console.log(car2[key]);
}
//recibe como atributo ÚNICAMENTE STRINGS, cualquiera que sea
accesskey2('color');
//------------------------------------------------------------
function accesskey3(key) {
    console.log(car2[key]);
}
//recibe como atributo los tipos de cualquiera de las key del objeto car
accesskey3('make');
accesskey3('year');
accesskey3('owner');
accesskey3('makeNoise');
