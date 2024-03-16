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
    },
    capacity: 5,
    doors: 4,
    isConvertible: false,
};
function accessField(key) {
    console.log(car[key]);
}
// error => car no tiene la propiedad jorge
// accessField("jorge"); // undefined
accessField("make"); // Honda
accessField("model"); // Accord
accessField("year"); // 2020
/**
 * string
 * number
 * boolean
 * object
 * null
 * undefined
 *
 * any
 * unknown
 */
