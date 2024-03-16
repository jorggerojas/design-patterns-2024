import { generate } from 'random-words';

const words = generate(20);
const reversedWords = words.reverse();

console.log(reversedWords);