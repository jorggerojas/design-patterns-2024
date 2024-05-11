import { generate } from "random-words";

const palabras = generate(50);

const resultado = palabras.join(' ');

console.log(resultado);
