import { generate } from 'random-words';

const words = generate(20);
const modifiedWords = words.slice(1, -1);

console.log(modifiedWords);