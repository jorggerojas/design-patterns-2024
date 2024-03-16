import { generate } from 'random-words';

const words = generate(20);
const replacedWords = words.map((word) => word.replace('a', 'YES'));

console.log(replacedWords);