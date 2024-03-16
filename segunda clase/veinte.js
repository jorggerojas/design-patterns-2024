import { generate } from "random-words";

let palabras = generate(50);

// Crear un objeto que contenga la cantidad de letras de cada palabra
let resultado = palabras.reduce((obj, palabra) => {
    obj[palabra] = palabra.length;
    return obj;
}, {});

console.log(resultado);
