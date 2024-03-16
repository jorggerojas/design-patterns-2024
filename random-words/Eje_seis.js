import { generate } from 'random-words';

const words = generate(20);
const replacedWords = words.map((word) => (word.length >= 6 ? 'NO' : word));

console.log(replacedWords);