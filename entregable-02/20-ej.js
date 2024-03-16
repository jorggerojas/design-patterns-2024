import { generate } from "random-words";

const palabras = generate(50);
let objPalabras = [];
palabras.map((element) => {
    let obj = {};
    obj[element] = element.length;
    objPalabras.push(obj);
});

let objetoPalabras = objPalabras.reduce((almacen, individual) => {
    return Object.assign(almacen, individual); //reduce un arreglo a aprtir de asignar sus elementos a un objeto por metodo assign, toma una fuente y almacena los elementos individuales
})

console.log('Creando un solo objeto a partir de un array de multiples:\n', objetoPalabras);