import { generate } from 'random-words';

const words = generate(20);
const modifiedWords = words.map(word => `¡Hola!${word}¡Hola!`);

console.log(modifiedWords);