import { generate } from 'random-words';

const words = generate(50);
const wordsJoin = words.join(' ');

console.log(wordsJoin);