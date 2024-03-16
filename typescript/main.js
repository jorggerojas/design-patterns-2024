"use strict";
console.log('Hello');
function print(param) {
    console.log(param);
}
print("Nathalia");
//En typescript las llaves de los objetos tienen un tipo
const car = {
    make: "Honda",
    model: "Accord",
    year: 2020,
    color: "red",
    isUsed: true,
    owner: {
        name: "Nath",
        age: 20,
    },
    makeNoise: () => {
        return console.log("Vroom");
    },
    capacity: 5,
    doors: 4,
    isConvertible: false,
};
function accessField(key) {
    console.log(car[key]);
}
accessField('capacity');
accessField('owner');
accessField('makeNoise');
