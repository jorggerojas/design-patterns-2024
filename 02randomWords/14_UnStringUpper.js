import { generate } from 'random-words';

const palabras = generate(50)

console.log(palabras.join(' ').toUpperCase())