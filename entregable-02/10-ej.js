import { generate } from "random-words";

let palabras = generate(50);

palabras.unshift('¡Hola!');
palabras.push('¡Hola!');

console.log('Agregando elementos al final y al inicio del array: ', palabras);