import { generate } from 'random-words';

const words = generate(20);
const sortedWords = words.sort();

console.log(sortedWords);
