import { generate } from "random-words";

const palabras = generate(50);

console.log('Imprimiendo 50 elementos en un string:\n', palabras.join(' '));