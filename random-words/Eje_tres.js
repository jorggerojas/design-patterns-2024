import { generate } from 'random-words';

const words = generate(20);
const filteredWords = words.filter((word) => !word.includes('s') && !word.includes('r'));

console.log(filteredWords);