import { generate } from "random-words";

const palabras = generate(50);

const mapPalabras = new Map();

palabras.map((element) => mapPalabras.set(element, element.toUpperCase()));

const objPalabras = Object.fromEntries(mapPalabras);

console.log('Transformando un array a un objeto:\n', objPalabras);