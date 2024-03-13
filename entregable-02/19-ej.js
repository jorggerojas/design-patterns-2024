import { generate } from "random-words";

const palabras = generate(50);

const lengthArray = palabras.map((element) => element.length);

console.log('Imprimeindo la cantidad de letras por palabra generada en un array:\n', lengthArray);