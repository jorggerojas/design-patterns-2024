import { generate } from "random-words";

const palabras = generate(50);

console.log('Imprimiendo 50 elementos escritos en mayus en un string:\n', palabras.join(' ').toUpperCase());